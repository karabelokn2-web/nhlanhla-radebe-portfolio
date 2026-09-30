import { useEffect, useState } from "react";
import { profile } from "./data";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function linkClass(active: boolean) {
  return `transition-colors ${active ? "text-foreground" : "hover:text-foreground"}`;
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-5"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-5"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      const probe = 140;
      let current = "top";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= probe) current = section.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = sections[sections.length - 1]?.id ?? current;
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-panel backdrop-blur-xl">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:items-center sm:justify-between">
        <div className="mx-auto w-full max-w-3xl px-5 py-3 sm:flex sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center justify-between">
            <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Back to top">
              <img
                src={profile.photoUrl}
                alt={profile.photoAlt}
                width={36}
                height={36}
                className="size-9 shrink-0 rounded-lg border border-border object-cover object-top shadow-sm"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Radebe
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent sm:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                className={linkClass(active === link.href.slice(1))}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="grid border-t border-border bg-panel-strong backdrop-blur-xl sm:hidden"
        >
          <ul className="mx-auto w-full max-w-3xl px-5 py-2">
            {links.map((link) => (
              <li key={link.href} className="border-b border-border/60 last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href.slice(1) ? "true" : undefined}
                  className={`flex items-center justify-between py-3 font-mono text-xs uppercase tracking-[0.14em] ${linkClass(
                    active === link.href.slice(1),
                  )}`}
                >
                  {link.label}
                  {active === link.href.slice(1) ? (
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
