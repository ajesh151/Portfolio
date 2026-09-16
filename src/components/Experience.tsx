import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-line/70"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="04" title="Experience" id="experience-heading" />
        </Reveal>

        {experience.length === 0 ? (
          <Reveal delay={60}>
            <div className="rounded-sm border border-dashed border-line p-8">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
                No entries yet
              </p>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                Internships, freelance work, open-source contributions, student projects,
                leadership roles and technical community involvement will appear here.
              </p>
            </div>
          </Reveal>
        ) : (
          <ol className="relative border-l border-line pl-6 md:pl-8">
            {experience.map((entry, i) => (
              <li key={`${entry.role}-${i}`} className="relative pb-10 last:pb-0">
                <Reveal delay={i * 80}>
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 -left-[calc(1.5rem+4px)] size-2 rounded-full bg-accent md:-left-[calc(2rem+4px)]"
                  />
                  <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
                    {entry.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                    {entry.role}
                  </h3>
                  <p className="font-mono text-[13px] text-accent-2">{entry.organization}</p>
                  <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
