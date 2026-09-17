import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/** Renders nothing while the certifications array is empty — no invented content. */
export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="border-t border-line/70"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <Reveal>
          <SectionHeading
            index="05"
            title="Achievements & Certifications"
            id="certifications-heading"
          />
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-sm border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div key={`${cert.title}-${cert.issuer}`} className="bg-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {cert.date}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                {cert.title}
              </h3>
              <p className="mt-1 font-mono text-[13px] text-accent-2">{cert.issuer}</p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-1 font-mono text-[13px] text-accent transition-colors hover:text-accent-2"
                >
                  Credential <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
