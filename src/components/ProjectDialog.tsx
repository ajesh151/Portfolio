import { Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line/60 pt-4">
      <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-2">{label}</h4>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-sm border-line bg-card p-0 sm:rounded-sm">
        {project && (
          <>
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1024}
              height={640}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-6 md:p-8">
              <DialogHeader className="text-left">
                <DialogTitle className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {project.name}
                </DialogTitle>
                <DialogDescription className="leading-relaxed">
                  {project.summary}
                </DialogDescription>
              </DialogHeader>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-sm border border-line px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-4">
                <Block label="Overview">{project.overview}</Block>
                <Block label="Problem">{project.problem}</Block>
                <Block label="Solution">{project.solution}</Block>
                <Block label="My Role">{project.role}</Block>
                <Block label="Key Features">
                  <ul className="list-inside list-disc space-y-1">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </Block>
                <Block label="Challenges">{project.challenges}</Block>
                <Block label="What I Learned">{project.learned}</Block>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[13px]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-sm border border-line px-4 py-2.5 text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Github className="size-3.5" aria-hidden="true" /> GitHub Repository
                  </a>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-accent-foreground transition-colors hover:bg-accent-2"
                  >
                    Live Demo <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="font-mono text-[12px] text-muted-foreground">
                    Live demo not available
                  </span>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
