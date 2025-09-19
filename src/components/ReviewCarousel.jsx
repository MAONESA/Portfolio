import { useMemo, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import ReviewCard from "./ReviewCard";

export default function ReviewCarousel({
  reviews: reviewsProp,
  perSlideDesktop = 2,
  perSlideMobile = 1,
  className = "",
}) {
  const isMobile = useIsMobile();
  const reviews = Array.isArray(reviewsProp) ? reviewsProp : [];

  const perSlide = isMobile ? perSlideMobile : perSlideDesktop;

  const slides = useMemo(() => {
    if (!reviews.length) return [];
    const out = [];
    for (let i = 0; i < reviews.length; i += perSlide) {
      out.push(reviews.slice(i, i + perSlide));
    }
    return out;
  }, [reviews, perSlide]);

  const [idx, setIdx] = useState(0);
  const atStart = idx <= 0;
  const atEnd = idx >= Math.max(0, slides.length - 1);

  const go = (next) => {
    setIdx((v) => Math.min(Math.max(0, v + next), slides.length - 1));
  };

  if (!slides.length) return null;

  return (
    <div className={`relative ${className}`}>
      {/* TRACK */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-400 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((group, i) => (
            <div key={i} className="min-w-full px-1 md:px-2">
              <div className={`grid gap-4 ${isMobile ? "grid-cols-1" : "md:grid-cols-2"}`}>
                {group.map((r, k) => (
                  <ReviewCard key={`${r.name}-${k}`} r={r} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PEAK / FADES + AREAS CLICKABLES */}
      {/* izquierda */}
      <div
        aria-hidden
        className={`review-peek review-peek-left ${atStart ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        onClick={() => !atStart && go(-1)}
      />
      {/* derecha */}
      <div
        aria-hidden
        className={`review-peek review-peek-right ${atEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        onClick={() => !atEnd && go(+1)}
      />

      {/* DOTS ABAJO (misma estética que ScrollDots) */}
      <div className="mt-6 flex justify-center gap-3">
        {slides.map((_, i) => {
          const active = i === idx;
          return (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={[
                "grid place-items-center rounded-full transition-all duration-200",
                "h-4 w-4",
                active
                  ? "border border-[--color-neon] bg-[--color-neon]/20 shadow-[0_0_0_2px_color-mix(in_oklab,var(--color-neon)_35%,transparent),0_0_10px_1px_color-mix(in_oklab,var(--color-neon)_35%,transparent)]"
                  : "border border-white/25 bg-white/5 hover:scale-110",
              ].join(" ")}
            >
              <span
                className="h-2 w-2 rounded-full bg-[--color-neon] transition-all"
                style={{ transform: `scale(${active ? 1 : 0.6})`, opacity: active ? 1 : 0.5 }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
