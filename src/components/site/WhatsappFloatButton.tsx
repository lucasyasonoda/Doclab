import { SITE } from "@/content/site";
import { trackWhatsappClick } from "@/lib/analytics";

export function WhatsappFloatButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      onClick={() => trackWhatsappClick("float_button")}
      className="group fixed bottom-8 right-8 z-200 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,.45)] transition-transform hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,.55)]"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
      >
        <path
          d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.785 1.82 6.77L2 30l7.43-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
          fill="#fff"
        />
        <path
          d="M22.5 19.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
          fill="#25D366"
        />
      </svg>
      <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-lg bg-navy-dark px-3.5 py-1.5 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
        Fale conosco!
      </span>
    </a>
  );
}
