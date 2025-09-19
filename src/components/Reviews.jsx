// src/components/Reviews.jsx
export default function Reviews({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Reseñas</h3>
      <div className="h-scroll scrollbar-none">
        {items.map((r, i) => (
          <article key={i} className="glass rounded-2xl p-4 w-[280px] md:w-[360px]">
            <div className="text-sm text-white/70">{r.quote}</div>
            <div className="mt-3 text-sm font-medium">
              {r.author} <span className="text-white/50">— {r.role}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
