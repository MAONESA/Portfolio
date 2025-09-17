import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-green-400 font-bold text-xl tracking-wide hover:text-green-300 transition">
          David Sandoval
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-green-400 transition">{t("home")}</Link>
          <Link to="/projects" className="hover:text-green-400 transition">{t("projects")}</Link>
          <Link to="/labs" className="hover:text-green-400 transition">{t("labs")}</Link>
          <Link to="/certifications" className="hover:text-green-400 transition">{t("certifications")}</Link>
          <Link to="/skills" className="hover:text-green-400 transition">{t("skills")}</Link>
          <Link to="/blog" className="hover:text-green-400 transition">{t("blog")}</Link>
          <Link to="/contact" className="hover:text-green-400 transition">{t("contact")}</Link>
        </div>

        {/* Botones de idioma */}
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => i18n.changeLanguage("es")}
            className="px-3 py-1 text-xs border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition"
          >
            ES
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="px-3 py-1 text-xs border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
