import type { ReactNode } from "react";

/**
 * Renderiza um "ícone" do conteúdo do site.
 * Como o conteúdo não usa mais emojis, o ícone vira um
 * marcador visual minimalista (glifo tipográfico).
 */
export function Icon({ value, size = "text-2xl" }: { value?: string; size?: string }) {
  const glyph = value && value.trim() ? value : "✦";
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center font-serif ${size} leading-none text-current opacity-80`}
    >
      {glyph}
    </span>
  );
}

export default Icon as (props: { value?: string; size?: string }) => ReactNode;
