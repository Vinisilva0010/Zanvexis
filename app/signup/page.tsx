'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SignUp } from '@clerk/nextjs'
import { 
  Zap, 
  Shield, 
  Fingerprint, 
  CheckCircle, 
  Star,
  Rocket,
  Users
} from 'lucide-react'

export default function SignUpPage() {
  const benefits = [
    {
      icon: Rocket,
      title: "Acesso Imediato",
      description: "Comece a usar automações avançadas em segundos"
    },
    {
      icon: Shield,
      title: "Segurança Premium",
      description: "Proteção de nível enterprise para seus dados"
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Equipe especializada para te ajudar 24/7"
    }
  ]

  const features = [
    "✨ 50 automações gratuitas por mês",
    "🚀 Integração com 500+ ferramentas",
    "🛡️ Criptografia de nível militar",
    "📊 Analytics avançados inclusos",
    "🎯 Templates prontos para uso",
    "⚡ Execução ultrarrápida"
  ]

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyber-green/5 rounded-full blur-2xl animate-float" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Benefits & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white">
                  Junte-se ao <span className="text-cyber-blue">Futuro</span>
                </h1>
                <p className="text-xl text-gray-400 font-tech mt-4">
                  Crie sua conta e tenha acesso às automações mais avançadas do planeta.
                </p>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-6 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-cyber-yellow fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-cyber-blue" />
                  <span>50K+ Usuários</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-cyber-green" />
                  <span>SOC 2 Compliant</span>
                </div>
              </motion.div>
            </div>

            {/* Benefits Cards */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-dark-surface/50 border border-cyber-blue/20 rounded-lg hover:border-cyber-blue/40 transition-colors"
                  >
                    <div className="p-2 bg-cyber-blue/20 rounded-lg">
                      <Icon className="h-5 w-5 text-cyber-blue" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-tech font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-tech font-semibold text-cyber-blue">
                O que você ganha:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <CheckCircle className="h-4 w-4 text-cyber-green flex-shrink-0" />
                    <span className="text-sm font-tech">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Sign Up Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-start"
          >
            <div className="w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="cyber-card space-y-8"
              >
                {/* Header */}
                <div className="text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center"
                  >
                    <div className="relative">
                      <div className="p-3 bg-cyber-purple/20 rounded-xl">
                        <Zap className="h-8 w-8 text-cyber-purple" />
                      </div>
                      <div className="absolute inset-0 bg-cyber-purple/20 blur-xl rounded-xl animate-pulse" />
                    </div>
                  </motion.div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-cyber font-bold text-white">
                      Criar Conta
                    </h2>
                    <p className="text-gray-400 text-sm font-tech">
                      Comece grátis, sem cartão de crédito
                    </p>
                  </div>
                </div>

                {/* Clerk Sign Up Component */}
                <div className="flex justify-center">
                  <SignUp 
                    appearance={{
                      elements: {
                        rootBox: "w-full",
                        card: "bg-transparent shadow-none border-none",
                        headerTitle: "hidden",
                        headerSubtitle: "hidden",
                        socialButtonsBlockButton: "cyber-button text-sm py-3 mb-3",
                        formButtonPrimary: "cyber-button-glow w-full py-3",
                        formFieldInput: "cyber-input",
                        footerActionText: "text-gray-400",
                        footerActionLink: "text-cyber-blue hover:text-cyber-blue/80",
                        dividerLine: "bg-cyber-blue/30",
                        dividerText: "text-gray-400",
                      },
                    }}
                    redirectUrl="/dashboard"
                  />
                </div>

                {/* Security Notice */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="border-t border-cyber-blue/30 pt-6"
                >
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <Shield className="h-4 w-4 text-cyber-green" />
                    <span>Seus dados estão seguros conosco</span>
                  </div>
                </motion.div>

                {/* Footer */}
                <div className="text-center text-sm text-gray-400">
                  Já tem uma conta?{' '}
                  <Link href="/login" className="text-cyber-blue hover:text-cyber-blue/80 transition-colors font-medium">
                    Fazer login
                  </Link>
                </div>
              </motion.div>

              {/* Terms Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-center text-xs text-gray-500"
              >
                Ao criar uma conta, você concorda com nossos{' '}
                <Link href="/termos" className="text-cyber-blue hover:underline">
                  Termos de Uso
                </Link>{' '}
                e{' '}
                <Link href="/privacidade" className="text-cyber-blue hover:underline">
                  Política de Privacidade
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}