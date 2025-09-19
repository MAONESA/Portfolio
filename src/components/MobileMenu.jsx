// src/components/MobileMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
        className="md:hidden rounded-lg border border-green-400 text-green-400 px-3 py-1 text-xs hover:bg-green-400 hover:text-black transition"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md">
          <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between">
            <span className="text-lg font-semibold">Menú</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
            >
              Cerrar ✕
            </button>
          </div>

          <nav className="mt-16 px-6 space-y-5 text-3xl font-semibold">
            <Link onClick={()=>setOpen(false)} to="/projects" className="block hover:text-[--color-neon]">Proyectos</Link>
            <Link onClick={()=>setOpen(false)} to="/labs" className="block hover:text-[--color-neon]">Labs</Link>
            <Link onClick={()=>setOpen(false)} to="/blog" className="block hover:text-[--color-neon]">Blog</Link>
            <Link onClick={()=>setOpen(false)} to="/skills" className="block hover:text-[--color-neon]">Habilidades</Link>
            <Link onClick={()=>setOpen(false)} to="/certifications" className="block hover:text-[--color-neon]">Certificaciones</Link>
            <Link onClick={()=>setOpen(false)} to="/contact" className="block hover:text-[--color-neon]">Contacto</Link>
            {/* Enlaces “extra” */}
            <Link onClick={()=>setOpen(false)} to="/writeups" className="block hover:text-[--color-neon]">Write-ups HTB</Link>
          </nav>
        </div>
      )}
    </>
  );
}
