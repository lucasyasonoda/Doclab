import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/content/site";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Doc.Lab" },
      {
        name: "description",
        content:
          "Termos de Uso do site da Doc.Lab — descrição dos serviços, propriedade intelectual e finalidade do conteúdo do blog.",
      },
      { property: "og:title", content: "Termos de Uso — Doc.Lab" },
      { property: "og:url", content: "/termos" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: Termos,
});

function Termos() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Termos de Uso"
        lead="As condições para uso do site www.doclabsaude.com.br."
      />

      <section className="bg-white py-16">
        <Reveal as="div" className="container-edit prose-doclab max-w-3xl">
          <p className="mb-6 text-sm text-gray-500">Última atualização: abril de 2025</p>

          <p className="mb-6 text-gray-700">
            Bem-vindo ao site da Doc.Lab Agência de Marketing em Saúde (CNPJ: {SITE.cnpj}). Ao
            acessar e utilizar este site (www.doclabsaude.com.br), você concorda com os presentes
            Termos de Uso.
          </p>

          <h2 className="mb-4 mt-8 font-display text-xl font-bold text-navy">
            1. Descrição dos serviços
          </h2>
          <ul className="mb-4 list-disc space-y-1.5 pl-6 text-gray-700" role="list">
            <li>
              Gestão de presença digital e redes sociais para profissionais e instituições de saúde
            </li>
            <li>Planejamento e gestão de campanhas de tráfego pago (Google Ads e Meta Ads)</li>
            <li>Desenvolvimento de posicionamento e identidade de marca</li>
            <li>Desenvolvimento de sites e landing pages</li>
            <li>
              Consultoria de marketing ético e conformidade com normas dos conselhos de classe
            </li>
            <li>Assessoria de imprensa e media training</li>
            <li>Treinamento de secretárias e times de atendimento</li>
          </ul>

          <h2 className="mb-4 mt-8 font-display text-xl font-bold text-navy">
            2. Propriedade intelectual
          </h2>
          <p className="mb-4 text-gray-700">
            Todo o conteúdo disponibilizado neste site — incluindo textos, logotipos, imagens,
            vídeos, layouts e código — é de propriedade exclusiva da Doc.Lab ou de seus
            licenciadores, sendo protegido pelas leis brasileiras e internacionais de propriedade
            intelectual.
          </p>

          <h2 className="mb-4 mt-8 font-display text-xl font-bold text-navy">
            3. Conteúdo do blog e finalidade educativa
          </h2>
          <p className="mb-4 text-gray-700">
            Os artigos e conteúdos publicados no blog da Doc.Lab têm caráter exclusivamente
            educativo e informativo. Eles não constituem assessoria jurídica, consultoria médica ou
            parecer sobre casos específicos.
          </p>

          <h2 className="mb-4 mt-8 font-display text-xl font-bold text-navy">
            4. Legislação aplicável e foro
          </h2>
          <p className="mb-4 text-gray-700">
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer
            disputas serão submetidas ao foro da Comarca de São Paulo, Estado de São Paulo.
          </p>

          <h2 className="mb-4 mt-8 font-display text-xl font-bold text-navy">Contato legal</h2>
          <p className="text-gray-700">
            E-mail:{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-cyan-dark">
              {SITE.email}
            </a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
