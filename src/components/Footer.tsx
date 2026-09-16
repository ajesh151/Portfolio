import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 font-mono text-[12px] text-muted-foreground">
            {profile.label} · {profile.university} · {profile.location}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav aria-label="Footer" className="flex items-center gap-5 font-mono text-[13px]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              Email
            </a>
          </nav>
          <p className="font-mono text-[11px] text-muted-foreground/70">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
