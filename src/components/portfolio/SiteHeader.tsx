import { profile } from "./data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-panel backdrop-blur-xl">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-foreground font-display text-sm font-semibold text-background">
            {profile.initials}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Radebe
          </span>
        </a>
        <nav className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden transition-colors hover:text-foreground sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a href="#experience" className="transition-colors hover:text-foreground sm:hidden">
            Experience
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground sm:hidden">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
