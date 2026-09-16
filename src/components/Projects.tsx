import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectDialog } from "@/components/ProjectDialog";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="03" title="Selected Projects" id="work-heading" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-card transition-colors hover:border-accent/60">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`Open details for ${project.name}`}
                  className="block w-full overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-mono text-[11px] text-accent-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <ul className="mb-5 flex flex-wrap gap-x-3 gap-y-1.5">
                    {project.tech.map((t) => (
                      <li key={t} className="font-mono text-[11px] text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-4 font-mono text-[13px]">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-2"
                    >
                      View Project <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Github className="size-3.5" aria-hidden="true" /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-muted-foreground transition-colors hover:text-accent"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
