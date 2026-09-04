# Edson Alexandre Advogados — Design System

Design system de **Edson Alexandre Advogados**, escritório de advocacia em Brasília (Águas Claras/DF), e da **EA Processos**, a plataforma interna de administração, acompanhamento e auditoria dos processos judiciais do escritório e de seus clientes — majoritariamente condomínios.

Vai consumir isso a partir de uma aplicação TypeScript/React (ou Next.js)? Veja o [`LIBRARY.md`](LIBRARY.md) para instalação e uso — este arquivo continua sendo a fonte de verdade sobre a marca e os fundamentos de design.

---

## 1. Contexto

### O escritório
- Mais de 14 anos de atuação, com posicionamento em ética e responsabilidade.
- Liderança na **OAB Águas Claras**: presidência da Comissão de Direito Condominial e assento no conselho. É a credencial mais forte do escritório e a raiz de sua especialização.
- Especialidade principal: **Direito Condominial**. Assessoria completa para condomínios (contratos com fornecedores, relação com condôminos, disputas com a construtora, recuperação de crédito / dívidas condominiais).
- Demais áreas de atuação, na ordem em que o site as apresenta: Direito Condominial, Direito Imobiliário, Direito Civil, Direito do Consumidor, Família e Sucessões (inventário), além de Trabalhista e Criminal.
- Também atende remotamente, em todo o Brasil ("Também atendemos online para todo o Brasil").
- Bloco de contato do site: (61) 3021-8539 · edson.alexandre.adv@gmail.com · Rua Copaíba, Lote 1, Torre B, Sala 1910 — DF Century Plaza, Águas Claras/DF · atendimento seg–sex 09h–17h.
- Equipe indicada no site: Dr. Edson Alexandre (Advogado Sócio), Dra. Amanda Pessoa (Advogada Sócia), Emanoela Felício (Recuperação de crédito), Dra. Sarah Holanda, Dr. Leonor Soares, Dr. Paulo Roberto.

### Os produtos que este sistema cobre
1. **Site institucional** — o site público de página única (`ui_kits/site_institucional/`), reconstruído a partir de uma captura de tela da página real.
2. **EA Processos** — a plataforma interna de administração, acompanhamento e auditoria de processos (`ui_kits/plataforma_processos/`). Essa interface **ainda não existe**; foi desenhada aqui a partir dos fundamentos da marca e do fluxo de trabalho descrito pelo escritório (carteiras de condomínios, prazos, movimentações, recuperação de crédito, auditoria).

### Fontes utilizadas
- Uma captura de tela de página inteira do site em produção — a referência visual para a marca.
- Uma imagem com a marca "EA" em laurel, branca sobre navy, 1080×1080.
- Uma descrição do escritório fornecida por Bruno, ponto de contato do projeto.
- Não houve acesso ao código-fonte do site, a um arquivo do Figma, aos binários das fontes ou a um conjunto de ícones. Os valores a seguir foram medidos diretamente na captura de tela (cores amostradas por pixel) ou derivados dela. **O site é uma build em Wix, com crédito para "Value Creative Studio"; acesso a esse projeto substituiria várias das inferências indicadas neste documento.**

---

## 2. Fundamentos de conteúdo

**Idioma.** Português do Brasil, sempre. Nunca misturar inglês em textos voltados ao usuário — nem em termos de interface ("Filtros", nunca "Filters"; "Painel", nunca "Dashboard").

**Pessoa.** O escritório fala na primeira pessoa do plural, **"nós"**, e se dirige ao leitor na segunda pessoa, **"você" / "o seu"**: *"Somos especialistas em Direito Condominial!"*, *"Seu direito é a nossa luta!"*, *"Chegou a hora de assumirmos o seu caso para fazer valer os seus direitos!"*. Nunca "o cliente deve", sempre "você pode".

**Registro.** Formal mas caloroso, e visivelmente mais direto que o marketing jurídico brasileiro típico. As frases são declarativas e completas; o site usa pontos de exclamação em frases curtas de destaque e na linha de abertura, e pontos de interrogação nos cards de dor (*"…condomínios e litígios imobiliários?"*). Os títulos são escritos para um leitor leigo, não para um advogado.

**Estrutura de um bloco persuasivo.** O site repete uma estrutura: uma pergunta ou dor apresentada como título → uma explicação em linguagem simples → uma ação. Por exemplo: *"SE VOCÊ ESTÁ ENFRENTANDO PROBLEMAS DE:"* → os seis cards de área de atuação → *"Chegou a hora de assumirmos o seu caso…"*. Siga esse padrão.

**Prova, não adjetivo.** As afirmações são quantificadas ou credenciadas: *"Há 12 anos defendendo os seus direitos"*, *"mais de 10 anos de experiência"*, *"mais de 95% de causas ganhas na justiça"*, a presidência da comissão na OAB, o bloco de avaliações do Google. Para soar autoridade, cite um número ou o cargo na OAB — não empilhe adjetivos.
- Há uma divergência entre as fontes: o site diz 12 anos, a descrição do escritório diz 14+. Use **"mais de 14 anos"** daqui em diante e mantenha o número em um único lugar.
- Nunca publique um novo índice de sucesso. Reutilize a frase exata que o escritório já aprovou.

**Caixa (maiúsculas/minúsculas).**
- Títulos de seção e linha de abertura: **CAIXA ALTA**, serifada de destaque. *"ASSESSORIA JURÍDICA PARA CONDOMÍNIOS"*.
- Títulos de card: **CAIXA ALTA**, sans-serif em negrito. *"DIREITO DO CONSUMIDOR"*.
- A única exceção deliberada no site é a faixa clara, em **caixa de frase serifada** — *"Também atendemos online para todo o Brasil."* A caixa de frase marca uma mudança de voz; use-a assim, com moderação.
- Corpo de texto: caixa de frase, ponto final em toda frase.
- Botões: caixa de frase, verbo no início, sem ponto final. *"Fale conosco no WhatsApp"*, *"Quero ser atendido por um especialista"*, *"Avaliar"*, *"Enviar"*.

**Emoji.** Nunca. Nem no site, nem na plataforma, nem em apresentações. Os únicos glifos não tipográficos que a marca usa são as marcas do WhatsApp / Facebook / Instagram e um check na lista das três afirmações.

**Texto da plataforma (EA Processos).** Mesmo idioma e formalidade, mas os pontos de exclamação e a persuasão desaparecem — o texto interno é neutro e instrumental. Use o vocabulário real da profissão em vez de termos genéricos de software: *processo*, *movimentação*, *prazo fatal*, *audiência*, *parte contrária*, *vara*, *comarca*, *instância*, *petição*, *diligência*, *pasta do cliente*, *inadimplência*, *acordo*, *trânsito em julgado*. Estados vazios dizem o fato e o próximo passo: *"Nenhum prazo nos próximos 7 dias. Cadastre um prazo para acompanhar."* Números, datas e números de processo sempre em formato brasileiro (número CNJ `0000000-00.0000.0.00.0000`, datas `dd/mm/aaaa`, moeda `R$ 1.234,56`).

---

## 3. Fundamentos visuais

### Cor
A paleta é composta por duas cores, e nada além disso: **navy profundo** e **off-white quente**. Não há dourado na marca conforme fornecida — apesar da marca em laurel, ela é renderizada em branco puro. Não adicione dourado, nem um segundo tom de marca.

Amostrado a partir da captura de tela:
| Papel | Valor | Onde aparece |
| --- | --- | --- |
| `--navy-950` `#010C2A` | Fundo da prancheta do logo |
| `--navy-900` `#0F1528` | Fundo da página, hero, rodapé — o campo dominante |
| `--navy-600` `#001D4B` | Barra de navegação superior, preenchimento do CTA primário |
| `--navy-500` `#0B2F5B` | CTA secundário/contornado ("Avaliar") |
| `--stone-200` `#E8E6E6` | Faixa clara, cards de informação, seção de formulário |
| `--stone-0` `#FFFFFF` | Texto sobre navy, cards de avaliação |

O site é **predominantemente escuro**: o navy corre do cabeçalho ao rodapé, e as faixas claras em `#E8E6E6` o interrompem duas vezes, como respiro e como mudança de voz. A plataforma inverte essa proporção — `--surface-page` claro para sessões de trabalho longas, com o navy reservado para a barra lateral, a barra superior e as ações primárias, de forma que os dois produtos ainda se leiam como a mesma marca.

Os tons semânticos (`green`/`amber`/`red`/`info`) são **invenções para a plataforma**, ausentes do site. São deliberadamente dessaturados e um pouco escuros para nunca disputarem atenção com o navy; cada um é entregue como um trio `fg`/`bg`/`border` para os status pills (ver "Adições intencionais").

### Tipografia
Três famílias, todas substituições (ver a ressalva no final):
- **Display — Playfair Display, 700, CAIXA ALTA.** Todo título de seção e a linha de abertura. Didone de alto contraste; o site a define compacta e centralizada. O `letter-spacing` fica perto de 0 — a caixa alta já faz o trabalho.
- **Logotipo — Cinzel.** A wordmark sob a marca é uma serifada em versalete no estilo Trajano; Cinzel é a correspondência mais próxima. Use-a **somente** para a wordmark quando o lockup em raster não puder ser usado. Nunca para títulos.
- **Sans — Poppins.** Todo o resto: corpo, títulos de card (700, caixa alta), botões, toda a UI da plataforma. O corpo de texto no site é definido em peso **leve (300)** com `line-height: 1.75` generoso, centralizado no contexto de marketing e alinhado à esquerda na plataforma.
- **Mono — JetBrains Mono.** Só na plataforma, para números de processo CNJ, valores e números tabulares (`font-variant-numeric: tabular-nums`). Não é uma fonte de marca; é funcional.

O corpo de texto no site é **centralizado** nas seções de marketing — isso é uma característica real do design, não descuido. Na plataforma, nunca centralize corpo de texto.

### Espaçamento e layout
- Escala base de 4px (`--space-1` … `--space-32`).
- As seções de marketing respiram bastante: ~96px (`--section-y`) de espaçamento vertical, com seções separadas por mudanças de fundo de sangria total em vez de linhas divisórias.
- A coluna de conteúdo tem no máximo 1200px, centralizada, com calhas de 24px. Os blocos de texto de marketing são ainda mais estreitos (~640–720px) para manter o texto centralizado legível.
- A barra de navegação é **fixa** no topo da viewport e é o único elemento fixo do site; os ícones sociais ficam na borda esquerda, os links alinhados à direita em versalete com tracking largo. Na plataforma, a barra lateral (248px) e a barra superior (60px) são ambas fixas, e a área de conteúdo é a única região que rola.
- As grades de card têm 3 colunas no desktop com espaçamento uniforme; o bloco de áreas de atuação é 3×2.

### Cantos, bordas, cards
- Os raios são pequenos e contidos: `--radius-md: 10px` para os cards de área de atuação do site, `--radius-sm: 6px` para superfícies e campos da plataforma, `--radius-xs: 3px` para pílulas-que-não-são-pílulas, `--radius-pill` só para status pills e avatares. Nada no site é fortemente arredondado.
- Cards do site: preenchimento claro `#E8E6E6`, **sem borda**, uma sombra suave e escura (`--shadow-card-site`) que só se percebe porque estão sobre o navy. Os cards de avaliação são brancos puros sobre navy, com o mesmo tratamento.
- Cards da plataforma: preenchimento branco, **borda de 1px `--border-subtle`**, `--shadow-xs`. Em fundos claros, a marca prefere uma borda fina a uma sombra; a sombra é um sussurro, nunca um destaque.
- Botões: o primário é um retângulo navy sólido em `--radius-sm`. O botão secundário do hero é um **contorno branco de 1px sobre navy, com preenchimento transparente** — esse tratamento de contorno sobre fundo escuro é a assinatura do secundário da marca. Nada é uma pílula arredondada, exceto os status pills.

### Elevação e sombras
Dois sistemas, escolhidos pelo fundo: sobre navy, uma sombra escura e difusa (`--shadow-card-site`) separa os cards claros; sobre fundo claro, bordas finas somadas a `--shadow-xs`/`--shadow-sm` fazem esse trabalho. `--shadow-md`/`--shadow-lg` são só para camadas genuinamente flutuantes (dropdown, dialog). Não há sombras internas na marca; `--shadow-inset-field` existe apenas como uma sugestão sutil de profundidade nos campos da plataforma e pode ser omitida.

### Transparência, blur, gradientes de proteção
Usados com moderação. A transparência aparece como texto e bordas em branco-alfa sobre navy (`--text-on-inverse-muted`, `--border-inverse`) — esse é o principal mecanismo de hierarquia sobre fundo escuro. `--surface-overlay` (navy a 62%) serve de fundo para diálogos. Um véu de blur (`--blur-veil`) está disponível para uma barra navy fixa sobre conteúdo, mas o site não o usa. As fotografias da equipe ficam em retângulos de bordas retas, sem gradiente de proteção; use `--protect-gradient` somente se um texto precisar ficar sobre uma imagem.

### Imagens
Fotografia real de pessoas reais, em **luz fria com viés de navy** — ternos escuros, interiores navy/cinza, iluminação de escritório em tom baixo. Sem granulado, sem duotone, sem ilustração, sem abstrações de banco de imagens, nada desenhado à mão. A fileira da equipe é um carrossel horizontal de retratos recortados em pé (aproximadamente 3:4), com o nome da pessoa em sans-serif negrito e o cargo em sans-serif pequeno e discreto abaixo. Não há ilustrações nem grafismos de ícone na marca, então este sistema não contém nenhum.

### Movimento
Contido e confiante. Fades de revelação ao rolar, com uma leve elevação (`--transition-reveal`, 600ms `--ease-out`) nas seções de marketing; transições de cor de 150ms nos controles. Sem quiques, sem molas, sem parallax, sem animação em loop. O carrossel da equipe desliza horizontalmente em `--dur-slow`.

### Estados de interação
- **Hover, botão sólido:** escurece um degrau de navy (`--navy-600` → algo como `--navy-700`) — nunca clareia, nunca escala.
- **Hover, botão contornado sobre fundo escuro:** o contorno se preenche de branco e o rótulo inverte para navy.
- **Hover, link ghost/de navegação:** o rótulo passa de `--text-on-inverse-muted` para branco pleno; links em contextos claros ganham sublinhado com deslocamento de 3px.
- **Hover, linha de tabela / item de lista:** fundo muda para `--surface-hover`.
- **Pressionado:** mais um degrau mais escuro e `transform: translateY(1px)`. Sem encolher, sem ripple.
- **Foco:** `--ring-focus` (navy-400 a 28%, 3px) sobre fundo claro, `--ring-focus-inverse` sobre navy. Sempre visível; nunca removido.
- **Desabilitado:** opacidade de 45%, `cursor: not-allowed`, sem mudança de cor.
- **Selecionado (plataforma):** preenchimento `--surface-selected` mais um marcador navy de 2px à esquerda nos itens da barra lateral.

---

## 4. Iconografia

**A marca, conforme fornecida, não contém um conjunto de ícones.** Os únicos glifos no site são marcas sociais de terceiros (WhatsApp, Facebook, Instagram) e um check na lista das três afirmações.

Abordagem adotada aqui:
- **Lucide** (via CDN, `lucide@0.451.0`) é usado como o conjunto de ícones da plataforma — **é uma substituição sinalizada**, escolhida porque seu traço monolinear de 1,5–2px, terminações quadradas e grade de 24px são a combinação mais próxima da sensação contida e sem ornamentos do site. Os ícones renderizam em 16px (inline/UI), 18px (barra lateral, botões) e 20px (cabeçalhos de página) com `stroke-width: 1.75`, sempre `currentColor`, nunca preenchidos, nunca multicoloridos.
- **As marcas sociais** vêm do mesmo conjunto Lucide para WhatsApp/Facebook/Instagram, em vez dos SVGs oficiais de marca, já que nenhum foi fornecido. Para produção, use as marcas oficiais do kit de marca de cada plataforma.
- **Os glifos de marca são um risco conhecido.** O Lucide depreciou seus ícones de marca; `facebook` / `instagram` podem deixar de resolver em uma versão futura, e `message-circle` já substitui o WhatsApp. O componente `Icon` desenha um anel de placeholder discreto para qualquer nome não resolvido, para que a lacuna fique visível em vez de silenciosa. **Para produção, use as marcas oficiais do WhatsApp / Facebook / Instagram do kit de marca de cada plataforma.**
- **Nunca emoji.** Nenhum símbolo unicode substituindo ícone (nada de ✓ ★ → no texto) — a única exceção é o check na lista das três afirmações do site, que é um ícone, não um caractere.
- **Nenhum SVG desenhado à mão.** Se um pictograma necessário não existir no Lucide, use tipografia ou uma fotografia em vez de inventar um glifo.
- Ícones sempre vêm acompanhados de um rótulo de texto na plataforma, exceto em botões de barra de ferramentas só-com-ícone, que exigem `title`/`aria-label`.

---

## 5. Adições intencionais

Tudo aqui que não tem correspondente nas fontes fornecidas, e por quê:
- **Trios de cor semântica** (`--status-ok/warn/risk/info/neutral`) — a plataforma precisa expressar urgência de prazo e desfecho de processo; o site não tem essa necessidade.
- **Papel de tipo mono** (JetBrains Mono) — números de processo CNJ e colunas monetárias precisam de números tabulares.
- **`--font-logotype` (Cinzel)** — um fallback em texto para a wordmark; o lockup em raster é preferido.
- **Conjunto de ícones Lucide** — ver Iconografia.
- **Todo o kit de UI da EA Processos** — a plataforma ainda não existe; suas telas são uma proposta construída a partir dos fundamentos da marca somados ao fluxo de trabalho descrito pelo escritório, não uma reconstrução. Trate como um design a revisar, não como referência definitiva.

## 6. Ressalvas

- **As fontes são substituições.** Nenhum binário foi fornecido. Playfair Display (display), Cinzel (logotipo) e Poppins (corpo/UI) são aproximações do Google Fonts, identificadas a partir de uma captura de tela; o site real é uma build em Wix e pode usar fontes licenciadas. Solicite os arquivos de fonte ou os nomes das fontes usadas no Wix.
- **O logo foi extraído de raster, não de vetor.** `assets/logo-mark-white.png` e `assets/logo-lockup-white.png` foram produzidos isolando o fundo navy do JPEG/captura de tela fornecidos. São utilizáveis em tamanhos moderados, mas perdem nitidez ao serem ampliados. **Um logo vetorial (SVG/AI/EPS) seria uma melhoria real.**
- **As fotos da equipe** em `assets/team/` são recortes de baixa resolução da captura de tela, adequadas apenas como placeholder.
- O conteúdo de marketing do site foi lido a partir de uma captura de tela; uma varredura ao vivo do site real (ou do projeto no Wix) confirmaria o texto exato, o comportamento de hover e as animações.

---

## 7. Índice

| Caminho | O que é |
| --- | --- |
| `styles.css` | O único ponto de entrada que os consumidores importam. Só uma lista de `@import`. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css` |
| `assets/` | `logo-mark-white.png`, `logo-mark-navy.png`, `logo-lockup-white.png`, `logo-lockup-navy.png`, `team/*.png` |
| `guidelines/` | Cards de especificação dos fundamentos (Cores, Tipo, Espaçamento, Marca) |
| `components/core/` | `Icon`, `Button`, `IconButton`, `Card`, `Badge`, `StatusPill`, `Tag` |
| `components/forms/` | `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `FieldLabel` |
| `components/navigation/` | `SidebarNav`, `TopBar` (+ `TopBarSearch`), `Tabs`, `Breadcrumb` |
| `components/data/` | `DataTable` (+ `SortHeader`), `MetricCard`, `Timeline`, `EmptyState` |
| `components/feedback/` | `Alert`, `Toast` (+ `ToastStack`), `Dialog`, `Tooltip` |
| `components/brand/` | `Logo`, `SectionTitle`, `PracticeCard`, `TeamCard` |
| `ui_kits/plataforma_processos/` | EA Processos — login, painel, processos, prazos, condomínios, detalhe, auditoria (clicável) |
| `ui_kits/site_institucional/` | Reconstrução do site público (10 seções, um arquivo) |
| `src/` | Biblioteca TypeScript/React publicável — ver [`LIBRARY.md`](LIBRARY.md) |

### Usando os componentes

Para uma aplicação TypeScript/React real, instale o pacote e importe os componentes normalmente — ver [`LIBRARY.md`](LIBRARY.md) para instalação, uso e as decisões de arquitetura por trás da biblioteca.

O diretório `components/` também guarda uma versão dos mesmos componentes em JSX puro, pensada para protótipos HTML rápidos sem etapa de build — útil para mockups soltos, mas não é o caminho recomendado para um produto real.

Nenhum modelo de slide foi fornecido, então este sistema não contém slides de exemplo. Peça uma apresentação ao escritório se precisar de layouts para isso.
