import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

// Replicates the legacy `[data-reveal]` + IntersectionObserver behavior from
// js/main.js: elements fade/slide in once they scroll into view.
export function Reveal({
  children,
  delay,
  as: Tag = "div",
  className,
  style,
}: {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-delay={delay}
      className={`${revealed ? "revealed" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
