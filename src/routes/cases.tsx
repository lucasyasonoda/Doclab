import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CASES, CASES_STATS } from "@/content/site";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases — Doc.Lab" },
      {
        name: "description",
        content:
          "Cases Doc.Lab — Histórias reais de médicos e clínicas que transformaram sua presença digital com marketing ético para saúde.",
      },
      { property: "og:title", content: "Cases — Doc.Lab" },
      { property: "og:url", content: "/cases" },
    ],
    links: [{ rel: "canonical", href: "/cases" }],
  }),
  component: Cases,
});

function Cases() {
  return (
    <>
      <PageHero
        tag="Resultados reais"
        title={
          <>
            Cases de <span className="grad-text">sucesso</span>
          </>
        }
        lead="Médicos de diversas especialidades que apostaram na Doc.Lab e colheram resultados concretos."
      />

      {/* STATS */}
      <Reveal as="section" className="bg-white py-16">
        <dl className="container-edit grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {CASES_STATS.map((s) => (
            <div key={s.l}>
              <dt className="font-display text-3xl font-bold text-navy md:text-4xl">{s.n}</dt>
              <dd className="mt-2 text-sm text-gray-700">{s.l}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* DEPOIMENTOS */}
      <section className="bg-secondary/40 py-20">
        <div className="container-edit">
          <Reveal as="header" className="mx-auto mb-14 max-w-xl text-center">
            <span className="section-tag">Depoimentos</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-navy">
              Quem já confia na Doc.Lab
            </h2>
          </Reveal>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
            {CASES.map((c, i) => (
              <Reveal
                as="li"
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                key={c.name}
                className="card-surface flex flex-col p-8"
              >
                <header className="flex items-center gap-3">
                  <figure aria-hidden className="text-3xl">
                    {c.role.includes("Dra.") || c.name.startsWith("Dra") ? "👩‍⚕️" : "👨‍⚕️"}
                  </figure>
                  <hgroup>
                    <h3 className="font-display font-semibold text-navy">{c.name}</h3>
                    <p>
                      <span className={`badge badge-${c.badge}`}>{c.role}</span>
                    </p>
                  </hgroup>
                </header>
                <blockquote className="mt-5 flex-1 text-sm italic text-gray-700">
                  {c.quote}
                </blockquote>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                  {c.results.map((r) => (
                    <div key={r.l}>
                      <dt className="font-display text-xl font-bold text-cyan-dark">{r.n}</dt>
                      <dd className="text-xs text-gray-500">{r.l}</dd>
                    </div>
                  ))}
                </dl>
                <footer className="mt-5">
                  <span className="stars" aria-label="5 estrelas">
                    ★★★★★
                  </span>
                </footer>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" className="bg-white py-20">
        <div className="container-edit max-w-2xl rounded-3xl bg-gradient-to-br from-cyan/10 to-purple/10 p-10 text-center md:p-14">
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold text-navy">
            Quer ser o próximo case de sucesso?
          </h2>
          <p className="mt-4 text-gray-700">
            Agende uma conversa gratuita e veja como podemos trabalhar juntos.
          </p>
          <Link to="/orcamento" className="btn-primary mt-8 inline-flex">
            Falar com a Doc.Lab
          </Link>
        </div>
      </Reveal>
    </>
  );
}
