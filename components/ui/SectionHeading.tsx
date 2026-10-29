type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  kicker?: string;
};

/** Compact section header used by every section below the hero. */
export default function SectionHeading({ eyebrow, title, kicker }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-md mt-2">{title}</h2>
      {kicker && <p className="mt-3 text-base leading-relaxed text-muted">{kicker}</p>}
    </div>
  );
}
