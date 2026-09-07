import { createServerFn } from "@tanstack/react-start";
import { supabaseServer } from "@/lib/supabase-server";
import { sendNewsletterEmail } from "./-send-newsletter";

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    if (raw && typeof raw === "object" && "email" in raw) {
      const email = (raw as { email: unknown }).email;
      if (typeof email === "string" && email.includes("@")) {
        return { email: email.toLowerCase() };
      }
    }
    throw new Error("E-mail inválido");
  })
  .handler(async ({ data }) => {
    const email = data.email;

    const { data: existing, error: checkError } = await supabaseServer
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (checkError) {
      throw new Error("Erro ao verificar inscrição");
    }

    if (existing) {
      return { success: true, message: "Você já está inscrito!" };
    }

    const { error: insertError } = await supabaseServer
      .from("newsletter_subscribers")
      .insert({ email });

    if (insertError) {
      throw new Error("Erro ao inscrever");
    }

    // Dispara e-mail de confirmação
    const subject = "Bem-vindo ao blog da Doc.Lab";
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#1f2937;background-color:#f3f4f6">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6">
    <tr>
      <td align="center" style="padding:32px 16px">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)">
          <tr>
            <td style="background-color:#0f172a;padding:32px;text-align:center">
              <h1 style="margin:0 0 8px;font-size:24px;color:#ffffff">Doc.Lab</h1>
              <p style="margin:0;color:#cbd5e1;font-size:14px">Agência de marketing ético para saúde</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px">
              <h2 style="margin:0 0 12px;font-size:20px;color:#0f172a">Você foi inscrito!</h2>
              <p style="margin:0 0 16px;color:#4b5563">
                Seu e-mail <strong>${email}</strong> foi cadastrado com sucesso. Assim que sair um novo artigo, você receberá uma notificação.
              </p>
              <p style="margin:0 0 24px;color:#6b7280;font-size:14px">
                Para cancelar a qualquer momento, basta atualizar suas preferências no blog.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:16px">
                <tr>
                  <td style="padding:0;font-size:13px;color:#6b7280;line-height:1.5">
                    <p style="margin:0">Receba os próximos artigos direto no seu e-mail — conteúdo sobre marketing ético para saúde, novidades do setor e estratégias práticas, sem spam.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#0f172a;padding:16px;text-align:center">
              <p style="margin:0;color:#64748b;font-size:12px">© 2026 Doc.Lab · contato@doclabmkt.com.br</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    try {
      await sendNewsletterEmail({ data: { to: email, subject, html } });
    } catch (emailError) {
      // Falha no envio não deve impedir o cadastro — o inscrito já foi salvo
      console.error("[subscribeNewsletter] falha no envio de confirmação:", emailError);
    }

    return { success: true, message: "Inscrito com sucesso! Verifique seu e-mail." };
  });
