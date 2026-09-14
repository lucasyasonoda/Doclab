import { createFileRoute, Link, Outlet, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { adminLogout } from "./-admin-auth";

// Rota de layout de /admin: renderiza o chrome do painel (sidebar + topo) e
// deixa as rotas filhas escolherem o conteúdo. A checagem de sessão NÃO pode
// ficar aqui: o loader do pai roda antes do filho, e /admin/login precisa ser
// acessível sem sessão.
export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const NAV_ITEMS = [
  { to: "/admin", label: "Blog", exact: true },
  { to: "/admin/propostas", label: "Propostas", exact: false },
] as const;

function AdminLayout() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await adminLogout();
      router.invalidate();
    } catch {
      // mesmo se falhar, manda para o login
    }
    window.location.href = "/admin/login";
  }

  return (
    <div className="flex min-h-screen bg-navy-dark">
      {/* Sidebar (desktop) */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-white/10 bg-black/20 md:flex">
        <div className="flex items-center gap-2.5 border-b border-white/10 px-5 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple font-display text-sm font-bold text-white">
            DL
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-white">Doc.Lab</div>
            <div className="text-xs text-white/40">Painel</div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-3" aria-label="Menu do painel">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              activeProps={{ className: "bg-white/10 text-white" }}
              inactiveProps={{ className: "text-white/60 hover:bg-white/5 hover:text-white" }}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 p-3">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full rounded-lg border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loggingOut ? "Saindo..." : "Sair"}
          </button>
        </div>
      </aside>

      {/* Conteúdo */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Navegação horizontal no mobile */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 md:hidden">
          <span className="mr-2 font-display text-sm font-bold text-white">Doc.Lab</span>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              activeProps={{ className: "bg-white/10 text-white" }}
              inactiveProps={{ className: "text-white/60" }}
              className="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="ml-auto rounded-lg border-white/10 px-3 py-1.5 text-sm text-white/80 disabled:opacity-60"
          >
            {loggingOut ? "Saindo..." : "Sair"}
          </button>
        </div>

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
