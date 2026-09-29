import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/portfolio/SiteHeader";
import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Leadership,
  Projects,
  Skills,
  SiteFooter,
} from "@/components/portfolio/Sections";

const title = "Nhlanhla Radebe — Short-Term Insurance, Claims & Customer Support";
const description =
  "Portfolio of Nhlanhla Radebe, a Short-Term Insurance, claims administration and customer support professional based in Gauteng, South Africa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/15">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-20 size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-24 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 size-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <SiteHeader />

      <main id="top" className="mx-auto max-w-3xl px-5">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}
