# Hybris World — Hotsite

![Hybris World](https://img.shields.io/badge/Hybris-World-3d2b1f?style=for-the-badge&labelColor=b09060)

Hotsite institucional para o **Hybris World**, propriedade intelectual original da **Metron**. Um projeto crossmídia onde a mitologia greco-romana encontra a realidade contemporânea.

---

## O Projeto

> *No grego antigo, Hybris era o orgulho ou insolência diante dos deuses. O exagero da sua melhor qualidade. O erro de medida que levava o herói à sua própria ruína.*

**Hybris World** reinterpreta os grandes mitos greco-romanos no mundo contemporâneo, idealizado por **Julio Camacho** em parceria com o especialista em mitologia **Guilherme Schlogel**.

- **Deuses** são bilionários e líderes globais — seus poderes sobrenaturais substituídos por fortunas e influência política.
- **Mortais** enfrentam dilemas cotidianos, alheios às forças que os manipulam.
- Apenas o público enxerga a sinistra interação entre esses dois arcos narrativos.

### Gênero

Drama Épico Contemporâneo — emocionalmente intenso, sofisticado e visualmente marcante, combinando:

- Intriga Política (jogos de poder e conspirações)
- Suspense Psicológico (dilemas éticos graves)
- Romance Trágico (paixões que culminam em destinos inevitáveis)

### Plataformas

O universo Hybris expande-se por:

- Série de TV (5 temporadas × 10 episódios de 50 min)
- Livros Digitais e Audiolivros
- Audiodramas
- HQs / Graphic Novels
- Jogos de Tabuleiro
- Videogames e Animações
- Experiências Imersivas

### Estrutura da Série

5 temporadas com 10 episódios cada, em estrutura **semi-antológica** com dois arcos paralelos:

| Arco | Formato |
|---|---|
| Arco dos Deuses | Trama contínua ao longo de toda a temporada |
| Arco dos Mortais | Novos protagonistas a cada dois episódios |

### Temporada 1 — Mitos e Personagens

| Episódios | Mito | Personagem Principal |
|---|---|---|
| 01–02 | Medusa e Perseu | Theo Makris (Zeus), Melissa Gordon (Medusa), Peter Argson (Perseu) |
| 03 | Andrômeda | Guan Duo Lin (Gaia), Monika Guan (Mnemosine), Andrea (Andrômeda) |
| 04–05 | Midas e Dionísio | Matthew Fletcher (Midas), Dennis Bacelli (Dionísio) |
| 06–07 | Narciso e Eco | Neville Beaumont (Narciso), Anna (Eco), Vanessa (Afrodite) |
| 08–09 | Belerofonte | Benedict Ashvendra (Belerofonte) |
| 10 | Finale | Hayden Makris (Hades) — revelação da temporada |

### Público-Alvo

- 55% masculino / 45% feminino
- Faixa etária: 18–60+
- Renda média-alta
- Interesse em cultura, mitologia e entretenimento sofisticado

---

## Sobre o Hotsite

Página de apresentação única (pitch deck interativo) com 24 slides em scroll-snap, exibindo o projeto para parceiros, investidores e imprensa.

**URL em produção**: https://hybris-hotsite.thluiz.com

### Stack

| Camada | Tecnologia |
|---|---|
| Framework | Astro 4 (saída estática) |
| CSS | Tailwind CSS 3 + CSS customizado |
| Fontes | Cinzel (títulos) · Cormorant Garamond (corpo) · Special Elite (typewriter) |
| Hosting | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |
| Dev tools | Playwright (devDep) — para agentes IA validarem visualmente |

---

## Desenvolvimento

### Pré-requisitos

- Node.js 18+

### Instalação

```bash
npm install
```

### Servidor de desenvolvimento

```bash
npm run dev
# http://localhost:4321 (ou 4323 se a porta estiver ocupada)
```

### Build de produção

```bash
npm run build
```

### Deploy manual (PowerShell)

```powershell
pwsh -NoProfile -File deploy.ps1
```

O script faz build, sincroniza com o S3 e invalida o cache do CloudFront.

### Assets de imagem

Fotos de personagens e cenas em `public/images/` são extraídas do PDF do guia. O fluxo (scripts em `.claude/`, gitignored) está documentado em **AGENTS.md §11**.

### Continuidade do trabalho

`AGENTS.md` é a fonte canônica de design tokens, padrões técnicos, gotchas conhecidos (lightning position, opacidades de texto sobre pergaminho, extração de imagens com labels burnados) e workflow do agente. Releia antes de retomar uma sessão.

---

## Equipes

O projeto conta com 6 departamentos: Direção, Comunicação, Livros Digitais, Audiobooks/Audiodramas, HQs e Jogos de Tabuleiro.

**Criadores**:
- **Julio Camacho** — CCO / Showrunner
- **Guilherme Schlogel** — Especialista em Mitologia

**Contato**: [Metron](mailto:contato@metron.com.br)

---

© 2026 Metron Original IP. Todos os direitos reservados.
