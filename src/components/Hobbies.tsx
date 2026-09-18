import { hobbies } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Hobbies() {
  if (hobbies.length === 0) return null;

  return (
    <section id="hobbies" aria-labelledby="hobbies-heading" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="06" title="Beyond the Screen - My Hobbies" id="hobbies-heading" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, i) => (
            <Reveal key={hobby.name} delay={i * 60}>
              <div className="h-full rounded-sm border border-line/60 bg-card p-5 transition-colors duration-200 hover:border-accent/50">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{hobby.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {hobby.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
