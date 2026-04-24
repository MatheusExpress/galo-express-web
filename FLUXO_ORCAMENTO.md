# 📋 Fluxo de Orçamento - Galo Express

## Como Funciona o Novo Sistema

O site foi configurado para um **fluxo de orçamento personalizado**, onde você controla quando mostrar ou ocultar o campo de preço por km.

---

## 🎯 Fluxo Padrão (Recomendado)

### 1️⃣ Cliente Acessa o Site
- Cliente clica em "Solicitar Entrega" ou "Começar Simulação"
- Vê apenas **2 campos obrigatórios**:
  - 📍 Endereço de coleta
  - 📍 Endereço de entrega

### 2️⃣ Cliente Preenche e Envia
- Preenche os dois endereços
- Clica em "Solicitar Orçamento"
- Vê a prévia com os endereços e distância estimada
- Clica em "Enviar via WhatsApp"

### 3️⃣ Você Recebe no WhatsApp
A mensagem chega **formatada e pronta**:

```
🚚 SOLICITAÇÃO DE ORÇAMENTO - GALO EXPRESS

📍 Endereço de Coleta:
[Endereço que o cliente digitou]

📍 Endereço de Entrega:
[Endereço que o cliente digitou]

📏 Distância Estimada:
[Distância calculada] km

💰 Valor: A confirmar

---
Aguardo confirmação do valor para encaminhar ao motoboy.
```

### 4️⃣ Você Analisa e Responde
- Analisa a rota
- Define o valor apropriado
- Responde no WhatsApp com o valor
- Após confirmação do cliente, passa para o motoboy

---

## ⚙️ Painel Administrativo (Alt+A)

### Como Acessar
1. Pressione **Alt + A** simultaneamente no navegador
2. Um painel modal aparecerá

### Opções Disponíveis

#### 🔘 Mostrar campo de preço por km
- **Desativado (padrão):** Clientes enviam endereços, você define valor
- **Ativado:** Clientes veem campo para digitar preço por km

**Quando usar cada modo:**

| Modo | Quando Usar | Vantagem |
|------|-----------|---------|
| **Desativado** | Padrão | Você controla os preços, evita clientes digitarem valores errados |
| **Ativado** | Modo automático | Clientes calculam sozinhos, mais rápido |

#### 📊 Multiplicador de Preço
- Ajusta o valor dos fretes em porcentagem
- Exemplo: 1.2 = 20% mais caro
- Só aparece quando o campo de preço está **ativado**

#### 🔧 Modo de Manutenção
- Ativa/desativa modo de manutenção do site
- Quando ativado, mostra mensagem de manutenção

#### 📈 Status do Sistema
- Mostra se servidor, banco de dados e API estão funcionando

---

## 💡 Dicas Práticas

### Para Manter Controle de Preços
1. Deixe o campo de preço **desativado** (padrão)
2. Clientes enviam endereços
3. Você recebe tudo pronto no WhatsApp
4. Define o valor e responde
5. Após confirmação, passa para o motoboy

### Para Modo Automático
1. Ative o campo de preço no painel admin (Alt+A)
2. Defina um multiplicador se necessário
3. Clientes calculam sozinhos
4. Recebem a mensagem com o valor já preenchido

### Resetar Configurações
- Clique em "Restaurar Padrões" no painel admin
- Volta para: Preço oculto, multiplicador 1x, sem manutenção

---

## 📱 Exemplo de Uso Prático

**Cenário: Cliente quer entregar um pacote**

1. Cliente acessa o site
2. Preenche:
   - Coleta: "Rua das Flores, 123 - Centro"
   - Entrega: "Av. Paulista, 1000 - Bela Vista"
3. Clica "Solicitar Orçamento"
4. Vê: Distância estimada = 8 km
5. Clica "Enviar via WhatsApp"
6. **Você recebe:**
   ```
   🚚 SOLICITAÇÃO DE ORÇAMENTO - GALO EXPRESS
   
   📍 Endereço de Coleta:
   Rua das Flores, 123 - Centro
   
   📍 Endereço de Entrega:
   Av. Paulista, 1000 - Bela Vista
   
   📏 Distância Estimada:
   8 km
   
   💰 Valor: A confirmar
   ```
7. Você calcula: 8 km × R$ 2,50 = R$ 20,00
8. Responde no WhatsApp: "Orçamento: R$ 20,00"
9. Cliente confirma
10. Você passa para o motoboy: "Entrega de 8 km, valor R$ 20,00"

---

## 🔐 Segurança

- Configurações são salvas no **localStorage** do navegador
- Apenas você (admin) tem acesso ao painel (Alt+A)
- Não há login necessário (use em ambiente seguro)
- Dados dos clientes são enviados apenas via WhatsApp

---

## ❓ Troubleshooting

### Painel admin não abre
- Verifique se pressionou **Alt + A** corretamente
- Tente em um navegador diferente
- Limpe o cache do navegador

### Mensagem WhatsApp não aparece
- Verifique se tem WhatsApp instalado ou acesso ao web.whatsapp.com
- Verifique o número de telefone (41) 98416-7897
- Teste em outro navegador

### Configurações não salvam
- Verifique se o localStorage está habilitado no navegador
- Tente limpar cookies e cache
- Verifique se não está em modo privado/incógnito

---

## 📞 Suporte

Para dúvidas sobre o funcionamento, entre em contato:
- **WhatsApp:** (41) 98416-7897
- **Localização:** Campo Largo, PR

---

**Desenvolvido com ❤️ para Galo Express**
