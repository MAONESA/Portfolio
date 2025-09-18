// src/components/ScrollDots.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollDots({ sections, scrollRootRef, offsetTop = 0, isMobile = false, hidden = false }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id ?? null);
  const rafRef = useRef(0);

  useEffect(() => {
    const root = scrollRootRef?.current ?? null;
    if (!root) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const h = root.clientHeight;                         // alto de “pantalla”
        const y = Math.max(0, root.scrollTop);               // ⬅︎ clamp para evitar negativos
        const idx = Math.max(0, Math.min(sections.length - 1, Math.round(y / h)));
        const id = sections[idx]?.id;
        if (id && id !== activeId) setActiveId(id);
      });
    };

    onScroll(); // fija activo en el primer render
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      root.removeEventListener("scroll", onScroll);
    };
  }, [sections, scrollRootRef, activeId]);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  if (hidden) return null;

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-[70] -translate-y-1/2 md:right-8">
      <ul className="flex flex-col items-end gap-3">
        {sections.map(({ id, label }) => {
          const active = id === activeId;
          return (
            <li key={id} className={`relative ${isMobile ? "" : "group"}`}>
              <button
                onClick={() => go(id)}
                aria-label={label}
                aria-current={active ? "true" : undefined}
                className={[
                  "pointer-events-auto relative grid place-items-center rounded-full transition-all duration-200",
                  isMobile ? "h-4 w-4" : "h-3.5 w-3.5",
                  active
                    ? "border border-[--color-neon] bg-[--color-neon]/20 shadow-[0_0_0_2px_color-mix(in_oklab,var(--color-neon)_35%,transparent),0_0_14px_2px_color-mix(in_oklab,var(--color-neon)_25%,transparent)]"
                    : "border border-white/20 bg-white/5 hover:scale-110",
                ].join(" ")}
              >
                <motion.span
                  layoutId="dot-core"
                  className={`rounded-full bg-[--color-neon] ${isMobile ? "h-2 w-2" : "h-1.5 w-1.5"}`}
                  initial={false}
                  animate={{ scale: active ? 1 : 0.6, opacity: active ? 1 : 0.45 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>

              {/* Tooltip auto (solo desktop) */}
              {!isMobile && (
                <AnimatePresence>
                  {active && (
                    <motion.div
                      key="auto-tip"
                      initial={{ x: 8, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 8, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-5 top-1/2 -translate-y-1/2 rounded-lg bg-[--color-graphite] px-2.5 py-1.5 text-xs text-white/90 shadow-xl ring-1 ring-white/10 md:right-6"
                    >
                      {label}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Tooltip hover (solo desktop) */}
              {!isMobile && (
                <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-lg bg-[--color-graphite] px-2.5 py-1.5 text-xs text-white/90 shadow-xl ring-1 ring-white/10 group-hover:block md:right-6">
                  {label}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
