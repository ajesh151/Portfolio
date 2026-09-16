import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="02" title="Technical Skills" id="skills-heading" />
        </Reveal>
        <Reveal delay={60}>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.category} className="bg-card p-6">
                <h3 className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-accent-2">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-line px-3 py-1 font-mono text-[13px] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
