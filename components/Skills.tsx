import SectionHeading from "@/components/ui/SectionHeading";
import { accents } from "@/lib/accent";
import { skills } from "@/data/story";

export default function Skills() {
  return (
    <section id="skills" className="section-y relative">
      <div className="container-x">
        <SectionHeading eyebrow="Toolkit" title="Skills" />

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g) => {
            const a = accents[g.accent];
            return (
              <li key={g.name} className="relative overflow-hidden rounded-2xl border border-line bg-paper p-5 shadow-card">
                <span className={`absolute inset-x-0 top-0 h-1 ${a.bg}`} aria-hidden />
                <h3 className="font-display text-lg tracking-tight">{g.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className={`rounded-full px-3 py-1 text-sm font-medium ${a.soft} ${a.text}`}>
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
