import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_CHANNELS, CONTACT_INFO_CARDS } from "@/content/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Doc.Lab" },
      {
        name: "description",
        content:
          "Entre em contato com a Doc.Lab — WhatsApp, e-mail e Instagram. Estamos aqui para ouvir você.",
      },
      { property: "og:title", content: "Contato — Doc.Lab" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHero
        tag="Fale conosco"
        title={
          <>
            Estamos aqui para
            <br />
            <span className="grad-text">ouvir você</span>
          </>
        }
        lead="Seja para tirar uma dúvida, solicitar uma proposta ou apenas conhecer melhor o nosso trabalho — fique à vontade para entrar em contato pelo canal que preferir."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-edit max-w-2xl">
          <ul className="space-y-6" role="list">
            {CONTACT_CHANNELS.map((c, i) => (
              <Reveal
                as="li"
                delay={((i % 4) + 1) as 1 | 2 | 3}
                key={c.title}
                className="card-surface flex gap-5 p-6"
              >
                <div>
                  <h3 className="card-text__title card-text__title--navy">{c.title}</h3>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-medium text-cyan-dark"
                  >
                    {c.value}
                  </a>
                  <p className="card-text__body mt-1.5 text-sm">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {CONTACT_INFO_CARDS.map((c, i) => (
              <Reveal
                as="article"
                delay={((i % 4) + 1) as 1 | 2}
                key={c.title}
                className="card-surface p-8"
              >
                <h3 className="card-text__title">{c.title}</h3>
                <p className="card-text__body mt-3">{c.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="mt-14 text-center">
            <Link to="/orcamento" className="btn-primary">
              Solicitar orçamento
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
