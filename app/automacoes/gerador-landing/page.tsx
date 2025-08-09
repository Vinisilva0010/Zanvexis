'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Monitor, 
  Palette, 
  Type, 
  Image as ImageIcon, 
  Download, 
  Eye, 
  Smartphone,
  Tablet,
  Code,
  Zap,
  CheckCircle,
  Copy,
  ExternalLink,
  Sparkles,
  Layout,
  MousePointer,
  Target
} from 'lucide-react'

interface LandingPageData {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  company: string
  theme: string
  industry: string
}

const themes = [
  { 
    id: 'modern', 
    name: 'Moderno', 
    colors: 'from-blue-500 to-purple-600',
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
  },
  { 
    id: 'tech', 
    name: 'Tech', 
    colors: 'from-cyan-400 to-blue-600',
    primary: '#06B6D4',
    secondary: '#2563EB',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)'
  },
  { 
    id: 'business', 
    name: 'Corporativo', 
    colors: 'from-gray-700 to-gray-900',
    primary: '#374151',
    secondary: '#111827',
    gradient: 'linear-gradient(135deg, #374151 0%, #111827 100%)'
  },
  { 
    id: 'startup', 
    name: 'Startup', 
    colors: 'from-green-400 to-blue-500',
    primary: '#34D399',
    secondary: '#3B82F6',
    gradient: 'linear-gradient(135deg, #34D399 0%, #3B82F6 100%)'
  },
  { 
    id: 'ecommerce', 
    name: 'E-commerce', 
    colors: 'from-orange-400 to-red-500',
    primary: '#FB923C',
    secondary: '#EF4444',
    gradient: 'linear-gradient(135deg, #FB923C 0%, #EF4444 100%)'
  },
  { 
    id: 'health', 
    name: 'Saúde', 
    colors: 'from-teal-400 to-green-500',
    primary: '#2DD4BF',
    secondary: '#10B981',
    gradient: 'linear-gradient(135deg, #2DD4BF 0%, #10B981 100%)'
  }
]

const industries = [
  'Tecnologia', 'E-commerce', 'Saúde', 'Educação', 'Finanças', 
  'Marketing', 'Consultoria', 'Imobiliário', 'Alimentação', 'Outro'
]

export default function GeradorLandingPage() {
  const [formData, setFormData] = useState<LandingPageData>({
    title: '',
    subtitle: '',
    description: '',
    ctaText: '',
    ctaLink: '',
    company: '',
    theme: 'modern',
    industry: ''
  })

  const [generatedPage, setGeneratedPage] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [showCode, setShowCode] = useState(false)

  const generateLandingPage = async () => {
    if (!formData.title || !formData.subtitle || !formData.ctaText) {
      alert('Preencha pelo menos o título, subtítulo e texto do botão')
      return
    }

    setIsGenerating(true)

    // Simula geração da página
    await new Promise(resolve => setTimeout(resolve, 2000))

    const selectedTheme = themes.find(t => t.id === formData.theme)
    
    const landingPageHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.title} - ${formData.company}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .gradient-bg { 
            background: ${selectedTheme?.gradient || 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'}; 
        }
        .theme-primary { color: ${selectedTheme?.primary || '#3B82F6'}; }
        .theme-bg-primary { background-color: ${selectedTheme?.primary || '#3B82F6'}; }
        .theme-border-primary { border-color: ${selectedTheme?.primary || '#3B82F6'}; }
        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }
        .feature-icon {
            background: ${selectedTheme?.gradient || 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'};
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="gradient-bg text-white py-4">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold">${formData.company || 'Sua Empresa'}</h1>
                <nav class="hidden md:flex space-x-6">
                    <a href="#features" class="hover:text-gray-200">Recursos</a>
                    <a href="#about" class="hover:text-gray-200">Sobre</a>
                    <a href="#contact" class="hover:text-gray-200">Contato</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="gradient-bg text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">${formData.title}</h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">${formData.subtitle}</p>
            <p class="text-lg mb-10 max-w-2xl mx-auto opacity-90">${formData.description}</p>
            <a href="${formData.ctaLink || '#'}" class="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover-scale shadow-lg">
                ${formData.ctaText}
            </a>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">Por que escolher nossa solução?</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center p-6">
                    <div class="w-16 h-16 feature-icon rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Qualidade Garantida</h3>
                    <p class="text-gray-600">Soluções testadas e aprovadas por milhares de clientes satisfeitos.</p>
                </div>
                <div class="text-center p-6">
                    <div class="w-16 h-16 feature-icon rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Suporte 24/7</h3>
                    <p class="text-gray-600">Nossa equipe está sempre disponível para ajudar você a ter sucesso.</p>
                </div>
                <div class="text-center p-6">
                    <div class="w-16 h-16 feature-icon rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Resultados Rápidos</h3>
                    <p class="text-gray-600">Veja resultados em questão de dias, não meses.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="gradient-bg text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-6">Pronto para começar?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">Junte-se a milhares de clientes satisfeitos e transforme seu negócio hoje mesmo.</p>
            <a href="${formData.ctaLink || '#'}" class="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover-scale shadow-lg">
                ${formData.ctaText}
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4 text-center">
            <h3 class="text-2xl font-bold mb-4">${formData.company || 'Sua Empresa'}</h3>
            <p class="text-gray-400 mb-6">Transformando negócios através da inovação.</p>
            <div class="flex justify-center space-x-6">
                <a href="#" class="text-gray-400 hover:text-white">Política de Privacidade</a>
                <a href="#" class="text-gray-400 hover:text-white">Termos de Uso</a>
                <a href="#" class="text-gray-400 hover:text-white">Contato</a>
            </div>
            <p class="text-gray-500 mt-8">© 2024 ${formData.company || 'Sua Empresa'}. Todos os direitos reservados.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>`

    setGeneratedPage(landingPageHTML)
    setIsGenerating(false)
  }

  const downloadHTML = () => {
    const blob = new Blob([generatedPage], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `landing-page-${formData.title.toLowerCase().replace(/\s+/g, '-')}.html`
    a.click()
    URL.revokeObjectURL(url)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(generatedPage)
    alert('Código copiado para a área de transferência!')
  }

  const getPreviewWidth = () => {
    switch (previewMode) {
      case 'mobile': return 'max-w-sm'
      case 'tablet': return 'max-w-2xl'
      default: return 'w-full'
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
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-2xl">
              <Layout className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
            Gerador de <span className="text-cyber-purple">Landing Pages</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Crie landing pages profissionais em minutos. Preencha os dados, escolha um tema e gere uma página otimizada para conversão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Configurações da Página
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Nome da Empresa</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Ex: TechCorp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Título Principal *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Ex: Automatize Seu Negócio"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Subtítulo *</label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Ex: Aumente sua produtividade em 300%"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Descrição</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="cyber-input w-full h-24 resize-none"
                    placeholder="Descreva os benefícios da sua solução..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Texto do Botão *</label>
                  <input
                    type="text"
                    value={formData.ctaText}
                    onChange={(e) => setFormData({...formData, ctaText: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Ex: Começar Agora"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Link do Botão</label>
                  <input
                    type="url"
                    value={formData.ctaLink}
                    onChange={(e) => setFormData({...formData, ctaLink: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="https://seusite.com/cadastro"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Tema</label>
                  <div className="grid grid-cols-2 gap-3">
                    {themes.map(theme => (
                      <button
                        key={theme.id}
                        onClick={() => setFormData({...formData, theme: theme.id})}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          formData.theme === theme.id
                            ? 'border-cyber-purple bg-cyber-purple/20'
                            : 'border-cyber-blue/30 hover:border-cyber-blue/60'
                        }`}
                      >
                        <div className={`h-4 w-full rounded bg-gradient-to-r ${theme.colors} mb-2`} />
                        <span className="text-xs font-tech text-white">{theme.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Segmento</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="cyber-input w-full"
                  >
                    <option value="">Selecione um segmento</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={generateLandingPage}
                  disabled={isGenerating}
                  className="cyber-button-glow w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Sparkles className="h-5 w-5 animate-spin" />
                      <span>Gerando...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>Gerar Landing Page</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="cyber-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-tech font-bold text-white">
                  Pré-visualização
                </h2>
                
                {generatedPage && (
                  <div className="flex items-center space-x-3">
                    {/* Device Buttons */}
                    <div className="flex border border-cyber-blue/30 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setPreviewMode('desktop')}
                        className={`p-2 ${previewMode === 'desktop' ? 'bg-cyber-blue text-dark-bg' : 'text-cyber-blue hover:bg-cyber-blue/20'}`}
                      >
                        <Monitor className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setPreviewMode('tablet')}
                        className={`p-2 ${previewMode === 'tablet' ? 'bg-cyber-blue text-dark-bg' : 'text-cyber-blue hover:bg-cyber-blue/20'}`}
                      >
                        <Tablet className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setPreviewMode('mobile')}
                        className={`p-2 ${previewMode === 'mobile' ? 'bg-cyber-blue text-dark-bg' : 'text-cyber-blue hover:bg-cyber-blue/20'}`}
                      >
                        <Smartphone className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <button
                      onClick={() => setShowCode(!showCode)}
                      className="cyber-button px-4 py-2"
                    >
                      <Code className="h-4 w-4 mr-2" />
                      {showCode ? 'Preview' : 'Código'}
                    </button>
                    
                    <button
                      onClick={copyCode}
                      className="cyber-button px-4 py-2"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar
                    </button>

                    <button
                      onClick={downloadHTML}
                      className="cyber-button-glow px-4 py-2"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                )}
              </div>

              {generatedPage ? (
                showCode ? (
                  <div className="bg-dark-surface/50 border border-cyber-blue/20 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                      <code>{generatedPage}</code>
                    </pre>
                  </div>
                ) : (
                  <div className="border border-cyber-blue/30 rounded-lg overflow-hidden">
                    <div className={`mx-auto transition-all duration-300 ${getPreviewWidth()}`}>
                      <iframe
                        srcDoc={generatedPage}
                        className="w-full h-96 bg-white"
                        title="Landing Page Preview"
                      />
                    </div>
                  </div>
                )
              ) : (
                <div className="border-2 border-dashed border-cyber-blue/30 rounded-lg p-12 text-center">
                  <Layout className="h-16 w-16 text-cyber-blue/50 mx-auto mb-4" />
                  <p className="text-gray-400 font-tech">
                    Preencha os campos e clique em "Gerar Landing Page" para ver a pré-visualização
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <div className="cyber-card">
            <h2 className="text-3xl font-tech font-bold text-white text-center mb-8">
              Recursos Inclusos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Layout, title: 'Design Responsivo', desc: 'Funciona em todos os dispositivos' },
                { icon: Palette, title: 'Temas Profissionais', desc: '6 temas otimizados para conversão' },
                { icon: Target, title: 'Otimizado para SEO', desc: 'Meta tags e estrutura otimizada' },
                { icon: Code, title: 'Código Limpo', desc: 'HTML/CSS moderno e válido' },
                { icon: Zap, title: 'Carregamento Rápido', desc: 'Otimizado para performance' },
                { icon: MousePointer, title: 'Call-to-Actions', desc: 'Botões estrategicamente posicionados' },
                { icon: CheckCircle, title: 'Pronto para Usar', desc: 'Basta fazer upload no seu servidor' },
                { icon: Download, title: 'Download Instantâneo', desc: 'Baixe o arquivo HTML completo' }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="p-3 bg-cyber-purple/20 rounded-xl w-fit mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-cyber-purple" />
                  </div>
                  <h3 className="font-tech font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
