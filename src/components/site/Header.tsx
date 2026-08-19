import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-100 h-[68px] bg-white/96 backdrop-blur-md border-b border-border">
      <nav className="container-edit h-full flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Doc.Lab — página inicial">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple font-display text-sm font-bold text-white">
            DL
          </span>
          <span className="font-display text-xl font-bold text-navy">Doc.Lab</span>
        </Link>

        <ul className="hidden gap-8 lg:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeProps={{ className: "text-cyan" }}
                inactiveProps={{ className: "text-navy" }}
                className="relative text-sm font-medium transition-colors hover:text-cyan"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/orcamento" className="btn-primary hidden md:inline-flex">
          Solicitar Orçamento
        </Link>

        <button
          className="flex flex-col gap-[5px] p-2 lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="text-navy" /> : <Menu className="text-navy" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <ul className="container-edit flex flex-col gap-1 py-4 text-sm" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="border-b border-border/60">
                <Link to={link.to} onClick={() => setOpen(false)} className="block py-3 text-navy">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                to="/orcamento"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Solicitar Orçamento
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
