import { useState } from "react";
import { ArrowDownToLine, ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * No backend: submitting opens the visitor's mail client with the message
 * pre-filled. To send server-side later, replace `handleSubmit` with a call to
 * your email service — the form state shape stays the same.
 */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-sm border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-accent";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="06" title="Let's Connect" id="contact-heading" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <Reveal delay={60} className="md:col-span-5">
            <p className="max-w-md font-display text-xl font-medium leading-snug md:text-2xl">
              Interested in working together, discussing a project, or just connecting? Feel free to
              reach out.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0 text-accent-2" aria-hidden="true" />
                  <span className="break-all font-mono text-[13px]">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Github className="size-4 shrink-0 text-accent-2" aria-hidden="true" />
                  <span className="break-all font-mono text-[13px]">{profile.githubLabel}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Linkedin className="size-4 shrink-0 text-accent-2" aria-hidden="true" />
                  <span className="break-all font-mono text-[13px]">{profile.linkedinLabel}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-accent-2" aria-hidden="true" />
                <span className="font-mono text-[13px]">{profile.location}</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 font-mono text-[13px] text-accent-foreground transition-colors hover:bg-accent-2"
              >
                Download CV <ArrowDownToLine className="size-3.5" aria-hidden="true" />
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-accent hover:text-accent"
              >
                View CV <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-sm border border-line bg-card p-6 md:p-8"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-accent-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-accent-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-accent-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What would you like to talk about?"
                  className={`${field} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-accent px-6 py-3 font-mono text-sm text-accent-foreground transition-colors hover:bg-accent-2 sm:w-auto"
              >
                Send Message
              </button>
              <p className="text-[12px] leading-relaxed text-muted-foreground">
                This form has no server yet — sending opens your own email app with the message
                ready to go.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
