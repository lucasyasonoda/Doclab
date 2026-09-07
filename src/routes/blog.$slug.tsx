import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { getSupabaseServer } from "@/lib/supabase-server";
import { BLOG_ARTICLES } from "@/content/site";
import type { BlogArticle } from "@/content/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    try {
      const { data, error } = await getSupabaseServer()
        .from("blog_articles")
        .select("*")
        .eq("slug", params.slug)
        .maybeSingle();

      if (error || !data) throw notFound();
      return data as BlogArticle;
    } catch {
      // Fallback durante build ou se Supabase indisponível:
      const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);
      if (!article) throw notFound();
      return article;
    }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Doc.Lab` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: `${loaderData.title} — Doc.Lab` },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [],
  }),
  component: BlogArticle,
});

function BlogArticle() {
  const article = Route.useLoaderData();

  const hasContent = article.content && article.content.length > 0;
  const isExternal = article.external === true;

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/60 to-background pb-14 pt-28 md:pt-32">
        <Reveal as="div" className="container-edit max-w-3xl">
          <span className={`badge badge-${article.badge}`}>{article.category}</span>
          <h1 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,2.8rem)] font-bold leading-tight text-navy">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            {article.read_time}
            {article.published_label ? ` · ${article.published_label}` : ""}
            {article.author ? ` · Por ${article.author}` : ""}
          </p>
        </Reveal>
      </section>

      {/* Artigo com conteúdo completo */}
      {hasContent && (
        <section className="bg-white py-16">
          <Reveal as="div" className="container-edit prose-doclab max-w-3xl">
            {article.content?.map((block, i) => (
              <div key={block.heading ?? i} className="mb-8 last:mb-0">
                {block.heading && (
                  <h2 className="mb-4 font-display text-xl font-bold text-navy md:text-2xl">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs?.map((p) => (
                  <p key={p.slice(0, 30)} className="mb-4 leading-relaxed text-gray-700">
                    {p}
                  </p>
                ))}
                {block.list && (
                  <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700" role="list">
                    {block.list.map((item) => (
                      <li key={item.slice(0, 30)}>{item}</li>
                    ))}
                  </ul>
                )}
                {block.callout && (
                  <div className="rounded-xl border-l-4 border-cyan bg-cyan/5 p-5 text-sm text-navy">
                    {block.callout}
                  </div>
                )}
              </div>
            ))}
          </Reveal>
        </section>
      )}

      {/* Artigo externo / ainda não escrito — mostra card informativo */}
      {!hasContent && (
        <section className="bg-white py-16">
          <Reveal as="div" className="container-edit max-w-2xl">
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
              <span className="badge badge-cyan mb-4 inline-block">Em breve</span>
              <h2 className="font-display text-xl font-bold text-navy mb-3">{article.title}</h2>
              <p className="text-gray-600 mb-6">{article.excerpt}</p>
              <p className="text-sm text-gray-400">
                Este artigo está em preparação. Enquanto isso, confira outros conteúdos ou{" "}
                <Link to="/orcamento" className="text-cyan hover:underline font-medium">
                  agende uma conversa
                </Link>{" "}
                conosco.
              </p>
              <Link to="/blog" className="btn-ghost mt-6 inline-block">
                ← Voltar ao blog
              </Link>
            </div>
          </Reveal>
        </section>
      )}

      {/* CTA final — sempre visível */}
      <Reveal as="section" className="bg-secondary/40 py-20">
        <div className="container-edit max-w-2xl rounded-3xl bg-gradient-to-br from-cyan/10 to-purple/10 p-10 text-center md:p-14">
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.1rem)] font-bold text-navy">
            Quer construir sua autoridade no Instagram com segurança?
          </h2>
          <p className="mt-4 text-gray-700">
            Agende uma consultoria gratuita e descubra como a Doc.Lab pode ajudar você a comunicar
            dentro das regras — e com resultado.
          </p>
          <Link to="/orcamento" className="btn-primary mt-8 inline-flex">
            Agendar consultoria gratuita
          </Link>
        </div>
      </Reveal>
    </>
  );
}
