import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { adminLogin } from "./-admin-auth";

export const Route = createFileRoute("/admin/login")({
  component: AdminLoginPage,
});

/** Spinner circular usado no botão e na tela de sucesso. */
function Spinner({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [serviceError, setServiceError] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Lê sempre do DOM: o autofill do navegador não dispara onChange,
    // então o state React pode divergir do que está visível no campo.
    const loginUsername = usernameRef.current?.value.trim() ?? username.trim();
    const loginPassword = passwordRef.current?.value ?? password;

    try {
      setServiceError(false);
      const result = await adminLogin({
        data: { username: loginUsername, password: loginPassword },
      });
      if (result.success) {
        // Mostra o estado de sucesso por um instante antes de navegar, para o
        // usuário perceber que o login deu certo em vez de a tela "piscar".
        setDone(true);
        setTimeout(() => {
          window.location.href = "/admin";
        }, 650);
        return;
      }
      setLoading(false);
      setError("Não deu certo. Tente novamente.");
    } catch (err) {
      const msg =
        err && typeof err === "object" && "message" in err
          ? (err.message as string)
          : String(err ?? "");
      if (msg.includes("não encontrada") || msg.includes("Configuração")) {
        setServiceError(true);
        setError("Serviço não configurado. Faltam variáveis de ambiente.");
      } else if (msg.includes("incorretos")) {
        setError("Usuário ou senha incorretos.");
      } else {
        setError(msg || "Erro ao fazer login.");
      }
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-dark px-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
        <div className="mb-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple font-display text-sm font-bold text-white">
              DL
            </span>
            <span className="font-display text-xl font-bold text-white">Doc.Lab</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-white">Painel Administrativo</h1>
          <p className="mt-2 text-sm text-white/60">insira suas credenciais para continuar</p>
        </div>

        {serviceError && (
          <div className="mb-4 rounded-lg bg-red-900/40 p-3 text-sm text-red-300 text-center">
            Contate o administrador do sistema para verificar a configuração.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="admin-username"
              className="mb-1.5 block text-sm font-medium text-white/80"
            >
              Usuário
            </label>
            <input
              ref={usernameRef}
              id="admin-username"
              name="username"
              type="text"
              autoComplete="username"
              autoFocus
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40 disabled:cursor-not-allowed"
              placeholder="Digite o usuário"
            />
          </div>
          <div>
            <label
              htmlFor="admin-password"
              className="mb-1.5 block text-sm font-medium text-white/80"
            >
              Senha
            </label>
            <input
              ref={passwordRef}
              id="admin-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/40 disabled:cursor-not-allowed"
              placeholder="Digite a senha"
            />
          </div>

          {error && !serviceError && <p className="text-sm text-red-400 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading || done}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-navy font-semibold transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {done ? (
              <>
                <svg
                  className="h-5 w-5 text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Acesso liberado
              </>
            ) : loading ? (
              <>
                <Spinner />
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </button>
        </form>

        {/* Overlay de progresso: deixa claro que algo está acontecendo. */}
        {(loading || done) && (
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/50">
            {done ? (
              <span className="text-green-400">Redirecionando para o painel...</span>
            ) : (
              <>
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-cyan" />
                Verificando credenciais
              </>
            )}
          </div>
        )}

        {/* Barra de progresso indeterminada durante o login. */}
        {loading && !done && (
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/3 animate-[loadingBar_1.1s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan to-purple" />
          </div>
        )}

        <p className="mt-6 text-center text-xs text-white/40">Painel restrito a equipe Doc.Lab</p>
      </div>
    </div>
  );
}
