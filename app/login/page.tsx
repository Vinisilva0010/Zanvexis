'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SignIn } from '@clerk/nextjs'
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Zap, 
  ArrowRight,
  Shield,
  Fingerprint
} from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyber-green/5 rounded-full blur-2xl animate-float" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="cyber-card space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="p-4 bg-cyber-blue/20 rounded-2xl">
                    <Zap className="h-12 w-12 text-cyber-blue" />
                  </div>
                  <div className="absolute inset-0 bg-cyber-blue/20 blur-xl rounded-2xl animate-pulse" />
                </div>
              </motion.div>

              <div className="space-y-3">
                <h1 className="text-3xl font-cyber font-bold text-white">
                  Bem-vindo de Volta
                </h1>
                <p className="text-gray-400 font-tech">
                  Acesse sua conta e continue sua jornada digital
                </p>
              </div>
            </div>

            {/* Clerk Sign In Component */}
            <div className="flex justify-center">
              <SignIn 
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

            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="border-t border-cyber-blue/30 pt-6"
            >
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Shield className="h-4 w-4 text-cyber-green" />
                  <span>Criptografia SSL</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Fingerprint className="h-4 w-4 text-cyber-blue" />
                  <span>Auth Biométrica</span>
                </div>
              </div>
            </motion.div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-400">
              Não tem uma conta?{' '}
              <Link href="/signup" className="text-cyber-blue hover:text-cyber-blue/80 transition-colors font-medium">
                Criar conta grátis
              </Link>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center space-y-4"
          >
            <div className="flex items-center justify-center space-x-2 text-cyber-blue">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-tech">Powered by Zanvexis Security</span>
            </div>
            
            <div className="text-xs text-gray-500 max-w-sm mx-auto">
              Sua conta está protegida por criptografia de nível militar e 
              autenticação multi-fator avançada.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}