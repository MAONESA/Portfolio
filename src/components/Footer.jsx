import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Marca */}
        <Link to="/" className="text-green-400 font-semibold tracking-wide hover:text-green-300 transition">
          David Sandoval
        </Link>

        {/* Socials */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/MAONESA"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-green-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-green-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:david@tu-dominio.com"
            className="text-white/80 hover:text-green-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
