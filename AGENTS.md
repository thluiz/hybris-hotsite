# 🏛️ Hybris World - Guia para Agentes IA

Este documento serve como a "Fonte da Verdade" para agentes de IA que realizam modificações neste projeto. Ele define a identidade visual, padrões técnicos e diretrizes de design do **Hybris World**.

## 1. Contexto do Projeto
**Hybris World** é um projeto crossmídia de drama épico contemporâneo.
- **Conceito:** Mitologia Greco-Romana recontextualizada no presente.
- **Estética:** Sofisticada, dramática, "Premium", com tons de ouro, pergaminho e tinta (ink).
- **Narrativa:** Deuses são bilionários; Mortais são manipulados por forças que não compreendem.

## 2. Stack Tecnológica
- **Framework:** Astro (SSG).
- **Estilização:** Tailwind CSS (Vanilla CSS para efeitos complexos).
- **Tipografia** (definida em `tailwind.config.mjs` → `fontFamily`):
  - `font-cinzel` → **Cinzel**: títulos, logotipos e elementos épicos.
  - `font-garamond` → **Cormorant Garamond**: texto-corpo, descrições e citações. (O PDF usa American Typewriter no corpo, que é proprietária Apple; Cormorant Garamond foi escolhida como Google-Font próxima do estilo das sinopses do PDF.) **Atenção**: Cormorant Regular (400) é muito fina sobre pergaminho — o `body` em `global.css` usa `font-weight: 500` como default. Para textos em destaque, use `600` ou `700`.
  - `font-typewriter` → **Special Elite** (fallback Courier Prime, Courier, monospace): disponível para labels/captions tipo "máquina de escrever". Ainda não usado em nenhum slide; conecte se precisar de um terceiro registro tipográfico.
- **Animações:**
  - `IntersectionObserver` em `Layout.astro` ativa a classe `.rv.visible` quando o slide tem 45%+ visível.
  - **Crossfade scroll-driven** (também em `Layout.astro`): um listener de `scroll` calcula a distância do centro de cada `.slide` ao centro do viewport e seta `--content-opacity` (0..1) no slide. CSS aplica `opacity: var(--content-opacity, 1)` em `.slide > :not(.lightning)`. Resultado: conteúdo do slide saindo desbota enquanto o que entra aparece; o pergaminho de fundo permanece opaco entre slides; lightning mantém seu próprio `bolt-pulse`.
- **Playwright** está em `devDependencies` para que agentes possam validar visualmente o resultado (`node .claude/snap.mjs <slide-id>` é o template — fica em `.claude/`, gitignorado).

## 3. Sistema de Design (Tokens Tailwind)
Use sempre as cores estendidas em `tailwind.config.mjs`:
- `ink`: `#3d2b1f` (Cor principal do texto e elementos escuros).
- `parchment`: `#b09060` (Dourado envelhecido/bronze).
- `gold`: `#d4a840` (Dourado vibrante).
- `cream`: `#f0e8d0` (Fundo claro/papel).
- `card`: `rgba(110,85,42,0.72)` (Fundo de cartões de texto).

### Classes utilitárias em `global.css`
- `.card` — bloco escuro semitransparente com texto cream, usado para sinopses e definições. Use justificado e com `max-width` em torno de 480-680px.
- `.platform-tag` — pill dark para listas de plataforma/categoria sobre pergaminho (slide `projeto`). Garante legibilidade que `border + text-ink/25` não dava.
- `.polaroid` — frame branco com sombra. Use o componente `<Polaroid />` em vez de aplicar manualmente.
- `.hybris-def-slide > .lightning` — variante mais sutil do raio (opacity 0.55, transladado), usada quando o lightning é uma "rachadura no pergaminho" e não o raio dramático da capa.

### Legibilidade sobre pergaminho
- **Não use** `text-ink/55`, `text-ink/60`, `text-ink/75`, `text-ink/80` — Cormorant fica ilegível em ink translúcido sobre `#b09060`.
- Use `text-ink` direto, ou no mínimo `text-ink/85` para labels e `text-ink/90`/`text-ink/95` para corpo.
- Se for um bloco grande de texto sobre pergaminho, considere envolver em `.card` (mesma estética das sinopses do PDF) — slide 2 e várias sinopses fazem isso.

## 4. Estrutura de Componentes e Layout
- **Slides:** O site é uma sucessão de seções com a classe `.slide`. Cada seção ocupa 100vh com `scroll-snap-align: start`.
- **Animações de Entrada:** Adicione a classe `.rv` (reveal) aos elementos que devem aparecer quando o slide entra em foco. Combine com `.fl` / `.fr` / `.fs` para variar a direção da entrada.
- **Delays de Animação:** Use classes de delay customizadas (ex: `d2`, `d3`, `d4`) para criar sequências de aparição.
- **Componentes Reutilizáveis:**
  - `<Lightning />`: Elemento visual de raios (essencial para a atmosfera). **Importante:** o componente usa `class="absolute inset-0"`, e o CSS `.slide > * { position: relative }` sobrescreveria isso — por isso há uma regra explícita `.slide > .lightning { position: absolute; inset: 0; z-index: 1 }` em `global.css`. Se for criar outros elementos que precisam ser `position: absolute` como filhos diretos de `.slide`, adicione regra similar ou use `style="position: absolute"` inline.
  - `<SlideHeader />`: Cabeçalho padrão de seção (HYBRIS logo centralizado + props `subtitle`, `label`, `sublabel`).
  - `<Polaroid />`: Frame branco com sombra para fotos — props: `src`, `alt`, `rotate`, `width`, `height`. Usa `object-fit: cover`, então a foto é cropada para preencher o frame.

## 5. Diretrizes para Modificações de Layout
1. **Preserve a Elegância:** Evite cores vibrantes genéricas (vermelho puro, azul puro). Mantenha-se na paleta de tons terrosos e metálicos.
2. **Tipografia Responsiva:** Use `clamp()` para tamanhos de fonte (ex: `font-size: clamp(2rem, 5vw, 4rem)`).
3. **Imagens:** Use o componente `<Polaroid />` para manter a consistência de "álbum de recordações" ou "investigação".
4. **Espaçamento:** Use `gap` e `padding` generosos. O design deve "respirar".
5. **Acessibilidade:** Certifique-se de que o contraste entre `ink` e os fundos seja legível.

## 6. Fluxo de Trabalho de Modificação
- Ao criar uma nova seção no `index.astro`, adicione o ID correspondente ao array `slides` no frontmatter para que os "Nav Dots" funcionem automaticamente.
- Mantenha o arquivo `index.astro` organizado com comentários de bloco claros entre as seções.

## 7. Estrutura de Arquivos

```
public/
  favicon.svg             # Bolt dourado em fundo ink (32x32 SVG)
  images/                 # Fotos dos personagens/cenas extraídas do PDF — ver §11
src/
  components/
    Lightning.astro       # SVG animado do raio (decorativo/atmosférico)
    Polaroid.astro        # Frame de polaroid — props: src, alt, rotate, width, height
    SlideHeader.astro     # Cabeçalho de slide — props: subtitle, label, sublabel
  layouts/
    Layout.astro          # HTML base, Google Fonts, IntersectionObserver e
                          # scroll-driven crossfade (--content-opacity)
  pages/
    index.astro           # Página única com os 24 slides
  styles/
    global.css            # Scroll-snap, .rv, grain, vignette, nav-dots,
                          # .card, .platform-tag, lightning rules, crossfade
hybris-guide.txt          # Texto extraído do PDF, páginas separadas por
                          # `=== PÁGINA N ===` — versionado, fonte de copywriting
.claude/                  # Scripts auxiliares para agentes (gitignored):
                          # snap.mjs, extract_images.py, render_pages.py, etc.
```

## 8. Deploy e Infraestrutura

- **URL em produção**: https://hybris-hotsite.thluiz.com
- **Hosting**: AWS S3 (`s3://hybris-hotsite-thluiz-com/`) + CloudFront (`E3HQK4XSB8S206`)
- **CI/CD**: GitHub Actions — push em `main` dispara build + sync + invalidação de cache automaticamente

### Deploy manual (PowerShell)
```powershell
pwsh -NoProfile -File deploy.ps1           # build + S3 sync + CloudFront
pwsh -NoProfile -File deploy.ps1 -BuildOnly  # só build local
```

## 9. Referências de Conteúdo

- `hybris-guide.txt` — texto extraído do PDF de apresentação (fonte primária para copywriting dos slides), versionado no repo com páginas separadas por `=== PÁGINA N ===`
- `HYBRIS WORLD PROJECT GUIDE (06MAI26)_compressed.pdf` — PDF original com layout visual completo

> O PDF está no `.gitignore` e **não sobe para o repositório**; o `.txt` extraído é versionado.

## 10. Restrições Importantes

- Não commitar `dist/` — gerado automaticamente pelo CI
- Não commitar `*.pdf` — conteúdo de referência, permanece local
- Não criar rotas dinâmicas — o site é 100% estático (`output: 'static'` no `astro.config.mjs`)
- Não remover `applyBaseStyles: false` do Tailwind — o reset CSS vem do `global.css`

## 11. Imagens em `public/images/`

As fotos de personagens/cenas vêm do PDF (`HYBRIS WORLD PROJECT GUIDE`). O fluxo de extração (scripts disponíveis em `.claude/`):

1. **`.claude/extract_images.py`** — usa PyMuPDF (`pip install pymupdf`) para puxar imagens embarcadas do PDF para `.claude/pdf-images/`, nomeadas `p{página}_x{xref}_{w}x{h}.jpg`.
2. **`.claude/render_pages.py`** — renderiza páginas do PDF como PNG para identificação visual.
3. **`.claude/place_images.py`** — copia/renomeia para `public/images/<nome>.jpg`.

Algumas particularidades aprendidas:
- **Labels burnados:** páginas de "revelação" do PDF (tipo "MIDAS é Matthew Fletcher") têm o label gravado na própria imagem. Foi aceito mantê-los — o usuário confirmou que ficam OK dentro do polaroid frame.
- **Frames pretos:** muitos xrefs únicos por página são polaroid borders/masks vazios (PIL extrai o JPEG cru sem o mask aplicado). Se ao visualizar o arquivo extraído você só vê preto, é um frame decorativo — descarte.
- **Imagens compostas com mask:** algumas (ex: cena Thunderbolt em Emei Shan, página 28) não saem via xref. Solução: **renderizar a página inteira em alta resolução e cropar** a região do polaroid via PIL (`.claude/crop_p28.py` é o template).

Para adicionar uma nova foto:
1. Identifique a página do PDF onde a imagem aparece (use `hybris-guide.txt` ou `render_pages.py` para visualizar).
2. Decida o nome do arquivo em `kebab-case` (ex: `melissa-gordon.jpg`).
3. Coloque em `public/images/` (formato JPG, qualidade ~88, dimensões ~800×1000 para retratos / ~1200×800 para cenas).
4. Referencie no `index.astro` via `<Polaroid src="/images/<nome>.jpg" alt="..." />` ou `<img>` direto.

**Atalho de workflow:** se o usuário tiver a foto já cortada (sem labels ou borders), pode pasterar diretamente na conversa que o agente lê de `C:\Users\conta\.claude\image-cache\<uuid>\<n>.png` e converte para JPG no destino correto.

## 12. Workflow do agente para mudanças visuais

1. **Sempre rode o dev server** em background (`npm run dev`) para hot reload — ele costuma cair em `localhost:4321`, ou `4323` se 4321 estiver ocupada.
2. **Use Playwright** para validar visualmente — `node .claude/snap.mjs <slide-id>` salva screenshot do slide em viewport 1500×820.
3. **Confronte com o PDF original** — `render_pages.py` para gerar a referência ou consulte `hybris-guide.txt` para o texto.
4. **Crossfade entre slides:** ao testar mudanças que dependem do estado em transição, injete `html { scroll-snap-type: none !important }` via Playwright `addStyleTag` para conseguir parar no meio do scroll (template em `.claude/snap-fade.mjs`).
