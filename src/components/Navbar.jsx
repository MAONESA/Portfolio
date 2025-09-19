import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

/* Iconos mínimos (sin dependencias) */
function IconMenu({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function IconClose({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del body cuando el panel móvil está abierto
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const NavLinks = ({ onClick }) => (
    <>
      <Link to="/"              onClick={onClick} className="hover:text-green-400 transition">{t("home")}</Link>
      <Link to="/projects"      onClick={onClick} className="hover:text-green-400 transition">{t("projects")}</Link>
      <Link to="/labs"          onClick={onClick} className="hover:text-green-400 transition">{t("labs")}</Link>
      <Link to="/certifications"onClick={onClick} className="hover:text-green-400 transition">{t("certifications")}</Link>
      <Link to="/skills"        onClick={onClick} className="hover:text-green-400 transition">{t("skills")}</Link>
      <Link to="/blog"          onClick={onClick} className="hover:text-green-400 transition">{t("blog")}</Link>
      <Link to="/contact"       onClick={onClick} className="hover:text-green-400 transition">{t("contact")}</Link>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-green-400 font-bold text-xl tracking-wide hover:text-green-300 transition">
          David Sandoval
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLinks />
        </div>

        {/* Idioma desktop */}
        <div className="hidden md:flex space-x-2 ml-4">
          <button
            onClick={() => i18n.changeLanguage("es")}
            className="px-3 py-1 text-xs border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition"
          >
            ES
          </button>
          {/* EN opcional */}
        </div>

        {/* Botón móvil */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="md:hidden rounded-md p-2 text-white/90 hover:text-green-400 transition"
        >
          <IconMenu />
        </button>
      </div>

      {/* Panel móvil tipo sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          {/* Sheet */}
          <div className="absolute right-0 top-0 h-full w-[min(85vw,340px)] bg-black/80 backdrop-blur-md border-l border-white/10 p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-semibold">Menú</span>
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)} className="p-2 text-white/90 hover:text-green-400 transition">
                <IconClose />
              </button>
            </div>

            {/* Enlaces grandes, cómodos para el pulgar */}
            <div className="mt-1 flex flex-col gap-3 text-lg font-medium">
              <NavLinks onClick={() => setOpen(false)} />
            </div>

            <div className="mt-auto flex gap-2">
              <button
                onClick={() => { i18n.changeLanguage("es"); setOpen(false); }}
                className="px-3 py-1 text-xs border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
