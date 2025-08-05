'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Plataforma: [
      { href: '/automacoes', label: 'Automações' },
      { href: '/planos', label: 'Planos' },
      { href: '/personalizadas', label: 'Personalizadas' },
      { href: '/dashboard', label: 'Dashboard' },
    ],
    Empresa: [
      { href: '/sobre', label: 'Sobre Nós' },
      { href: '/contato', label: 'Contato' },
      { href: '/carreiras', label: 'Carreiras' },
      { href: '/blog', label: 'Blog' },
    ],
    Suporte: [
      { href: '/ajuda', label: 'Central de Ajuda' },
      { href: '/documentacao', label: 'Documentação' },
      { href: '/api', label: 'API' },
      { href: '/status', label: 'Status' },
    ],
    Legal: [
      { href: '/privacidade', label: 'Privacidade' },
      { href: '/termos', label: 'Termos de Uso' },
      { href: '/cookies', label: 'Cookies' },
      { href: '/licencas', label: 'Licenças' },
    ],
  }

  const socialLinks = [
    { href: 'https://github.com/zanvexis', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com/zanvexis', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com/company/zanvexis', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/zanvexis', icon: Instagram, label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-dark-bg border-t border-cyber-blue/30">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyber-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <Zap className="h-10 w-10 text-cyber-blue" />
                    <div className="absolute inset-0 bg-cyber-blue/20 blur-xl rounded-full group-hover:bg-cyber-blue/40 transition-all duration-300" />
                  </motion.div>
                  <span className="text-3xl font-cyber font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                    ZANVEXIS
                  </span>
                </Link>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Revolucionando o futuro com automações inteligentes e tecnologia de ponta. 
                  Transforme seu negócio com soluções premium.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="h-5 w-5 text-cyber-blue" />
                    <a href="mailto:contato@zanvexis.com" className="hover:text-cyber-blue transition-colors">
                      contato@zanvexis.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="h-5 w-5 text-cyber-blue" />
                    <a href="tel:+5511999999999" className="hover:text-cyber-blue transition-colors">
                      +55 (11) 99999-9999
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="h-5 w-5 text-cyber-blue" />
                    <span>São Paulo, Brazil</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-tech font-semibold text-cyber-blue">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-t border-cyber-blue/20"
        >
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-cyber font-bold text-cyber-blue">
              Fique por Dentro das Novidades
            </h3>
            <p className="text-gray-400">
              Receba atualizações sobre novas automações, features e o futuro da tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="cyber-input flex-1"
              />
              <button className="cyber-button px-6 py-3 whitespace-nowrap">
                Inscrever
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-cyber-blue/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Zanvexis. Todos os direitos reservados. 
              <span className="ml-2 text-cyber-blue">Powered by AI</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-dark-surface/50 border border-cyber-blue/30 rounded-lg text-gray-400 hover:text-cyber-blue hover:border-cyber-blue/60 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-cyber-blue hover:bg-cyber-blue/20 transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer