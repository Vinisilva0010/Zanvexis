'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, User, LogOut } from 'lucide-react'
import { useUser, UserButton } from '@clerk/nextjs'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isSignedIn } = useUser()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/automacoes', label: 'Automações' },
    { href: '/planos', label: 'Planos' },
    { href: '/personalizadas', label: 'Personalizadas' },
    { href: '/token', label: 'ZVX Token' },
    { href: '/contato', label: 'Contato' },
    { href: '/contato', label: 'Loja' },
  ]

  const authItems = isSignedIn 
    ? [{ href: '/dashboard', label: 'Dashboard' }]
    : [
        { href: '/sign-in', label: 'Login' },
        { href: '/sign-up', label: 'Cadastro' },
      ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-bg/90 backdrop-blur-md border-b border-cyber-blue/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Zap className="h-8 w-8 text-cyber-blue" />
              <div className="absolute inset-0 bg-cyber-blue/20 blur-xl rounded-full group-hover:bg-cyber-blue/40 transition-all duration-300" />
            </motion.div>
            <span className="text-2xl font-cyber font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              ZANVEXIS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-tech font-medium tracking-wide transition-all duration-300 group ${
                  pathname === item.href
                    ? 'text-cyber-blue'
                    : 'text-gray-300 hover:text-cyber-blue'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple transition-all duration-300 ${
                    pathname === item.href
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="cyber-button text-sm px-6 py-2"
                >
                  Dashboard
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 border-2 border-cyber-blue/50 hover:border-cyber-blue transition-colors",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-cyber-blue transition-colors font-tech font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="cyber-button text-sm px-6 py-2"
                >
                  Cadastro
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyber-blue transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-bg/95 backdrop-blur-md border-t border-cyber-blue/30"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {[...navItems, ...authItems].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-tech font-medium tracking-wide transition-all duration-300 border border-transparent hover:border-cyber-blue/30 rounded-md ${
                      pathname === item.href
                        ? 'text-cyber-blue bg-cyber-blue/10'
                        : 'text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {isSignedIn && (
                  <div className="pt-4 border-t border-cyber-blue/30">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10 border-2 border-cyber-blue/50",
                        },
                      }}
                    />
                  </div>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header