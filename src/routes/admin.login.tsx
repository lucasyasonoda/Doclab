import { createFileRoute, redirect } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { adminLogin, adminLogout, getAdminSession } from "./-admin-auth";

export const Route = createFileRoute("/admin/login")({
  component: AdminLoginPage,
});

export function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [serviceError, setServiceError] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const loginUsername = usernameRef.current?.value.trim() ?? username.trim();
    const loginPassword = passwordRef.current?.value ?? password;
    setServiceError(false);
    try {
      const result = await adminLogin({
        data: { username: loginUsername, password: loginPassword },
      });
      if (result.success) {
        window.location.href = "/admin/";
      } else {
        setError("Não deu certo. Tente novamente.");
      }
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
    } finally {
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
              type="password"
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
            disabled={loading}
            className="w-full rounded-lg bg-white px-4 py-3 text-navy font-semibold hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/40">Painel restrito a equipe Doc.Lab</p>
      </div>
    </div>
  );
}
