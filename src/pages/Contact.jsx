import Sectiontitle from "../components/Sectiontitle";

function Contact() {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Título de la sección */}
      <Sectiontitle title="Contacto" />

      {/* Texto de introducción */}
      <p className="text-gray-300 text-center">
        Si quieres ponerte en contacto conmigo, puedes enviarme un mensaje aquí.
      </p>
    </section>
  );
}

export default Contact;
