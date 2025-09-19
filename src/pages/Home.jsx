// Página de inicio con CTAs arriba y más certificaciones en desktop
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Sectiontitle from "../components/Sectiontitle";
import ScrollDots from "../components/ScrollDots";
import useIsMobile from "../hooks/useIsMobile";
import { BadgeCheck } from "lucide-react";

export default function Home() {
  const scrollRef = useRef(null);
  const isMobile = useIsMobile();

  // Secciones (por ahora sin trayectoria en móvil como acordamos)
  const sections = useMemo(
    () =>
      isMobile
        ? [
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "certifications", label: "Certificaciones" },
          ]
        : [
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "trajectory", label: "Trayectoria" },
            { id: "certifications", label: "Certificaciones" },
          ],
    [isMobile]
  );

  return (
    <div className="relative">
      {/* Dots laterales — ocultos en móvil */}
      <ScrollDots
        sections={sections}
        scrollRootRef={scrollRef}
        offsetTop={64}
        isMobile={isMobile}
        hidden={isMobile}
      />

      <main
        ref={scrollRef}
        className="snap-y snap-mandatory h-svh w-full overflow-y-scroll overflow-x-hidden touch-pan-y overscroll-y-none"
      >
        {/* =================== HOME =================== */}
        <section id="home" className="relative h-svh w-full snap-start md:[&>.container]:-mt-6">

          {!isMobile && (
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          )}

          <div className={`container ${isMobile ? "pt-navbar-safe" : ""} h-full flex flex-col items-center justify-center text-center px-6`}>
            <motion.h1
              className={`font-bold ${isMobile ? "text-4xl" : "text-5xl md:text-6xl"}`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              David <span className="text-[--color-neon] text-glow">Sandoval</span>
            </motion.h1>

            <motion.p
              className={`mt-3 text-white/70 ${isMobile ? "text-base" : "md:text-lg"}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Ciberseguridad & Web Developer
            </motion.p>

            {/* === CTAs arriba con TODAS las secciones del inicio === */}
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <a href="#about" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-medium text-white/90 hover:border-white/25">
                Sobre mí
              </a>

              {/* Trayectoria solo desktop de momento */}
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
            </motion.div>
          </div>
        </section>

        {/* =================== ABOUT =================== */}
        <section id="about" className="h-svh w-full snap-start">
          <div
            className={`container ${isMobile ? "pt-navbar-safe" : ""} h-full grid items-center gap-8 ${
              isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {/* Texto */}
            <div className="min-w-0 space-y-4 md:-mt-2">{/* leve subida del bloque en desktop */}
              <Sectiontitle title="Sobre mí" />
              <h2 className={`${isMobile ? "text-3xl" : "text-4xl md:text-5xl"} font-bold`}>Quién soy</h2>
              <p className="text-white/70 max-w-prose">
                Graduado en Ciberseguridad en Entornos TI (CETI). Experiencia en desarrollo web,
                administración de sistemas y soporte técnico. Conocimiento de marcos como GDPR,
                DORA, ISO 27001/31000/19601/37001 y ENS.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {(isMobile
                  ? ["React", "TailwindCSS", "JavaScript", "Python"]
                  : ["React", "TailwindCSS", "JavaScript", "Python", "Bash", "Kali Linux", "Wireshark", "SQL Injection", "Java", "SpringBoot", "Debian"]
                ).map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="/cv.pdf"
                  download="David-Sandoval-CV.pdf"
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

            {/* Foto: oculta en móvil por ahora */}
            <div className="hidden md:flex justify-center">
              <div className="relative size-56 md:size-72 rounded-full bg-[--color-graphite] ring-2 ring-white/10 shadow-[var(--shadow-cyan)] overflow-hidden">
                <img src="/profile.jpg" alt="David Sandoval" className="size-full object-cover" />
              </div>
            </div>
          </div>
        </section>

{/* ============ TRAYECTORIA (desktop) — estilo original ============ */}
{!isMobile && (
  <section id="trajectory" className="h-svh w-full snap-start">
    <div className="container h-full flex flex-col justify-center">
      <Sectiontitle title="Trayectoria" />
      <h2 className="text-4xl md:text-5xl font-bold">Formación y experiencia</h2>
      <p className="mt-2 text-white/70 max-w-prose">
        Un recorrido por mi formación y algunos hitos profesionales.
      </p>

      {/* Grid horizontal de hitos, con “dot” neón y año subrayado (como antes) */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-5">
        {[
          { years: "2019–2021", title: "CFGS DAW — Escola Ginebró" },
          { years: "2019",      title: "Desarrollador Front-End — Mproducts" },
          { years: "2022–2023", title: "CFGS ASIR — Institut Lliçà d’Amunt" },
          { years: "2023–2024", title: "Bootcamps (Full-Stack / Ciber & EH)" },
          { years: "2024–2025", title: "CETI Ciberseguridad — Monlau FP" },
        ].map((item, i) => (
          <div key={i} className="relative">
            {/* Línea con “dot” neón + año subrayado */}
            <div className="flex items-center gap-3 text-white/70">
              <div className="grid size-6 place-items-center rounded-full bg-[--color-neon]/10 ring-neon">
                <div className="size-2 rounded-full bg-[--color-neon]" />
              </div>
              <div className="font-semibold tracking-wide">{item.years}</div>
            </div>
            <div className="mt-2 h-[2px] w-full bg-white/10" />

            {/* Título del hito */}
            <div className="mt-4 text-xl font-semibold leading-snug">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}


        {/* ================= CERTIFICACIONES ================= */}
        <section id="certifications" className="h-svh w-full snap-start">
          <div className="container h-full flex flex-col justify-center pb-footer-safe md:-mt-2">
            <Sectiontitle title="Certificaciones" />
            <h2 className={`${isMobile ? "text-3xl" : "text-4xl md:text-5xl"} font-bold`}>Credenciales</h2>

            <div
              className={`mt-6 grid gap-4 ${
                isMobile ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-2"
              }`}
            >
              {/* SC-900 */}
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="size-5 text-[--color-neon]" />
                  <a
                    href="https://www.credly.com/badges/e114d94e-5b21-4b71-b528-88c8d09a1497/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div>
                      <div className="font-semibold">
                        Microsoft Certified: Security, Compliance and Identity Fundamentals (SC-900)
                      </div>
                      <div className="text-sm text-white/60">2024</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* AZ-900 */}
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="size-5 text-[--color-neon]" />
                  <a
                    href="https://www.credly.com/badges/ad83804b-ab6c-4b2b-857c-763644083fc8/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div>
                      <div className="font-semibold">Microsoft Certified: Azure Fundamentals (AZ-900)</div>
                      <div className="text-sm text-white/60">2023</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Extra desktop 1 (placeholder o sustituye cuando tengas badge) */}
              {!isMobile && (
                <div className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="size-5 text-[--color-neon]" />
                    <div>
                      <div className="font-semibold">Google Cybersecurity (Coursera)</div>
                      <div className="text-sm text-white/60">2024</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Extra desktop 2 (placeholder) */}
              {!isMobile && (
                <div className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="size-5 text-[--color-neon]" />
                    <div>
                      <div className="font-semibold">TryHackMe: Advent of Cyber (badge)</div>
                      <div className="text-sm text-white/60">2023</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Ver todas */}
            <div className="mt-6">
              <Link
                to="/certifications"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:border-white/25"
              >
                Ver todas
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
