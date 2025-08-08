'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  Activity, 
  BarChart3, 
  Clock, 
  Play, 
  Pause, 
  Settings, 
  Zap, 
  TrendingUp,
  Users,
  Target,
  Calendar,
  ArrowUpRight,
  CheckCircle,
  AlertTriangle,
  Download
} from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  // Mock data for the dashboard
  const stats = [
    {
      title: "Automações Ativas",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Zap,
      color: "text-cyber-blue"
    },
    {
      title: "Execuções Hoje",
      value: "1,429",
      change: "+23%",
      trend: "up",
      icon: Activity,
      color: "text-cyber-green"
    },
    {
      title: "Tempo Economizado",
      value: "127h",
      change: "+8%",
      trend: "up",
      icon: Clock,
      color: "text-cyber-purple"
    },
    {
      title: "Taxa de Sucesso",
      value: "99.7%",
      change: "+0.2%",
      trend: "up",
      icon: Target,
      color: "text-cyber-yellow"
    }
  ]

  const recentAutomations = [
    {
      id: 1,
      name: "Processamento de Leads",
      status: "active",
      lastRun: "2 min atrás",
      executions: 89,
      success: 98.9
    },
    {
      id: 2,
      name: "Backup Automático",
      status: "active",
      lastRun: "15 min atrás",
      executions: 12,
      success: 100
    },
    {
      id: 3,
      name: "Relatório Semanal",
      status: "paused",
      lastRun: "2h atrás",
      executions: 24,
      success: 95.8
    },
    {
      id: 4,
      name: "Sincronização CRM",
      status: "error",
      lastRun: "5h atrás",
      executions: 156,
      success: 87.2
    }
  ]

  const quickActions = [
    {
      title: "Nova Automação",
      description: "Criar uma nova automação personalizada",
      icon: Zap,
      href: "/automacoes",
      color: "from-cyber-blue to-cyber-purple"
    },
    {
      title: "Ver Relatórios",
      description: "Análise detalhada de performance",
      icon: BarChart3,
      href: "/relatorios",
      color: "from-cyber-green to-cyber-blue"
    },
    {
      title: "Configurações",
      description: "Gerenciar conta e preferências",
      icon: Settings,
      href: "/configuracoes",
      color: "from-cyber-purple to-cyber-pink"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-cyber-green'
      case 'paused': return 'text-cyber-yellow'
      case 'error': return 'text-cyber-pink'
      default: return 'text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Play className="h-4 w-4" />
      case 'paused': return <Pause className="h-4 w-4" />
      case 'error': return <AlertTriangle className="h-4 w-4" />
      default: return <CheckCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl lg:text-4xl font-cyber font-bold text-white">
                Dashboard
              </h1>
              <p className="text-gray-400 font-tech mt-2">
                Gerencie suas automações e monitore a performance
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="cyber-button px-6 py-3">
                <Download className="h-4 w-4 mr-2" />
                Exportar Relatório
              </button>
              <button className="cyber-button-glow px-6 py-3">
                <Zap className="h-4 w-4 mr-2" />
                Nova Automação
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="cyber-card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-cyber-blue/20 rounded-xl ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`text-sm font-tech flex items-center ${
                    stat.trend === 'up' ? 'text-cyber-green' : 'text-cyber-pink'
                  }`}>
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    {stat.change}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <div className="text-2xl font-cyber font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-tech">
                    {stat.title}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Automações Recentes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 cyber-card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-tech font-bold text-white">
                Automações Recentes
              </h2>
              <button className="text-cyber-blue hover:text-white transition-colors text-sm font-tech">
                Ver todas
              </button>
            </div>

            <div className="space-y-4">
              {recentAutomations.map((automation, index) => (
                <motion.div
                  key={automation.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-dark-surface/50 border border-cyber-blue/20 rounded-lg hover:border-cyber-blue/40 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 bg-cyber-blue/20 rounded-lg ${getStatusColor(automation.status)}`}>
                      {getStatusIcon(automation.status)}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="font-tech font-semibold text-white">
                        {automation.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        Última execução: {automation.lastRun}
                      </div>
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="text-sm font-tech text-white">
                      {automation.executions} execuções
                    </div>
                    <div className={`text-sm ${
                      automation.success >= 95 ? 'text-cyber-green' : 
                      automation.success >= 90 ? 'text-cyber-yellow' : 'text-cyber-pink'
                    }`}>
                      {automation.success}% sucesso
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Actions Card */}
            <div className="cyber-card">
              <h2 className="text-xl font-tech font-bold text-white mb-6">
                Ações Rápidas
              </h2>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      onClick={() => router.push(action.href)}
                      className={`w-full p-4 bg-gradient-to-r ${action.color} bg-opacity-20 border border-cyber-blue/30 rounded-lg hover:border-cyber-blue/60 transition-all duration-300 group text-left`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="space-y-1">
                          <div className="font-tech font-semibold text-white group-hover:text-cyber-blue transition-colors">
                            {action.title}
                          </div>
                          <div className="text-sm text-gray-400">
                            {action.description}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="cyber-card">
              <h2 className="text-xl font-tech font-bold text-white mb-6">
                Próximos Eventos
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-dark-surface/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-cyber-blue" />
                  <div className="space-y-1">
                    <div className="text-sm font-tech text-white">
                      Backup Semanal
                    </div>
                    <div className="text-xs text-gray-400">
                      Hoje às 23:00
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-dark-surface/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-cyber-purple" />
                  <div className="space-y-1">
                    <div className="text-sm font-tech text-white">
                      Relatório Mensal
                    </div>
                    <div className="text-xs text-gray-400">
                      Amanhã às 09:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}