import { createServerFn } from "@tanstack/react-start";
import { getSupabaseServer } from "@/lib/supabase-server";
import { sendNewsletterToAllSubscribers } from "./-send-newsletter";
import { requireAdminSession } from "./-admin-auth";
import type { BlogArticle } from "@/content/site";

export const getAdminArticles = createServerFn({ method: "GET" }).handler(async () => {
  await requireAdminSession();
  const { data, error } = await getSupabaseServer()
    .from("blog_articles")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as BlogArticle[];
});

export const createArticle = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (raw && typeof raw === "object" && "slug" in raw && "title" in raw && "excerpt" in raw) {
      const o = raw as {
        slug?: unknown;
        title?: unknown;
        excerpt?: unknown;
        badge?: unknown;
        category?: unknown;
        readTime?: unknown;
        author?: unknown;
        content?: unknown;
      };
      const slug = typeof o.slug === "string" ? o.slug : "";
      const title = typeof o.title === "string" ? o.title : "";
      const excerpt = typeof o.excerpt === "string" ? o.excerpt : "";
      if (!slug || !title || !excerpt) throw new Error("slug, title e excerpt são obrigatórios");
      return {
        slug,
        title,
        excerpt,
        badge: typeof o.badge === "string" ? o.badge : "purple",
        category: typeof o.category === "string" ? o.category : "",
        readTime: typeof o.readTime === "string" ? o.readTime : "5 min de leitura",
        author: typeof o.author === "string" ? o.author : "Equipe Doc.Lab",
        content: Array.isArray(o.content) ? o.content : [],
      };
    }
    throw new Error("Dados inválidos");
  })
  .handler(async ({ data }) => {
    await requireAdminSession();
    const { error } = await getSupabaseServer().from("blog_articles").insert({
      slug: data.slug,
      badge: data.badge,
      category: data.category,
      read_time: data.readTime,
      title: data.title,
      excerpt: data.excerpt,
      author: data.author,
      content: data.content,
      published: true,
    });
    if (error) throw error;
    return { success: true };
  });

export const updateArticle = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (raw && typeof raw === "object" && "id" in raw) {
      const o = raw as Record<string, unknown>;
      const id = o.id;
      if (typeof id !== "number" && typeof id !== "string") throw new Error("id inválido");
      return {
        id,
        slug: typeof o.slug === "string" ? o.slug : undefined,
        title: typeof o.title === "string" ? o.title : undefined,
        excerpt: typeof o.excerpt === "string" ? o.excerpt : undefined,
        badge: typeof o.badge === "string" ? o.badge : undefined,
        category: typeof o.category === "string" ? o.category : undefined,
        readTime: typeof o.readTime === "string" ? o.readTime : undefined,
        author: typeof o.author === "string" ? o.author : undefined,
        content: Array.isArray(o.content) ? o.content : undefined,
        published: typeof o.published === "boolean" ? o.published : undefined,
      };
    }
    throw new Error("id é obrigatório");
  })
  .handler(async ({ data }) => {
    await requireAdminSession();
    const updates: Record<string, unknown> = {};
    if (data.slug !== undefined) updates.slug = data.slug;
    if (data.title !== undefined) updates.title = data.title;
    if (data.excerpt !== undefined) updates.excerpt = data.excerpt;
    if (data.badge !== undefined) updates.badge = data.badge;
    if (data.category !== undefined) updates.category = data.category;
    if (data.readTime !== undefined) updates.read_time = data.readTime;
    if (data.author !== undefined) updates.author = data.author;
    if (data.content !== undefined) updates.content = data.content;
    if (data.published !== undefined) updates.published = data.published;
    const { error } = await getSupabaseServer()
      .from("blog_articles")
      .update(updates)
      .eq("id", data.id as number);
    if (error) throw error;
    return { success: true };
  });

export const deleteArticle = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (raw && typeof raw === "object" && "id" in raw) {
      const id = raw.id;
      if (typeof id !== "number" && typeof id !== "string") throw new Error("id inválido");
      return { id };
    }
    throw new Error("id é obrigatório");
  })
  .handler(async ({ data }) => {
    await requireAdminSession();
    const { error } = await getSupabaseServer()
      .from("blog_articles")
      .delete()
      .eq("id", data.id as number);
    if (error) throw error;
    return { success: true };
  });

export const publishArticleAndNotify = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (raw && typeof raw === "object" && "id" in raw && "title" in raw && "slug" in raw) {
      const o = raw as { id?: unknown; title?: unknown; slug?: unknown };
      const id = o.id;
      const title = typeof o.title === "string" ? o.title : "";
      const slug = typeof o.slug === "string" ? o.slug : "";
      if (typeof id !== "number" && typeof id !== "string") throw new Error("id inválido");
      if (!title || !slug) throw new Error("title e slug são obrigatórios para o broadcast");
      return { id, title, slug };
    }
    throw new Error("Dados inválidos");
  })
  .handler(async ({ data }) => {
    await requireAdminSession();

    // Marca como publicado
    const { error: updateError } = await getSupabaseServer()
      .from("blog_articles")
      .update({ published: true, updated_at: new Date() })
      .eq("id", data.id as number);
    if (updateError) throw updateError;

    // Monta o e-mail de notificação
    const subject = `Novo artigo no blog da Doc.Lab: ${data.title}`;
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#1f2937;background-color:#f3f4f6">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6">
    <tr>
      <td align="center" style="padding:32px 16px">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)">
          <tr>
            <td style="background-color:#0f172a;padding:32px;text-align:center">
              <h1 style="margin:0 0 8px;font-size:24px;color:#ffffff">Doc.Lab</h1>
              <p style="margin:0;color:#cbd5e1;font-size:14px">Agência de marketing ético para saúde</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px">
              <h2 style="margin:0 0 12px;font-size:20px;color:#0f172a">Novo artigo publicado</h2>
              <p style="margin:0 0 16px;color:#4b5563">
                Acabei de publicar <strong>${data.title}</strong> no nosso blog. Confira agora:
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0">
                <tr>
                  <td style="background-color:#0f172a;padding:14px;text-align:center;border-radius:8px">
                    <a href="${process.env.VITE_PUBLIC_BASE_URL ?? "https://doclabmkt.com.br"}/blog/${data.slug}" style="color:#ffffff;text-decoration:none;font-size:15px;font-weight:600">
                      Ler artigo →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 24px;color:#6b7280;font-size:14px">
                Compartilhe com seus colegas e pacientes. Se inscrever na newsletter para receber os próximos artigos.
              </p>
              <p style="margin:0;color:#6b7280;font-size:13px">
                Doc.Lab · Marketing ético para saúde
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#0f172a;padding:16px;text-align:center">
              <p style="margin:0;color:#64748b;font-size:12px">© 2026 Doc.Lab · contato@doclabmkt.com.br</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    try {
      const broadcastResult = await sendNewsletterToAllSubscribers({
        data: { subject, html },
      });
      return {
        success: true,
        broadcast: broadcastResult,
      };
    } catch (broadcastError) {
      console.error("[publishArticleAndNotify] falha no broadcast:", broadcastError);
      return {
        success: true,
        broadcast: { sent: 0, total: 0, error: String(broadcastError) },
      };
    }
  });
