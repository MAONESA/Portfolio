import Sectiontitle from "../components/Sectiontitle";

function Skills() {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Título de la sección */}
      <Sectiontitle title="Skills" />

      {/* Texto de introducción */}
      <p className="text-gray-300 text-center">
        Aquí muestro las tecnologías y habilidades con las que trabajo día a día.
      </p>
    </section>
  );
}

export default Skills;
