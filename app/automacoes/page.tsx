
'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Play, Eye, Star, Search, Zap, Users, Clock, CheckCircle } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import type { Automation } from '@/app/automacoes/data'
import { automations as automationsData, slugify } from '@/app/automacoes/data'

export default function AutomacoesPage() {
  const [selectedCategory, setSelectedCategory] = useState('todas')
  const [searchTerm, setSearchTerm] = useState('')
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null)
  const { isSignedIn } = useUser()

  const automations: Automation[] = automationsData

  const categories = (() => {
    const map = new Map<string, { id: string; label: string; count: number }>()
    automations.forEach(a => {
      const existing = map.get(a.categoryId)
      if (existing) {
        existing.count += 1
      } else {
        map.set(a.categoryId, { id: a.categoryId, label: a.category, count: 1 })
      }
    })
    return [
      { id: 'todas', label: 'Todas', count: automations.length },
      ...Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label))
    ]
  })()

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredAutomations = automations.filter(automation => {
    const matchesCategory = selectedCategory === 'todas' || automation.categoryId === selectedCategory
    if (!normalizedSearch) return matchesCategory
    const matchesSearch =
      automation.name.toLowerCase().includes(normalizedSearch) ||
      automation.description.toLowerCase().includes(normalizedSearch) ||
      automation.tags.some(tag => tag.toLowerCase().includes(normalizedSearch)) ||
      automation.category.toLowerCase().includes(normalizedSearch)
    return matchesCategory && matchesSearch
  })


  const router = useRouter();

  const handleExecuteAutomation = (automation: Automation) => {
    const requiresAuth = automation.price === 'Premium' || automation.price === 'Enterprise'
    if (requiresAuth && !isSignedIn) {
      alert('Faça login para executar automações premium!')
      return
    }
    const url = automation.automationUrl
    if (url) {
      const isExternal = /^https?:\/\//i.test(url)
      if (isExternal) {
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        router.push(url)
      }
    } else {
      alert('Link da automação não configurado. Entre em contato com o suporte.')
    }
  }


  const getPriceColor = (price: string) => {
    switch (price) {
      case 'Grátis': return 'text-cyber-green'
      case 'Premium': return 'text-cyber-blue'
      case 'Enterprise': return 'text-cyber-purple'
      default: return 'text-gray-400'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'text-cyber-green'
      case 'Médio': return 'text-cyber-yellow'
      case 'Avançado': return 'text-cyber-pink'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
            Catálogo de <span className="text-cyber-blue">Automações</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Descubra automações prontas para transformar seu negócio. 
            Soluções testadas e aprovadas por milhares de empresas.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-6"
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar automações, tags ou categorias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="cyber-input w-full pl-12 pr-4 py-4 text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-tech font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyber-blue text-dark-bg border-2 border-cyber-blue'
                    : 'bg-dark-surface/50 text-gray-300 border-2 border-cyber-blue/30 hover:border-cyber-blue/60'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Automations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredAutomations.map((automation, index) => {
              const Icon = automation.icon
              return (
                <motion.div
                  key={automation.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="cyber-card group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-blue/20"
                >
                  {/* Thumbnail */}
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={automation.thumbnail}
                      alt={automation.name}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                    
                    {/* Price Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-dark-bg/80 backdrop-blur-sm rounded-full text-sm font-tech font-semibold ${getPriceColor(automation.price)}`}>
                      {automation.price}
                    </div>

                    {/* Play Button Overlay */}
                    <button
                      onClick={() => {
                        setSelectedAutomation(automation)
                        setShowVideoModal(true)
                      }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-bg/50"
                    >
                      <div className="p-4 bg-cyber-blue/20 backdrop-blur-sm rounded-full hover:bg-cyber-blue/40 transition-colors">
                        <Play className="h-8 w-8 text-cyber-blue" />
                      </div>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-cyber-blue/20 rounded-lg">
                          <Icon className="h-6 w-6 text-cyber-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-tech font-bold text-white group-hover:text-cyber-blue transition-colors">
                            {automation.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {automation.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {automation.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-xs font-tech text-cyber-blue"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-cyber-yellow fill-current" />
                        <span>{automation.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{automation.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{automation.duration}</span>
                      </div>
                      <div className={`font-medium ${getDifficultyColor(automation.difficulty)}`}>
                        {automation.difficulty}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3 pt-4 border-t border-cyber-blue/20">
                      <button
                        onClick={() => {
                          setSelectedAutomation(automation)
                          setShowVideoModal(true)
                        }}
                        className="flex-1 flex items-center justify-center space-x-2 py-3 bg-dark-surface/50 border border-cyber-blue/30 rounded-lg text-cyber-blue hover:bg-cyber-blue/10 hover:border-cyber-blue/60 transition-all duration-300"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="font-tech font-medium">Ver Vídeo</span>
                      </button>
                      
                      <button
                        onClick={() => handleExecuteAutomation(automation)}
                        className="cyber-button px-6 py-3 flex items-center space-x-2"
                      >
                        <Zap className="h-4 w-4" />
                        <span>Executar</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            }
            )}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAutomations.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="space-y-4">
              <div className="text-6xl">🤖</div>
              <h3 className="text-2xl font-tech font-bold text-white">
                Nenhuma automação encontrada
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Tente ajustar seus filtros ou termo de busca para encontrar automações.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('todas')
                }}
                className="cyber-button px-6 py-3 mt-6"
              >
                Limpar Filtros
              </button>
            </div>
          </motion.div>
        )}

        {/* TODO: Área comentada para adicionar automações reais */}
        {/*
          ÁREA PARA ADICIONAR AUTOMAÇÕES REAIS:
          
          1. Substitua o array 'automations' pelos dados reais vindos da API
          2. Adicione integração com player de vídeo real
          3. Implemente lógica de execução de automações
          4. Conecte com sistema de pagamento para automações premium
          5. Adicione filtros avançados (preço, dificuldade, rating)
          6. Implemente sistema de favoritos
          7. Adicione paginação para grandes volumes de dados
        */}
      </div>

      {/* Video Modal - Placeholder for real video player */}
      <AnimatePresence>
        {showVideoModal && selectedAutomation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/90 backdrop-blur-sm"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl cyber-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-tech font-bold text-white">
                  {selectedAutomation.name}
                </h3>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="p-2 hover:bg-cyber-blue/20 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              {/* Video Player com design futurista */}
                <div className="aspect-video bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    src={selectedAutomation.videoUrl}
                  />
                </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-lg font-tech font-semibold text-cyber-blue">
                  Recursos inclusos:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedAutomation.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyber-green" />
                      <span className="text-gray-300 font-tech">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}