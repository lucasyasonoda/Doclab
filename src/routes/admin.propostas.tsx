import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { getAdminSession } from "./-admin-auth";

export const Route = createFileRoute("/admin/propostas")({
  loader: async () => {
    const session = await getAdminSession();
    if (!session?.admin) {
      throw redirect({ to: "/admin/login" });
    }
    return {};
  },
  component: PropostasPage,
});

type ProposalForm = {
  cliente: string;
  contato: string;
  servico: string;
  escopo: string;
  investimento: string;
  prazo: string;
  validade: string;
  observacoes: string;
};

const EMPTY_FORM: ProposalForm = {
  cliente: "",
  contato: "",
  servico: "Gestão de Presença Digital",
  escopo: "",
  investimento: "",
  prazo: "12 meses",
  validade: "15 dias",
  observacoes: "",
};

const SERVICOS = [
  "Gestão de Presença Digital",
  "Tráfego Pago para Saúde",
  "Posicionamento e Branding",
  "Sites de Alta Conversão",
  "Consultoria Estratégica",
];

/**
 * Gera o HTML da proposta que será enviada ao cliente final.
 *
 * É um template propositalmente simples: o time preenche os campos variáveis
 * ao lado e leva este HTML para o envio. Quando o template definitivo existir,
 * basta trocar o corpo desta função.
 */
function buildProposalHtml(form: ProposalForm): string {
  const linha = (rotulo: string, valor: string) =>
    valor.trim()
      ? `<tr><td style="padding:8px 0;color:#6b7280;width:180px">${rotulo}</td><td style="padding:8px 0;color:#111827;font-weight:600">${valor}</td></tr>`
      : "";

  const escopoHtml = form.escopo
    .split("\n")
    .map((linha) => linha.trim())
    .filter(Boolean)
    .map((linha) => `<li style="margin-bottom:6px">${linha}</li>`)
    .join("");

  return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:640px;color:#111827">
 <div style="background:#0f172a;border-radius:12px;padding:24px;text-align:center">
    <h1 style="margin:0;font-size:20px;color:#fff">Doc.Lab</h1>
    <p style="margin:6px 0 0;font-size:13px;color:#cbd5e1">Agência de marketing ético para saúde</p>
 </div>

 <h2 style="margin:24px 0 8px;font-size:18px">Proposta comercial</h2>
 <p style="margin:0 0 20px;color:#4b5563;font-size:14px">
    Preparamos esta proposta para <strong>${form.cliente || "[cliente]"}</strong>.
 </p>

 <table style="width:100%;border-collapse:collapse;font-size:14px">
    ${linha("Cliente", form.cliente)}
    ${linha("Contato", form.contato)}
    ${linha("Serviço", form.servico)}
    ${linha("Investimento", form.investimento)}
    ${linha("Prazo", form.prazo)}
    ${linha("Validade da proposta", form.validade)}
 </table>

  ${
    escopoHtml
      ? `<h3 style="margin:24px 0 8px;font-size:15px">Escopo do trabalho</h3>
 <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px">${escopoHtml}</ul>`
      : ""
  }

  ${
    form.observacoes
      ? `<h3 style="margin:24px 0 8px;font-size:15px">Observações</h3>
 <p style="margin:0;color:#374151;font-size:14px;white-space:pre-line">${form.observacoes}</p>`
      : ""
  }

 <p style="margin:28px 0 0;font-size:13px;color:#6b7280">
    Qualquer dúvida, é só responder este e-mail. Ficamos à disposição.
 </p>
 <p style="margin:6px 0 0;font-size:13px;color:#6b7280">
    Doc.Lab · contato@doclabmkt.com.br
 </p>
</div>`;
}

function PropostasPage() {
  const [form, setForm] = useState<ProposalForm>(EMPTY_FORM);
  const [copied, setCopied] = useState(false);

  const html = buildProposalHtml(form);

  function set<K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setCopied(false);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  function handlePreview() {
    const janela = window.open("", "_blank");
    if (!janela) return;
    janela.document.write(
      `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Proposta — ${form.cliente || "Doc.Lab"}</title></head><body style="margin:0;padding:32px;background:#f3f4f6">${html}</body></html>`,
    );
    janela.document.close();
  }

  return (
    <div className="animate-fade-in-up">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-6 flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-white">Propostas</h1>
            <p className="mt-1 text-sm text-white/50">
              Preencha as informações variáveis e envie o orçamento ao cliente.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePreview}
              className="rounded-lg border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
            >
              Pré-visualizar
            </button>
            <button
              onClick={handleCopy}
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-gray-100"
            >
              {copied ? "Copiado ✓" : "Copiar HTML"}
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formulário */}
          <section className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="mb-5 font-display text-lg font-bold text-white">Dados da proposta</h2>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-white/70">Cliente</label>
                <input
                  type="text"
                  value={form.cliente}
                  onChange={(e) => set("cliente", e.target.value)}
                  className="w-full rounded-lg border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="Nome do cliente ou clínica"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/70">Contato</label>
                <input
                  type="text"
                  value={form.contato}
                  onChange={(e) => set("contato", e.target.value)}
                  className="w-full rounded-lg border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="E-mail ou telefone"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/70">Serviço</label>
                <select
                  value={form.servico}
                  onChange={(e) => set("servico", e.target.value)}
                  className="w-full rounded-lg border-white/10 bg-white/5 px-3 py-2 text-white focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                >
                  {SERVICOS.map((servico) => (
                    <option key={servico} value={servico}>
                      {servico}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/70">Escopo do trabalho</label>
                <p className="mb-1.5 text-xs text-white/40">Um item por linha.</p>
                <textarea
                  rows={5}
                  value={form.escopo}
                  onChange={(e) => set("escopo", e.target.value)}
                  className="w-full resize-y rounded-lg border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder={
                    "Planejamento editorial mensal\nCriação de conteúdo\nRelatórios mensais"
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm text-white/70">Investimento</label>
                  <input
                    type="text"
                    value={form.investimento}
                    onChange={(e) => set("investimento", e.target.value)}
                    className="w-full rounded-lg border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                    placeholder="R$ 2.500/mês"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/70">Prazo</label>
                  <input
                    type="text"
                    value={form.prazo}
                    onChange={(e) => set("prazo", e.target.value)}
                    className="w-full rounded-lg border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/70">Validade da proposta</label>
                <input
                  type="text"
                  value={form.validade}
                  onChange={(e) => set("validade", e.target.value)}
                  className="w-full rounded-lg border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/70">Observações</label>
                <textarea
                  rows={3}
                  value={form.observacoes}
                  onChange={(e) => set("observacoes", e.target.value)}
                  className="w-full resize-y rounded-lg border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  placeholder="Condições de pagamento, itens não inclusos..."
                />
              </div>
            </div>
          </section>

          {/* Pré-visualização */}
          <section>
            <h2 className="mb-5 font-display text-lg font-bold text-white">Pré-visualização</h2>
            <div className="rounded-2xl border-white/10 bg-white p-6">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
