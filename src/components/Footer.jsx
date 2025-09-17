function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-6">
        <p>
          © {new Date().getFullYear()} <span className="text-green-400">David Sandoval</span> — Portfolio
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">LinkedIn</a>
          <a href="mailto:correo@ejemplo.com" className="hover:text-green-400 transition">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
