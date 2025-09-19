export default function AvatarLinkedIn({
  name,
  src,
  size = 50,             // LinkedIn usa ~48px; dejamos 50px
  ring = true,
}) {
  const initials = name
    ?.split(" ")
    .slice(0, 2)
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="shrink-0 rounded-full overflow-hidden grid place-items-center bg-white/10"
      style={{
        width: size,
        height: size,
        boxShadow: ring ? "0 0 0 1px rgba(255,255,255,.15) inset" : "none",
      }}
      aria-label={name}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="text-xs font-semibold text-white/90">{initials}</span>
      )}
    </div>
  );
}
