// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Labs from "./pages/Labs";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-black text-white font-sans">
      {/* Navbar fijo */}
      <Navbar />

      {/* Contenido (sin padding global; cada página decide) */}
      <main className="flex-grow">
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

      {/* Footer global SOLO fuera del Home */}
      <Footer />
    </div>
  );
}

export default App;
