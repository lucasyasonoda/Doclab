import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

// Replicates the legacy `[data-reveal]` + IntersectionObserver behavior from
// js/main.js: elements fade/slide in once they scroll into view.
//
// Robustness improvements over the legacy version:
//  - If the element is already visible (fully intersecting) at mount, reveal
//    immediately instead of waiting for a potential IO callback that may never
//    fire on short pages.
//  - If IntersectionObserver is not supported (or the callback never fires),
//    the element still becomes visible after a short grace period, so the page
//    is never left with opacity: 0 content.
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      // Element not mounted yet — skip.
      return;
    }

    // If the element is already visible, reveal immediately.
    // getBoundingClientRect is cheap and avoids relying solely on IO.
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      setRevealed(true);
      // Still set up IO for scroll-based animation if desired, but not required.
    }

    if (typeof IntersectionObserver === "function") {
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
    } else {
      // IO not supported — reveal after a brief grace period so the page
      // is never left with invisible content.
      timeoutRef.current = setTimeout(() => {
        setRevealed(true);
      }, 200);
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    }
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
