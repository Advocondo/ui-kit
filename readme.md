# Edson Alexandre Advogados — Design System

Design system for **Edson Alexandre Advogados**, a Brasília-based law firm (Águas Claras/DF), and for **EA Processos**, the internal platform for administration, monitoring and auditing of the judicial cases tied to the firm and its clients — mostly condominiums.

---

## 1. Context

### The firm
- 14+ years of practice, positioned on ethics and responsibility ("ética e responsabilidade").
- Leadership at **OAB Águas Claras**: presidency of the Comissão de Direito Condominial plus a council seat. This is the firm's single strongest credential and the root of its specialization.
- Core specialty: **Direito Condominial**. Full-service advisory for condominiums (contracts with suppliers, relations with unit owners, disputes with the developer/construtora, credit recovery / dívidas condominiais).
- Other practice areas, in the order the site presents them: Direito Condominial, Direito Imobiliário, Direito Civil, Direito do Consumidor, Família e Sucessões (inventário), plus Trabalhista and Criminal.
- Also serves clients remotely, nationwide ("Também atendemos online para todo o Brasil").
- Contact block from the site: (61) 3021-8539 · edson.alexandre.adv@gmail.com · Rua Copaíba, Lote 1, Torre B, Sala 1910 — DF Century Plaza, Águas Claras/DF · atendimento seg–sex 09h–17h.
- Team named on the site: Dr. Edson Alexandre (Advogado Sócio), Dra. Amanda Pessoa (Advogada Sócia), Emanoela Felício (Recuperação de crédito), Dra. Sarah Holanda, Dr. Leonor Soares, Dr. Paulo Roberto.

### The products this system covers
1. **Site institucional** — the public one-page site (`ui_kits/site_institucional/`). A recreation of the page supplied as a screenshot.
2. **EA Processos** — the internal case administration / monitoring / audit platform (`ui_kits/plataforma_processos/`). This surface does **not** exist yet; it is designed here from the brand's foundations and from the firm's described workflow (condominium portfolios, prazos, movimentações, credit recovery, auditoria).

### Sources given
- `uploads/Screenshot 2026-09-03 at 21-02-10 Edson Alexandre Advogados.png` — full-page screenshot of the live landing page (the design ground truth for the brand).
- `uploads/WhatsApp Image 2026-09-03 at 20.45.45.jpeg` — the "EA" laurel mark, white on deep navy, 1080×1080.
- The firm description pasted in chat by Bruno (quoted above).
- No codebase, no Figma file, no font binaries, no icon set were provided. Everything below was measured off the screenshot (pixel-sampled colours) or derived from it. **The site is a Wix build credited to "Value Creative Studio"; if that project can be shared, it would replace several of the inferences flagged in this document.**

---

## 2. Content fundamentals

**Language.** Brazilian Portuguese, always. Never mix English into user-facing copy — not even for UI words ("Filtros", not "Filters"; "Painel", not "Dashboard").

**Person.** The firm speaks as **"nós"** and addresses the reader as **"você" / "o seu"**. It is a first-person-plural voice with a direct second-person object: *"Somos especialistas em Direito Condominial!"*, *"Seu direito é a nossa luta!"*, *"Chegou a hora de assumirmos o seu caso para fazer valer os seus direitos!"*. Never "o cliente deve", always "você pode".

**Register.** Formal but warm, and noticeably more plainspoken than typical Brazilian legal marketing. Sentences are declarative and complete; the site allows exclamation marks in short claims and hero lines, and question marks in the pain-point cards (*"…condomínios e litígios imobiliários?"*). Titles are written for a lay reader, not a lawyer.

**Structure of a persuasive block.** The site repeats one shape: a question or pain framed as a heading → a plain-language explanation → an action. E.g. *"SE VOCÊ ESTÁ ENFRENTANDO PROBLEMAS DE:"* → the six practice-area cards → *"Chegou a hora de assumirmos o seu caso…"*. Follow it.

**Proof, not adjectives.** Claims are quantified or credentialed: *"Há 12 anos defendendo os seus direitos"*, *"mais de 10 anos de experiência"*, *"mais de 95% de causas ganhas na justiça"*, the OAB commission presidency, the Google reviews block. When you need to sound authoritative, cite a number or the OAB role — do not stack adjectives.
- Note the drift already present in the sources: the site says 12 years, the firm description says 14+. Use **"mais de 14 anos"** going forward and keep the number in one place.
- Never publish a new success-rate figure. Reuse the exact sentence the firm has already approved.

**Casing.**
- Section titles and hero lines: **ALL CAPS**, serif display. *"ASSESSORIA JURÍDICA PARA CONDOMÍNIOS"*.
- Card titles: **ALL CAPS**, bold sans. *"DIREITO DO CONSUMIDOR"*.
- The one deliberate exception on the site is the light band, set in **sentence case serif** — *"Também atendemos online para todo o Brasil."* Sentence case marks a change of voice; use it that way, sparingly.
- Body copy: sentence case, full stops on every sentence.
- Buttons: sentence case, verb-first, no full stop. *"Fale conosco no WhatsApp"*, *"Quero ser atendido por um especialista"*, *"Avaliar"*, *"Enviar"*.

**Emoji.** Never. Not on the site, not in the platform, not in decks. The only non-typographic glyphs the brand uses are the WhatsApp / Facebook / Instagram marks and a checkmark in the three-claim list.

**Platform copy (EA Processos).** Same language and formality, but the exclamation marks and persuasion disappear — internal copy is neutral and instrumental. Use the profession's real vocabulary rather than generic software words: *processo*, *movimentação*, *prazo fatal*, *audiência*, *parte contrária*, *vara*, *comarca*, *instância*, *petição*, *diligência*, *pasta do cliente*, *inadimplência*, *acordo*, *trânsito em julgado*. Empty states state the fact and the next step: *"Nenhum prazo nos próximos 7 dias. Cadastre um prazo para acompanhar."* Numbers, dates and case numbers are always shown in Brazilian format (CNJ number `0000000-00.0000.0.00.0000`, dates `dd/mm/aaaa`, currency `R$ 1.234,56`).

---

## 3. Visual foundations

### Colour
The palette is two colours and nothing else: **deep navy** and **warm off-white**. There is no gold in the brand as supplied — despite the laurel mark, the laurel is rendered in plain white. Do not add gold, and do not add a second brand hue.

Sampled from the screenshot:
| Role | Value | Where it appears |
| --- | --- | --- |
| `--navy-950` `#010C2A` | Logo plate background |
| `--navy-900` `#0F1528` | Page background, hero, footer — the dominant field |
| `--navy-600` `#001D4B` | Top nav bar, primary CTA fill |
| `--navy-500` `#0B2F5B` | Secondary/outlined CTA ("Avaliar") |
| `--stone-200` `#E8E6E6` | Light band, info cards, form section |
| `--stone-0` `#FFFFFF` | Text on navy, review cards |

The site is **dark-dominant**: navy runs from the header to the footer and the light `#E8E6E6` bands interrupt it twice, as breathing room and as a voice change. The platform inverts that ratio — light `--surface-page` for long work sessions, with navy reserved for the sidebar, the top bar and primary actions, so the two products still read as the same brand.

Semantic hues (`green`/`amber`/`red`/`info`) are **inventions for the platform**, absent from the site. They are deliberately desaturated and slightly dark so they never out-shout navy; each ships as a `fg`/`bg`/`border` triple for status pills (see "Intentional additions").

### Typography
Three families, all substitutions (see the caveat at the end):
- **Display — Playfair Display, 700, ALL CAPS.** Every section title and the hero line. High-contrast Didone; the site sets it tight and centred. `letter-spacing` stays near 0 — the caps do the work.
- **Logotype — Cinzel.** The wordmark under the mark is a Trajan-style small-caps serif; Cinzel is the match. Use it **only** for the wordmark when the raster lockup can't be used. Never for headings.
- **Sans — Poppins.** Everything else: body, card titles (700 caps), buttons, all platform UI. Body copy on the site is set **light (300)** at a generous `line-height: 1.75`, centred in the marketing context and left-aligned in the platform.
- **Mono — JetBrains Mono.** Platform only, for CNJ case numbers, values and tabular figures (`font-variant-numeric: tabular-nums`). Not a brand font; a functional one.

Body text on the site is **centred** in marketing sections — that is a real characteristic of the design, not sloppiness. In the platform, never centre body text.

### Spacing & layout
- 4px base scale (`--space-1` … `--space-32`).
- Marketing sections breathe hugely: ~96px (`--section-y`) of vertical padding, with sections separated by full-bleed background changes rather than rules.
- Content column maxes at 1200px, centred, 24px gutters. Marketing copy blocks are narrower still (~640–720px) to keep centred text readable.
- The nav bar is **fixed** to the top of the viewport and is the only fixed element on the site; social icons sit at its left edge, links right-aligned in small caps with wide tracking. In the platform, the sidebar (248px) and top bar (60px) are both fixed and the content area is the only scrolling region.
- Card grids are 3-up on desktop with an even gap; the practice-area block is 3×2.

### Corners, borders, cards
- Radii are small and restrained: `--radius-md: 10px` for the site's practice-area cards, `--radius-sm: 6px` for platform surfaces and fields, `--radius-xs: 3px` for pills-that-aren't-pills, `--radius-pill` only for status pills and avatars. Nothing on the site is heavily rounded.
- Site cards: light `#E8E6E6` fill, **no border**, a soft dark drop shadow (`--shadow-card-site`) that only reads because they sit on navy. Review cards are pure white on navy with the same treatment.
- Platform cards: white fill, **1px `--border-subtle`**, `--shadow-xs`. On light backgrounds the brand prefers a hairline border over a shadow; the shadow is a whisper, never a lift.
- Buttons: primary is a solid navy rectangle at `--radius-sm`. The hero's secondary button is a **1px white outline on navy with a transparent fill** — that outlined-on-dark treatment is the brand's signature secondary. Nothing is a rounded pill except status pills.

### Elevation & shadows
Two systems, chosen by background: on navy, a diffuse dark shadow (`--shadow-card-site`) separates light cards; on light, hairline borders plus `--shadow-xs`/`--shadow-sm` do it. `--shadow-md`/`--shadow-lg` are for genuinely floating layers only (dropdown, dialog). There are no inner shadows in the brand; `--shadow-inset-field` exists only as a 1-value hint of depth on platform inputs and can be left off.

### Transparency, blur, protection gradients
Used minimally. Transparency appears as white-alpha text and borders on navy (`--text-on-inverse-muted`, `--border-inverse`) — that is the main mechanism for hierarchy on dark. `--surface-overlay` (navy at 62%) backs dialogs. A blur veil (`--blur-veil`) is available for a sticky navy bar over content but the site does not use it. Photographs of the team sit as hard-edged rectangles with no gradient scrim; use `--protect-gradient` only if text must land on an image.

### Imagery
Real photography of real people, in **cool navy-leaning light** — dark suits, navy/grey interiors, low-key office lighting. No grain, no duotone, no illustration, no stock abstractions, no hand-drawn anything. The team row is a horizontal carousel of tall portrait crops (roughly 3:4) with the person's name in bold sans and their role in small muted sans below. There are **no** illustrations or icon-spot graphics in the brand, so this system contains none.

### Motion
Restrained and confident. Reveal-on-scroll fades with a slight rise (`--transition-reveal`, 600ms `--ease-out`) for marketing sections; 150ms colour transitions on controls. No bounces, no springs, no parallax, no looping animation. The team carousel slides horizontally at `--dur-slow`.

### Interaction states
- **Hover, solid button:** darken one navy step (`--navy-600` → `--navy-700`-ish) — never lighten, never scale.
- **Hover, outlined-on-dark button:** the outline fills white and the label inverts to navy.
- **Hover, ghost/nav link:** the label goes from `--text-on-inverse-muted` to full white; links in light contexts underline at 3px offset.
- **Hover, table row / list item:** background to `--surface-hover`.
- **Press:** one further step darker and `transform: translateY(1px)`. No shrink, no ripple.
- **Focus:** `--ring-focus` (3px navy-400 at 28%) on light, `--ring-focus-inverse` on navy. Always visible; never removed.
- **Disabled:** 45% opacity, `cursor: not-allowed`, no colour change.
- **Selected (platform):** `--surface-selected` fill plus a 2px navy left marker on sidebar items.

---

## 4. Iconography

**The brand as supplied contains no icon set.** The only glyphs on the site are third-party social marks (WhatsApp, Facebook, Instagram) and a check mark in the three-claim list.

Approach adopted here:
- **Lucide** (CDN, `lucide@0.451.0`) is used as the platform's icon set — **this is a flagged substitution**, chosen because its 1.5–2px monoline stroke, square-ish terminals and 24px grid are the closest match to the site's restrained, unornamented feel. Icons render at 16px (inline/UI), 18px (sidebar, buttons) and 20px (page headers) with `stroke-width: 1.75`, always `currentColor`, never filled, never multicolour.
- **Social marks** are drawn from the same Lucide set for WhatsApp/Facebook/Instagram rather than official brand SVGs, since none were supplied. If you need the official marks for production, pull them from each platform's brand kit.
- **Brand glyphs are a known risk.** Lucide has deprecated its brand icons; `facebook` / `instagram` may not resolve in a future version, and `message-circle` already stands in for WhatsApp. `Icon` draws a faint placeholder ring for any unresolved name so the gap is visible instead of silent. **For production, pull the official WhatsApp / Facebook / Instagram marks from each platform's brand kit.**
- **No emoji, ever.** No unicode symbols standing in for icons (no ✓ ★ → in copy) — the one exception is the checkmark in the site's three-claim list, which is an icon, not a character.
- **No hand-drawn SVG.** If a needed pictogram is absent from Lucide, use type or a photograph instead of inventing a glyph.
- Icons are always paired with a text label in the platform, except in icon-only toolbar buttons, which require a `title`/`aria-label`.

---

## 5. Intentional additions

Everything here that has no counterpart in the supplied sources, and why:
- **Semantic colour triples** (`--status-ok/warn/risk/info/neutral`) — the platform must express prazo urgency and case outcome; the site has no such need.
- **Mono type role** (JetBrains Mono) — CNJ case numbers and monetary columns need tabular figures.
- **`--font-logotype` (Cinzel)** — a text fallback for the wordmark; the raster lockup is preferred.
- **Lucide icon set** — see Iconography.
- **The whole EA Processos UI kit** — the platform does not exist yet; its screens are a proposal built from brand foundations plus the firm's described workflow, not a recreation. Treat it as a design to review, not as ground truth.

## 6. Caveats

- **Fonts are substitutions.** No binaries were provided. Playfair Display (display), Cinzel (logotype), Poppins (body/UI) are Google Fonts approximations read off a screenshot; the real site is a Wix build and may use licensed faces. Please send the font files or the Wix font names.
- **The logo is extracted from raster, not vector.** `assets/logo-mark-white.png` and `assets/logo-lockup-white.png` were produced by keying the navy background out of the supplied JPEG/screenshot. They are usable at moderate sizes but will soften when scaled up. **A vector (SVG/AI/EPS) logo would be a real improvement.**
- **Team photographs** in `assets/team/` are low-resolution crops from the screenshot, adequate as placeholders only.
- The site's marketing content was read from a screenshot; a live crawl of the real site (or the Wix project) would confirm exact copy, hover behaviour and animation.

---

## 7. Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css` |
| `assets/` | `logo-mark-white.png`, `logo-mark-navy.png`, `logo-lockup-white.png`, `logo-lockup-navy.png`, `team/*.png` |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/core/` | `Icon`, `Button`, `IconButton`, `Card`, `Badge`, `StatusPill`, `Tag` |
| `components/forms/` | `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `FieldLabel` |
| `components/navigation/` | `SidebarNav`, `TopBar` (+ `TopBarSearch`), `Tabs`, `Breadcrumb` |
| `components/data/` | `DataTable` (+ `SortHeader`), `MetricCard`, `Timeline`, `EmptyState` |
| `components/feedback/` | `Alert`, `Toast` (+ `ToastStack`), `Dialog`, `Tooltip` |
| `components/brand/` | `Logo`, `SectionTitle`, `PracticeCard`, `TeamCard` |
| `ui_kits/plataforma_processos/` | EA Processos — login, painel, processos, prazos, condomínios, detalhe, auditoria (click-through) |
| `ui_kits/site_institucional/` | Public site recreation (10 sections, one file) |
| `SKILL.md` | Agent Skill entry point |
| `thumbnail.html` | Homepage tile |

### Using the components

Consumers link `styles.css`, load `_ds_bundle.js`, and read components off the window namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="https://unpkg.com/lucide@0.451.0/dist/umd/lucide.min.js"></script>
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, DataTable, StatusPill } = window.EdsonAlexandreAdvogadosDesignSystem_e96c05;
</script>
```

Lucide must be loaded before anything renders an `<Icon>`; without it icons render as reserved empty boxes rather than breaking.

No slide template was supplied, so this system contains no sample slides. Ask the firm for a deck if presentation layouts are needed.
