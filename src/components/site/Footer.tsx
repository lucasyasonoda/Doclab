import { Link } from "@tanstack/react-router";
import { FOOTER_SOLUTIONS_LINKS, SITE } from "@/content/site";
import { trackWhatsappClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/75">
      <div className="container-edit grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="mx-auto w-full max-w-[220px] sm:mx-0">
          <Link to="/" className="mb-3 flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple font-display text-sm font-bold text-white">
              DL
            </span>
            <span className="font-display text-xl font-bold text-white">Doc.Lab</span>
          </Link>
          <p className="text-sm">Agência de marketing ético para saúde.</p>
        </div>

        <nav aria-label="Soluções" className="mx-auto w-full max-w-[220px] sm:mx-0">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white">Soluções</h4>
          <ul className="space-y-1.5 text-sm" role="list">
            {FOOTER_SOLUTIONS_LINKS.map((s) => (
              <li key={s.id}>
                <Link to="/servicos" hash={s.id} className="transition-colors hover:text-cyan">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Empresa" className="mx-auto w-full max-w-[220px] sm:mx-0">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white">Empresa</h4>
          <ul className="space-y-1.5 text-sm" role="list">
            <li>
              <Link to="/sobre" className="transition-colors hover:text-cyan">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/blog" className="transition-colors hover:text-cyan">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/cases" className="transition-colors hover:text-cyan">
                Cases
              </Link>
            </li>
            <li>
              <Link to="/orcamento" className="transition-colors hover:text-cyan">
                Orçamento
              </Link>
            </li>
            <li>
              <Link to="/contato" className="transition-colors hover:text-cyan">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <address className="mx-auto w-full max-w-[220px] not-italic sm:mx-0">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white">Contato</h4>
          <ul className="space-y-1.5 text-sm" role="list">
            <li>
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-cyan">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappClick("footer")}
                className="transition-colors hover:text-cyan"
              >
                {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cyan"
              >
                {SITE.instagramHandle}
              </a>
            </li>
          </ul>
          <p className="mt-3 text-[0.78rem] leading-snug text-white/55">{SITE.address}</p>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edit py-5 text-center text-sm">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Doc.Lab Agência de Marketing em Saúde. Todos os direitos
            reservados. &nbsp;|&nbsp;{" "}
            <Link to="/privacidade" className="text-cyan hover:text-white">
              Política de Privacidade
            </Link>{" "}
            &nbsp;|&nbsp;{" "}
            <Link to="/termos" className="text-cyan hover:text-white">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
