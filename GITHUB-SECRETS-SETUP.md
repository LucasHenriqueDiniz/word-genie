# GitHub Secrets Setup para Cloudflare Deploy

**Configure estas variáveis no GitHub para auto-deploy**

---

## 📋 Variáveis Necessárias

### 1. CLOUDFLARE_API_TOKEN
**O que é:** Token de autenticação da API Cloudflare  
**Onde pegar:** 
- Cloudflare Dashboard → My Profile → API Tokens
- Clique "Create Token"
- Selecione "Cloudflare Pages Deploy"
- Copie o token gerado

**Tipo:** Secret ✅

---

### 2. CLOUDFLARE_ACCOUNT_ID
**O que é:** ID única da sua conta Cloudflare  
**Onde pegar:**
- Cloudflare Dashboard → Overview
- Copie "Account ID" (lado direito)
- Parece com: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5`

**Tipo:** Secret ✅

---

## 🔧 Como Adicionar no GitHub

### Passo 1: Vá para Settings do Repositório
```
https://github.com/LucasHenriqueDiniz/word-genie/settings
```

### Passo 2: Clique em "Secrets and variables" → "Actions"

### Passo 3: Clique "New repository secret"

### Passo 4: Adicione cada variável:

**Primeira variável:**
- Name: `CLOUDFLARE_API_TOKEN`
- Secret: (cole o token aqui)
- Clique "Add secret"

**Segunda variável:**
- Name: `CLOUDFLARE_ACCOUNT_ID`
- Secret: (cole o account ID aqui)
- Clique "Add secret"

---

## ✅ Verificar se está funcionando

Após adicionar as secrets:

1. Faça um commit qualquer
2. Vá em "Actions" no repositório
3. Veja o workflow "Deploy to Cloudflare Pages" rodando
4. Espere completar (~5-10 minutos)
5. Seu site estará live em `word-genie.pages.dev`!

---

## 🔒 Segurança

⚠️ **IMPORTANTE:**
- ❌ NUNCA compartilhe seus tokens
- ❌ NUNCA coloque tokens no código
- ✅ Use APENAS secrets do GitHub
- ✅ GitHub encripta automaticamente

---

## 🚀 Próximos Deploys

Após setup:
- Cada `git push` = deploy automático
- Leva 5-10 minutos
- Histórico em "Actions"
- Rollback fácil se preciso

---

## 🐛 Troubleshooting

**"Secrets not found"**
- Aguarde 1 minuto após adicionar
- Força refresh (Ctrl+F5)

**"Deploy failed"**
- Verifique token está correto
- Verifique Account ID está correto
- Veja logs em "Actions"

**"Build failed"**
- Rode `npm run build` localmente
- Corrija erros
- Faça novo push

---

## 📚 Links Úteis

- Cloudflare Tokens: https://dash.cloudflare.com/profile/api-tokens
- GitHub Secrets: https://github.com/LucasHenriqueDiniz/word-genie/settings/secrets/actions
- Wrangler Docs: https://developers.cloudflare.com/workers/wrangler/

---

É tudo! Após isso, seu site deploya automaticamente! 🎉
