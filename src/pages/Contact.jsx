// src/pages/Contact.jsx (o dentro de tu <section id="contact"> actual)
import { motion } from "framer-motion";
import Sectiontitle from "../components/Sectiontitle";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <section id="contact" className="h-svh w-screen snap-start">
      <div className="container h-full flex flex-col justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: false }}   // ← aparece progresivo al entrar
          transition={{ duration: 0.5 }}
        >
          <Sectiontitle title="Contacto" />
          <p className="text-white/70 max-w-prose">
            ¿Quieres hablar conmigo? Escríbeme aquí.
          </p>

          {/* tu formulario aquí */}
        </motion.div>

        {/* Empuja el footer al borde inferior: */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </section>
  );
}
