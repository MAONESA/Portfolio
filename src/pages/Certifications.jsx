import Sectiontitle from "../components/Sectiontitle";

function Certifications() {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Título de la sección */}
      <Sectiontitle title="Certificaciones" />

      {/* Texto de introducción */}
      <p className="text-gray-300 text-center">
        Una colección de mis certificaciones y logros en el área de ciberseguridad y desarrollo.
      </p>
    </section>
  );
}

export default Certifications;
