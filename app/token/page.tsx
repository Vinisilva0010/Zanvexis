'use client'

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
  BarChart3
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
      benefit: "50% desconto"
    },
    {
      icon: Users,
      title: "Governança DAO",
      description: "Participe das decisões da plataforma votando em propostas e melhorias.",
      benefit: "Poder de voto"
    },
    {
      icon: Star,
      title: "Staking Rewards",
      description: "Ganhe recompensas fazendo staking dos seus tokens ZVX na plataforma.",
      benefit: "Até 15% APY"
    },
    {
      icon: Rocket,
      title: "Acesso Exclusivo",
      description: "Automações premium e recursos avançados exclusivos para holders.",
      benefit: "Acesso VIP"
    },
    {
      icon: TrendingUp,
      title: "Revenue Share",
      description: "Participe dos lucros da plataforma proporcionalmente aos seus holdings.",
      benefit: "Dividendos"
    },
    {
      icon: Shield,
      title: "Seguro Descentralizado",
      description: "Proteção automática contra falhas em automações críticas.",
      benefit: "Proteção total"
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
            A criptomoeda que impulsiona o futuro da automação descentralizada. 
            Junte-se à revolução econômica da inteligência artificial.
          </motion.p>

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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  
                  <p className="text-gray-400 leading-relaxed">
                    {utility.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Tokenomics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
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