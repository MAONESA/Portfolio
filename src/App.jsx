import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Labs from "./pages/Labs";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

// Estructura principal de la app
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Contenido dinámico según la ruta */}
      <main className="flex-grow pt-16 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer abajo */}
      <Footer />
    </div>
  );
}

export default App;
