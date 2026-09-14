import { createServerFn } from "@tanstack/react-start";
import { getSupabaseServer } from "@/lib/supabase-server";
import { BLOG_ARTICLES, normalizeBlogArticle } from "@/content/site";
import type { BlogArticle } from "@/content/site";

/**
 * Lê os artigos publicados do Supabase.
 *
 * Precisa ser uma server function: o loader da rota roda também no cliente, e
 * `getSupabaseServer()` usa a chave service_role. Importar o módulo direto no
 * loader vazaria a credencial para o bundle do navegador e quebraria a
 * hidratação (o `process.env` do Node não existe no browser).
 */
export const getPublishedArticles = createServerFn({ method: "GET" }).handler(
  async (): Promise<BlogArticle[]> => {
    try {
      const { data, error } = await getSupabaseServer()
        .from("blog_articles")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      // Se o banco estiver vazio ou indisponível, mantém os artigos estáticos
      // (lembrete: sem isso a página fica em branco assim que a tabela existe)
      if (data && data.length > 0) {
        return data.map((row) => normalizeBlogArticle(row as Record<string, unknown>));
      }
      return BLOG_ARTICLES;
    } catch {
      // Fallback: usa dados estáticos durante build ou se Supabase indisponível
      return BLOG_ARTICLES;
    }
  },
);

export const getArticleBySlug = createServerFn({ method: "GET" })
  .validator((raw: unknown) => {
    if (raw && typeof raw === "object" && "slug" in raw) {
      const slug = (raw as { slug?: unknown }).slug;
      if (typeof slug === "string" && slug.length > 0) return { slug };
    }
    throw new Error("slug é obrigatório");
  })
  .handler(async ({ data }): Promise<BlogArticle | null> => {
    try {
      const { data: row, error } = await getSupabaseServer()
        .from("blog_articles")
        .select("*")
        .eq("slug", data.slug)
        .maybeSingle();

      if (error || !row) return null;
      return normalizeBlogArticle(row as Record<string, unknown>);
    } catch {
      // Fallback durante build ou se Supabase indisponível
      return BLOG_ARTICLES.find((article) => article.slug === data.slug) ?? null;
    }
  });
