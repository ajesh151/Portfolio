import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  const info = [
    { label: "Education", value: profile.university },
    { label: "Degree", value: profile.degree },
    { label: "Location", value: profile.campusLocation },
    { label: "Status", value: profile.status },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="01" title="About Me" id="about-heading" />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={60}>
            <div className="space-y-5">
              {profile.aboutParagraphs.map((p) => (
                <p key={p} className="max-w-[58ch] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line/60 bg-line/60 sm:grid-cols-2 md:grid-cols-1">
              {info.map((item) => (
                <div key={item.label} className="bg-card p-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
