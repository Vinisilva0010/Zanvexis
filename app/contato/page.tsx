'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  CheckCircle,
  Zap,
  Users,
  HeartHandshake,
  Globe,
  Calendar,
  ArrowRight,
  Star
} from 'lucide-react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Comercial",
      value: "comercial@zanvexis.com",
      description: "Para parcerias e oportunidades de negócio",
      color: "text-cyber-blue"
    },
    {
      icon: MessageSquare,
      title: "Suporte Técnico",
      value: "suporte@zanvexis.com", 
      description: "Ajuda com automações e problemas técnicos",
      color: "text-cyber-green"
    },
    {
      icon: Users,
      title: "Recursos Humanos",
      value: "rh@zanvexis.com",
      description: "Carreiras e oportunidades de trabalho",
      color: "text-cyber-purple"
    },
    {
      icon: HeartHandshake,
      title: "Relações Públicas",
      value: "imprensa@zanvexis.com",
      description: "Mídia, imprensa e comunicação",
      color: "text-cyber-pink"
    }
  ]

  const offices = [
    {
      city: "São Paulo",
      country: "Brasil",
      address: "Av. Paulista, 1000 - Bela Vista",
      phone: "+55 (11) 99999-9999",
      hours: "09:00 - 18:00 (UTC-3)",
      isPrimary: true
    },
    {
      city: "Londres",
      country: "Reino Unido", 
      address: "123 Tech Street, London EC1",
      phone: "+44 20 7000 0000",
      hours: "09:00 - 17:00 (GMT)",
      isPrimary: false
    },
    {
      city: "San Francisco",
      country: "Estados Unidos",
      address: "456 Innovation Ave, SF CA",
      phone: "+1 (415) 000-0000", 
      hours: "09:00 - 17:00 (PST)",
      isPrimary: false
    }
  ]

  const socialLinks = [
    { platform: "LinkedIn", handle: "/company/zanvexis", followers: "50k+" },
    { platform: "Twitter", handle: "@zanvexis", followers: "25k+" },
    { platform: "GitHub", handle: "/zanvexis", followers: "15k+" },
    { platform: "Discord", handle: "Zanvexis Community", followers: "10k+" }
  ]

  const faqs = [
    {
      question: "Qual o tempo de resposta?",
      answer: "Respondemos emails comerciais em até 4 horas úteis e suporte técnico em até 2 horas."
    },
    {
      question: "Posso agendar uma demonstração?",
      answer: "Sim! Use nosso calendário online ou entre em contato para agendar uma demo personalizada."
    },
    {
      question: "Vocês oferecem suporte 24/7?",
      answer: "Para clientes Enterprise, oferecemos suporte 24/7. Outros planos têm suporte em horário comercial."
    },
    {
      question: "Como posso me tornar um parceiro?",
      answer: "Entre em contato através do email comercial com sua proposta de parceria."
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
      
      console.log('Contact form submitted:', formData)
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
              Mensagem <span className="text-cyber-green">Enviada!</span>
            </h1>
            <p className="text-xl text-gray-400 font-tech">
              Recebemos sua mensagem e responderemos em breve. Obrigado pelo contato!
            </p>
          </div>

          <div className="cyber-card text-left space-y-4">
            <h3 className="text-xl font-tech font-bold text-cyber-blue">
              O que acontece agora:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-cyber-blue mt-0.5" />
                <span className="text-gray-300">Nossa equipe analisará sua mensagem</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-cyber-blue mt-0.5" />
                <span className="text-gray-300">Entraremos em contato em até 4 horas úteis</span>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-cyber-blue mt-0.5" />
                <span className="text-gray-300">Se necessário, agendaremos uma reunião</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({ nome: '', email: '', empresa: '', assunto: '', mensagem: '' })
            }}
            className="cyber-button px-8 py-4"
          >
            Enviar Nova Mensagem
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
            Fale <span className="text-cyber-blue">Conosco</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar você a transformar seu negócio. 
            Entre em contato e descubra como a Zanvexis pode revolucionar suas operações.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="cyber-card">
              <h2 className="text-2xl font-cyber font-bold text-white mb-6">
                Envie sua <span className="text-cyber-blue">Mensagem</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="cyber-input w-full"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                      Assunto *
                    </label>
                    <select
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      className="cyber-input w-full"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="comercial">Interesse Comercial</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="parceria">Proposta de Parceria</option>
                      <option value="imprensa">Imprensa/Mídia</option>
                      <option value="carreira">Oportunidades de Carreira</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-tech font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="cyber-input w-full resize-none"
                    placeholder="Descreva como podemos ajudar você..."
                  />
                </div>

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
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="cyber-card">
              <h3 className="text-xl font-tech font-bold text-white mb-6">
                Canais de <span className="text-cyber-green">Atendimento</span>
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-dark-surface/50 rounded-lg hover:bg-dark-surface/70 transition-colors"
                    >
                      <div className={`p-2 bg-cyber-blue/20 rounded-lg ${method.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-tech font-semibold text-white mb-1">
                          {method.title}
                        </h4>
                        <a 
                          href={`mailto:${method.value}`}
                          className={`font-tech ${method.color} hover:underline transition-colors`}
                        >
                          {method.value}
                        </a>
                        <p className="text-gray-400 text-sm mt-1">
                          {method.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="cyber-card">
              <h3 className="text-xl font-tech font-bold text-white mb-6">
                Ações <span className="text-cyber-purple">Rápidas</span>
              </h3>
              
              <div className="space-y-4">
                <button className="w-full p-4 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/30 rounded-lg hover:border-cyber-blue/60 transition-all duration-300 text-left group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-cyber-blue" />
                      <span className="font-tech font-semibold text-white group-hover:text-cyber-blue transition-colors">
                        Agendar Demo
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-cyber-blue transition-colors" />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 ml-8">
                    Demonstração personalizada em 30 minutos
                  </p>
                </button>

                <button className="w-full p-4 bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 border border-cyber-green/30 rounded-lg hover:border-cyber-green/60 transition-all duration-300 text-left group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-cyber-green" />
                      <span className="font-tech font-semibold text-white group-hover:text-cyber-green transition-colors">
                        Chat ao Vivo
                      </span>
                    </div>
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 ml-8">
                    Suporte online disponível agora
                  </p>
                </button>

                <button className="w-full p-4 bg-gradient-to-r from-cyber-purple/20 to-cyber-pink/20 border border-cyber-purple/30 rounded-lg hover:border-cyber-purple/60 transition-all duration-300 text-left group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-cyber-purple" />
                      <span className="font-tech font-semibold text-white group-hover:text-cyber-purple transition-colors">
                        Consultoria Express
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-cyber-purple transition-colors" />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 ml-8">
                    Análise gratuita do seu processo
                  </p>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Offices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cyber font-bold text-white mb-4">
              Nossos <span className="text-cyber-blue">Escritórios</span>
            </h2>
            <p className="text-gray-400 font-tech">
              Presença global para atender você onde estiver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`cyber-card ${office.isPrimary ? 'ring-2 ring-cyber-blue' : ''} hover:scale-105 transition-transform duration-300`}
              >
                {office.isPrimary && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm font-tech font-bold rounded-full">
                      Sede Principal
                    </span>
                  </div>
                )}
                
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-tech font-bold text-white">
                      {office.city}
                    </h3>
                    <p className="text-gray-400 text-sm">{office.country}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-cyber-blue" />
                      <span className="text-gray-300 text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-cyber-green" />
                      <span className="text-gray-300 text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-cyber-purple" />
                      <span className="text-gray-300 text-sm">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social & Community */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cyber font-bold text-white mb-4">
              Conecte-se <span className="text-cyber-green">Conosco</span>
            </h2>
            <p className="text-gray-400 font-tech">
              Junte-se à nossa comunidade global de inovadores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="cyber-card text-center hover:scale-105 transition-transform duration-300 group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="text-2xl">{social.platform === 'LinkedIn' ? '💼' : social.platform === 'Twitter' ? '🐦' : social.platform === 'GitHub' ? '💻' : '🎮'}</div>
                  <h3 className="font-tech font-bold text-white group-hover:text-cyber-blue transition-colors">
                    {social.platform}
                  </h3>
                  <p className="text-gray-400 text-sm">{social.handle}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <Users className="h-4 w-4 text-cyber-green" />
                    <span className="text-cyber-green font-tech font-bold text-sm">
                      {social.followers}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cyber font-bold text-white mb-4">
              Perguntas <span className="text-cyber-yellow">Frequentes</span>
            </h2>
            <p className="text-gray-400 font-tech">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="cyber-card"
              >
                <h3 className="font-tech font-semibold text-cyber-blue mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TODO: Integration Areas */}
        {/*
          ÁREAS PARA INTEGRAÇÃO:
          
          1. Form Backend:
             - handleSubmit() - API integration
             - Email notifications
             - CRM lead creation
          
          2. Live Chat:
             - Intercom/Zendesk integration
             - Real-time support
             - Bot automation
          
          3. Calendar Booking:
             - Calendly integration
             - Google Calendar API
             - Automated scheduling
          
          4. Analytics:
             - Contact form conversion tracking
             - Source attribution
             - A/B testing
        */}
      </div>
    </div>
  )
}