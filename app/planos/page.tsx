'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Check, 
  Zap, 
  Crown, 
  Sparkles, 
  Star,
  ArrowRight,
  Users,
  Shield,
  Rocket,
  Infinity,
  Clock,
  Target,
  BarChart3,
  Headphones
} from 'lucide-react'

export default function PlanosPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: "Starter",
      description: "Perfeito para começar",
      icon: Zap,
      color: "from-cyber-green to-cyber-blue",
      borderColor: "border-cyber-green/30",
      popular: false,
      prices: {
        monthly: 29,
        yearly: 290
      },
      features: [
        "50 automações por mês",
        "5 integrações incluídas",
        "Suporte por email",
        "Dashboard básico",
        "Templates prontos",
        "API básica",
        "Histórico de 30 dias",
        "1 usuário"
      ],
      limits: {
        automations: "50/mês",
        integrations: "5",
        users: "1",
        support: "Email"
      }
    },
    {
      name: "Professional",
      description: "Para equipes em crescimento",
      icon: Crown,
      color: "from-cyber-blue to-cyber-purple",
      borderColor: "border-cyber-blue/60",
      popular: true,
      prices: {
        monthly: 99,
        yearly: 990
      },
      features: [
        "500 automações por mês",
        "Integrações ilimitadas",
        "Suporte prioritário 24/7",
        "Analytics avançados",
        "Templates premium",
        "API completa",
        "Histórico ilimitado",
        "Até 10 usuários",
        "White-label disponível",
        "Webhooks customizados",
        "SSO (Single Sign-On)",
        "Backup automático"
      ],
      limits: {
        automations: "500/mês",
        integrations: "Ilimitadas",
        users: "10",
        support: "24/7 Prioritário"
      }
    },
    {
      name: "Enterprise",
      description: "Solução corporativa completa",
      icon: Sparkles,
      color: "from-cyber-purple to-cyber-pink",
      borderColor: "border-cyber-purple/60",
      popular: false,
      prices: {
        monthly: 299,
        yearly: 2990
      },
      features: [
        "Automações ilimitadas",
        "Integrações customizadas",
        "Gerente de conta dedicado",
        "BI e relatórios avançados",
        "Desenvolvimento customizado",
        "API enterprise",
        "SLA 99.9% uptime",
        "Usuários ilimitados",
        "Compliance LGPD/GDPR",
        "Infraestrutura dedicada",
        "Treinamento presencial",
        "Suporte white-glove"
      ],
      limits: {
        automations: "Ilimitadas",
        integrations: "Customizadas",
        users: "Ilimitados",
        support: "Dedicado"
      }
    }
  ]

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CTO, TechStart",
      plan: "Professional",
      content: "ROI de 400% em 6 meses. A automação revolucionou nossa operação.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Marina Santos",
      role: "CEO, InnovaCorp",
      plan: "Enterprise",
      content: "Suporte excepcional e resultados que superaram todas as expectativas.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face"
    }
  ]

  const comparisonFeatures = [
    {
      category: "Automações",
      features: [
        { name: "Execuções mensais", starter: "50", professional: "500", enterprise: "Ilimitadas" },
        { name: "Complexidade", starter: "Básica", professional: "Avançada", enterprise: "Sem limites" },
        { name: "Templates", starter: "10+", professional: "50+", enterprise: "200+" },
        { name: "IA Integrada", starter: false, professional: true, enterprise: true }
      ]
    },
    {
      category: "Integrações",
      features: [
        { name: "Apps conectados", starter: "5", professional: "Ilimitados", enterprise: "Customizados" },
        { name: "APIs", starter: "Básica", professional: "Completa", enterprise: "Enterprise" },
        { name: "Webhooks", starter: false, professional: true, enterprise: true },
        { name: "Conectores custom", starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: "Suporte",
      features: [
        { name: "Canal", starter: "Email", professional: "24/7 Chat", enterprise: "Dedicado" },
        { name: "SLA", starter: "48h", professional: "4h", enterprise: "1h" },
        { name: "Treinamento", starter: false, professional: "Online", enterprise: "Presencial" },
        { name: "Gerente de conta", starter: false, professional: false, enterprise: true }
      ]
    }
  ]

  const handlePayment = (planName: string, price: number) => {
    // TODO: Integrate with Stripe or Mercado Pago
    console.log(`Iniciando pagamento para ${planName} - R$ ${price}`)
    alert(`Redirecionando para pagamento do plano ${planName} - R$ ${price}${billingCycle === 'yearly' ? '/ano' : '/mês'}`)
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
            Escolha seu <span className="text-cyber-blue">Plano</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed mb-8">
            Soluções flexíveis para empresas de todos os tamanhos. 
            Comece grátis e evolua conforme seu crescimento.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-tech font-medium ${billingCycle === 'monthly' ? 'text-cyber-blue' : 'text-gray-400'}`}>
              Mensal
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-cyber-blue' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-tech font-medium ${billingCycle === 'yearly' ? 'text-cyber-blue' : 'text-gray-400'}`}>
              Anual
            </span>
            {billingCycle === 'yearly' && (
              <span className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm font-tech font-semibold rounded-full">
                Economize 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const price = billingCycle === 'monthly' ? plan.prices.monthly : plan.prices.yearly
            const yearlyDiscount = billingCycle === 'yearly' ? Math.round((1 - plan.prices.yearly / (plan.prices.monthly * 12)) * 100) : 0

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative cyber-card ${
                  plan.popular 
                    ? 'ring-2 ring-cyber-blue scale-105 lg:scale-110' 
                    : ''
                } hover:scale-105 transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple px-6 py-2 rounded-full">
                      <span className="text-white font-tech font-bold text-sm flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>MAIS POPULAR</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${plan.color} bg-opacity-20 rounded-2xl mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-cyber font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 font-tech">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-cyber font-bold text-white">
                        R$ {price}
                      </span>
                      <div className="text-gray-400">
                        <div className="text-sm">
                          /{billingCycle === 'monthly' ? 'mês' : 'ano'}
                        </div>
                      </div>
                    </div>
                    
                    {billingCycle === 'yearly' && yearlyDiscount > 0 && (
                      <div className="text-cyber-green text-sm font-tech">
                        Economize {yearlyDiscount}% pagando anual
                      </div>
                    )}
                    
                    {billingCycle === 'monthly' && (
                      <div className="text-gray-500 text-sm">
                        ou R$ {plan.prices.yearly}/ano
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-cyber-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-tech text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePayment(plan.name, price)}
                  className={`w-full py-4 px-6 rounded-lg font-tech font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button-glow'
                      : 'cyber-button'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Começar Agora</span>
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </button>

                {/* Guarantee */}
                <div className="text-center mt-4">
                  <span className="text-xs text-gray-500 font-tech">
                    30 dias de garantia
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-white text-center mb-12">
            Comparação <span className="text-cyber-blue">Detalhada</span>
          </h2>

          <div className="cyber-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyber-blue/30">
                  <th className="text-left py-4 px-6 font-tech font-semibold text-white">
                    Recursos
                  </th>
                  <th className="text-center py-4 px-6 font-tech font-semibold text-white">
                    Starter
                  </th>
                  <th className="text-center py-4 px-6 font-tech font-semibold text-cyber-blue">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 font-tech font-semibold text-white">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <tbody key={`group-${categoryIndex}`}>
                    <tr>
                      <td 
                        colSpan={4} 
                        className="py-4 px-6 font-tech font-bold text-cyber-purple bg-cyber-purple/10"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr 
                        key={`feature-${categoryIndex}-${featureIndex}`}
                        className="border-b border-cyber-blue/10 hover:bg-cyber-blue/5"
                      >
                        <td className="py-3 px-6 font-tech text-gray-300">
                          {feature.name}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="h-5 w-5 text-cyber-green mx-auto" />
                            ) : (
                              <span className="text-gray-500">—</span>
                            )
                          ) : (
                            <span className="font-tech text-gray-300">{feature.starter}</span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof feature.professional === 'boolean' ? (
                            feature.professional ? (
                              <Check className="h-5 w-5 text-cyber-green mx-auto" />
                            ) : (
                              <span className="text-gray-500">—</span>
                            )
                          ) : (
                            <span className="font-tech text-cyber-blue">{feature.professional}</span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="h-5 w-5 text-cyber-green mx-auto" />
                            ) : (
                              <span className="text-gray-500">—</span>
                            )
                          ) : (
                            <span className="font-tech text-gray-300">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-white text-center mb-12">
            O que nossos <span className="text-cyber-green">Clientes</span> dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-start space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-cyber-blue/50"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-tech font-semibold text-white">
                        {testimonial.name}
                      </span>
                      <span className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded">
                        {testimonial.plan}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">
                      {testimonial.role}
                    </div>
                    <p className="text-gray-300 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-white text-center mb-12">
            Perguntas <span className="text-cyber-yellow">Frequentes</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Posso cancelar a qualquer momento?",
                answer: "Sim! Não há fidelidade. Você pode cancelar seu plano a qualquer momento e continuar usando até o final do período pago."
              },
              {
                question: "Há período de teste gratuito?",
                answer: "Todos os planos têm 14 dias de teste gratuito. Não é necessário cartão de crédito para começar."
              },
              {
                question: "Posso mudar de plano depois?",
                answer: "Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de cobrança."
              },
              {
                question: "Como funciona o suporte?",
                answer: "Oferecemos suporte por email no plano Starter, chat 24/7 no Professional e suporte dedicado no Enterprise."
              }
            ].map((faq, index) => (
              <div key={index} className="cyber-card">
                <h3 className="font-tech font-semibold text-cyber-blue mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="cyber-card max-w-2xl mx-auto">
            <h2 className="text-3xl font-cyber font-bold text-white mb-4">
              Ainda tem <span className="text-cyber-blue">Dúvidas?</span>
            </h2>
            <p className="text-gray-400 font-tech mb-8">
              Nossa equipe está pronta para ajudar você a escolher o plano ideal 
              para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4">
                <Headphones className="h-5 w-5 mr-2" />
                Falar com Especialista
              </button>
              <button className="cyber-button-glow px-8 py-4">
                <Rocket className="h-5 w-5 mr-2" />
                Começar Teste Grátis
              </button>
            </div>
          </div>
        </motion.div>

        {/* TODO: Integration Areas */}
        {/*
          ÁREAS PARA INTEGRAÇÃO:
          
          1. Pagamento:
             - Stripe: handlePayment() function
             - Mercado Pago: handlePayment() function
          
          2. Analytics:
             - Track plan selection events
             - A/B test different pricing strategies
          
          3. CRM Integration:
             - Lead capture on plan interest
             - Customer success tracking
          
          4. Features Management:
             - Dynamic feature flags based on plan
             - Usage tracking and limits
        */}
      </div>
    </div>
  )
}