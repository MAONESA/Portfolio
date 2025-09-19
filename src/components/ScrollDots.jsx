// src/components/ScrollDots.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollDots({
  sections,
  scrollRootRef,
  offsetTop = 0,     // altura de la navbar (ej. 64)
  isMobile = false,
  hidden = false,
}) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id ?? null);
  const rafRef = useRef(0);

  useEffect(() => {
    const root = scrollRootRef?.current ?? null;
    if (!root) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const h = root.clientHeight;
        const y = root.scrollTop;

        // desplazamos medio viewport y restamos la cabecera fija
        let idx = Math.floor((y + h * 0.55 - offsetTop) / h);
        if (Number.isNaN(idx)) idx = 0;
        idx = Math.max(0, Math.min(sections.length - 1, idx));

        const id = sections[idx]?.id;
        if (id && id !== activeId) setActiveId(id);
      });
    };

    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      root.removeEventListener("scroll", onScroll);
    };
  }, [sections, scrollRootRef, offsetTop, activeId]);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
  };

  if (hidden || !sections?.length) return null;

  const outerSize = isMobile ? "h-4 w-4" : "h-3.5 w-3.5";
  const coreSize  = isMobile ? "h-2 w-2" : "h-1.5 w-1.5";

  return (
    <nav aria-label="Secciones" className="pointer-events-none fixed right-4 top-1/2 z-[70] -translate-y-1/2 md:right-8">
      <ul role="list" className="flex flex-col items-end gap-3">
        {sections.map(({ id }) => {
          const active = id === activeId;
          return (
            <li key={id}>
              <button
                onClick={() => go(id)}
                aria-current={active ? "true" : undefined}
                className={[
                  "pointer-events-auto relative grid place-items-center rounded-full transition-all duration-200",
                  outerSize,
                  active
                    ? "border border-[--color-neon] bg-[--color-neon]/20 shadow-[0_0_0_2px_color-mix(in_oklab,var(--color-neon)_35%,transparent),0_0_14px_2px_color-mix(in_oklab,var(--color-neon)_25%,transparent)]"
                    : "border border-white/25 bg-white/5 hover:scale-110",
                ].join(" ")}
              >
                <motion.span
                  className={`rounded-full bg-[--color-neon] ${coreSize}`}
                  initial={false}
                  animate={{ scale: active ? 1 : 0.6, opacity: active ? 1 : 0.45 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
