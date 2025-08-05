# 🚀 Zanvexis - Plataforma de Automações Premium

> A revolução das automações começa aqui. Plataforma futurista para automações inteligentes e personalizadas.

## ✨ Características

- 🎨 **Design Futurista**: Interface cyberpunk com tema escuro e efeitos visuais avançados
- ⚡ **Next.js 14**: App Router, TypeScript e Server Components
- 🎭 **Animações Premium**: Framer Motion para transições e efeitos
- 🔐 **Autenticação Segura**: Integração com Clerk para auth completa
- 📱 **Mobile First**: Design responsivo e otimizado para todos os dispositivos
- 🎨 **Tailwind CSS**: Estilização moderna com classes utilitárias
- 🔒 **Proteção de Rotas**: Middleware para controle de acesso

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Autenticação**: Clerk
- **Ícones**: Lucide React
- **Deploy**: Vercel (ready)

## 📁 Estrutura do Projeto

```
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   └── Footer.tsx       # Rodapé com links e info
│   ├── (pages)/
│   │   ├── page.tsx         # Home - Landing impactante
│   │   ├── automacoes/      # Catálogo de automações
│   │   ├── login/           # Página de login
│   │   ├── signup/          # Página de cadastro
│   │   ├── dashboard/       # Painel do usuário
│   │   ├── planos/          # Planos de assinatura
│   │   ├── personalizadas/  # Solicitação de automações personalizadas
│   │   ├── token/           # Informações do ZVX Token
│   │   └── contato/         # Formulário de contato
│   ├── globals.css          # Estilos globais e classes cyber
│   └── layout.tsx           # Layout raiz com providers
├── middleware.ts            # Proteção de rotas
├── tailwind.config.js       # Configuração do Tailwind
└── README.md               # Este arquivo
```

## 🎨 Design System

### Cores Cyberpunk
- **Cyber Blue**: `#00f5ff` - Cor principal
- **Cyber Purple**: `#8b5cf6` - Cor secundária
- **Cyber Green**: `#00ff88` - Sucesso/confirmação
- **Cyber Pink**: `#ff0080` - Alertas/destaque
- **Cyber Yellow**: `#ffff00` - Warning/token

### Componentes Prontos
- **cyber-button**: Botões com efeito futurista
- **cyber-card**: Cards com bordas animadas
- **cyber-input**: Inputs com estilo cyberpunk
- **neon-glow**: Texto com efeito neon

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd zanvexis-platform
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env.local na raiz do projeto
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse no navegador**
```
http://localhost:3001 (ou a porta mostrada no terminal)
```

## 🔧 Configuração do Clerk (IMPORTANTE)

### Passo a Passo Completo:

1. **Crie uma conta gratuita em [Clerk.dev](https://clerk.dev)**

2. **Crie uma nova aplicação:**
   - Clique em "Create Application"
   - Escolha um nome (ex: "Zanvexis")
   - Selecione os providers de login desejados
   - Clique em "Create Application"

3. **Copie as chaves de API:**
   - No dashboard do Clerk, vá em "API Keys"
   - Copie o `Publishable Key` e `Secret Key`
   - Crie o arquivo `.env.local` na raiz do projeto:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_sua_chave_aqui
   CLERK_SECRET_KEY=sk_test_sua_chave_aqui
   ```

4. **Configure URLs permitidas:**
   - Em "Domains" adicione: `localhost:3000`, `localhost:3001`
   - Para produção: adicione seu domínio real

5. **Customize a aparência (opcional):**
   - Vá em "Customization" > "Appearance"
   - O projeto já está configurado com tema dark

### ⚠️ ATENÇÃO:
**O projeto NÃO funcionará sem a configuração do Clerk!** As páginas de login, signup e dashboard dependem dessas chaves.

## 📱 Páginas Implementadas

### 🏠 Home (`/`)
- Hero section impactante
- Estatísticas da plataforma
- Seção de recursos
- Depoimentos de clientes
- CTA para conversão

### 🤖 Automações (`/automacoes`)
- Catálogo com filtros avançados
- Cards animados com vídeos
- Sistema de busca
- Categorização inteligente
- Modal de preview

### 💰 Planos (`/planos`)
- 3 tiers de preços
- Comparação detalhada
- Toggle mensal/anual
- Integração de pagamento (preparada)
- Depoimentos e FAQ

### ⚙️ Dashboard (`/dashboard`)
- Proteção por autenticação
- Métricas em tempo real
- Histórico de automações
- Ações rápidas
- Interface administrativa

### 🎯 Personalizadas (`/personalizadas`)
- Formulário detalhado
- Processo step-by-step
- Casos de sucesso
- Orçamento automático

### 🪙 Token (`/token`)
- Roadmap do ZVX Token
- Tokenomics visual
- Utilidades e benefícios
- Comunidade e early access

### 📞 Contato (`/contato`)
- Formulário responsivo
- Múltiplos canais
- Escritórios globais
- FAQ integrado

## 🎨 Customização

### Alterando o Nome da Empresa
O nome "Zanvexis" pode ser facilmente alterado:

1. **Componentes**: Busque por "ZANVEXIS" nos arquivos
2. **Metadata**: Atualize `app/layout.tsx`
3. **Configurações**: Modifique `package.json`

### Adicionando Novas Automações
No arquivo `app/automacoes/page.tsx`:

```typescript
// Substitua o array 'automations' pelos dados reais
const automations = [
  {
    id: 1,
    name: "Nome da Automação",
    description: "Descrição detalhada...",
    // ... outros campos
  }
]
```

### Integrações de Pagamento
Preparado para integração com:
- **Stripe**: Função `handlePayment()` em `/planos`
- **Mercado Pago**: Same handler function
- **PayPal**: Extensível

## 🔒 Segurança

- ✅ Middleware de autenticação
- ✅ Proteção de rotas sensíveis
- ✅ Validação client-side
- ✅ HTTPS ready
- ✅ CORS configurado

## 📱 Responsividade

- ✅ Mobile First Design
- ✅ Breakpoints: sm, md, lg, xl
- ✅ Touch-friendly
- ✅ Fast loading

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Deploy automático via GitHub
```

### Outras Plataformas
- **Netlify**: Compatible
- **Railway**: Compatible  
- **AWS/GCP**: Docker ready

## 🔧 Variáveis de Ambiente

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database (when needed)
DATABASE_URL=postgresql://...

# Payment (when integrated)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (when integrated)
RESEND_API_KEY=re_...
```

## 🐛 Troubleshooting

### Erro de Build
```bash
npm run build
# Verifique tipos TypeScript
```

### Clerk não funciona
- Verifique as chaves de API
- Confirme domínios permitidos
- Check middleware configuration

### Styles não carregam
```bash
# Rebuild Tailwind
npm run dev
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎯 Roadmap

- [ ] Integração com APIs de pagamento
- [ ] Sistema de notificações
- [ ] Dashboard analytics avançado
- [ ] Mobile app
- [ ] API pública
- [ ] Marketplace de templates

## 📞 Suporte

- 📧 Email: suporte@zanvexis.com
- 💬 Discord: [Zanvexis Community](https://discord.gg/zanvexis)
- 📱 WhatsApp: +55 (11) 99999-9999

---

**Feito com ❤️ e ⚡ para revolucionar automações**