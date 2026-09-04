# Usando como biblioteca (TypeScript / React / Next.js)

Este documento cobre a camada de **biblioteca** (`src/`, compilada para `dist/` por `tsup`) —
instalação, uso e as decisões de arquitetura por trás dela. Para a marca, os tokens e as
regras de design em si, veja o [`readme.md`](readme.md); ele continua sendo a fonte de
verdade sobre cor, tipografia e voz.

O repositório também guarda uma camada de protótipo mais antiga (`components/**/*.jsx`,
usada para mocks HTML soltos e para os `ui_kits/*` clicáveis) que compartilha `tokens/` e
`assets/` com a biblioteca, mas não gera nem é gerada por ela — são duas implementações
independentes do mesmo design. Uma mudança em um componente `.tsx` não se propaga
automaticamente para o `.jsx` equivalente; ao corrigir um bug ou mudar uma prop, aplicar
dos dois lados se o protótipo continuar em uso.

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
npm run smoke         # renderiza todos os componentes via react-dom/server (scripts/smoke-test.mjs)
```

## Decisões de arquitetura

**Um `.tsx` por componente.** Cada `src/**/*.tsx` declara sua própria `interface *Props` e a
implementação junto — o tipo é o código, não um `.d.ts` mantido à parte. `tsup` gera o
`.d.ts` publicado a partir daí. Exemplos de uso ficam em blocos `@example` no JSDoc de cada
componente, então aparecem no hover do editor.

**Toda prop estende o atributo HTML nativo do elemento raiz.** Cada componente estende
`HTMLAttributes<...>` (ou a variante mais específica — `ButtonHTMLAttributes`,
`InputHTMLAttributes` etc.) do elemento que de fato recebe o `{...rest}`, então qualquer
atributo nativo (`id`, `data-*`, `aria-*`, `onFocus`...) passa com tipos corretos, não só as
props que o componente declara explicitamente. Onde uma prop própria colide com um atributo
nativo de mesmo nome, o tipo nativo é omitido com `Omit<...>` — casos conhecidos:
`SidebarNav`/`Tabs.onSelect` (vs. o evento DOM `onSelect`) e `TopBar.title` (vs. o atributo
de tooltip `title`).

**`Icon` usa `lucide-react`, não um script de CDN.** A API pública não muda —
`<Icon name="kebab-case">` — mas a resolução do nome para o componente SVG agora acontece no
import, de forma síncrona, em vez de depender de um script carregado em runtime.

`lucide-react` expõe `icons` (mapa completo, síncrono — usado aqui) e `DynamicIcon` de
`lucide-react/dynamic` (assíncrono, baixa só o ícone usado). Optou-se por `icons`: síncrono,
sem estado de carregamento — razoável para uma plataforma administrativa interna, onde
tamanho de bundle importa menos que simplicidade. Se isso um dia pesar no bundle de um
consumidor, trocar a implementação de `src/components/core/Icon.tsx` para `DynamicIcon` é
uma mudança isolada — a assinatura pública (`name`, `size`, `strokeWidth`) não muda.

**`'use client'` no topo do build, não em cada arquivo-fonte.** Cada componente já carrega
sua própria diretiva `'use client'`, mas o `esbuild` (usado pelo `tsup`) descarta qualquer
diretiva de módulo que não seja a primeira instrução literal do arquivo — e ao juntar dezenas
de módulos num único `dist/index.{js,cjs}`, nenhuma sobrevive nessa posição. `tsup.config.ts`
resolve isso com um hook `onSuccess` que roda depois do build e prefixa `'use client';` na
primeira linha já existente do arquivo gerado (sem inserir uma linha nova), então os
sourcemaps continuam corretos para o resto do arquivo.

**`private: true` no `package.json`.** Bloqueia `npm publish` para o registro público por
engano. Os assets embutidos (logo, fotos da equipe) pertencem ao escritório — se algum dia
fizer sentido publicar publicamente, isso precisa ser uma decisão explícita, não um acidente.

## Verificação

Antes de publicar uma versão nova, rodar em sequência (todos precisam passar):

```bash
npm run typecheck
npm run build
npm run smoke
```

Não há suíte de testes formal ainda — `smoke` cobre a superfície pública inteira (todo
componente exportado, incluindo o caminho de fallback do `Icon` para um nome não resolvido)
mas não testa comportamento a fundo. Vale considerar migrar para Vitest se o projeto crescer.
