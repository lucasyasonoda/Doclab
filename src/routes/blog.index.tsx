import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_ARTICLES } from "@/content/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Doc.Lab" },
      {
        name: "description",
        content:
          "Blog Doc.Lab — Artigos sobre marketing ético, ética e legislação (CFM), gestão de consultório e tendências para profissionais de saúde.",
      },
      { property: "og:title", content: "Blog — Doc.Lab" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        required
        aria-label="E-mail para newsletter"
        className="w-full flex-1 rounded-lg border-0 px-5 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-cyan"
      />
      <button
        type="submit"
        className="btn-primary bg-white !text-navy hover:!bg-gray-100 justify-center"
      >
        {submitted ? "Inscrição recebida ✓" : "Quero receber"}
      </button>
    </form>
  );
}

function Blog() {
  return (
    <>
      <PageHero
        tag="Blog"
        title={
          <>
            Conhecimento que fortalece
            <br />
            <span className="grad-text">sua estratégia</span>
          </>
        }
        lead="Artigos escritos por quem vive o marketing de saúde todos os dias. Estratégia, ética, gestão e tendências — sem enrolação, direto ao ponto."
      />

      <section className="bg-white py-16 md:py-20">
        <ul className="container-edit grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
          {BLOG_ARTICLES.map((article, i) => (
            <Reveal
              as="li"
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              key={article.title}
              className="card-surface flex flex-col p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`badge badge-${article.badge}`}>{article.category}</span>
                <span className="text-xs text-gray-500">{article.readTime}</span>
              </div>
              <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug text-navy">
                {article.slug ? (
                  <Link to="/blog/$slug" params={{ slug: article.slug }}>
                    {article.title}
                  </Link>
                ) : (
                  article.title
                )}
              </h3>
              <p className="mt-3 text-sm text-gray-700">{article.excerpt}</p>
              {article.slug ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: article.slug }}
                  className="btn-ghost mt-4 inline-block"
                >
                  Ler artigo →
                </Link>
              ) : (
                <Link to="/orcamento" className="btn-ghost mt-4 inline-block">
                  Falar com um especialista →
                </Link>
              )}
            </Reveal>
          ))}
        </ul>
      </section>

      {/* NEWSLETTER */}
      <Reveal as="section" className="bg-secondary/40 py-20">
        <div className="container-edit max-w-2xl rounded-3xl bg-gradient-to-br from-navy to-navy-dark p-10 text-center text-white md:p-14">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Receba os próximos artigos direto no seu e-mail
          </h2>
          <p className="mt-4 text-white/80">
            Conteúdo sobre marketing ético para saúde, novidades do setor e estratégias práticas —
            sem spam.
          </p>
          <NewsletterForm />
        </div>
      </Reveal>
    </>
  );
}
