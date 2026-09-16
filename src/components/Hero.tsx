import { ArrowDownToLine } from "lucide-react";
import profileImage from "@/assets/profileimage.png";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-5 pt-12 pb-12 md:grid-cols-12 md:px-8 md:pt-10">
        <div className="flex flex-col justify-between gap-6 md:col-span-7">
          <div>
            <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.3em] text-accent-2">
              {profile.label}
            </p>
            <h1
              id="hero-heading"
              className="font-display text-[clamp(2.7rem,7vw,6.5rem)] font-extrabold leading-[0.88] tracking-tight"
            >
              Hi,
              <br />
              I&apos;m <span className="text-accent">{profile.firstName}</span>
              <br />
              <span className="text-accent">{profile.lastName}.</span>
            </h1>
            <p className="mt-4 max-w-xl font-display text-2xl font-medium leading-snug md:text-3xl">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{profile.intro}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-sm bg-accent px-6 py-3 font-mono text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-2"
            >
              View My Work
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Download CV <ArrowDownToLine className="size-3.5" aria-hidden="true" />
            </a>
            <div className="ml-0 flex items-center gap-5 font-mono text-[13px] text-muted-foreground sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="duotone grain relative h-[420px] min-h-[360px] overflow-hidden rounded-sm md:h-full">
            <img
              src={profileImage}
              width={800}
              height={1008}
              className="absolute inset-0 size-full object-cover opacity-100 mix-blend-luminosity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
