import { BadgeCheck } from "lucide-react";

export default function CertificationCard({ title, year, href }) {
  const Wrapper = ({ children }) =>
    href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">{children}</a>
    ) : (
      <div>{children}</div>
    );

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <BadgeCheck className="size-5 text-[--color-neon]" />
        <Wrapper>
          <div>
            <div className="font-semibold">{title}</div>
            {year && <div className="text-sm text-white/60">{year}</div>}
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
