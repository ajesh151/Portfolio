import { useEffect, useMemo, useState } from "react";
import { Menu, X, Moon, Sun, ArrowDownToLine } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const ids = useMemo(() => navLinks.map((l) => l.href.replace("#", "")), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line/70 backdrop-blur-md transition-colors duration-300",
        scrolled ? "bg-background/90" : "bg-background/60",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a
          href="#home"
          className="min-w-0 truncate font-mono text-[13px] uppercase tracking-[0.22em] hover:text-accent"
        >
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.replace("#", "") ? "true" : undefined}
              className={cn(
                "font-mono text-[13px] transition-colors hover:text-accent",
                active === link.href.replace("#", "")
                  ? "text-accent"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 place-items-center rounded-sm border border-line text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href={profile.resumePath}
            download
            className="hidden items-center gap-2 rounded-sm border border-accent px-4 py-2 font-mono text-[13px] text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:inline-flex"
          >
            Download CV <ArrowDownToLine className="size-3.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-sm border border-line text-muted-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="animate-fade-in border-t border-line/70 bg-background lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 md:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/50 py-3.5 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumePath}
                download
                onClick={() => setOpen(false)}
                className="mt-4 mb-3 inline-flex items-center gap-2 rounded-sm border border-accent px-4 py-2.5 font-mono text-sm text-accent"
              >
                Download CV <ArrowDownToLine className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
