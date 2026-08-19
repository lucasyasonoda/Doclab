import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES, SERVICES_FAQ, type ServiceItem } from "@/content/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Soluções — Doc.Lab" },
      {
        name: "description",
        content:
          "As 7 soluções da Doc.Lab: presença digital, tráfego pago, branding, sites, consultoria ética, assessoria de imprensa e treinamento de equipe para saúde.",
      },
      { property: "og:title", content: "Soluções — Doc.Lab" },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const bgGradients: Record<ServiceItem["imageBg"], string> = {
  cyan: "from-cyan to-cyan-dark",
  purple: "from-purple to-purple-dark",
  blue: "from-[#4b6cb7] to-[#3a5a9e]",
  grad: "from-cyan to-purple",
};

function ServiceBlock({ service, index }: { service: ServiceItem; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <section
      id={service.id}
      className={`py-16 md:py-20 ${reverse ? "bg-secondary/40" : "bg-white"}`}
    >
      <div
        className={`container-edit grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal as="article">
          <span className={`badge badge-${service.badge} mb-4 inline-flex`}>
            Solução {service.number}
          </span>
          <span className={`icon-box ${service.iconBox}`} aria-hidden>
            {service.icon}
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold text-navy md:text-3xl">
            {service.title}
          </h2>
          {service.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-gray-700">
              {p}
            </p>
          ))}

          <ul className="mt-6 space-y-2.5" role="list">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                {f}
              </li>
            ))}
          </ul>

          {service.note && <p className="mt-5 text-sm text-gray-500">{service.note}</p>}

          <Link to="/orcamento" className="btn-primary mt-8 inline-flex">
            Solicitar proposta
          </Link>
        </Reveal>

        <Reveal
          as="figure"
          delay={2}
          aria-hidden
          className={`relative flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br ${bgGradients[service.imageBg]} m-0`}
        >
          <span className="text-7xl">{service.icon}</span>
        </Reveal>
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <>
      <PageHero
        tag="O que oferecemos"
        title={
          <>
            Soluções completas para quem
            <br />
            cuida da <span className="grad-text">saúde de outras pessoas</span>
          </>
        }
        lead="Cada solução é pensada para os desafios únicos da comunicação em saúde — com foco em ética, confiança e resultados mensuráveis."
      />

      {SERVICES.map((service, i) => (
        <ServiceBlock service={service} index={i} key={service.id} />
      ))}

      {/* FAQ */}
      <section className="bg-secondary/40 py-20">
        <div className="container-edit max-w-3xl">
          <Reveal as="header" className="mx-auto mb-12 max-w-xl text-center">
            <span className="section-tag">Perguntas frequentes</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-navy">
              Dúvidas comuns sobre nossas soluções
            </h2>
          </Reveal>

          <Reveal as="div" className="space-y-3">
            {SERVICES_FAQ.map((item) => (
              <details
                key={item.question}
                className="group card-surface p-5 open:shadow-md [&>summary]:list-none"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-navy">
                  {item.question}
                  <span className="shrink-0 text-cyan transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" className="bg-white py-20">
        <div className="container-edit max-w-2xl rounded-3xl bg-gradient-to-br from-cyan/10 to-purple/10 p-10 text-center md:p-14">
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold text-navy">
            Não sabe por onde começar?
          </h2>
          <p className="mt-4 text-gray-700">
            Nossa consultoria inicial é gratuita. Vamos entender seu momento e indicar o melhor
            caminho.
          </p>
          <Link to="/orcamento" className="btn-primary mt-8 inline-flex">
            Agendar consultoria gratuita
          </Link>
        </div>
      </Reveal>
    </>
  );
}
