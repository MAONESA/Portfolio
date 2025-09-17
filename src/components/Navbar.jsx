import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black">
      <h1 className="text-green-400 font-bold text-lg">David Sandoval</h1>
      <nav className="flex space-x-6">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/projects" className="hover:text-green-400">Proyectos</Link>
        <Link to="/contact" className="hover:text-green-400">Contacto</Link>
      </nav>
    </header>
  );
}

export default Navbar;
