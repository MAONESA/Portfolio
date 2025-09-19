// src/components/SectionHeader.jsx
import Sectiontitle from "./Sectiontitle"; // tu subtítulo verde

export default function SectionHeader({ kicker, title, compact = false, className = "" }) {
  return (
    <div className={["mb-8 md:mb-10", className].join(" ")}>
      <Sectiontitle title={kicker} />
      {!compact && (
        <h2 className="mt-2 text-4xl md:text-5xl font-bold">{title}</h2>
      )}
    </div>
  );
}
