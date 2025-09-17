import Sectiontitle from "../components/Sectiontitle";
import { motion } from "framer-motion";
import ScrollDots from "../components/ScrollDots";

function Home() {
  const sections = ["Hero", "Projects", "Skills", "Contact"];

  return (
    <main className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
      {/* Scroll Dots */}
      <ScrollDots sections={sections} />

      {/* Hero */}
      <section className="h-screen w-screen flex flex-col justify-center items-center snap-start">
        <motion.h1
          className="text-5xl font-bold text-green-400"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          David Sandoval
        </motion.h1>
        <p className="mt-4 text-pink-400">Ciberseguridad & Web Developer</p>
      </section>

      {/* Projects */}
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-gray-900 snap-start">
        <Sectiontitle title="Proyectos" />
        <p className="text-gray-300 max-w-xl text-center">
          Aquí un vistazo rápido a mis proyectos más recientes.
        </p>
      </section>

      {/* Skills */}
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-gray-800 snap-start">
        <Sectiontitle title="Skills" />
        <p className="text-gray-300 max-w-xl text-center">
          Tecnologías y herramientas que domino.
        </p>
      </section>

      {/* Contact */}
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-gray-700 snap-start">
        <Sectiontitle title="Contacto" />
        <p className="text-gray-300">¿Quieres hablar conmigo? Escríbeme aquí.</p>
      </section>
    </main>
  );
}

export default Home;
