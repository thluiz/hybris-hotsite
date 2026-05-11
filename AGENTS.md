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
- **Tipografia:** 
  - `Cinzel`: Títulos, logotipos e elementos épicos.
  - `EB Garamond`: Texto de corpo, descrições e citações.
- **Animações:** IntersectionObserver nativo para gatilhos de visibilidade.

## 3. Sistema de Design (Tokens Tailwind)
Use sempre as cores estendidas em `tailwind.config.mjs`:
- `ink`: `#3d2b1f` (Cor principal do texto e elementos escuros).
- `parchment`: `#b09060` (Dourado envelhecido/bronze).
- `gold`: `#d4a840` (Dourado vibrante).
- `cream`: `#f0e8d0` (Fundo claro/papel).
- `card`: `rgba(110,85,42,0.72)` (Fundo de cartões de texto).

## 4. Estrutura de Componentes e Layout
- **Slides:** O site é uma sucessão de seções com a classe `.slide`. Cada seção deve ocupar a tela inteira (ou ser auto-ajustável).
- **Animações de Entrada:** Adicione a classe `.rv` (reveal) aos elementos que devem aparecer quando o slide entra em foco.
- **Delays de Animação:** Use classes de delay customizadas (ex: `d2`, `d3`, `d4`) para criar sequências de aparição.
- **Componentes Reutilizáveis:**
  - `<Lightning />`: Elemento visual de raios (essencial para a atmosfera).
  - `<SlideHeader />`: Cabeçalho padrão de seção.
  - `<Polaroid />`: Para exibir imagens com bordas estilizadas e rotação.

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
src/
  components/
    Lightning.astro     # SVG animado do raio (decorativo/atmosférico)
    Polaroid.astro      # Frame de polaroid — props: src, alt, rotate, width, height
    SlideHeader.astro   # Cabeçalho de slide — props: subtitle, label, sublabel
  layouts/
    Layout.astro        # HTML base, Google Fonts, Intersection Observer scripts
  pages/
    index.astro         # Página única com os 24 slides (fonte principal de conteúdo)
  styles/
    global.css          # Scroll-snap, animações .rv, grain, vignette, nav dots
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
