// src/components/ReviewCard.jsx
import { ExternalLink, Quote } from "lucide-react";

export default function ReviewCard({ r }) {
  if (!r) return null;

  const Wrapper = ({ children }) =>
    r.profile ? (
      <a
        href={r.profile}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir perfil de ${r.name} en LinkedIn`}
        className="group inline-flex items-center gap-2"
      >
        {children}
      </a>
    ) : (
      <span className="inline-flex items-center gap-2">{children}</span>
    );

  return (
    <article className="glass rounded-2xl p-5 review-card">
      {/* Cabecera */}
      <div className="flex items-center gap-3">
        {/* Avatar opcionalmente clicable */}
        <Wrapper>
          <div className="avatar-50 shrink-0">
            {r.photo ? <img src={r.photo} alt={r.name} /> : null}
          </div>
        </Wrapper>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {/* Nombre + icono como link si hay profile */}
            <Wrapper>
              <h4 className="font-semibold truncate group-hover:underline underline-offset-4">
                {r.name}
              </h4>
              {r.profile && (
                <ExternalLink
                  className="size-4 opacity-70 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              )}
            </Wrapper>
          </div>

          {r.role && (
            <div className="text-xs text-white/60 truncate">{r.role}</div>
          )}
          {(r.meta || r.date) && (
            <div className="text-xs text-white/50">
              {[r.meta, r.date].filter(Boolean).join(" • ")}
            </div>
          )}
        </div>
      </div>

      {/* Texto */}
      <div className="mt-3 review-fade">
        <p className="review-text text-white/80 leading-relaxed whitespace-pre-line">
          <Quote className="inline size-4 translate-y-[-2px] mr-1 opacity-70" />
          {r.text}
        </p>
      </div>

      {/* CTA */}
      {r.profile && (
        <div className="mt-3">
          <a
            href={r.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[--color-neon] underline-offset-4 hover:underline"
          >
            Leer más en LinkedIn →
          </a>
        </div>
      )}
    </article>
  );
}
