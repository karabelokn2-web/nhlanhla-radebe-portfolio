<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project Notes

- Portfolio content lives in `src/components/portfolio/data.ts`; section markup lives in `src/components/portfolio/Sections.tsx`. Keep profile, experience, projects, education and leadership facts in `data.ts` rather than hardcoding them into components.
- The CV PDF is served from the Lovable CDN via `src/assets/Nhlanhla-Radebe-CV.pdf.asset.json`; `profile.cvUrl` reads that pointer's `url` and both Download CV anchors use it. Keep the binary out of `public/` — when the CV is replaced, re-create the pointer with `lovable-assets create` and delete the superseded asset.
- Nhlanhla is a Short-Term Insurance / Claims / Customer Support professional, not a software developer. Never add developer-positioned headlines, and keep web skills tied to the portfolio projects.
