import { createFileRoute, Link, redirect, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getAdminArticles, createArticle, updateArticle, deleteArticle, publishArticleAndNotify } from "./-admin-articles";
import { adminLogout, getAdminSession } from "./-admin-auth";

export const Route = createFileRoute("/admin")({
  loader: async () => {
    const session = await getAdminSession();
    if (!session?.admin) {
      throw redirect({ to: "/admin/login" });
    }
    const articles = await getAdminArticles();
    return { articles };
  },
  component: AdminDashboard,
});

function AdminDashboard() {
  const router = useRouter();
  const { articles: initialArticles } = Route.useLoaderData();
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [form, setForm] = useState({
    slug: "",
    title: "",
    excerpt: "",
    category: "",
    readTime: "5 min de leitura",
    badge: "purple",
    author: "Equipe Doc.Lab",
    content: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [publishId, setPublishId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  function showToast(type: "success" | "error", message: string) {
    setToast({ type, message });
  }

  async function loadArticles() {
    try {
      const data = await getAdminArticles();
      setArticles(data);
    } catch {
      showToast("error", "Erro ao carregar artigos.");
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.slug || !form.title || !form.excerpt) {
      showToast("error", "Preencha slug, título e resumo.");
      return;
    }
    setLoading(true);
    try {
      await createArticle({ data: { ...form, content: parseContent(form.content) } });
      showToast("success", "Artigo criado com sucesso.");
      setForm({ slug: "", title: "", excerpt: "", category: "", readTime: "5 min de leitura", badge: "purple", author: "Equipe Doc.Lab", content: "" });
      setEditingId(null);
      await loadArticles();
    } catch (err) {
      showToast("error", err && typeof err === "object" && "message" in err ? (err.message as string) : "Erro ao criar.");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (!editingId) return;
    if (!form.title || !form.excerpt) {
      showToast("error", "Preencha título e resumo.");
      return;
    }
    setLoading(true);
    try {
      await updateArticle({ data: { id: editingId, ...form, content: parseContent(form.content) } });
      showToast("success", "Artigo atualizado.");
      setEditingId(null);
      await loadArticles();
    } catch (err) {
      showToast("error", err && typeof err === "object" && "message" in err ? (err.message as string) : "Erro ao atualizar.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Excluir este artigo permanentemente?")) return;
    setLoading(true);
    try {
      await deleteArticle({ data: { id } });
      showToast("success", "Artigo excluído.");
      await loadArticles();
    } catch (err) {
      showToast("error", err && typeof err === "object" && "message" in err ? (err.message as string) : "Erro ao excluir.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await adminLogout();
      router.invalidate();
      window.location.href = "/admin/login";
    } catch {
      window.location.href = "/admin/login";
    }
  }

  async function handlePublish(id: number, title: string, slug: string) {
    if (!confirm(`Publicar "${title}" e enviar e-mail para todos os inscritos?`)) return;
    setPublishId(id);
    setLoading(true);
    try {
      const result = await publishArticleAndNotify({ data: { id, title, slug } });
      showToast("success", `Publicado! E-mail enviado para ${result?.broadcast?.sent ?? 0} inscritos.`);
      await loadArticles();
    } catch (err) {
      showToast("error", err && typeof err === "object" && "message" in err ? (err.message as string) : "Erro ao publicar.");
    } finally {
      setLoading(false);
      setPublishId(null);
    }
  }

  function startEdit(article: (typeof articles)[0]) {
    setEditingId(article.id);
    setForm({
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      readTime: article.read_time ?? "5 min de leitura",
      badge: article.badge ?? "purple",
      author: article.author ?? "Equipe Doc.Lab",
      content: JSON.stringify(article.content ?? [], null, 2),
    });
  }

  function parseContent(text: string): { heading?: string; paragraphs?: string[]; list?: string[]; callout?: string }[] {
    try {
      return JSON.parse(text);
    } catch {
      return [];
    }
  }

  const isCreating = !editingId;

  return (
    <div className="min-h-screen bg-navy-dark">
      <header className="border-b border-white/10 bg-navy-dark/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <Link to="/admin/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple font-display text-sm font-bold text-white">
                DL
              </span>
              <span className="font-display text-xl font-bold text-white">Doc.Lab</span>
            </Link>
            <span className="hidden sm:inline-block text-sm text-white/50">/ Painel</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">Área restrita</span>
            <button
              onClick={handleLogout}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {toast && (
          <div className="mb-6 rounded-lg px-4 py-3 text-sm shadow-lg">
            {toast.type === "success" ? (
              <div className="flex items-center gap-3 rounded-lg bg-green-900/50 px-4 py-3 text-green-200">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {toast.message}
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-lg bg-red-900/50 px-4 py-3 text-red-200">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {toast.message}
              </div>
            )}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-white">
                {isCreating ? "Novo artigo" : "Editar artigo"}
              </h2>
              {!isCreating && (
                <button
                  type="button"
                  onClick={() => { setEditingId(null); setForm({ slug: "", title: "", excerpt: "", category: "", readTime: "5 min de leitura", badge: "purple", author: "Equipe Doc.Lab", content: "" }); }}
                  className="text-sm text-cyan hover:text-white transition-colors"
                >
                  Cancelar edição
                </button>
              )}
            </div>

            <form onSubmit={isCreating ? handleCreate : handleUpdate} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-white/70">Slug</label>
                <input
                  type="text"
                  required
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="ex: meu-novo-artigo"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm text-white/70">Badge</label>
                  <select
                    value={form.badge}
                    onChange={(e) => setForm({ ...form, badge: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  >
                    <option value="purple">purple</option>
                    <option value="cyan">cyan</option>
                    <option value="orange">orange</option>
                    <option value="green">green</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/70">Tempo de leitura</label>
                  <input
                    type="text"
                    value={form.readTime}
                    onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                    placeholder="5 min de leitura"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Categoria</label>
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="Marketing Médico"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Título</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="Título do artigo"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Resumo (excerpt)</label>
                <textarea
                  required
                  rows={3}
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="Resumo curto do artigo..."
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Autor</label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Conteúdo (JSON)</label>
                <textarea
                  rows={10}
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full font-mono text-xs resize-none rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-gray-200 placeholder:text-white/20 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder='[{"heading":"1. Título","paragraphs":["parágrafo 1","parágrafo 2"],"list":["item 1","item 2"],"callout":"destaque"}]'
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-white px-4 py-3 text-navy font-semibold hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
              >
                {loading ? "Salvando..." : isCreating ? "Criar artigo" : "Salvar alterações"}
              </button>
            </form>
          </section>

          <section className="lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-white">Artigos</h2>
              <span className="text-sm text-white/50">{articles.length} artigo(s)</span>
            </div>

            {articles.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
                <p className="text-gray-400">Nenhum artigo ainda. Crie o primeiro acima.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {articles.map((article) => (
                  <div key={article.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="mb-2 flex items-center gap-2">
                          <span className={`badge badge-${article.badge ?? "purple"}`}>{article.badge}</span>
                          <span className="text-xs text-white/50">{article.read_time}</span>
                        </div>
                        <h3 className="truncate font-display text-base font-semibold text-white">{article.title}</h3>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-400">{article.excerpt}</p>
                        <div className="mt-2 flex items-center gap-3 text-xs text-white/40">
                          <span>/{article.slug}</span>
                          <span className="truncate">{article.category}</span>
                          <span>•</span>
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        {!article.published && (
                          <button
                            onClick={() => handlePublish(article.id, article.title, article.slug)}
                            disabled={loading || publishId === article.id}
                            className="rounded-lg bg-cyan/20 px-3 py-1.5 text-xs font-medium text-cyan disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {publishId === article.id ? "Enviando..." : "Publicar + notificar"}
                          </button>
                        )}
                        <button
                          onClick={() => startEdit(article)}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10 transition-colors"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(article.id)}
                          className="rounded-lg border border-red-900/30 bg-red-900/20 px-3 py-1.5 text-xs text-red-300 hover:bg-red-900/40 transition-colors"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
