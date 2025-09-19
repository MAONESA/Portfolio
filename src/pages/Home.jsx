// Página de inicio (desktop-first) usando helpers de index.css
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Sectiontitle from "../components/Sectiontitle";
import ScrollDots from "../components/ScrollDots";
import useIsMobile from "../hooks/useIsMobile";
import CertificationCard from "../components/CertificationCard";
import ReviewsSection from "../components/ReviewsSection";
import AboutAvatar from "../components/AboutAvatar";

export default function Home() {
  const scrollRef = useRef(null);
  const isMobile = useIsMobile();

  const certifications = [
    {
      title:
        "Microsoft Certified: Security, Compliance and Identity Fundamentals (SC-900)",
      year: "2024",
      href:
        "https://www.credly.com/badges/e114d94e-5b21-4b71-b528-88c8d09a1497/linked_in_profile",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      year: "2023",
      href:
        "https://www.credly.com/badges/ad83804b-ab6c-4b2b-857c-763644083fc8/linked_in_profile",
    },
    !isMobile && { title: "Google Cybersecurity (Coursera)", year: "2024" },
    !isMobile && { title: "TryHackMe: Advent of Cyber (badge)", year: "2023" },
    !isMobile && { title: "TryHackMe: Advent of Cyber (badge)", year: "2023" },
    !isMobile && { title: "TryHackMe: Advent of Cyber (badge)", year: "2023" },
  ].filter(Boolean);

  const sections = useMemo(
    () =>
      isMobile
        ? [
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "certifications", label: "Certificaciones" },
            { id: "reviews", label: "Opiniones" },
          ]
        : [
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "trajectory", label: "Trayectoria" },
            { id: "certifications", label: "Certificaciones" },
            { id: "reviews", label: "Opiniones" },
          ],
    [isMobile]
  );

  return (
    <div className="relative">
      <ScrollDots
        sections={sections}
        scrollRootRef={scrollRef}
        offsetTop={64}
        isMobile={isMobile}
        hidden={false}
      />

      <main
        ref={scrollRef}
        className="snap-y snap-mandatory h-svh w-full overflow-y-scroll overflow-x-hidden touch-pan-y overscroll-y-none"
      >
        {/* ========= HERO ========= */}
        <section id="home" className="relative h-svh w-full snap-start">
          {!isMobile && (
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          )}

          <div className="section-shell h-full flex flex-col items-center justify-center text-center">
            <motion.h1
              className={`hero-title font-bold ${isMobile ? "text-4xl" : "text-5xl md:text-6xl"}`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="hero-first">David</span>{" "}
              <span className="hero-last-flat">Sandoval</span>
            </motion.h1>

            <motion.p
              className="mt-3 flex items-center justify-center gap-2 text-lg md:text-xl"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <span className="hero-key hero-key--secPurple">Ciberseguridad</span>
              <span className="text-white/45">&amp;</span>
              <span className="hero-key hero-key--devAmber">Web Developer</span>
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <a
                href="#about"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-medium text-white/90 hover:border-white/25"
              >
                Sobre mí
              </a>
              {!isMobile && (
                <a
                  href="#trajectory"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-medium text-white/90 hover:border-white/25"
                >
                  Trayectoria
                </a>
              )}
              <a
                href="#certifications"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-medium text-white/90 hover:border-white/25"
              >
                Certificaciones
              </a>
              <a
                href="#reviews"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-medium text-white/90 hover:border-white/25"
              >
                Opiniones
              </a>
            </motion.div>
          </div>
        </section>

        {/* ========= ABOUT ========= */}
        <section id="about" className="h-svh w-full snap-start">
          <div className="section-shell about-grid grid h-full content-start gap-8 md:grid-cols-2">
            <div className="min-w-0">
              <div className="section-head">
                {/* Este sobre-título pinta con el mismo --accent */}
                <Sectiontitle title="Sobre mí" />
                <h2 className="section-title text-4xl md:text-5xl">Quién soy</h2>
                <p className="section-subtitle">
                  Graduado en Ciberseguridad en Entornos TI (CETI). Experiencia en
                  desarrollo web, administración de sistemas y soporte técnico.
                  Conocimiento de marcos como GDPR, DORA, ISO 27001/31000/19601/37001 y ENS.
                </p>
              </div>

              <div className="section-body flex flex-wrap gap-2">
                {(isMobile
                  ? ["React", "TailwindCSS", "JavaScript", "Python"]
                  : [
                      "React","TailwindCSS","JavaScript","Python","Bash","Kali Linux",
                      "Wireshark","SQL Injection","Java","SpringBoot","Debian"
                    ]
                ).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="section-footer flex flex-wrap items-center gap-3">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:border-white/25 transition active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" d="M12 3v12m0 0l-4-4m4 4l4-4" />
                    <path strokeWidth="2" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                  </svg>
                  <span>Descargar CV</span>
                </a>

                {!isMobile && (
                  <Link
                    to="/about"
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-medium text-white/90 hover:border-white/25"
                  >
                    Más sobre mí
                  </Link>
                )}
              </div>
            </div>

            {/* Envoltura para alinear el avatar con el texto */}
            <div className="about-avatar">
              <AboutAvatar />
            </div>
          </div>
        </section>

        {/* ========= TRAYECTORIA (solo desktop) ========= */}
        {!isMobile && (
          <section id="trajectory" className="h-svh w-full snap-start">
            <div className="section-shell h-full flex flex-col justify-start">
              <div className="section-head">
                <Sectiontitle title="Trayectoria" />
                <h2 className="section-title text-4xl md:text-5xl">Formación y experiencia</h2>
                <p className="section-subtitle">
                  Un recorrido por mi formación y algunos hitos profesionales.
                </p>
              </div>

              {/* Layout recto (sin “S”) */}
              <div className="section-body grid gap-10 md:grid-cols-5">
                {[
                  { title: "CFGS DAW — Escola Ginebró", years: "2019–2021" },
                  { title: "Desarrollador Front-End — Mproducts", years: "2019" },
                  { title: "CFGS ASIR — Institut Lliçà d’Amunt", years: "2022–2023" },
                  { title: "Bootcamps (Full-Stack / Ciber & EH)", years: "2023–2024" },
                  { title: "CETI Ciberseguridad — Monlau FP", years: "2024–2025" },
                  { title: "Ingeniería Informática", years: "Próximamente (2026)", soon: true },
                ].map((s, idx) => (
                  <div key={s.title + idx}>
                    <div className="flex items-center gap-3 text-white/70">
                      <span className="size-3 rounded-full bg-[--color-neon] shadow-[0_0_12px_2px_rgba(0,255,157,.35)]" />
                      <span className="text-sm">
                        {s.years} {s.soon && <span className="pill ml-2">Próximamente</span>}
                      </span>
                    </div>
                    <div className="mt-2 border-t border-white/15 pt-3 font-semibold">
                      {s.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========= CERTIFICACIONES ========= */}
        <section id="certifications" className="h-svh w-full snap-start">
          <div className="section-shell h-full flex flex-col justify-start">
            <div className="section-head">
              <Sectiontitle title="Certificaciones" />
              <h2 className="section-title text-4xl md:text-5xl">Credenciales</h2>
            </div>

            <div className="section-body grid gap-4 md:grid-cols-2">
              {certifications.map((c, i) => (
                <CertificationCard key={`${c.title}-${i}`} {...c} />
              ))}
            </div>

            {!isMobile && (
              <div className="section-footer">
                <Link
                  to="/certifications"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:border-white/25"
                >
                  Ver todas
                </Link>
              </div>
            )}
            
          </div>
        </section>

        {/* ========= OPINIONES ========= */}
        <ReviewsSection />
      </main>
    </div>
  );
}
