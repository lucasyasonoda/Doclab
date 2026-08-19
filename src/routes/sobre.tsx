import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MISSION_VISION_PURPOSE, TEAM, TIMELINE, VALUES } from "@/content/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Doc.Lab" },
      {
        name: "description",
        content:
          "Conheça a Doc.Lab — Missão, visão, propósito, história e a equipe por trás do marketing ético para saúde.",
      },
      { property: "og:title", content: "Sobre a Doc.Lab" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero
        tag="Quem somos"
        title={
          <>
            Onde a ciência da saúde encontra a
            <br />
            <em className="grad-text not-italic">estratégia do marketing</em>
          </>
        }
        lead="A Doc.Lab nasceu para resolver uma contradição que vemos todos os dias: profissionais de saúde brilhantes clinicamente que permanecem invisíveis no ambiente digital. Existimos para mudar isso — com ética, estratégia e resultados reais."
      />

      {/* MISSÃO, VISÃO, PROPÓSITO */}
      <section className="bg-white py-20">
        <div className="container-edit grid gap-6 md:grid-cols-3">
          {MISSION_VISION_PURPOSE.map((m, i) => (
            <Reveal
              as="article"
              delay={((i % 4) + 1) as 1 | 2 | 3}
              key={m.title}
              className="card-surface p-8 text-center md:text-left"
            >
              <span className={`icon-box ${m.iconBox} mx-auto md:mx-0`} aria-hidden>
                {m.icon}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{m.title}</h3>
              <p className="mt-3 text-sm text-gray-700">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="bg-secondary/40 py-20">
        <div className="container-edit grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal as="article">
            <span className="section-tag">Nossa história</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-navy">
              Uma agência nascida de uma frustração legítima
            </h2>
            <p className="mt-5 text-gray-700">
              A Doc.Lab surgiu quando sua fundadora, após anos acompanhando profissionais de saúde
              de perto, percebeu que o mercado oferecia apenas duas opções: fazer marketing
              agressivo, que desrespeitava o código de ética, ou não fazer nenhum marketing,
              permanecendo invisível.
            </p>
            <p className="mt-4 text-gray-700">
              A terceira opção — um marketing sofisticado, ético e eficaz — simplesmente não existia
              de forma acessível e especializada. Foi então que a Doc.Lab nasceu para preencher esse
              espaço.
            </p>
          </Reveal>

          <Reveal as="aside" delay={2}>
            <ol className="space-y-6 border-l-2 border-cyan/40 pl-6" role="list">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[calc(1.5rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-cyan" />
                  <span className="font-display text-sm font-bold text-cyan-dark">{t.year}</span>
                  <h4 className="mt-1 font-display font-semibold text-navy">{t.title}</h4>
                  <p className="mt-1 text-sm text-gray-700">{t.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-white py-20">
        <div className="container-edit">
          <Reveal as="header" className="mx-auto mb-14 max-w-xl text-center">
            <span className="section-tag">Valores</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-navy">
              O que guia cada decisão da Doc.Lab
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal
                as="article"
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                key={v.title}
                className="card-surface p-8"
              >
                <span className={`icon-box ${v.iconBox}`} aria-hidden>
                  {v.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-3 text-sm text-gray-700">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="bg-secondary/40 py-20">
        <div className="container-edit">
          <Reveal as="header" className="mx-auto mb-14 max-w-xl text-center">
            <span className="section-tag">Equipe</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-navy">
              Nossa equipe
            </h2>
            <p className="mt-4 text-[1.05rem] text-gray-700">
              Um time multidisciplinar com experiência em jornalismo, comunicação, design e gestão
              de tráfego para saúde
            </p>
          </Reveal>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {TEAM.map((member, i) => (
              <Reveal
                as="li"
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                key={member.name}
                className="card-surface p-8 text-center"
              >
                <figure aria-hidden className="text-4xl">
                  {member.icon}
                </figure>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-dark">{member.role}</p>
                <p className="mt-3 text-sm text-gray-700">{member.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" className="bg-white py-20">
        <div className="container-edit max-w-2xl rounded-3xl bg-gradient-to-br from-cyan/10 to-purple/10 p-10 text-center md:p-14">
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold text-navy">
            Pronto para construir uma presença digital à altura da sua carreira?
          </h2>
          <p className="mt-4 text-gray-700">
            Agende uma conversa sem compromisso. Em 30 minutos, você entende exatamente como a
            Doc.Lab pode ajudar o seu consultório ou clínica.
          </p>
          <Link to="/orcamento" className="btn-primary mt-8 inline-flex">
            Agendar consultoria gratuita
          </Link>
        </div>
      </Reveal>
    </>
  );
}
