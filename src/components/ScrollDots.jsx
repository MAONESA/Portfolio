// src/components/ScrollDots.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Props:
 *  - sections: Array<{ id: string, label: string }>
 *  - scrollRootRef: ref al <main> que hace scroll (IntersectionObserver root)
 *  - offsetTop?: px para compensar navbar fijo
 */
export default function ScrollDots({ sections, scrollRootRef, offsetTop = 64 }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id ?? null);

  useEffect(() => {
    const root = scrollRootRef?.current ?? null;

    // 🔑 Buscar los elementos AQUÍ (ya hay DOM)
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Escoge la sección con mayor ratio visible
        let top = null;
        let max = 0;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= max) {
            max = e.intersectionRatio;
            top = e.target;
          }
        }
        if (top?.id) setActiveId(top.id);
      },
      {
        root, // observa dentro del <main> que scrollea
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0..1 step 0.1
        rootMargin: `-${offsetTop}px 0px 0px 0px`,
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections, scrollRootRef, offsetTop]);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-[70] -translate-y-1/2 md:right-8">
      <ul className="flex flex-col items-end gap-3">
        {sections.map(({ id, label }) => {
          const active = id === activeId;
          return (
            <li key={id} className="relative group">
              <button
                onClick={() => go(id)}
                aria-label={label}
                aria-current={active ? "true" : undefined}
                className={[
                  "pointer-events-auto relative grid place-items-center rounded-full transition-all duration-200",
                  active
                    ? "h-4 w-4 border border-[--color-neon] bg-[--color-neon]/20 shadow-[0_0_0_2px_color-mix(in_oklab,var(--color-neon)_35%,transparent),0_0_14px_2px_color-mix(in_oklab,var(--color-neon)_25%,transparent)]"
                    : "h-3.5 w-3.5 border border-white/20 bg-white/5 hover:scale-110",
                ].join(" ")}
              >
                <motion.span
                  layoutId="dot-core"
                  className="h-1.5 w-1.5 rounded-full bg-[--color-neon]"
                  initial={false}
                  animate={{
                    scale: active ? 1 : 0.5,
                    opacity: active ? 1 : 0.45,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>

              {/* Tooltip auto (activo) */}
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

              {/* Tooltip hover (inactivos) */}
              <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-lg bg-[--color-graphite] px-2.5 py-1.5 text-xs text-white/90 shadow-xl ring-1 ring-white/10 group-hover:block md:right-6">
                {label}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
