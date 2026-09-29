import { SectionHeading } from "./SectionHeading";
import { education, experience, leadership, profile, projects, skillGroups } from "./data";

const panel = "rounded-2xl border border-border bg-panel p-5 backdrop-blur-xl";

export function Hero() {
  return (
    <section className="rise pt-14 pb-10">
      <div className="flex items-center gap-4">
        <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-foreground font-display text-2xl font-semibold text-background shadow-sm">
          {profile.initials}
        </span>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            {profile.subheading}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {profile.location}
          </p>
        </div>
      </div>
      <h1 className="mt-7 text-balance font-display text-[2.6rem] leading-[1.02] tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-[46ch] text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        {profile.intro}
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="#experience"
          className="flex items-center justify-center rounded-xl bg-foreground px-5 py-3.5 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
        >
          View My Experience
        </a>
        <a
          href={profile.cvUrl}
          download
          className="flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="rise py-10 [animation-delay:80ms]">
      <SectionHeading index="a" label="About Me" />
      <div className={`mt-5 space-y-4 ${panel}`}>
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="text-pretty text-[15px] leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="rise py-10 [animation-delay:120ms]">
      <SectionHeading index="b" label="Skills" />
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className={panel}>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="rise py-10 [animation-delay:160ms]">
      <SectionHeading index="c" label="Work Experience" />
      <div className="mt-6 space-y-5">
        {experience.map((job) => (
          <div key={job.role} className={`relative ${panel}`}>
            <span className="absolute left-0 top-5 bottom-5 w-px bg-primary/40" />
            <div className="pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold tracking-tight">{job.role}</h3>
                <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden="true" className="text-primary/60">
                      —
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="rise py-10 [animation-delay:200ms]">
      <SectionHeading index="d" label="Projects" />
      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`${panel} transition-transform duration-200 hover:-translate-y-0.5`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {project.kind}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="rise py-10 [animation-delay:240ms]">
      <SectionHeading index="e" label="Education & Certifications" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <div key={item.title} className={panel}>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {item.kind}
            </p>
            <h3 className="mt-2 font-display text-base font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="rise py-10 [animation-delay:280ms]">
      <SectionHeading index="f" label="Leadership" />
      <div className={`mt-5 ${panel}`}>
        <div className="flex flex-wrap gap-2">
          {leadership.map((role) => (
            <span
              key={role}
              className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium"
            >
              {role}
            </span>
          ))}
        </div>
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
          These roles developed my leadership, teamwork, communication and sense of responsibility —
          the same qualities I bring to coordinating claims and supporting customers.
        </p>
      </div>
    </section>
  );
}

const contactRows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, external: false },
  { label: "Location", value: profile.location, href: null, external: false },
  { label: "LinkedIn", value: "nhlanhla-radebe", href: profile.linkedin, external: true },
  { label: "GitHub", value: "karabelokn2-web", href: profile.github, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="rise py-10 [animation-delay:320ms]">
      <SectionHeading index="g" label="Contact" />
      <div className="mt-6 grid gap-3">
        {contactRows.map((row) => {
          const content = (
            <>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {row.label}
              </span>
              <span className="text-right text-sm font-medium break-words">{row.value}</span>
            </>
          );
          const base =
            "flex items-center justify-between gap-4 rounded-xl border border-border bg-panel px-4 py-3.5 backdrop-blur-xl";
          return row.href ? (
            <a
              key={row.label}
              href={row.href}
              {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`${base} transition-transform duration-200 hover:-translate-y-0.5`}
            >
              {content}
            </a>
          ) : (
            <div key={row.label} className={base}>
              {content}
            </div>
          );
        })}
        <a
          href={profile.cvUrl}
          download
          className="mt-2 flex items-center justify-center rounded-xl bg-foreground px-5 py-3.5 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-panel backdrop-blur-xl">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-6">
        <span className="font-mono text-[11px] text-muted-foreground">© 2026 Nhlanhla Radebe</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          Gauteng, ZA
        </span>
      </div>
    </footer>
  );
}
