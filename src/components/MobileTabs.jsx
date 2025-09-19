// src/components/MobileTabs.jsx
import { useEffect, useState } from "react";

export default function MobileTabs({ sections = [] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map(s => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      const vis = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (vis?.target?.id) setActive(vis.target.id);
    }, { threshold: [0.6] });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="sticky-under-nav block md:hidden bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="h-scroll scrollbar-none py-2">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className={`pill ${active === s.id ? "pill-active" : "hover:border-white/25"}`}
          >
            {s.short ?? s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
