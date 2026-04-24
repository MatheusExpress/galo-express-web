# 📋 Instruções Finais - Galo Express

## ✨ Funcionalidades Implementadas

### 1. **Horário de Funcionamento Automático**
- **Seg-Sex:** 7:00 - 18:00
- **Sábado:** 8:00 - 12:00
- **Domingo:** Fechado

O site automaticamente:
- ✅ Mostra status de "Aberto/Fechado"
- ✅ Desabilita formulário fora do horário
- ✅ Mostra próximo horário de abertura
- ✅ Desabilita botão flutuante WhatsApp fora do horário

### 2. **Cálculo Real de Distância com Google Maps**
- ✅ Usa Google Maps Directions API
- ✅ Calcula distância real da rota (não em linha reta)
- ✅ Suporta endereços em Campo Largo e região
- ✅ Mostra mensagens de erro claras se endereço não existir

### 3. **Botão Flutuante WhatsApp**
- ✅ Fixo no canto inferior direito
- ✅ Sempre visível durante navegação
- ✅ Animação pulse quando aberto
- ✅ Desabilitado fora do horário (fica cinza)
- ✅ Clique direto abre WhatsApp com mensagem pronta

### 4. **Fluxo de Orçamento Otimizado**
- Cliente preenche: Endereço coleta + Endereço entrega
- Sistema calcula distância real
- Mensagem WhatsApp pronta com os dados
- Você define o valor e responde

### 5. **Painel Administrativo (Alt+A)**
- Toggle: Mostrar/ocultar campo de preço
- Multiplicador: Ajusta preço em porcentagem
- Modo manutenção: Ativa/desativa site
- Status do sistema: Mostra saúde dos serviços

---

## 🎯 Como Usar o Site

### Para o Cliente

1. **Acessa o site**
   - Vê o status de horário (aberto/fechado)
   - Se fechado, vê próximo horário de abertura

2. **Solicita Orçamento**
   - Clica em "Solicitar Entrega" ou "Começar Simulação"
   - Preenche endereço de coleta
   - Preenche endereço de entrega
   - Clica "Solicitar Orçamento"

3. **Vê Resultado**
   - Sistema calcula distância real via Google Maps
   - Mostra endereços e distância
   - Clica "Enviar via WhatsApp"

4. **Mensagem Chega Pronta**
   ```
   🚚 SOLICITAÇÃO DE ORÇAMENTO - GALO EXPRESS
   
   📍 Endereço de Coleta:
   [Endereço que digitou]
   
   📍 Endereço de Entrega:
   [Endereço que digitou]
   
   📏 Distância:
   [Distância calculada] km
   
   💰 Valor: A confirmar
   ```

### Para Você (Admin)

1. **Recebe no WhatsApp**
   - Mensagem com endereços prontos
   - Distância já calculada

2. **Define o Valor**
   - Analisa a rota
   - Calcula o valor
   - Responde no WhatsApp

3. **Passa para Motoboy**
   - Após confirmação do cliente
   - Envia detalhes da entrega

4. **Controla Configurações (Alt+A)**
   - Pressione Alt+A no navegador
   - Painel admin abre
   - Controle: preço, multiplicador, manutenção

---

## ⚙️ Painel Administrativo Detalhado

### Acessar
- Pressione **Alt + A** simultaneamente
- Um modal aparecerá no centro da tela

### Opções

#### 🔘 Mostrar campo de preço por km
**Padrão: Desativado**

| Estado | Comportamento |
|--------|--------------|
| **Desativado** | Cliente envia endereços, você define valor |
| **Ativado** | Cliente vê campo para digitar preço/km |

#### 📊 Multiplicador de Preço
**Só aparece quando campo de preço está ativado**

- Ajusta valor dos fretes em porcentagem
- Exemplo: 1.0 = preço normal, 1.2 = 20% mais caro, 0.8 = 20% mais barato
- Afeta o cálculo automático do cliente

#### 🔧 Modo de Manutenção
- Quando ativado: site mostra mensagem de manutenção
- Use quando precisar fazer ajustes no sistema

#### 📈 Status do Sistema
- Mostra se servidor está online
- Mostra se banco de dados está conectado
- Mostra se API WhatsApp está ativa
- Mostra se rastreamento está funcionando

#### 🔄 Restaurar Padrões
- Volta todas as configurações para padrão
- Preço oculto, multiplicador 1x, sem manutenção

---

## 📱 Comportamento por Horário

### Durante Horário de Funcionamento (Seg-Sex 7-18h, Sab 8-12h)

```
✅ Status: "Estamos abertos!"
✅ Formulário: Habilitado
✅ Botão WhatsApp: Verde com animação pulse
✅ Cliente pode solicitar orçamento
```

### Fora do Horário

```
🚫 Status: "Já fechamos. Reabrimos [dia/hora]"
🚫 Formulário: Desabilitado
🚫 Botão WhatsApp: Cinza, desabilitado
🚫 Clique no botão mostra alerta com próximo horário
```

---

## 🗺️ Google Maps Integration

### Como Funciona
1. Cliente digita endereço de coleta
2. Cliente digita endereço de entrega
3. Sistema envia para Google Maps Directions API
4. Google calcula rota real de carro
5. Sistema extrai distância em km
6. Mostra resultado para cliente

### Suporte de Endereços
- ✅ Endereços em Campo Largo, PR
- ✅ Endereços em cidades vizinhas
- ✅ Endereços com número, rua, bairro
- ✅ Endereços com CEP

### Tratamento de Erros
- Endereço não encontrado → Mensagem clara
- Ambos endereços inválidos → Mensagem clara
- Erro de conexão → Mensagem clara

---

## 💡 Dicas Práticas

### Manter Controle de Preços
1. Deixe campo de preço **desativado** (padrão)
2. Clientes enviam endereços
3. Você recebe tudo pronto
4. Define valor conforme análise

### Modo Automático
1. Ative campo de preço (Alt+A)
2. Defina multiplicador se necessário
3. Clientes calculam sozinhos
4. Mais rápido, menos controle

### Horários Especiais
- Se precisar atender fora do horário: use painel admin
- Ative modo manutenção para avisar clientes
- Atualize horários conforme necessário

### Testar o Sistema
1. Abra o site em navegador
2. Pressione Alt+A para abrir painel admin
3. Teste as configurações
4. Teste o formulário com endereços reais
5. Verifique se mensagem chega correta no WhatsApp

---

## 🔒 Segurança

- Configurações salvas no **localStorage** do navegador
- Apenas você tem acesso ao painel (Alt+A)
- Dados de clientes enviados apenas via WhatsApp
- Não há banco de dados (dados não são armazenados)
- Use em navegador seguro/privado

---

## ❓ Troubleshooting

### Painel admin não abre
- Verifique se pressionou Alt+A corretamente
- Tente em outro navegador
- Limpe cache do navegador

### Google Maps não calcula distância
- Verifique se endereços estão corretos
- Tente com endereço mais específico (com número e bairro)
- Verifique conexão com internet

### Botão WhatsApp não funciona
- Verifique se tem WhatsApp instalado
- Tente acessar web.whatsapp.com
- Verifique número de telefone (41) 98416-7897

### Horário não atualiza
- Limpe cache do navegador
- Verifique relógio do computador
- Recarregue a página

---

## 📞 Contato

**Galo Express - Entregas Rápidas**
- 📱 WhatsApp: (41) 98416-7897
- 📍 Campo Largo, PR
- 🕐 Seg-Sex: 7:00 - 18:00 | Sábado: 8:00 - 12:00

---

## 📝 Checklist de Funcionamento

Antes de publicar, verifique:

- [ ] Logo aparece corretamente no header
- [ ] Cores estão em laranja/preto/branco
- [ ] Horário de funcionamento mostra corretamente
- [ ] Botão flutuante WhatsApp aparece no canto inferior direito
- [ ] Formulário funciona com endereços reais
- [ ] Google Maps calcula distância corretamente
- [ ] Mensagem WhatsApp chega pronta
- [ ] Painel admin abre com Alt+A
- [ ] Configurações salvam corretamente
- [ ] Site fica desabilitado fora do horário

---

**Desenvolvido com ❤️ para Galo Express**
**Última atualização: 24/04/2026**
