import { createServerFn } from "@tanstack/react-start";
import { getSupabaseServer } from "@/lib/supabase-server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM_EMAIL ?? "contato@doclabmkt.com.br";
const SITE_NAME = "Doc.Lab";

async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!RESEND_API_KEY) {
    return { success: false, error: "RESEND_API_KEY não configurada" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Doc.Lab <${RESEND_FROM}>`,
        to: [params.to],
        subject: params.subject,
        html: params.html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, error: data?.error?.message ?? `HTTP ${res.status}` };
    }

    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export const sendNewsletterEmail = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (raw && typeof raw === "object" && "to" in raw && "subject" in raw && "html" in raw) {
      const o = raw as { to: unknown; subject: unknown; html: unknown };
      const to = o.to;
      const subject = o.subject;
      const html = o.html;
      if (typeof to === "string" && to.includes("@") && typeof subject === "string" && typeof html === "string") {
        return { to, subject, html };
      }
    }
    throw new Error("Parâmetros inválidos para envio de e-mail");
  })
  .handler(async ({ data }) => {
    const result = await sendEmail(data);
    if (!result.success) {
      throw new Error(result.error ?? "Falha no envio");
    }
    return { sent: true };
  });

export const sendNewsletterToAllSubscribers = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (raw && typeof raw === "object" && "subject" in raw && "html" in raw) {
      const o = raw as { subject: unknown; html: unknown };
      const subject = o.subject;
      const html = o.html;
      if (typeof subject === "string" && typeof html === "string") {
        return { subject, html };
      }
    }
    throw new Error("Parâmetros inválidos para broadcast");
  })
  .handler(async ({ data }) => {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY não configurada");
    }

    const { data: subscribers, error } = await getSupabaseServer()
      .from("newsletter_subscribers")
      .select("email")
      .eq("email", data.subject.includes("@") ? "" : undefined)
      .neq("email", "");

    if (error) {
      throw new Error(`Erro ao buscar inscritos: ${error.message}`);
    }

    if (!subscribers || subscribers.length === 0) {
      return { sent: 0, message: "Nenhum inscrito encontrado" };
    }

    const results: Array<{ email: string; success: boolean; error?: string }> = [];

    for (const sub of subscribers) {
      const res = await sendEmail({
        to: sub.email,
        subject: data.subject,
        html: data.html,
      });

      results.push({
        email: sub.email,
        success: res.success,
        error: res.error,
      });
    }

    const successCount = results.filter((r) => r.success).length;

    return {
      sent: successCount,
      total: results.length,
      failures: results.filter((r) => !r.success).map((r) => ({ email: r.email, error: r.error })),
    };
  });
