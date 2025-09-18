// src/pages/Home.jsx
// ————————————————————————————————————————————————
// Página de inicio one-page con 4 pantallas:
// 1) Home  2) About  3) Trayectoria  4) Certificaciones
// Usa snap, ScrollDots (con root=main), y micro-interacciones.
// ————————————————————————————————————————————————
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Sectiontitle from "../components/Sectiontitle";
import ScrollDots from "../components/ScrollDots";
import { BadgeCheck } from "lucide-react"; // icono para certs (si no lo tienes: npm i lucide-react)

function Home() {
  // Ref del contenedor <main> que hace el scroll; ScrollDots observará dentro de este root.
  const scrollRef = useRef(null);

  // Dots laterales — ¡IMPORTANTE!: los ids deben existir en cada <section id="...">
  const sections = [
    { id: "home",           label: "Home" },
    { id: "about",          label: "About" },           // segundo punto: About (como pediste)
    { id: "trajectory",     label: "Trayectoria" },     // reemplaza Skills
    { id: "certifications", label: "Certificaciones" }, // reemplaza Contact
  ];

  return (
    <div className="relative">
      {/* Dots fijos. Van fuera del <main> y reciben el root del scroll */}
      <ScrollDots sections={sections} scrollRootRef={scrollRef} offsetTop={64} />

      {/* Contenedor que scrollea con snap vertical */}
      <main
        ref={scrollRef}
        className="snap-y snap-mandatory h-svh w-full overflow-y-scroll overflow-x-hidden touch-pan-y overscroll-x-none"
      >
        {/* ================= HERO (pantalla 1) ================= */}
        <section id="home" className="relative h-svh w-full flex items-center justify-center snap-start">
          {/* Fondo con grid sutil + máscara radial para mantener foco en el centro */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="container text-center">
            {/* Título con glow en el apellido */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              David <span className="text-[--color-neon] text-glow">Sandoval</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="mt-4 text-white/70 md:text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ciberseguridad & Web Developer
            </motion.p>

            {/* CTAs → About y Certificaciones */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <a
                href="#about"
                className="rounded-2xl bg-[--color-neon] px-5 py-2.5 font-medium text-black shadow-xl transition hover:brightness-110"
              >
                Sobre mí
              </a>
              <a
                href="#certifications"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:border-white/25"
              >
                Certificaciones
              </a>
            </motion.div>
          </div>
        </section>

        {/* ================= ABOUT (pantalla 2) ================= */}
        <section id="about" className="h-svh w-full snap-start">
          {/* Grid 2 columnas: texto izq / foto der */}
          <div className="container h-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Texto */}
            <div className="min-w-0 space-y-4">
              <Sectiontitle title="Sobre mí" />
              <h2 className="text-4xl md:text-5xl font-bold">Quién soy</h2>
              <p className="text-white/70 max-w-prose">
                Graduado en Ciberseguridad en Entornos TI (CETI). Experiencia en desarrollo web,
                administración de sistemas y soporte técnico. Conocimiento de marcos como GDPR,
                DORA, ISO 27001/31000/19601/37001 y ENS. Busco aportar visión de seguridad y
                diseño limpio en roles junior de ciberseguridad, TI o HelpDesk.
              </p>

              {/* Stack principal (chips) — lo más relevante para la portada */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "React", "TailwindCSS", "JavaScript", "Python",
                  "Bash", "Kali Linux", "Wireshark", "SQL Injection",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs: tu CV real y “Más sobre mí” */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/cv.pdf" // ← pon tu archivo en public/cv.pdf
                  className="rounded-2xl bg-[--color-neon] px-5 py-2.5 font-medium text-black shadow-xl transition hover:brightness-110"
                >
                  Descargar CV
                </a>
                <Link
                  to="/about"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 hover:border-white/25"
                >
                  Más sobre mí
                </Link>
              </div>
            </div>

            {/* Foto circular — usa /public/profile.jpg */}
            <div className="flex justify-center">
              <div className="relative size-56 md:size-72 rounded-full bg-[--color-graphite] ring-2 ring-white/10 shadow-[var(--shadow-cyan)] overflow-hidden">
                <img src="/profile.jpg" alt="David Sandoval" className="size-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRAYECTORIA (pantalla 3) ================= */}
        <section id="trajectory" className="h-svh w-full snap-start">
          <div className="container h-full flex flex-col justify-center">
            <Sectiontitle title="Trayectoria" />
            <h2 className="text-4xl md:text-5xl font-bold">Formación y experiencia</h2>
            <p className="mt-2 text-white/70 max-w-prose">
              Un recorrido por mi formación y algunos hitos profesionales.
            </p>

            {/* Stepper de 5 hitos (datos de tu CV). En desktop es horizontal, en móvil vertical. */}
            <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
              {[
                { title: "CFGS DAW — Escola Ginebró", years: "2019–2021" },
                { title: "Desarrollador Front-End — Mproducts", years: "2019" },
                { title: "CFGS ASIR — Institut Lliçà d’Amunt", years: "2022–2023" },
                { title: "Bootcamps (Full-Stack / Ciber & EH)", years: "2023–2024" },
                { title: "CETI Ciberseguridad — Monlau FP", years: "2024–2025" },
              ].map((s, idx, arr) => (
                <div key={s.title} className="relative flex items-start md:flex-1">
                  {/* Conector horizontal (solo en desktop y salvo el último) */}
                  {idx < arr.length - 1 && (
                    <div className="absolute left-6 top-5 hidden h-[2px] w-[calc(100%-1.5rem)] bg-white/10 md:block" />
                  )}

                  {/* Punto con halo neón */}
                  <div className="mt-1 mr-4 grid size-4 place-items-center rounded-full ring-neon bg-[--color-neon]/20">
                    <div className="size-2 rounded-full bg-[--color-neon]" />
                  </div>

                  {/* Texto del hito */}
                  <div className="space-y-1">
                    <div className="text-sm uppercase tracking-wider text-white/60">{s.years}</div>
                    <div className="text-lg font-semibold">{s.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini-experiencia (2 tarjetas rápidas) */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="glass rounded-2xl p-4">
                <div className="text-sm uppercase tracking-wider text-white/60">2020–2021</div>
                <div className="font-semibold">Técnico Informático & Desarrollador Web — La Granja / Ability Training Center</div>
                <ul className="mt-2 list-disc pl-5 text-white/70">
                  <li>Gestión de 2 sitios (WordPress/Wix).</li>
                  <li>Soporte HelpDesk hardware/software.</li>
                  <li>Gestión de proyectos de alta prioridad.</li>
                </ul>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-sm uppercase tracking-wider text-white/60">2019</div>
                <div className="font-semibold">Front-End — Mproducts</div>
                <ul className="mt-2 list-disc pl-5 text-white/70">
                  <li>Nuevo sitio en WordPress (ES) desde versión NL.</li>
                  <li>Catálogos y UX e-commerce.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CERTIFICACIONES (pantalla 4) ================= */}
        <section id="certifications" className="h-svh w-full snap-start">
          <div className="container h-full flex flex-col justify-center">
            <Sectiontitle title="Certificaciones" />
            <h2 className="text-4xl md:text-5xl font-bold">Credenciales</h2>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* SC-900 (2024) */}
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="size-5 text-[--color-neon]" />
                  <div>
                    <div className="font-semibold">
                      Microsoft Certified: Security, Compliance and Identity Fundamentals (SC-900)
                    </div>
                    <div className="text-sm text-white/60">2024</div>
                  </div>
                </div>
              </div>

              {/* AZ-900 (2023) */}
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

            {/* CTA para página dedicada de certificaciones */}
            <div className="mt-8">
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

export default Home;
