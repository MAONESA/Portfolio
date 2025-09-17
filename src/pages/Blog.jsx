import Sectiontitle from "../components/Sectiontitle";

function Blog() {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Título de la sección */}
      <Sectiontitle title="Blog" />

      {/* Texto de introducción */}
      <p className="text-gray-300 text-center">
        Publicaciones y artículos sobre ciberseguridad, desarrollo web y mis experiencias.
      </p>
    </section>
  );
}

export default Blog;
