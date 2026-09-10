import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ error: "Método não permitido" }, 405);

  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "E-mail inválido" }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: existing, error: checkError } = await supabase
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", email)
      .maybeSingle();
    if (checkError) throw checkError;

    if (!existing) {
      const { error } = await supabase.from("newsletter_subscribers").insert({ email });
      if (error) throw error;
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    const from = Deno.env.get("RESEND_FROM_EMAIL") ?? "contato@doclabmkt.com.br";
    if (!resendKey) throw new Error("RESEND_API_KEY não configurada");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: `Doc.Lab <${from}>`,
        to: [email],
        subject: "Bem-vindo ao blog da Doc.Lab",
        html: `<h2>Você foi inscrito!</h2><p>Seu e-mail <strong>${email}</strong> foi cadastrado com sucesso. Assim que sair um novo artigo, você receberá uma notificação.</p>`,
      }),
    });
    if (!emailResponse.ok) {
      const errorBody = await emailResponse.text();
      console.error("Resend error:", errorBody);
      return json(
        { error: "O cadastro foi salvo, mas o Resend recusou o envio da confirmação." },
        502,
      );
    }

    const resendResult = await emailResponse.json();
    return json({
      success: true,
      message: existing ? "Você já está inscrito!" : "Inscrito com sucesso! Verifique seu e-mail.",
      emailId: resendResult?.id,
    });
  } catch (error) {
    console.error("subscribe-newsletter error:", error);
    return json(
      { error: error instanceof Error ? error.message : "Erro ao cadastrar e-mail" },
      500,
    );
  }
});
