import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="04" title="Education" id="education-heading" />
        </Reveal>

        <Reveal delay={60}>
          <article className="overflow-hidden rounded-sm border border-line bg-card">
            <div className="border-b border-line/60 p-6 md:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-sm border border-accent/40 text-accent"
                  >
                    <GraduationCap className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {education.institution}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
                  </div>
                </div>
                <div className="shrink-0 text-right font-mono text-[12px] text-muted-foreground">
                  <p>{education.period}</p>
                  <p className="mt-1 flex items-center justify-end gap-1.5">
                    <MapPin className="size-3" aria-hidden="true" />
                    {education.location}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
