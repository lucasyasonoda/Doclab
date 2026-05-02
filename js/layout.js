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
      <div class="footer-brand">
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
        <a href="https://wa.me/5515997961512" target="_blank" rel="noopener">
          WhatsApp: (15) 99796-1512
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

/* ── WhatsApp flutuante ── */
  const waBtn = document.createElement('a');
  waBtn.href = 'https://wa.me/5515997961512';
  waBtn.target = '_blank';
  waBtn.rel = 'noopener';
  waBtn.className = 'wa-float';
  waBtn.setAttribute('aria-label', 'Falar pelo WhatsApp');
  waBtn.innerHTML = `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.785 1.82 6.77L2 30l7.43-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#fff"/>
      <path d="M22.5 19.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#25D366"/>
    </svg>
    <span class="wa-tooltip">Fale conosco!</span>
  `;
  document.body.appendChild(waBtn);

})();
