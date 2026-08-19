import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BUDGET_GOAL_OPTIONS, BUDGET_PROCESS_STEPS, SITE } from "@/content/site";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Orçamento — Doc.Lab" },
      {
        name: "description",
        content:
          "Solicite um orçamento gratuito com a Doc.Lab — consultoria inicial sem compromisso para profissionais e clínicas de saúde.",
      },
      { property: "og:title", content: "Orçamento — Doc.Lab" },
      { property: "og:url", content: "/orcamento" },
    ],
    links: [{ rel: "canonical", href: "/orcamento" }],
  }),
  component: Orcamento,
});

function BudgetForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Demo — sem backend, replicando o comportamento do formulário estático original.
    setTimeout(() => {
      setStatus("sent");
      e.currentTarget?.reset();
    }, 1200);
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-cyan/30 bg-cyan/10 p-6 text-navy" role="alert">
        ✅ Solicitação enviada! Em breve entraremos em contato.
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Nome completo *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Dra. Ana Silva"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="crm" className="text-sm font-medium text-navy">
            CRM / Registro profissional
          </label>
          <input
            id="crm"
            name="crm"
            type="text"
            placeholder="Ex: CRM-SP 000000"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-navy">
            E-mail profissional *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="voce@clinica.com.br"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(11) 99999-9999"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="specialty" className="text-sm font-medium text-navy">
            Qual sua especialidade? *
          </label>
          <input
            id="specialty"
            name="specialty"
            type="text"
            required
            placeholder="Ex: Dermatologia"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="city" className="text-sm font-medium text-navy">
            Cidade / Estado *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="Ex: Sorocaba/SP"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="goal" className="text-sm font-medium text-navy">
          Qual seu principal objetivo agora? *
        </label>
        <select
          id="goal"
          name="goal"
          required
          defaultValue=""
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {BUDGET_GOAL_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="context" className="text-sm font-medium text-navy">
          Descreva o momento atual do seu consultório/clínica
        </label>
        <textarea
          id="context"
          name="context"
          rows={4}
          placeholder="Conte um pouco sobre onde você está hoje e o que gostaria de alcançar..."
          className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="budget" className="text-sm font-medium text-navy">
          Qual o seu orçamento estimado para marketing? (opcional)
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          placeholder="Ex: R$ 1.500 a R$ 3.000/mês"
          className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center"
      >
        {status === "sending" ? "Enviando…" : "Enviar solicitação"}
        {status !== "sending" && <ArrowRight size={18} />}
      </button>

      <p className="text-center text-xs text-gray-500">
        Ao enviar, você concorda com nossa{" "}
        <Link to="/privacidade" className="text-cyan-dark hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>
    </form>
  );
}

function Orcamento() {
  return (
    <>
      <PageHero
        tag="Orçamento"
        title={
          <>
            Vamos construir juntos a sua
            <br />
            <span className="grad-text">presença digital</span>
          </>
        }
        lead="Preencha o formulário e um especialista da Doc.Lab entrará em contato em até 24 horas para uma conversa sem compromisso — focada no momento da sua carreira e nos seus objetivos."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-edit grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal as="article" className="card-surface p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-navy">Solicite seu orçamento</h2>
            <p className="mt-2 mb-8 text-sm text-gray-500">
              Consultoria inicial gratuita e sem compromisso de contratação.
            </p>
            <BudgetForm />
          </Reveal>

          <Reveal as="aside" delay={2}>
            <h2 className="font-display text-xl font-bold text-navy">
              O que acontece na consultoria gratuita
            </h2>

            <ol className="mt-6 space-y-5" role="list">
              {BUDGET_PROCESS_STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan/15 font-display text-sm font-bold text-cyan-dark">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="font-display text-navy">{step.title}</strong>
                    <p className="mt-1 text-sm text-gray-700">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="card-surface mt-8 bg-gradient-to-br from-cyan/10 to-purple/10 p-6">
              <h3 className="font-display font-semibold text-navy">Incluído sem custo</h3>
              <p className="mt-2 text-sm text-gray-700">
                Consultoria inicial de 30 minutos, diagnóstico da sua presença digital atual,
                indicação das normas éticas para a sua especialidade e proposta personalizada — sem
                nenhum compromisso de contratação.
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 inline-flex"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
