// src/components/AboutAvatar.jsx
import profile from "/reviews/profile.jpg"; // desde public funciona así en Vite
// Si no estuviera en public, usa: import profile from '../assets/profile.jpg';

export default function AboutAvatar(){
  return (
    <div className="hidden md:flex justify-center">
      <div className="relative size-72 rounded-full bg-[--color-graphite] ring-2 ring-white/10 shadow-[var(--shadow-cyan)] overflow-hidden">
        <img
          src={profile}
          alt="David Sandoval"
          className="size-full object-cover"
          onError={(e)=>{ e.currentTarget.style.display='none'; }}
        />
        {/* Fallback sutil si falla la imagen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.06),transparent_55%)]" />
      </div>
    </div>
  );
}
