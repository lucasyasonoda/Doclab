import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  DIFFERENTIALS,
  HERO_IMAGE_URL,
  HERO_STATS,
  HOME_BLOG_PREVIEWS,
  HOME_TESTIMONIALS,
  WHY_US,
  WHY_US_IMAGE_URL,
  CTA_BG_IMAGE_URL,
  SITE,
} from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doc.Lab — Agência de Marketing Ético para Saúde" },
      {
        name: "description",
        content:
          "Doc.Lab — Agência de marketing ético para saúde. Estratégias de comunicação para médicos e clínicas dentro das normas do CFM.",
      },
      { property: "og:title", content: "Doc.Lab — Agência de Marketing Ético para Saúde" },
      {
        property: "og:description",
        content: "Estratégias de comunicação para médicos e clínicas dentro das normas do CFM.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-cyan/20 blur-3xl animate-float" />
          <span
            className="absolute -right-24 top-32 h-96 w-96 rounded-full bg-purple/20 blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="container-edit relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Reveal as="span" className="badge badge-cyan">
              ✦ Marketing Ético para Saúde
            </Reveal>
            <Reveal
              as="h1"
              delay={1}
              className="mt-6 font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.1] text-navy"
            >
              Sua presença digital no nível da sua{" "}
              <span className="grad-text">excelência clínica</span>
            </Reveal>
            <Reveal as="p" delay={2} className="mt-6 max-w-xl text-gray-700">
              A Doc.Lab é uma agência de comunicação e marketing criada exclusivamente para
              profissionais e instituições de saúde. Oferecemos estratégias que respeitam o código
              de ética, valorizam o seu conhecimento e geram crescimento real.
            </Reveal>

            <Reveal
              as="nav"
              delay={3}
              aria-label="Ações principais"
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/orcamento" className="btn-primary">
                Agendar Consultoria Gratuita
                <ArrowRight size={18} />
              </Link>
              <Link to="/servicos" className="btn-outline">
                Conhecer as Soluções
              </Link>
            </Reveal>

            <Reveal as="div" delay={3} className="mt-5 flex flex-wrap gap-2.5">
              <span className="badge badge-cyan">CFM-compliance</span>
              <span className="badge badge-purple">100% Ético</span>
              <span className="badge badge-cyan">Especialistas em Saúde</span>
            </Reveal>

            <Reveal as="dl" delay={4} className="mt-10 grid grid-cols-3 gap-6">
              {HERO_STATS.map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-bold text-navy md:text-3xl">{s.n}</dt>
                  <dd className="mt-1 text-xs text-gray-700 md:text-sm">{s.l}</dd>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal as="figure" delay={2} className="relative">
            <span
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-cyan/25 to-purple/25 blur-2xl"
            />
            <img
              src={HERO_IMAGE_URL}
              alt="Profissional de saúde utilizando marketing digital com a Doc.Lab"
              width={600}
              height={480}
              loading="eager"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 md:py-24" id="diferenciais">
        <div className="container-edit">
          <Reveal as="header" className="mx-auto mb-14 max-w-xl text-center">
            <span className="section-tag">O que nos diferencia</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-navy">
              O que nos diferencia de uma agência comum
            </h2>
            <p className="mt-4 text-[1.05rem] text-gray-700">
              Qualquer agência pode criar posts. A Doc.Lab entende o setor de saúde por dentro — as
              regras, os riscos e o valor real do posicionamento de um profissional.
            </p>
          </Reveal>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {DIFFERENTIALS.map((d, i) => (
              <Reveal
                as="li"
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                key={d.title}
                className="card-surface p-8"
              >
                <span className={`icon-box ${d.iconBox}`} aria-hidden>
                  {d.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{d.title}</h3>
                <p className="mt-3 text-sm text-gray-700">{d.body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal as="div" className="mt-12 text-center">
            <Link to="/servicos" className="btn-outline">
              Ver todas as soluções
            </Link>
          </Reveal>
        </div>
      </section>

      {/* POR QUE NÓS */}
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="container-edit grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal as="figure" className="m-0">
            <img
              src={WHY_US_IMAGE_URL}
              alt="Equipe Doc.Lab trabalhando em estratégias de saúde"
              width={560}
              height={420}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </Reveal>

          <Reveal as="article" delay={2}>
            <span className="section-tag">Por que a Doc.Lab?</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-navy">
              Parceria de longo prazo, com sigilo e conformidade total
            </h2>

            <ul className="mt-8 space-y-6" role="list">
              {WHY_US.map((w) => (
                <li key={w.title} className="flex gap-4">
                  <span className={`icon-box ${w.iconBox} shrink-0`} aria-hidden>
                    {w.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-700">{w.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/sobre" className="btn-primary mt-8 inline-flex">
              Conhecer a equipe
            </Link>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 md:py-24" id="depoimentos">
        <div className="container-edit">
          <Reveal as="header" className="mx-auto mb-14 max-w-xl text-center">
            <span className="section-tag">Depoimentos</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-navy">
              O que dizem os médicos e gestores que confiam na Doc.Lab
            </h2>
            <p className="mt-4 text-[1.05rem] text-gray-700">
              A satisfação dos profissionais que atendemos é a nossa maior prova social.
            </p>
          </Reveal>

          <ul className="grid gap-6 md:grid-cols-3" role="list">
            {HOME_TESTIMONIALS.map((t, i) => (
              <Reveal
                as="li"
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                key={t.name}
                className="card-surface flex flex-col p-8"
              >
                <header className="flex items-center gap-3">
                  <figure aria-hidden className="text-3xl">
                    ✦
                  </figure>
                  <hgroup>
                    <h3 className="font-display font-semibold text-navy">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </hgroup>
                </header>
                <blockquote className="mt-5 flex-1 text-sm italic text-gray-700">
                  {t.quote}
                </blockquote>
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

      {/* BLOG PRÉVIA */}
      <section className="bg-white py-20 md:py-24" id="blog">
        <div className="container-edit">
          <Reveal as="header" className="mx-auto mb-14 max-w-xl text-center">
            <span className="section-tag">Blog</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-navy">
              Conhecimento que fortalece sua decisão
            </h2>
            <p className="mt-4 text-[1.05rem] text-gray-700">
              Artigos escritos por quem vive o marketing de saúde todos os dias. Estratégia, ética e
              prática — sem enrolação.
            </p>
          </Reveal>

          <ul className="grid gap-6 md:grid-cols-3" role="list">
            {HOME_BLOG_PREVIEWS.map((b, i) => (
              <Reveal
                as="li"
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                key={b.title}
                className="card-surface p-8"
              >
                <span className={`badge badge-${b.badge}`}>{b.category}</span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy">
                  {b.slug ? (
                    <Link to="/blog/$slug" params={{ slug: b.slug }}>
                      {b.title}
                    </Link>
                  ) : (
                    <Link to="/blog">{b.title}</Link>
                  )}
                </h3>
                <p className="mt-3 text-sm text-gray-700">{b.excerpt}</p>
                {b.slug ? (
                  <Link
                    to="/blog/$slug"
                    params={{ slug: b.slug }}
                    className="btn-ghost mt-4 inline-block"
                  >
                    Ler artigo →
                  </Link>
                ) : (
                  <Link to="/blog" className="btn-ghost mt-4 inline-block">
                    Ler artigo →
                  </Link>
                )}
              </Reveal>
            ))}
          </ul>

          <Reveal as="div" className="mt-12 text-center">
            <Link to="/blog" className="btn-outline">
              Ver todos os artigos
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <figure aria-hidden className="absolute inset-0 m-0">
          <img
            src={CTA_BG_IMAGE_URL}
            alt=""
            width={1440}
            height={600}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-navy-dark/85" />
        </figure>

        <Reveal
          as="div"
          className="container-edit relative max-w-2xl py-20 text-center text-white md:py-28"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white">
            Sabemos que o seu foco deve estar no paciente
          </h2>
          <p className="mt-4 text-white/85">
            Deixe a tradução do seu conhecimento científico para o meio digital com a nossa equipe.
            Preencha o formulário e um especialista da Doc.Lab entra em contato em até 24 horas.
          </p>
          <nav aria-label="Ações finais" className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/orcamento" className="btn-primary">
              Agendar Consultoria Gratuita
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </Reveal>
      </section>
    </>
  );
}
