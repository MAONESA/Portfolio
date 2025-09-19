// src/components/Avatar.jsx
export default function Avatar({ name, src, size = 50, className = "" }) {
  const initials = (name || "")
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={[
        "rounded-full ring-1 ring-white/10 overflow-hidden grid place-items-center bg-white/10",
        className,
      ].join(" ")}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-[11px] font-semibold text-white/90">{initials}</span>
      )}
    </div>
  );
}
