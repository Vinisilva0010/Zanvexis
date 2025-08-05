'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Rocket, 
  Brain, 
  Users, 
  Star,
  Play,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "IA Avançada",
      description: "Algoritmos de última geração que aprendem e se adaptam às suas necessidades."
    },
    {
      icon: Shield,
      title: "Segurança Premium",
      description: "Proteção de dados enterprise com criptografia de nível militar."
    },
    {
      icon: Rocket,
      title: "Performance Extrema",
      description: "Execução ultrarrápida com 99.9% de uptime garantido."
    },
    {
      icon: Users,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível a qualquer momento."
    }
  ]

  const stats = [
    { value: "10M+", label: "Automações Executadas" },
    { value: "50K+", label: "Empresas Ativas" },
    { value: "99.9%", label: "Uptime Garantido" },
    { value: "24/7", label: "Suporte Premium" }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b74d8dc7?w=100&h=100&fit=crop&crop=face",
      content: "Zanvexis revolucionou nossa operação. 300% de aumento em produtividade."
    },
    {
      name: "João Santos",
      role: "CTO, InnovaTech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "A plataforma mais avançada que já utilizamos. Resultados impressionantes."
    },
    {
      name: "Ana Costa",
      role: "Diretora, FutureCorp",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      content: "ROI de 500% no primeiro trimestre. Zanvexis é o futuro."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-cyber font-bold leading-tight">
                <span className="block bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                  A REVOLUÇÃO
                </span>
                <span className="block text-white mt-4">
                  DAS AUTOMAÇÕES
                </span>
                <span className="block bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent mt-4">
                  COMEÇA AQUI
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-tech">
                Transforme seu negócio com automações inteligentes de nível enterprise. 
                Tecnologia de ponta que coloca você anos à frente da concorrência.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/automacoes" className="cyber-button-glow text-lg px-10 py-4">
                <span className="flex items-center space-x-3">
                  <span>Explorar Soluções</span>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              
              <button className="flex items-center space-x-3 text-lg text-cyber-blue hover:text-white transition-colors group">
                <div className="p-3 bg-cyber-blue/20 rounded-full group-hover:bg-cyber-blue/40 transition-colors">
                  <Play className="h-6 w-6" />
                </div>
                <span className="font-tech font-medium">Ver Demonstração</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl lg:text-4xl font-cyber font-bold text-cyber-blue">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-tech">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              Tecnologia <span className="text-cyber-blue">Revolucionária</span>
            </h2>
            <p className="text-xl text-gray-400 font-tech leading-relaxed">
              Construído com as tecnologias mais avançadas do planeta para entregar 
              resultados que superam todas as expectativas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-card text-center space-y-4 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-cyber-blue/20 rounded-xl">
                      <Icon className="h-8 w-8 text-cyber-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl font-tech font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white">
                Por que escolher a <span className="text-cyber-purple">Zanvexis?</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  "Automações 10x mais rápidas que a concorrência",
                  "IA que aprende e evolui com seu negócio",
                  "Integração com 500+ ferramentas populares",
                  "ROI médio de 400% nos primeiros 6 meses",
                  "Suporte white-glove para clientes premium"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <CheckCircle className="h-6 w-6 text-cyber-green flex-shrink-0" />
                    <span className="text-lg text-gray-300 font-tech">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/planos" className="cyber-button inline-flex items-center space-x-3 text-lg px-8 py-4">
                <span>Ver Planos Premium</span>
                <TrendingUp className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Video Demo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-dark-surface border border-cyber-blue/30 rounded-2xl p-8 space-y-6">
                {/* Video placeholder - ready for real video integration */}
                <div className="aspect-video bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-xl flex items-center justify-center group cursor-pointer">
                  <div className="p-6 bg-cyber-blue/20 rounded-full group-hover:bg-cyber-blue/40 transition-colors">
                    <Play className="h-12 w-12 text-cyber-blue" />
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-tech font-bold text-white">
                    Veja a Zanvexis em Ação
                  </h3>
                  <p className="text-gray-400">
                    Demonstração completa de 5 minutos mostrando o poder das nossas automações.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
              Líderes <span className="text-cyber-green">Confiam</span> em Nós
            </h2>
            <p className="text-xl text-gray-400 font-tech leading-relaxed">
              Empresas de todos os tamanhos estão transformando seus resultados com Zanvexis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card space-y-6"
              >
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-cyber-yellow fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-cyber-blue/50"
                  />
                  <div>
                    <div className="font-tech font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-cyber-blue">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-cyber font-bold text-white">
              Pronto para <span className="text-cyber-blue">Revolucionar</span>?
            </h2>
            <p className="text-xl text-gray-300 font-tech leading-relaxed max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já estão usando o futuro da automação. 
              Comece sua transformação hoje mesmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup" className="cyber-button-glow text-lg px-10 py-4">
                Começar Agora - Grátis
              </Link>
              <Link href="/contato" className="cyber-button text-lg px-10 py-4">
                Falar com Especialista
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}