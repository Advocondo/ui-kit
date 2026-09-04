# Usando como biblioteca (TypeScript / React / Next.js)

Este documento cobre a camada de **biblioteca** (`src/`, compilada para `dist/` por `tsup`) —
instalação, uso e as decisões de arquitetura por trás dela. Para a marca, os tokens e as
regras de design em si, veja o [`readme.md`](readme.md); ele continua sendo a fonte de
verdade sobre cor, tipografia e voz.

O repositório tem duas camadas independentes que compartilham `tokens/` e `assets/`:

| Camada | Consumida por | Fonte |
| --- | --- | --- |
| Protótipo (pré-existente) | `SKILL.md`, mocks HTML soltos, os `ui_kits/*` clicáveis | `components/**/*.jsx` → `_ds_bundle.js` (Babel no navegador, sem build) |
| Biblioteca (este documento) | Projetos TypeScript/React/Next.js reais | `src/**/*.tsx` → `dist/` (tsup/esbuild) |

Nenhuma delas gera a outra. Um componente novo ou uma correção de bug precisa ser aplicada
**nas duas** se o protótipo continuar em uso — ver "Mantendo as duas camadas em sincronia"
no fim deste arquivo.

## Instalação

O pacote é `private: true` — proposital, os assets (logo, fotos da equipe) são do escritório,
não devem ir para o registro npm público. Instale a partir do repositório Git ou de um
registro privado:

```bash
npm install edson-alexandre-design-system@github:<org>/<repo>
```

`react` e `react-dom` (`^18 || ^19`) são peer dependencies — o projeto consumidor já deve
tê-los. `lucide-react` é uma dependência normal, instalada automaticamente.

## Uso

Importe os componentes do pacote e o CSS de tokens uma vez, no ponto de entrada da aplicação:

```tsx
import 'edson-alexandre-design-system/styles.css';
import { Button, StatusPill } from 'edson-alexandre-design-system';

function Exemplo() {
  return (
    <Button icon="message-circle" onClick={() => {}}>
      Fale conosco no WhatsApp
    </Button>
  );
}
```

**Next.js (App Router).** Todo componente já é marcado `'use client'` no build publicado —
pode ser importado direto em uma Server Component sem erro de boundary. Importe o CSS em
`app/layout.tsx`:

```tsx
// app/layout.tsx
import 'edson-alexandre-design-system/styles.css';
```

**Vite / CRA / outro bundler.** Mesma coisa — importe o CSS uma vez no entry point
(`main.tsx`, `App.tsx`) e os componentes onde forem usados.

**Assets** (logo, fotos da equipe) não passam pelo bundle JS — `Logo`, `TeamCard` etc.
recebem uma URL. Copie `assets/` para a pasta pública do seu projeto consumidor (`public/`
no Next.js/Vite) e aponte `base`/`photo` para lá:

```tsx
<Logo variant="lockup" height={72} base="/design-system/assets/" />
```

## Scripts

```bash
npm run build       # tsup — gera dist/ (ESM + CJS + .d.ts)
npm run dev          # tsup --watch
npm run typecheck    # tsc --noEmit
npm run lint         # oxlint -c _adherence.oxlintrc.json src
```

## Decisões de arquitetura

**Um `.tsx` por componente, não `.jsx` + `.d.ts` separados.** O protótipo mantém os dois
arquivos apartados porque era mais simples de gerar; numa fonte TypeScript real isso é
redundante — o tipo *é* o código. Cada `src/**/*.tsx` declara sua própria `interface
*Props`, e `tsup` gera o `.d.ts` publicado a partir dela. Os textos de `*.prompt.md` viraram
blocos `@example` no JSDoc do componente (aparecem no hover do editor).

**Toda prop estende o atributo HTML nativo do elemento raiz.** O `.d.ts` do protótipo listava
só as props explícitas; como a implementação sempre espalhava `{...rest}` no elemento DOM,
qualquer atributo nativo (`id`, `data-*`, `aria-*`, `onFocus`...) já passava por baixo do
radar de tipos. Cada componente agora estende `HTMLAttributes<...>`/`ButtonHTMLAttributes<...>`
etc. do elemento certo, com `Omit` nos pontos onde uma prop nossa colide com um atributo
nativo de mesmo nome (`SidebarNav`/`Tabs.onSelect` vs. o evento DOM `onSelect`; `TopBar.title`
vs. o atributo de tooltip `title`) — esses três casos só apareceram rodando `tsc`, não eram
óbvios de antemão.

**`Icon` usa `lucide-react`, não mais `window.lucide`.** O protótipo carrega o Lucide via
CDN (`<script src="unpkg.com/lucide">`) e lê `window.lucide.icons` em runtime — funciona sem
build, mas depende de um global carregado assincronamente (por isso o protótipo tinha dois
estados de "não resolvido": ainda carregando vs. nome inexistente). Numa biblioteca instalada
via npm, `lucide-react` resolve no import, então esse primeiro estado desaparece — só resta
"nome existe" vs. "nome não existe" (placeholder). A API pública não muda: continua
`<Icon name="kebab-case">`.

`lucide-react` expõe `icons` (mapa completo, síncrono — usado aqui) e `DynamicIcon` de
`lucide-react/dynamic` (assíncrono, só baixa o ícone usado). Optou-se por `icons`: síncrono,
sem estado de carregamento, comportamento idêntico ao do protótipo — razoável para uma
plataforma administrativa interna, onde tamanho de bundle importa menos que simplicidade. Se
isso um dia pesar no bundle de um consumidor, trocar a implementação de
`src/components/core/Icon.tsx` para `DynamicIcon` é uma mudança isolada — a assinatura
pública (`name`, `size`, `strokeWidth`) não precisa mudar.

**`'use client'` sobrevive ao bundle de um jeito não óbvio.** Cada `src/**/*.tsx` carrega sua
própria diretiva `'use client'` (documentação, e correta caso algum dia alguém consuma os
fontes sem build). Mas ao mesclar todos os módulos num único `dist/index.{js,cjs}`, uma
diretiva só é válida como a primeira instrução literal do arquivo — o `esbuild` (usado pelo
`tsup`) descarta qualquer diretiva que não esteja nessa posição, e também recusa injetá-la via
`banner` quando o build faz bundling ("Module level directives cause errors when bundled") —
isso foi confirmado testando de verdade contra `tsup 8.5.1`/`esbuild`, não presumido da
documentação. A solução em `tsup.config.ts` é um hook `onSuccess` que roda depois do build e
prefixa `'use client';` na primeira linha existente de `dist/index.js` e `dist/index.cjs` —
sem inserir uma linha nova, então os sourcemaps continuam válidos para todo o arquivo, exceto
o mapeamento de coluna da própria linha 1 (um `import`, nunca alvo de breakpoint).

**`private: true` no `package.json`.** Bloqueia `npm publish` para o registro público por
engano. Os assets embutidos (logo, fotos da equipe) pertencem ao escritório — se algum dia
fizer sentido publicar publicamente, isso precisa ser uma decisão explícita, não um acidente.

## Verificação

Antes de cada commit que toca `src/`, rodar (nessa ordem, todos precisam passar limpo):

```bash
npm run typecheck   # tsc --noEmit
npm run build        # tsup — confirma que o bundle final também compila/gera .d.ts
```

Não há test runner configurado ainda. A verificação atual é `tsc --noEmit` + `tsup build` +
uma renderização de todos os componentes via `react-dom/server` (script ad-hoc, não
commitado) confirmando que nenhum lança exceção e que o fallback de ícone não resolvido
funciona — considerar formalizar isso como um script `npm test` com Vitest, se o projeto
crescer.

## Mantendo as duas camadas em sincronia

Uma mudança visual ou de comportamento em `src/components/**/*.tsx` **não** se reflete em
`_ds_bundle.js`/`components/**/*.jsx` (usados por `SKILL.md` e pelos `ui_kits/*` clicáveis),
e vice-versa — são duas implementações independentes do mesmo design. Ao corrigir um bug ou
mudar uma prop, aplicar dos dois lados, ou anotar explicitamente qual camada ficou
desatualizada.
