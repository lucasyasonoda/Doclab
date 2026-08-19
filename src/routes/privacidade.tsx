import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/content/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Doc.Lab" },
      {
        name: "description",
        content:
          "Política de Privacidade da Doc.Lab — como coletamos, usamos e protegemos seus dados, em conformidade com a LGPD.",
      },
      { property: "og:title", content: "Política de Privacidade — Doc.Lab" },
      { property: "og:url", content: "/privacidade" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Política de Privacidade"
        lead="Como a Doc.Lab coleta, usa e protege os seus dados pessoais."
      />

      <section className="bg-white py-16">
        <Reveal as="div" className="container-edit prose-doclab max-w-3xl">
          <p className="mb-6 text-sm text-gray-500">Última atualização: abril de 2025</p>

          <p className="mb-6 text-gray-700">
            A Doc.Lab Agência de Marketing em Saúde (CNPJ: {SITE.cnpj}) está comprometida com a
            proteção da privacidade e dos dados pessoais de seus usuários, clientes e visitantes, em
            total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>

          <h2 className="mb-4 mt-8 font-display text-xl font-bold text-navy">
            1. Dados que coletamos
          </h2>
          <p className="mb-2 font-semibold text-navy">Dados fornecidos voluntariamente</p>
          <ul className="mb-4 list-disc space-y-1.5 pl-6 text-gray-700" role="list">
            <li>Nome completo</li>
            <li>Endereço de e-mail profissional</li>
            <li>Número de telefone / WhatsApp</li>
            <li>Especialidade e dados profissionais (CRM, área de atuação)</li>
            <li>Localização (cidade e estado)</li>
            <li>Informações sobre objetivos e contexto profissional</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">Dados coletados automaticamente</p>
          <ul className="mb-4 list-disc space-y-1.5 pl-6 text-gray-700" role="list">
            <li>Endereço IP e dados de navegação</li>
            <li>Tipo de dispositivo, navegador e sistema operacional</li>
            <li>Páginas visitadas e tempo de navegação</li>
            <li>Dados de cookies</li>
          </ul>

          <h2 className="mb-4 mt-8 font-display text-xl font-bold text-navy">
            2. Finalidade do uso dos dados
          </h2>
          <ul className="mb-4 list-disc space-y-1.5 pl-6 text-gray-700" role="list">
            <li>Responder solicitações de orçamento e mensagens de contato</li>
            <li>Enviar propostas comerciais personalizadas</li>
            <li>Enviar newsletters e conteúdos educativos (somente com consentimento)</li>
            <li>Melhorar a experiência de navegação no site</li>
            <li>Cumprir obrigações legais e regulatórias</li>
            <li>Executar contratos de prestação de serviços</li>
          </ul>

          <h2 className="mb-4 mt-8 font-display text-xl font-bold text-navy">
            3. Seus direitos como titular de dados
          </h2>
          <ul className="mb-4 list-disc space-y-1.5 pl-6 text-gray-700" role="list">
            <li>
              <strong>Acesso:</strong> confirmar e acessar seus dados pessoais
            </li>
            <li>
              <strong>Correção:</strong> corrigir dados incompletos ou incorretos
            </li>
            <li>
              <strong>Eliminação:</strong> solicitar exclusão dos seus dados (quando aplicável)
            </li>
            <li>
              <strong>Portabilidade:</strong> solicitar transferência dos seus dados
            </li>
            <li>
              <strong>Revogação:</strong> retirar seu consentimento a qualquer momento
            </li>
          </ul>

          <p className="text-gray-700">
            Para exercer seus direitos, entre em contato pelo e-mail{" "}
            <a href={`mailto:${SITE.privacyEmail}`} className="font-semibold text-cyan-dark">
              {SITE.privacyEmail}
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
