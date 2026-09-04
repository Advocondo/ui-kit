# UI kit — EA Processos (plataforma)

Internal platform for administering, monitoring and auditing the firm's judicial cases and those of its condominium clients.

**This surface does not exist yet.** It is a proposal built from the brand's foundations (extracted from the public site) plus the workflow described by the firm — not a recreation of an existing product. Review it as a design.

## Screens
| File | Screen | Notes |
| --- | --- | --- |
| `Login.jsx` | Acesso | Split navy/light, lockup on the navy half |
| `Painel.jsx` | Painel | Fatal-deadline alert, 4 metrics, nearest prazos, today's movimentações, portfolio, area mix |
| `Processos.jsx` | Processos | Filterable table; search + area select + "prazo aberto" chip are live |
| `Prazos.jsx` | Prazos | Tabs, table, September calendar with marked deadlines |
| `Condominios.jsx` | Condomínios | Client portfolio |
| `ProcessoDetalhe.jsx` | Detalhe do processo | Tabs: movimentações (timeline), documentos, partes, financeiro + summary rail |
| `Auditoria.jsx` | Trilha de auditoria | Immutable log, divergence metric, standing rules |
| `App.jsx` | Shell | SidebarNav + TopBar, routing, "Novo prazo" dialog, toast |
| `data.js` | Fake data | `window.EA_DATA` — condomínios, processos, prazos, movimentações, auditoria |

## Interactions that work
Log in → sidebar navigation → filter the processos table → click a row to open the detail → switch detail tabs → open "Novo prazo" and save (toast) → log out from the sidebar footer.

## Composition
Every control comes from the design system's components (`window.EdsonAlexandreAdvogadosDesignSystem_e96c05`). Nothing is re-implemented locally. Layout is inline styles over the token custom properties.

## Fake data disclaimer
CNJ numbers, condominium names, síndico names and monetary values are invented for demonstration. Team names and the contact details are the real ones published on the firm's site.
