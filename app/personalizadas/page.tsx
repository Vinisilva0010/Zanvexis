'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Lightbulb, 
  Rocket, 
  Target, 
  Zap,
  CheckCircle,
  Clock,
  Users,
  Star,
  ArrowRight,
  FileText,
  MessageSquare,
  Settings,
  BarChart3
} from 'lucide-react'

export default function PersonalizadasPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    tipoAutomacao: '',
    descricaoProblema: '',
    volumeDados: '',
    prazo: '',
    orcamento: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const automationTypes = [
    { value: 'marketing', label: 'Marketing & Vendas', icon: Target },
    { value: 'financeiro', label: 'Financeiro & Contábil', icon: BarChart3 },
    { value: 'operacoes', label: 'Operações & Logística', icon: Settings },
    { value: 'rh', label: 'Recursos Humanos', icon: Users },
    { value: 'atendimento', label: 'Atendimento ao Cliente', icon: MessageSquare },
    { value: 'dados', label: 'Análise de Dados', icon: BarChart3 },
    { value: 'compliance', label: 'Compliance & Auditoria', icon: FileText },
    { value: 'outro', label: 'Outro', icon: Lightbulb }
  ]

  const processSteps = [
    {
      number: 1,
      title: "Análise de Requisitos",
      description: "Nossa equipe analisa sua solicitação e identifica os pontos-chave para a automação.",
      icon: Lightbulb,
      duration: "2-3 dias"
    },
    {
      number: 2,
      title: "Proposta Técnica",
      description: "Desenvolvemos uma proposta detalhada com escopo, cronograma e investimento.",
      icon: FileText,
      duration: "3-5 dias"
    },
    {
      number: 3,
      title: "Desenvolvimento",
      description: "Nossos especialistas constroem sua automação personalizada com testes rigorosos.",
      icon: Settings,
      duration: "1-4 semanas"
    },
    {
      number: 4,
      title: "Implementação",
      description: "Colocamos sua automação em produção e treinamos sua equipe.",
      icon: Rocket,
      duration: "2-5 dias"
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "100% Personalizada",
      description: "Automação desenvolvida especificamente para suas necessidades únicas."
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Projetos entregues em até 4 semanas, com acompanhamento diário."
    },
    {
      icon: Users,
      title: "Equipe Dedicada",
      description: "Time de especialistas exclusivo para seu projeto."
    },
    {
      icon: Star,
      title: "Suporte Vitalício",
      description: "Manutenção e evolução contínua da sua automação."
    }
  ]

  const successStories = [
    {
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Gestão manual de estoque",
      solution: "Automação de reposição inteligente",
      results: "75% redução em rupturas, 40% economia em custos",
      savings: "R$ 2.3M/ano"
    },
    {
      company: "LogiFlow",
      industry: "Logística",
      challenge: "Rastreamento manual de entregas",
      solution: "Sistema automatizado de tracking",
      results: "99% acurácia, 60% redução em reclamações",
      savings: "R$ 1.8M/ano"
    },
    {
      company: "FinanceWise",
      industry: "Financeiro",
      challenge: "Conciliação bancária manual",
      solution: "Reconciliação automática multi-banco",
      results: "95% automação, 80% redução em tempo",
      savings: "R$ 950K/ano"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Integrate with backend API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 bg-dark-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8 max-w-2xl mx-auto px-4"
        >
          <div className="w-24 h-24 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-12 w-12 text-cyber-green" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-cyber font-bold text-white">
              Solicitação <span className="text-cyber-green">Enviada!</span>
            </h1>
            <p className="text-xl text-gray-400 font-tech">
              Recebemos sua solicitação e nossa equipe entrará em contato em até 24 horas.
            </p>
          </div>

          <div className="cyber-card text-left space-y-4">
            <h3 className="text-xl font-tech font-bold text-cyber-blue">
              Próximos Passos:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyber-blue rounded-full flex items-center justify-center text-xs font-bold text-dark-bg">
                  1
                </div>
                <span className="text-gray-300">Um especialista analisará sua solicitação</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyber-blue rounded-full flex items-center justify-center text-xs font-bold text-dark-bg">
                  2
                </div>
                <span className="text-gray-300">Agendaremos uma reunião para entender melhor suas necessidades</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyber-blue rounded-full flex items-center justify-center text-xs font-bold text-dark-bg">
                  3
                </div>
                <span className="text-gray-300">Desenvolveremos uma proposta personalizada</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                nome: '', email: '', empresa: '', telefone: '', tipoAutomacao: '',
                descricaoProblema: '', volumeDados: '', prazo: '', orcamento: ''
              })
            }}
            className="cyber-button px-8 py-4"
          >
            Nova Solicitação
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-cyber font-bold text-white mb-6">
            Automações <span className="text-cyber-purple">Personalizadas</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Transforme processos únicos em automações inteligentes. 
            Nossa equipe desenvolve soluções sob medida para seus desafios específicos.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="cyber-card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-xl">
                    <Icon className="h-8 w-8 text-cyber-purple" />
                  </div>
                </div>
                <h3 className="text-lg font-tech font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="cyber-card">
              <h2 className="text-2xl font-cyber font-bold text-white mb-6">
                Conte-nos sobre seu <span className="text-cyber-purple">Desafio</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="cyber-input w-full"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="cyber-input w-full"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      required
                      className="cyber-input w-full"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="cyber-input w-full"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                {/* Automation Type */}
                <div>
                  <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                    Tipo de Automação *
                  </label>
                  <select
                    name="tipoAutomacao"
                    value={formData.tipoAutomacao}
                    onChange={handleInputChange}
                    required
                    className="cyber-input w-full"
                  >
                    <option value="">Selecione o tipo</option>
                    {automationTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                    Descrição do Problema *
                  </label>
                  <textarea
                    name="descricaoProblema"
                    value={formData.descricaoProblema}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="cyber-input w-full resize-none"
                    placeholder="Descreva detalhadamente o processo que você gostaria de automatizar, incluindo etapas manuais atuais, frequência, pessoas envolvidas e principais dores..."
                  />
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                      Volume de Dados
                    </label>
                    <select
                      name="volumeDados"
                      value={formData.volumeDados}
                      onChange={handleInputChange}
                      className="cyber-input w-full"
                    >
                      <option value="">Selecione</option>
                      <option value="baixo">Baixo (até 1k registros/mês)</option>
                      <option value="medio">Médio (1k-10k registros/mês)</option>
                      <option value="alto">Alto (10k-100k registros/mês)</option>
                      <option value="muito-alto">Muito Alto (100k+ registros/mês)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                      Prazo Desejado
                    </label>
                    <select
                      name="prazo"
                      value={formData.prazo}
                      onChange={handleInputChange}
                      className="cyber-input w-full"
                    >
                      <option value="">Selecione</option>
                      <option value="urgente">Urgente (1-2 semanas)</option>
                      <option value="normal">Normal (3-4 semanas)</option>
                      <option value="flexivel">Flexível (1-2 meses)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                    Orçamento Estimado
                  </label>
                  <select
                    name="orcamento"
                    value={formData.orcamento}
                    onChange={handleInputChange}
                    className="cyber-input w-full"
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="5k-15k">R$ 5.000 - R$ 15.000</option>
                    <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
                    <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
                    <option value="50k+">R$ 50.000+</option>
                    <option value="nao-sei">Não tenho certeza</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full cyber-button-glow py-4 px-6 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Solicitação</span>
                      </>
                    )}
                  </span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Seus dados estão seguros. Não compartilhamos informações com terceiros.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Process & Success Stories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Process Steps */}
            <div className="cyber-card">
              <h3 className="text-xl font-tech font-bold text-white mb-6">
                Como <span className="text-cyber-blue">Funciona</span>
              </h3>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center">
                          <span className="text-cyber-blue font-cyber font-bold">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-tech font-semibold text-white">
                            {step.title}
                          </h4>
                          <span className="px-2 py-1 bg-cyber-green/20 text-cyber-green text-xs rounded">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Success Stories */}
            <div className="cyber-card">
              <h3 className="text-xl font-tech font-bold text-white mb-6">
                Casos de <span className="text-cyber-green">Sucesso</span>
              </h3>
              
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div key={index} className="border-l-2 border-cyber-blue/30 pl-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-tech font-semibold text-cyber-blue">
                        {story.company}
                      </h4>
                      <span className="text-cyber-green font-tech font-bold text-sm">
                        {story.savings}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{story.industry}</p>
                    <p className="text-sm text-gray-300">{story.results}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Option */}
            <div className="cyber-card bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10">
              <h3 className="text-lg font-tech font-bold text-white mb-4">
                Precisa falar antes?
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Nossa equipe está disponível para uma conversa inicial sem compromisso.
              </p>
              <button className="cyber-button w-full py-3">
                <MessageSquare className="h-4 w-4 mr-2" />
                Agendar Conversa
              </button>
            </div>
          </motion.div>
        </div>

        {/* TODO: Integration Areas */}
        {/*
          ÁREAS PARA INTEGRAÇÃO:
          
          1. Backend API:
             - handleSubmit() - enviar dados para API
             - Validação server-side
             - Notification system
          
          2. CRM Integration:
             - Salesforce/HubSpot lead creation
             - Follow-up automation
             - Pipeline tracking
          
          3. Communication:
             - Email notifications
             - Slack/Teams integration
             - Calendar scheduling
          
          4. File Upload:
             - Anexar documentos
             - Process specifications
             - Current workflow diagrams
        */}
      </div>
    </div>
  )
}