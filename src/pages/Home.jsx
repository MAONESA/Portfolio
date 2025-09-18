// src/pages/Home.jsx
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Sectiontitle from "../components/Sectiontitle";
import ScrollDots from "../components/ScrollDots";
import useIsMobile from "../hooks/useIsMobile";
import { BadgeCheck } from "lucide-react";

function Home() {
  const scrollRef = useRef(null);
  const isMobile = useIsMobile();

  const sections = useMemo(
    () =>
      isMobile
        ? [
            { id: "home",           label: "Home" },
            { id: "about",          label: "About" },
            { id: "certifications", label: "Certificaciones" },
          ]
        : [
            { id: "home",           label: "Home" },
            { id: "about",          label: "About" },
            { id: "trajectory",     label: "Trayectoria" },
            { id: "certifications", label: "Certificaciones" },
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
        {/* HOME */}
        <section id="home" className="relative h-svh w-full snap-start">
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

            <motion.div
              className="mt-6 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <a href="#about" className="rounded-2xl bg-[--color-neon] px-5 py-2 font-medium text-black shadow-xl transition hover:brightness-110">
                Sobre mí
              </a>
              <a href="#certifications" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-medium text-white/90 hover:border-white/25">
                Certificaciones
              </a>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="h-svh w-full snap-start">
          <div
            className={`container ${isMobile ? "pt-navbar-safe" : ""} h-full grid items-center gap-8 ${
              isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            <div className="min-w-0 space-y-4">
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
                  : ["React", "TailwindCSS", "JavaScript", "Python", "Bash", "Kali Linux", "Wireshark", "SQL Injection"]
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
  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90
             hover:border-white/25 transition active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-white/30"
>
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" d="M12 3v12m0 0l-4-4m4 4l4-4" />
    <path strokeWidth="2" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
  </svg>
  <span>Descargar CV</span>
</a>


                {!isMobile && (
                  <Link to="/about" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 font-medium text-white/90 hover:border-white/25">
                    Más sobre mí
                  </Link>
                )}
              </div>
            </div>

            {/* Foto: oculta en móvil para que no desplace nada */}
            <div className="hidden md:flex justify-center">
              <div className="relative size-56 md:size-72 rounded-full bg-[--color-graphite] ring-2 ring-white/10 shadow-[var(--shadow-cyan)] overflow-hidden">
                <img src="/profile.jpg" alt="David Sandoval" className="size-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* TRAYECTORIA (solo desktop) */}
        {!isMobile && (
          <section id="trajectory" className="h-svh w-full snap-start">
            <div className="container h-full flex flex-col justify-center">
              <Sectiontitle title="Trayectoria" />
              <h2 className="text-4xl md:text-5xl font-bold">Formación y experiencia</h2>
              <p className="mt-2 text-white/70 max-w-prose">
                Un recorrido por mi formación y algunos hitos profesionales.
              </p>

              <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
                {[
                  { title: "CFGS DAW — Escola Ginebró", years: "2019–2021" },
                  { title: "Desarrollador Front-End — Mproducts", years: "2019" },
                  { title: "CFGS ASIR — Institut Lliçà d’Amunt", years: "2022–2023" },
                  { title: "Bootcamps (Full-Stack / Ciber & EH)", years: "2023–2024" },
                  { title: "CETI Ciberseguridad — Monlau FP", years: "2024–2025" },
                ].map((s, idx, arr) => (
                  <div key={s.title} className="relative flex items-start md:flex-1">
                    {idx < arr.length - 1 && (
                      <div className="absolute left-6 top-5 hidden h-[2px] w-[calc(100%-1.5rem)] bg-white/10 md:block" />
                    )}
                    <div className="mt-1 mr-4 grid size-4 place-items-center rounded-full ring-neon bg-[--color-neon]/20">
                      <div className="size-2 rounded-full bg-[--color-neon]" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm uppercase tracking-wider text-white/60">{s.years}</div>
                      <div className="text-lg font-semibold">{s.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CERTIFICACIONES */}
        <section id="certifications" className="h-svh w-full snap-start">
          <div className="container h-full flex flex-col justify-center pb-footer-safe">
            <Sectiontitle title="Certificaciones" />
            <h2 className={`${isMobile ? "text-3xl" : "text-4xl md:text-5xl"} font-bold`}>Credenciales</h2>

            <div className={`mt-6 grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="size-5 text-[--color-neon]" />
                  <div>
                    <div className="font-semibold">Microsoft Certified: Security, Compliance and Identity Fundamentals (SC-900)</div>
                    <div className="text-sm text-white/60">2024</div>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="size-5 text-[--color-neon]" />
                  <div>
                    <div className="font-semibold">Microsoft Certified: Azure Fundamentals (AZ-900)</div>
                    <div className="text-sm text-white/60">2023</div>
                  </div>
                </div>
              </div>
            </div>

            {!isMobile && (
              <div className="mt-6">
                <Link to="/certifications" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:border-white/25">
                  Ver todas
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
