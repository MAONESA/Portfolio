import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ScrollDots({ sections }) {
  const [activeSection, setActiveSection] = useState(0);

  // Detecta en qué sección estamos con IntersectionObserver
  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sectionElements).indexOf(entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.6 } // activa cuando el 60% de la sección está visible
    );

    sectionElements.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Scroll suave al hacer clic
  const scrollToSection = (index) => {
    const sectionElements = document.querySelectorAll("section");
    sectionElements[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-50">
      {sections.map((sec, i) => (
        <div key={i} className="relative flex items-center">
          {/* Tooltip siempre visible en activo, en hover también */}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: activeSection === i ? 1 : 0,
              x: activeSection === i ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="absolute right-8 text-sm text-green-400 bg-black px-2 py-1 rounded-md"
          >
            {sec}
          </motion.span>

          {/* Punto */}
          <motion.button
            onClick={() => scrollToSection(i)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              activeSection === i ? "bg-green-400" : "bg-gray-500"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      ))}
    </div>
  );
}

export default ScrollDots;
