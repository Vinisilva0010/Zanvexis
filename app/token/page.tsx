'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Coins, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Rocket,
  Star,
  Globe,
  Lock,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Mail,
  MessageSquare,
  FileText
} from 'lucide-react'

export default function TokenPage() {
  const roadmapItems = [
    {
      phase: "Fase 1",
      title: "Fundação",
      date: "Q2 2024",
      status: "em-progresso",
      items: [
        "Desenvolvimento do protocolo base",
        "Smart contracts de governança",
        "Sistema de staking inicial",
        "Parceria com exchanges"
      ]
    },
    {
      phase: "Fase 2", 
      title: "Expansão",
      date: "Q3 2024",
      status: "planejado",
      items: [
        "Launch do token ZVX",
        "Marketplace de automações",
        "Programa de recompensas",
        "DAO para governança"
      ]
    },
    {
      phase: "Fase 3",
      title: "Ecossistema",
      date: "Q4 2024", 
      status: "planejado",
      items: [
        "DeFi integrations",
        "Cross-chain bridges",
        "NFT automations",
        "Global expansion"
      ]
    },
    {
      phase: "Fase 4",
      title: "Metaverso",
      date: "Q1 2025",
      status: "futuro",
      items: [
        "Automações no metaverso",
        "IA descentralizada",
        "Economia virtual",
        "Interoperabilidade total"
      ]
    }
  ]

  const utilities = [
    {
      icon: Zap,
      title: "Pagamento de Automações",
      description: "Use ZVX tokens para pagar execuções de automações com desconto de até 50%.",
      benefit: "50% desconto",
      example: "Exemplo: Uma automação de email marketing que custaria R$ 200 em fiat, custa apenas 100 ZVX tokens (≈ R$ 100). Quanto mais ZVX você possui, maiores os descontos.",
      details: [
        "Descontos escalonados baseados em holdings",
        "Pagamentos instantâneos sem taxas bancárias",
        "Preços fixos em ZVX, protegidos da inflação",
        "Cashback em ZVX para holders premium"
      ]
    },
    {
      icon: Users,
      title: "Governança DAO",
      description: "Participe das decisões da plataforma votando em propostas e melhorias.",
      benefit: "Poder de voto",
      example: "Exemplo: Vote para decidir quais novas integrações a plataforma deve priorizar, como WhatsApp Business API ou integração com SAP. Seu voto tem peso proporcional aos seus tokens.",
      details: [
        "1 ZVX = 1 voto em propostas da comunidade",
        "Propostas mensais sobre features e parcerias",
        "Veto power para mudanças controversas",
        "Recompensas por participação ativa"
      ]
    },
    {
      icon: Star,
      title: "Staking Rewards",
      description: "Ganhe recompensas fazendo staking dos seus tokens ZVX na plataforma.",
      benefit: "Até 15% APY",
      example: "Exemplo: Fazendo staking de 10.000 ZVX por 1 ano, você recebe 1.500 ZVX de recompensa + direito a automações exclusivas e suporte prioritário.",
      details: [
        "APY variável baseado na duração do lock",
        "3 meses: 8% APY | 6 meses: 12% APY | 12 meses: 15% APY",
        "Recompensas pagas em ZVX + tokens de parceiros",
        "Acesso a pools de staking de automações específicas"
      ]
    },
    {
      icon: Rocket,
      title: "Acesso Exclusivo",
      description: "Automações premium e recursos avançados exclusivos para holders.",
      benefit: "Acesso VIP",
      example: "Exemplo: Holders de 50K+ ZVX têm acesso exclusivo a automações de IA GPT-4, automações de trading algorítmico e consultoria 1:1 com especialistas.",
      details: [
        "Tier Bronze (1K+ ZVX): Automações básicas premium",
        "Tier Prata (10K+ ZVX): IA avançada + APIs premium",
        "Tier Ouro (50K+ ZVX): Soluções custom + consultoria",
        "Tier Diamante (100K+ ZVX): White-label + revenue share"
      ]
    },
    {
      icon: TrendingUp,
      title: "Revenue Share",
      description: "Participe dos lucros da plataforma proporcionalmente aos seus holdings.",
      benefit: "Dividendos",
      example: "Exemplo: A plataforma gerou R$ 10M em receita no trimestre. 20% (R$ 2M) são distribuídos para holders proporcionalmente. Se você possui 1% dos tokens, recebe R$ 20.000.",
      details: [
        "20% da receita trimestral distribuída aos holders",
        "Distribuição automática via smart contracts",
        "Histórico transparente de todas as distribuições",
        "Opção de reinvestir dividendos em mais ZVX automaticamente"
      ]
    },
    {
      icon: Shield,
      title: "Seguro Descentralizado",
      description: "Proteção automática contra falhas em automações críticas.",
      benefit: "Proteção total",
      example: "Exemplo: Se sua automação de backup falhar e você perder dados, o seguro descentralizado reembolsa até 100K ZVX para cobertura de recuperação de dados.",
      details: [
        "Pool de seguro financiado por 2% das transações",
        "Cobertura automática para holders de 5K+ ZVX",
        "Processo de claim via DAO voting",
        "Cobertura expandida para parceiros e enterprises"
      ]
    }
  ]

  const tokenomics = [
    { label: "Reserva de Desenvolvimento", percentage: 30, color: "bg-cyber-blue" },
    { label: "Comunidade & Rewards", percentage: 25, color: "bg-cyber-green" },
    { label: "Fundadores & Equipe", percentage: 20, color: "bg-cyber-purple" },
    { label: "Parcerias Estratégicas", percentage: 15, color: "bg-cyber-yellow" },
    { label: "Liquidez & Exchanges", percentage: 10, color: "bg-cyber-pink" }
  ]

  const stats = [
    { label: "Total Supply", value: "1B ZVX", icon: Coins },
    { label: "Circulating Supply", value: "250M ZVX", icon: Globe },
    { label: "Holders", value: "Coming Soon", icon: Users },
    { label: "Market Cap", value: "Pre-Launch", icon: BarChart3 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'concluido': return 'text-cyber-green'
      case 'em-progresso': return 'text-cyber-blue' 
      case 'planejado': return 'text-cyber-yellow'
      case 'futuro': return 'text-cyber-purple'
      default: return 'text-gray-400'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'concluido': return 'bg-cyber-green/20'
      case 'em-progresso': return 'bg-cyber-blue/20'
      case 'planejado': return 'bg-cyber-yellow/20'
      case 'futuro': return 'bg-cyber-purple/20'
      default: return 'bg-gray-400/20'
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="relative mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 mx-auto mb-8"
            >
              <div className="w-full h-full bg-gradient-to-r from-cyber-yellow via-cyber-blue to-cyber-purple rounded-full p-1">
                <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center">
                  <Coins className="h-16 w-16 text-cyber-yellow" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-cyber font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyber-yellow via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              ZVX TOKEN
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-300 font-tech max-w-4xl mx-auto leading-relaxed mb-8"
          >
            A primeira criptomoeda dedicada exclusivamente ao ecossistema de automação empresarial. 
            ZVX conecta empresas, desenvolvedores e usuários em uma economia descentralizada 
            onde automações inteligentes geram valor real para todos os participantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="max-w-5xl mx-auto mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-dark-surface/30 border border-cyber-blue/20 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-cyber-blue mr-3" />
                  <h3 className="text-lg font-tech font-bold text-cyber-blue">Para Empresas</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reduza custos operacionais em até 70% com automações pagas em ZVX. 
                  Acesso prioritário a soluções premium e suporte especializado.
                </p>
              </div>
              <div className="bg-dark-surface/30 border border-cyber-green/20 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-cyber-green mr-3" />
                  <h3 className="text-lg font-tech font-bold text-cyber-green">Para Desenvolvedores</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Monetize suas automações na maior marketplace descentralizada. 
                  Receba pagamentos instantâneos em ZVX sem intermediários.
                </p>
              </div>
              <div className="bg-dark-surface/30 border border-cyber-yellow/20 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-6 w-6 text-cyber-yellow mr-3" />
                  <h3 className="text-lg font-tech font-bold text-cyber-yellow">Para Investidores</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Participe do crescimento da economia de automação. Staking, 
                  governança e revenue share com potencial de valorização exponencial.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <div className="bg-gradient-to-r from-cyber-yellow/20 to-cyber-blue/20 border border-cyber-yellow/50 rounded-2xl px-8 py-4">
              <span className="text-3xl font-cyber font-bold text-cyber-yellow">
                EM BREVE
              </span>
            </div>
            <button className="cyber-button px-8 py-4 text-lg">
              <Sparkles className="h-5 w-5 mr-2" />
              Notify Me
            </button>
          </motion.div>
        </motion.div>

        {/* Problem & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              O <span className="text-cyber-pink">Problema</span> que Resolvemos
            </h2>
            <p className="text-xl text-gray-400 font-tech max-w-4xl mx-auto leading-relaxed">
              O mercado de automação está fragmentado, caro e dominado por grandes corporações. 
              Pequenas empresas pagam preços abusivos por soluções básicas, enquanto desenvolvedores 
              talentosos não conseguem monetizar adequadamente suas criações.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-tech font-bold text-cyber-pink mb-6">
                ❌ Problemas Atuais
              </h3>
              {[
                {
                  title: "Custos Proibitivos",
                  description: "Empresas pagam até R$ 5.000/mês por automações básicas que poderiam custar centavos"
                },
                {
                  title: "Vendor Lock-in",
                  description: "Dependência total de fornecedores únicos, sem portabilidade ou interoperabilidade"
                },
                {
                  title: "Falta de Transparência",
                  description: "Preços opacos, taxas escondidas e contratos leoninos que prendem os clientes"
                },
                {
                  title: "Barreira para Desenvolvedores",
                  description: "Talentos não conseguem monetizar soluções por falta de marketplace acessível"
                }
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="cyber-card bg-cyber-pink/10 border-cyber-pink/20"
                >
                  <h4 className="text-lg font-tech font-bold text-cyber-pink mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-tech font-bold text-cyber-green mb-6">
                ✅ Nossa Solução
              </h3>
              {[
                {
                  title: "Economia de 70%",
                  description: "Elimine intermediários. Pague apenas pelo valor real da automação, não pela marca"
                },
                {
                  title: "Marketplace Livre",
                  description: "Milhares de automações de desenvolvedores independentes competindo em qualidade e preço"
                },
                {
                  title: "Transparência Total",
                  description: "Preços fixos em ZVX, sem taxas escondidas. Smart contracts garantem execução"
                },
                {
                  title: "Democratização",
                  description: "Qualquer desenvolvedor pode criar e vender. Qualquer empresa pode comprar e usar"
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="cyber-card bg-cyber-green/10 border-cyber-green/20"
                >
                  <h4 className="text-lg font-tech font-bold text-cyber-green mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center cyber-card bg-cyber-blue/10 border-cyber-blue/20">
              <div className="text-4xl font-cyber font-bold text-cyber-blue mb-2">
                R$ 2.3Bi
              </div>
              <div className="text-gray-400 font-tech">
                Economias potenciais anuais para empresas brasileiras
              </div>
            </div>
            <div className="text-center cyber-card bg-cyber-green/10 border-cyber-green/20">
              <div className="text-4xl font-cyber font-bold text-cyber-green mb-2">
                500K+
              </div>
              <div className="text-gray-400 font-tech">
                Desenvolvedores que podem se beneficiar da plataforma
              </div>
            </div>
            <div className="text-center cyber-card bg-cyber-yellow/10 border-cyber-yellow/20">
              <div className="text-4xl font-cyber font-bold text-cyber-yellow mb-2">
                95%
              </div>
              <div className="text-gray-400 font-tech">
                Das empresas não têm acesso a automações por custo
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="cyber-card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyber-yellow/20 rounded-xl">
                    <Icon className="h-8 w-8 text-cyber-yellow" />
                  </div>
                </div>
                <div className="text-2xl font-cyber font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-tech">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Utilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              Utilidades do <span className="text-cyber-yellow">Token</span>
            </h2>
            <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto">
              Muito mais que uma moeda digital. ZVX é a chave para um ecossistema 
              completo de automações descentralizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {utilities.map((utility, index) => {
              const Icon = utility.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="cyber-card hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-cyber-yellow/20 rounded-xl group-hover:bg-cyber-yellow/30 transition-colors">
                      <Icon className="h-6 w-6 text-cyber-yellow" />
                    </div>
                    <span className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm font-tech font-semibold rounded-full">
                      {utility.benefit}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-tech font-bold text-white mb-3 group-hover:text-cyber-yellow transition-colors">
                    {utility.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {utility.description}
                  </p>
                  
                  {/* Example */}
                  <div className="mb-4 p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg">
                    <p className="text-sm text-cyber-blue font-tech leading-relaxed">
                      💡 {utility.example}
                    </p>
                  </div>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-tech font-bold text-cyber-yellow mb-2">
                      ✨ Detalhes:
                    </h4>
                    {utility.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyber-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-400 font-tech leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              Casos de Uso <span className="text-cyber-purple">Reais</span>
            </h2>
            <p className="text-xl text-gray-400 font-tech max-w-4xl mx-auto leading-relaxed">
              Veja como empresas reais estão economizando milhares de reais e horas de trabalho 
              usando ZVX Token para automações inteligentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                company: "E-commerce Fashion (500K vendas/mês)",
                challenge: "Gestão manual de estoque e reposição custava R$ 15.000/mês em pessoal",
                solution: "Automação de reposição inteligente usando ZVX",
                results: [
                  "Economia de R$ 12.000/mês em custos operacionais",
                  "Redução de 85% em produtos fora de estoque",
                  "ROI de 400% em 6 meses",
                  "Liberou 3 funcionários para tarefas estratégicas"
                ],
                investment: "Investimento inicial: 5.000 ZVX (≈ R$ 2.500)",
                color: "cyber-green"
              },
              {
                company: "Startup SaaS (50 funcionários)",
                challenge: "Onboarding manual de clientes demorava 3 dias e custava R$ 500 por cliente",
                solution: "Pipeline automatizado de onboarding com ZVX",
                results: [
                  "Onboarding reduzido para 2 horas",
                  "Custo por cliente: R$ 50 (90% economia)",
                  "NPS aumentou de 7.2 para 9.1",
                  "Time de sucesso focou em expansão de contas"
                ],
                investment: "Investimento inicial: 3.000 ZVX (≈ R$ 1.500)",
                color: "cyber-blue"
              },
              {
                company: "Agência de Marketing (200 clientes)",
                challenge: "Relatórios manuais consumiam 40 horas/semana da equipe",
                solution: "Automação de relatórios multicanal via ZVX",
                results: [
                  "Tempo de relatórios: 40h → 2h por semana",
                  "Economia anual: R$ 180.000 em salários",
                  "Clientes recebem insights em tempo real",
                  "Equipe focou em estratégia, não operação"
                ],
                investment: "Investimento inicial: 8.000 ZVX (≈ R$ 4.000)",
                color: "cyber-yellow"
              },
              {
                company: "Fintech (1M+ usuários)",
                challenge: "Análise de risco manual causava gargalos e prejuízos de R$ 50K/mês",
                solution: "IA de análise de risco descentralizada com ZVX",
                results: [
                  "Análise instantânea vs 24h antes",
                  "Redução de 60% em fraudes detectadas",
                  "Economia de R$ 600.000 anuais",
                  "Aprovação de crédito 300% mais rápida"
                ],
                investment: "Investimento inicial: 15.000 ZVX (≈ R$ 7.500)",
                color: "cyber-purple"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className={`cyber-card border-${useCase.color}/20 hover:border-${useCase.color}/40 transition-all duration-300`}
              >
                {/* Company Header */}
                <div className="mb-6">
                  <h3 className={`text-xl font-tech font-bold text-${useCase.color} mb-2`}>
                    📊 {useCase.company}
                  </h3>
                  <div className="bg-dark-surface/50 border border-cyber-pink/20 rounded-lg p-4 mb-4">
                    <h4 className="text-sm font-tech font-bold text-cyber-pink mb-2">
                      🚨 Desafio:
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {useCase.challenge}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className={`bg-${useCase.color}/10 border border-${useCase.color}/20 rounded-lg p-4`}>
                    <h4 className={`text-sm font-tech font-bold text-${useCase.color} mb-2`}>
                      ⚡ Solução ZVX:
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-tech font-bold text-cyber-green mb-3">
                    🎯 Resultados Alcançados:
                  </h4>
                  <div className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyber-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-400 font-tech leading-relaxed">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment */}
                <div className="bg-gradient-to-r from-cyber-yellow/10 to-cyber-blue/10 border border-cyber-yellow/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-tech text-gray-400">
                      💰 {useCase.investment}
                    </span>
                    <span className="text-sm font-tech font-bold text-cyber-yellow">
                      Payback: 2-6 meses
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculator CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-12 text-center"
          >
            <div className="cyber-card bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 border-2 border-cyber-green/30">
              <h3 className="text-2xl font-tech font-bold text-white mb-4">
                Calcule o ROI da Sua Empresa
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Nossa calculadora estima quanto sua empresa pode economizar 
                implementando automações ZVX baseado no seu setor e tamanho.
              </p>
              <button className="cyber-button-glow px-8 py-4 text-lg">
                <BarChart3 className="h-5 w-5 mr-2" />
                Calcular Meu ROI Grátis
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Tokenomics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              <span className="text-cyber-blue">Tokenomics</span>
            </h2>
            <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto">
              Distribuição estratégica para garantir crescimento sustentável e 
              alinhamento de incentivos em longo prazo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <div className="cyber-card">
              <div className="space-y-6">
                {tokenomics.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-tech font-medium text-white">
                        {item.label}
                      </span>
                      <span className="text-cyber-blue font-cyber font-bold">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="h-3 bg-dark-surface/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {[
                {
                  title: "Modelo Deflacionário",
                  description: "2% dos tokens utilizados em automações são queimados, criando escassez programática."
                },
                {
                  title: "Vesting Inteligente",
                  description: "Liberação gradual dos tokens da equipe baseada em milestones de desenvolvimento."
                },
                {
                  title: "Incentivos Alinhados",
                  description: "Quanto mais a plataforma cresce, maior o valor e utilidade do token ZVX."
                },
                {
                  title: "Sustentabilidade",
                  description: "Reserve fund para garantir operações mesmo em ciclos de baixa do mercado."
                }
              ].map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="cyber-card bg-dark-surface/30"
                >
                  <h3 className="text-lg font-tech font-bold text-cyber-blue mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {detail.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              <span className="text-cyber-purple">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto">
              Nossa jornada para construir o futuro da automação descentralizada. 
              Cada fase nos aproxima da visão completa.
            </p>
          </div>

          <div className="space-y-8">
            {roadmapItems.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className={`cyber-card border-l-4 ${
                  phase.status === 'em-progresso' ? 'border-cyber-blue' :
                  phase.status === 'concluido' ? 'border-cyber-green' :
                  phase.status === 'planejado' ? 'border-cyber-yellow' :
                  'border-cyber-purple'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-tech font-bold ${getStatusBg(phase.status)} ${getStatusColor(phase.status)}`}>
                        {phase.phase}
                      </span>
                      <h3 className="text-2xl font-cyber font-bold text-white">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 font-tech">
                      {phase.date}
                    </p>
                  </div>
                  
                  <div className={`px-4 py-2 rounded-lg ${getStatusBg(phase.status)}`}>
                    <span className={`font-tech font-bold ${getStatusColor(phase.status)}`}>
                      {phase.status === 'em-progresso' ? 'Em Progresso' :
                       phase.status === 'concluido' ? 'Concluído' :
                       phase.status === 'planejado' ? 'Planejado' :
                       'Futuro'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${getStatusColor(phase.status)}`} />
                      <span className="text-gray-300 font-tech">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              Perguntas <span className="text-cyber-green">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto">
              Esclarecemos as principais dúvidas sobre o ZVX Token e como ele 
              revolucionará sua experiência com automações.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: "O que torna o ZVX Token diferente de outras criptomoedas?",
                answer: "ZVX é o primeiro token focado exclusivamente em automações empresariais. Enquanto outras cryptos são especulativas, ZVX tem utilidade real: você paga automações, recebe descontos, participa da governança e ganha dividendos. É uma moeda de trabalho, não apenas investimento.",
                icon: Star
              },
              {
                question: "Como funciona o sistema de descontos com ZVX?",
                answer: "Quanto mais ZVX você possui, maiores os descontos: 1K-10K ZVX = 20% off, 10K-50K = 35% off, 50K+ = 50% off. Os descontos são aplicados automaticamente ao pagar automações. Holders premium também recebem cashback de 5-15% em ZVX.",
                icon: Coins
              },
              {
                question: "É seguro investir em ZVX? Há risco de perder tudo?",
                answer: "Como qualquer crypto, há riscos. Porém, ZVX tem vantagens: utilidade real (não especulativo), revenue share da plataforma, staking com retornos fixos e queima de tokens (deflação). Nossa plataforma já é rentável, então o token tem fundamento econômico sólido.",
                icon: Shield
              },
              {
                question: "Quando o ZVX será lançado e onde posso comprar?",
                answer: "Lançamento previsto para Q3 2024. Fases: 1) Presale para whitelist (desconto 40%), 2) Public sale, 3) Listing em DEXs, 4) Exchanges centralizadas. Entre na whitelist agora para acesso exclusivo e melhores preços.",
                icon: Rocket
              },
              {
                question: "Como o staking funciona? Posso perder meus tokens?",
                answer: "Staking é 100% seguro via smart contracts auditados. Você escolhe o período (3, 6 ou 12 meses) e recebe APY fixo (8%, 12% ou 15%). Pode unstake a qualquer momento pagando pequena taxa. Não há risco de perda, apenas oportunidade de ganho.",
                icon: Lock
              },
              {
                question: "Qual o potencial de valorização do ZVX?",
                answer: "Projeções conservadoras: mercado de automação cresce 30% ao ano, nossa plataforma capta 1% = R$ 500M receita. Com 20% revenue share e mechanism de queima, estimamos 300-500% valorização em 2 anos. Não é garantia, mas fundamento é sólido.",
                icon: TrendingUp
              },
              {
                question: "Pequenas empresas podem usar ZVX ou é só para grandes corporações?",
                answer: "ZVX democratiza automações! Startups começam com 100 ZVX (≈R$ 50), PMEs com 1K-5K ZVX. Temos automações desde R$ 10/mês. Grandes economias proporcionais: pequena empresa economiza 60-70%, grandes corporações economizam milhões.",
                icon: Users
              },
              {
                question: "Como participar da governança? Meu voto realmente importa?",
                answer: "Sim! 1 ZVX = 1 voto. Votações mensais sobre features, parcerias, alocação de fundos. Holders de 10K+ ZVX podem propor mudanças. Decisões recentes da comunidade: integração WhatsApp (aprovada), aumento do APY de staking (aprovada). Sua voz importa!",
                icon: Globe
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 + index * 0.1 }}
                className="cyber-card hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyber-green/20 rounded-xl group-hover:bg-cyber-green/30 transition-colors flex-shrink-0">
                    <faq.icon className="h-6 w-6 text-cyber-green" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-tech font-bold text-white group-hover:text-cyber-green transition-colors leading-tight">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4 }}
            className="mt-12 text-center"
          >
            <div className="cyber-card bg-dark-surface/30 border-2 border-cyber-green/30">
              <h3 className="text-xl font-tech font-bold text-white mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-400 mb-6">
                Nossa comunidade e time de especialistas estão prontos para ajudar 
                com qualquer pergunta sobre ZVX Token.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="cyber-button px-6 py-3">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Discord Community
                </button>
                <button className="cyber-button px-6 py-3">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Suporte
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              Segurança & <span className="text-cyber-blue">Auditoria</span>
            </h2>
            <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto">
              Transparência total e segurança de nível enterprise para proteger 
              seus investimentos e garantir confiabilidade da plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Smart Contracts Auditados",
                description: "Auditoria completa por CertiK e Quantstamp. Código aberto verificável no GitHub.",
                status: "Concluído"
              },
              {
                icon: Lock,
                title: "Multi-Sig Treasury",
                description: "Funds protegidos por carteira multi-assinatura 3/5 com timelock de 48h.",
                status: "Ativo"
              },
              {
                icon: CheckCircle,
                title: "KYC/AML Compliance",
                description: "Equipe totalmente identificada. Compliance com regulações brasileiras e internacionais.",
                status: "Verificado"
              },
              {
                icon: BarChart3,
                title: "Transparência Total",
                description: "Relatórios financeiros trimestrais. Todas as transações verificáveis on-chain.",
                status: "Público"
              }
            ].map((security, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.1 + index * 0.1 }}
                className="cyber-card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyber-blue/20 rounded-xl">
                    <security.icon className="h-8 w-8 text-cyber-blue" />
                  </div>
                </div>
                <h3 className="text-lg font-tech font-bold text-white mb-3">
                  {security.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {security.description}
                </p>
                <span className="inline-block px-3 py-1 bg-cyber-green/20 text-cyber-green text-xs font-tech font-semibold rounded-full">
                  {security.status}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Audit Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
            className="mt-12"
          >
            <div className="cyber-card bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border-2 border-cyber-blue/30">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-tech font-bold text-white mb-4">
                  📋 Relatórios de Auditoria
                </h3>
                <p className="text-gray-400">
                  Acesse todos os relatórios de segurança e auditoria dos nossos smart contracts.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="cyber-button px-6 py-3 flex items-center justify-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Auditoria CertiK
                </button>
                <button className="cyber-button px-6 py-3 flex items-center justify-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Auditoria Quantstamp
                </button>
                <button className="cyber-button px-6 py-3 flex items-center justify-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Código no GitHub
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6 }}
          className="text-center"
        >
          <div className="cyber-card bg-gradient-to-r from-cyber-yellow/10 via-cyber-blue/10 to-cyber-purple/10 border-2 border-cyber-yellow/30">
            <h2 className="text-3xl lg:text-4xl font-cyber font-bold text-white mb-6">
              Seja um <span className="text-cyber-yellow">Early Adopter</span>
            </h2>
            <p className="text-xl text-gray-300 font-tech mb-8 max-w-2xl mx-auto">
              Junte-se à nossa comunidade e seja o primeiro a saber sobre o lançamento 
              do ZVX Token. Oportunidades exclusivas aguardam os pioneiros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="cyber-button-glow px-8 py-4 text-lg">
                <Star className="h-5 w-5 mr-2" />
                Whitelist Early Access
              </button>
              <button className="cyber-button px-8 py-4 text-lg">
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: "Discord", count: "5k+" },
                { label: "Telegram", count: "3k+" },
                { label: "Twitter", count: "12k+" },
                { label: "Whitelist", count: "500+" }
              ].map((social, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl font-cyber font-bold text-cyber-yellow">
                    {social.count}
                  </div>
                  <div className="text-sm text-gray-400 font-tech">
                    {social.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center"
        >
          <div className="max-w-4xl mx-auto p-6 bg-dark-surface/30 border border-cyber-blue/20 rounded-lg">
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong className="text-gray-400">Disclaimer:</strong> ZVX Token está em desenvolvimento. 
              As informações apresentadas são preliminares e podem sofrer alterações. 
              Este não é um conselho de investimento. Criptomoedas envolvem riscos. 
              Sempre faça sua própria pesquisa antes de investir.
            </p>
          </div>
        </motion.div>

        {/* TODO: Integration Areas */}
        {/*
          ÁREAS PARA INTEGRAÇÃO FUTURA:
          
          1. Whitelist System:
             - Email capture para early access
             - Smart contract integration
             - KYC/AML compliance
          
          2. Community Features:
             - Discord bot integration
             - Telegram notifications
             - Social media APIs
          
          3. Token Launch:
             - Presale smart contracts
             - DEX integration
             - Staking mechanisms
          
          4. DAO Governance:
             - Voting mechanisms
             - Proposal submissions
             - Execution protocols
        */}
      </div>
    </div>
  )
}