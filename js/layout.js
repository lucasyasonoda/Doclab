/* ==========================================
   DOC LAB — Shared Layout (header + footer)
   Injetado via JS em todas as páginas
   ========================================== */

(function () {
  "use strict";

  /* ── Header ── */
  const headerHTML = `
<header class="site-header">
  <nav class="container">
    <a href="../index.html" class="logo" aria-label="Doc Lab — página inicial">
      <span class="logo-mark" aria-hidden="true">DL</span>
      <span class="logo-text">Doc Lab</span>
    </a>

    <ul class="nav-links" role="list">
      <li><a href="../pages/servicos.html">Serviços</a></li>
      <li><a href="../pages/cases.html">Cases</a></li>
      <li><a href="../pages/sobre.html">Sobre</a></li>
      <li><a href="../pages/contato.html">Contato</a></li>
    </ul>

    <a href="../pages/contato.html" class="btn btn-primary" style="display:none;" id="nav-cta">
      Falar com a gente
    </a>

    <button class="nav-mobile-toggle" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>`;

  /* ── Footer ── */
  const footerHTML = `
<footer class="site-footer">
  <class="container">
    <div class="footer-grid">
      <div>
        <a href="../index.html" class="logo" style="margin-bottom:1rem;">
          <span class="logo-mark" aria-hidden="true">DL</span>
          <span class="logo-text" style="color:#fff;">Doc Lab</span>
        </a>
        <p style="font-size:.9rem;max-width:220px;">
          Marketing digital especializado para médicos e clínicas.
        </p>
      </div>

      <nav class="footer-links" aria-label="Serviços">
        <h4>Serviços</h4>
        <a href="../pages/servicos.html#social-media">Social Media</a>
        <a href="../pages/servicos.html#websites">Websites</a>
        <a href="../pages/servicos.html#branding">Branding</a>
        <a href="../pages/servicos.html#estrategia">Estratégia Digital</a>
      </nav>

      <nav class="footer-links" aria-label="Empresa">
        <h4>Empresa</h4>
        <a href="../pages/sobre.html">Sobre nós</a>
        <a href="../pages/cases.html">Cases</a>
        <a href="../pages/contato.html">Contato</a>
      </nav>

      <address class="footer-links">
        <h4>Contato</h4>
        <a href="mailto:contato@doclab.com.br">contato@doclab.com.br</a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener">
          WhatsApp: (11) 99999-9999
        </a>
        <a href="https://instagram.com/doclab" target="_blank" rel="noopener">
          @doclab
        </a>
      </address>

      <div class="footer-map-wrap">
        <h4>Onde estamos</h4>
        <figure class="footer-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11556.372963296011!2d-47.48293602477855!3d-23.5020571973908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58abf0131c73d%3A0x62b1fd1e1d8a57f7!2sPadaria%20Real%20Centro!5e0!3m2!1spt-BR!2sbr!4v1777638223435!5m2!1spt-BR!2sbr"
            width="100%"
            height="150"
            style="border:0; border-radius:10px; filter:grayscale(25%) contrast(1.05); display:block;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização Padaria Real"
        ></iframe>  
          <figcaption>
            <a href="https://maps.google.com/?q=Av.+Moreira+César,+334,+Centro,+Sorocaba,+SP" target="_blank" rel="noopener">
              Av. Moreira César, 334 — Centro, Sorocaba/SP
            </a>
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <span id="footer-year"></span> Doc Lab. Todos os direitos reservados. Desenvolvido por <a href="#" style="color:var(--cyan);">L&amp;L Tech</a></p>
    </div>
  </div>
</footer>`;

  /* ── Inject into page ── */
  const headerPlaceholder = document.getElementById("site-header");
  const footerPlaceholder = document.getElementById("site-footer");

  if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

  /* Fix links for index.html (one level up already) */
  const isIndex =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname.endsWith("/");
  if (isIndex) {
    document
      .querySelectorAll(".site-header a[href], .site-footer a[href]")
      .forEach((a) => {
        const href = a.getAttribute("href");
        if (href && href.startsWith("../")) {
          a.setAttribute("href", href.replace("../", "./"));
        }
      });
  }

  /* Year in footer */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Show CTA button on md+ */
  const navCTA = document.getElementById("nav-cta");
  if (navCTA && window.matchMedia("(min-width:901px)").matches) {
    navCTA.style.display = "inline-flex";
  }
})();
