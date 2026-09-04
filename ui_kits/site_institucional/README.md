# UI kit — Site institucional

Recreation of the firm's public one-page site, built from the supplied full-page screenshot (`uploads/Screenshot 2026-09-03 at 21-02-10 Edson Alexandre Advogados.png`). No source code or Figma file was available, so this is a screenshot-based reconstruction — spacing and type sizes are measured, not copied from source.

## Sections (all in `Sections.jsx`)
`TopNav` · `Hero` · `Areas` (6 practice cards) · `FaixaOnline` (light band) · `Assessoria` · `Avaliacoes` (Google reviews + CTA) · `Equipe` (team row + three claims) · `Formulario` (contact form, submits to a success state) · `Visita` · `Footer`.

## Copy
Taken verbatim from the screenshot wherever legible. Two deliberate edits: "12 anos" → "mais de 14 anos" (per the firm's own description) and the footer year. Review-card text was partially illegible at screenshot resolution and has been paraphrased in the firm's voice — **replace it with the real Google reviews before any public use.**

## Known gaps vs. the original
- The team row is a horizontal carousel on the live site; here it wraps as a static row.
- Review cards are rendered as native cards; the live site embeds Google's own review widget.
- Social marks are Lucide substitutes, not the official WhatsApp/Facebook/Instagram brand SVGs.
- Team photos are low-resolution crops of the screenshot.
