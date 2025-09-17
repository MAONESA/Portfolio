import Sectiontitle from "../components/Sectiontitle";

function Labs() {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Título de la sección */}
      <Sectiontitle title="Labs" />

      {/* Texto de introducción */}
      <p className="text-gray-300 text-center">
        Espacio donde comparto experimentos y laboratorios de pruebas en ciberseguridad.
      </p>
    </section>
  );
}

export default Labs;
