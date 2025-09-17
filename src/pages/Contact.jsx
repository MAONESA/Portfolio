import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-center">
      <SectionTitle title="Contacto" />
      <p className="text-gray-400 mt-4">
        Puedes contactarme en <a href="mailto:tuemail@example.com" className="text-green-400 underline">tuemail@example.com</a>
      </p>
    </section>
  );
}

export default Contact;
