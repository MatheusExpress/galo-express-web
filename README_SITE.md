# Galo Express - Site Moderno

Um site profissional e moderno para a **Galo Express**, empresa de entregas rápidas focada em motos. O site foi desenvolvido com a identidade visual do Instagram da marca, apresentando um design dinâmico, cores vibrantes e funcionalidades práticas.

## 🎨 Design & Identidade Visual

### Paleta de Cores
- **Vermelho Primário:** `#EF4444` - Energia, urgência e movimento
- **Laranja Secundário:** `#FF8C00` - Calor e otimismo
- **Preto:** `#1A1A1A` - Sofisticação e profissionalismo
- **Branco:** `#FFFFFF` - Clareza e confiança

### Tipografia
- **Headlines:** Poppins Bold (700) - Moderno e geométrico
- **Body:** Inter Regular (400) - Legível e profissional

### Características de Design
- Layout assimétrico com elementos diagonais
- Animações suaves e micro-interações
- Foco visual em motos e agilidade
- Componentes flutuantes e dinâmicos
- Gradientes e efeitos de profundidade

## 🚀 Funcionalidades

### 1. **Header Responsivo**
- Logo com ícone de moto
- Navegação com links para seções principais
- Menu mobile colapsável
- Botão CTA "Solicitar Entrega"

### 2. **Hero Section**
- Headline impactante com destaque em vermelho
- Descrição da empresa
- Dois CTAs (Começar Simulação e Saiba Mais)
- Indicadores de confiança (500+ entregas, 15min, 99% satisfação)
- Ícone de moto animado com elementos flutuantes

### 3. **Simulador de Frete**
- Seleção de tipo de veículo (Moto/Carro)
- Campos para endereço de origem e destino
- Configuração de preço por km
- Cálculo automático de distância (simulado)
- Exibição de resultado com valor total
- Integração com WhatsApp para envio de orçamento

### 4. **Seção de Benefícios**
- 6 cards com benefícios principais:
  - Rapidez
  - Segurança
  - Melhor Preço
  - Disponível 24/7
  - Cobertura Total
  - Foco em Motos
- Efeitos hover com animações
- CTA secundária para conversão

### 5. **Footer**
- Informações da empresa
- Links rápidos
- Serviços oferecidos
- Contato (telefone, email, endereço)
- Links para redes sociais (Instagram, Facebook, LinkedIn)

### 6. **Menu Administrativo Oculto** ⚙️
**Acionado com: `Alt + A`**

Funcionalidades:
- **Mostrar/Ocultar Valores:** Toggle para exibir ou ocultar preços no simulador
- **Multiplicador de Preço:** Ajuste percentual dos valores (0.5x a 3x)
- **Modo de Manutenção:** Ativa/desativa modo de manutenção do site
- **Status do Sistema:** Informações sobre servidor, banco de dados, API
- **Restaurar Padrões:** Reseta todas as configurações

As configurações são salvas automaticamente no `localStorage` do navegador.

## 🛠️ Stack Tecnológico

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + Componentes shadcn/ui
- **Ícones:** Lucide React
- **Roteamento:** Wouter
- **Build:** Vite
- **Animações:** Tailwind CSS + Framer Motion

## 📁 Estrutura do Projeto

```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navegação principal
│   │   ├── Hero.tsx            # Seção de impacto
│   │   ├── Simulator.tsx       # Calculadora de frete
│   │   ├── Features.tsx        # Benefícios da empresa
│   │   ├── Footer.tsx          # Rodapé
│   │   └── AdminPanel.tsx      # Menu administrativo (Alt+A)
│   ├── pages/
│   │   └── Home.tsx            # Página principal
│   ├── App.tsx                 # Configuração de rotas
│   ├── index.css               # Estilos globais e variáveis
│   └── main.tsx                # Entry point
├── index.html                  # HTML base
└── public/                     # Assets estáticos
```

## 🎯 Como Usar

### Desenvolvimento Local
```bash
cd /home/ubuntu/galo-express-web
pnpm install
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Acessar Menu Administrativo
1. Abra o site no navegador
2. Pressione `Alt + A` (simultaneamente)
3. Um painel modal aparecerá com as opções de administração

### Testar Simulador
1. Preencha os campos (origem, destino, preço por km)
2. Clique em "Calcular entrega"
3. O resultado aparecerá com o valor total
4. Clique em "Enviar orçamento pelo WhatsApp" para compartilhar

## 📱 Responsividade

O site é totalmente responsivo e foi otimizado para:
- **Mobile:** 320px e acima
- **Tablet:** 768px e acima
- **Desktop:** 1024px e acima

## ✨ Animações e Interações

- **Hover em botões:** Scale 1.05 + shadow drop
- **Entrada de elementos:** Fade-in + slide-up
- **Cards de benefícios:** Elevação ao passar o mouse
- **Ícone de moto:** Animação de bounce contínua
- **Resultado do simulador:** Fade-in com slide lateral

## 🔒 Menu Administrativo - Detalhes

### Configurações Disponíveis

| Configuração | Tipo | Padrão | Descrição |
|---|---|---|---|
| `showPrices` | Boolean | `true` | Exibe ou oculta valores no simulador |
| `priceMultiplier` | Number | `1` | Multiplicador de preço (0.5 a 3) |
| `maintenanceMode` | Boolean | `false` | Ativa modo de manutenção |

### Armazenamento
As configurações são salvas em `localStorage` com a chave `galo-admin-settings` e persistem entre sessões.

## 🚀 Deploy

O site está pronto para ser publicado. Clique no botão **"Publish"** na interface de gerenciamento do Manus.

## 📞 Contato

- **Telefone:** (11) 99999-9999
- **Email:** contato@galoexpress.com
- **Instagram:** @galo.express
- **Endereço:** São Paulo, SP - Brasil

---

**Desenvolvido com ❤️ para Galo Express**
