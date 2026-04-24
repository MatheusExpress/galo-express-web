# Ideias de Design - Galo Express

## Design Escolhido: Energia Urbana Dinâmica

### Design Movement
**Modernismo Urbano com Agilidade Cinética** - Inspirado em startups de mobilidade e delivery, com forte presença de movimento e urgência. Referências: Uber, 99, iFood (foco em velocidade e confiabilidade).

### Core Principles
1. **Agilidade Visual** - Cada elemento comunica rapidez através de formas dinâmicas, linhas diagonais e movimento
2. **Confiança Corporativa** - Cores sólidas e tipografia forte transmitem profissionalismo e segurança
3. **Foco em Ação** - CTAs (Call-to-Action) dominantes e claros, guiando o usuário para conversão
4. **Hierarquia Intuitiva** - Informações organizadas por importância, com destaque para motos

### Color Philosophy
- **Vermelho (#EF4444)** - Energia, urgência, movimento. Cor primária que remete a "entrega rápida"
- **Laranja (#FF8C00)** - Calor, otimismo, acessibilidade. Usada em elementos secundários
- **Preto (#1A1A1A)** - Sofisticação, contraste, profissionalismo
- **Branco (#FFFFFF)** - Clareza, espaço respirável, confiança
- **Cinza Escuro (#2D2D2D)** - Texto secundário, fundos neutros

**Intenção Emocional:** Transmitir que a Galo Express é rápida, confiável e moderna. O vermelho cria urgência sem parecer agressivo; o laranja suaviza e humaniza.

### Layout Paradigm
- **Assimétrico com Diagonal** - Usar cortes diagonais e elementos em ângulo para comunicar movimento
- **Seções em Camadas** - Cada seção tem seu próprio "espaço respirável" com padding generoso
- **Destaque para Motos** - Imagens de motos em posição dominante, com efeito de movimento (blur, ângulo)
- **Grid Flexível** - Combina grid para estrutura com elementos flutuantes para dinamismo

### Signature Elements
1. **Ícone do Galo Estilizado** - Logo com linhas dinâmicas, remetendo a movimento e agilidade
2. **Foguete/Raio de Velocidade** - Ícone recorrente para representar rapidez
3. **Cronômetro Circular** - Elemento visual que reforça "entrega em tempo recorde"
4. **Linhas Diagonais** - Divisores e separadores em ângulo para criar dinamismo

### Interaction Philosophy
- **Hover States Agressivos** - Botões mudam cor e ganham sombra ao passar o mouse
- **Transições Suaves** - Animações de 300-400ms para não parecer lenta
- **Feedback Imediato** - Cliques em formulários mostram validação em tempo real
- **Micro-interações** - Ícones animados, contadores de números, progress bars

### Animation
- **Entrada de Elementos** - Fade-in + slide-up com duração de 600ms
- **Hover em Botões** - Scale 1.05 + shadow drop, 200ms
- **Carregamento** - Spinner customizado com cores da marca
- **Scroll Reveal** - Elementos aparecem conforme usuário desce a página
- **Pulsação** - CTA principal tem pulsação sutil para chamar atenção

### Typography System
- **Display (Headlines)** - **Poppins Bold (700)** - Moderno, geométrico, transmite confiança
- **Heading (Subheadings)** - **Poppins SemiBold (600)** - Hierarquia clara
- **Body (Texto)** - **Inter Regular (400)** - Legível, profissional, neutro
- **Small/Caption** - **Inter Regular (400)** com opacity reduzida

**Hierarchy:**
- H1: 48px (mobile: 36px)
- H2: 36px (mobile: 28px)
- H3: 24px (mobile: 20px)
- Body: 16px
- Small: 14px

---

## Resumo da Implementação
- Cores: Vermelho (#EF4444), Laranja (#FF8C00), Preto (#1A1A1A), Branco
- Fontes: Poppins (headlines), Inter (body)
- Layout: Assimétrico com diagonais, foco em motos
- Animações: Suaves, rápidas, com propósito
- Elementos: Galo logo, foguete, cronômetro, linhas diagonais
