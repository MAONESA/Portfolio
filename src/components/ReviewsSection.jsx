// src/components/ReviewsSection.jsx
import Sectiontitle from "./Sectiontitle";
import ReviewCarousel from "./ReviewCarousel";
import useIsMobile from "../hooks/useIsMobile";
import reviews from "../hooks/reviews";

export default function ReviewsSection() {
  const isMobile = useIsMobile();

  // Si no hay datos, no rompas la vista
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return (
      <section id="reviews" className="h-svh w-full snap-start">
        <div className="container h-full flex flex-col justify-center">
          <Sectiontitle title="Opiniones" />
          <h2 className={`${isMobile ? "text-3xl" : "text-4xl md:text-5xl"} font-bold`}>
            Lo que dicen de mí
          </h2>
          <p className="text-white/60 mt-4">De momento no hay reseñas para mostrar.</p>
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/tu-perfil/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:border-white/25"
            >
              Ver todas en LinkedIn
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="h-svh w-full snap-start">
      <div className="container h-full flex flex-col justify-center">
        <Sectiontitle title="Opiniones" />
        <h2 className={`${isMobile ? "text-3xl" : "text-4xl md:text-5xl"} font-bold`}>
          Lo que dicen de mí
        </h2>

        {/* carrusel 2D con dos tarjetas en desktop, una en móvil */}
        <div className="mt-6">
          <ReviewCarousel
            reviews={reviews}
            perSlideDesktop={2}
            perSlideMobile={1}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/tu-perfil/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:border-white/25"
          >
            Ver todas en LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
