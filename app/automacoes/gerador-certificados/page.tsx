'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Download, 
  Copy, 
  Share2,
  User,
  Calendar,
  Building,
  FileText,
  Palette,
  Eye,
  Star,
  Trophy,
  Medal,
  Shield,
  Upload,
  Image as ImageIcon,
  Type,
  Zap
} from 'lucide-react'

interface CertificateData {
  recipientName: string
  courseName: string
  completionDate: string
  organization: string
  instructor: string
  hours: string
  template: string
  customization: {
    primaryColor: string
    secondaryColor: string
    textColor: string
    logoUrl?: string
  }
}

const certificateTemplates = [
  {
    id: 'modern',
    name: 'Moderno',
    description: 'Design limpo e contemporâneo',
    icon: Star,
    preview: '/templates/modern-preview.jpg'
  },
  {
    id: 'classic',
    name: 'Clássico',
    description: 'Estilo tradicional e elegante',
    icon: Trophy,
    preview: '/templates/classic-preview.jpg'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Luxuoso com bordas douradas',
    icon: Medal,
    preview: '/templates/premium-preview.jpg'
  },
  {
    id: 'corporate',
    name: 'Corporativo',
    description: 'Profissional para empresas',
    icon: Building,
    preview: '/templates/corporate-preview.jpg'
  },
  {
    id: 'tech',
    name: 'Tecnologia',
    description: 'Para cursos de TI e programação',
    icon: Shield,
    preview: '/templates/tech-preview.jpg'
  },
  {
    id: 'creative',
    name: 'Criativo',
    description: 'Para cursos de design e arte',
    icon: Palette,
    preview: '/templates/creative-preview.jpg'
  }
]

const colorPresets = [
  { name: 'Azul Profissional', primary: '#1E40AF', secondary: '#3B82F6', text: '#1F2937' },
  { name: 'Verde Sucesso', primary: '#059669', secondary: '#10B981', text: '#1F2937' },
  { name: 'Roxo Premium', primary: '#7C3AED', secondary: '#A855F7', text: '#1F2937' },
  { name: 'Dourado Luxo', primary: '#D97706', secondary: '#F59E0B', text: '#92400E' },
  { name: 'Vermelho Elegante', primary: '#DC2626', secondary: '#EF4444', text: '#1F2937' },
  { name: 'Preto Clássico', primary: '#111827', secondary: '#374151', text: '#1F2937' }
]

export default function GeradorCertificadosPage() {
  const [certificateData, setCertificateData] = useState<CertificateData>({
    recipientName: '',
    courseName: '',
    completionDate: '',
    organization: '',
    instructor: '',
    hours: '',
    template: 'modern',
    customization: {
      primaryColor: '#1E40AF',
      secondaryColor: '#3B82F6',
      textColor: '#1F2937'
    }
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCertificate, setGeneratedCertificate] = useState<string>('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateCertificate = async () => {
    if (!certificateData.recipientName || !certificateData.courseName) {
      alert('Preencha pelo menos o nome do aluno e nome do curso')
      return
    }

    setIsGenerating(true)

    // Simula geração do certificado
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Aqui você normalmente usaria Canvas API ou uma biblioteca como jsPDF
    // Para este exemplo, vamos gerar um certificado HTML/CSS
    const certificateHTML = generateCertificateHTML()
    
    // Simular conversão para imagem (em produção, usaria html2canvas)
    const blob = new Blob([certificateHTML], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    
    setGeneratedCertificate(url)
    setIsGenerating(false)
  }

  const generateCertificateHTML = (): string => {
    const template = certificateTemplates.find(t => t.id === certificateData.template)
    
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificado - ${certificateData.recipientName}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .certificate {
            width: 1200px;
            height: 850px;
            background: linear-gradient(135deg, ${certificateData.customization.primaryColor}10, ${certificateData.customization.secondaryColor}10);
            border: 8px solid ${certificateData.customization.primaryColor};
            padding: 60px;
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
        }
        
        .certificate::before {
            content: '';
            position: absolute;
            top: 20px; left: 20px; right: 20px; bottom: 20px;
            border: 2px solid ${certificateData.customization.secondaryColor};
            pointer-events: none;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .organization {
            font-size: 28px;
            font-weight: 600;
            color: ${certificateData.customization.primaryColor};
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .certificate-title {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            font-weight: 700;
            color: ${certificateData.customization.textColor};
            margin-bottom: 20px;
        }
        
        .subtitle {
            font-size: 18px;
            color: ${certificateData.customization.textColor};
            opacity: 0.8;
        }
        
        .content {
            text-align: center;
            margin: 60px 0;
        }
        
        .recipient-name {
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            font-weight: 700;
            color: ${certificateData.customization.primaryColor};
            margin: 30px 0;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        
        .course-info {
            font-size: 24px;
            color: ${certificateData.customization.textColor};
            margin: 20px 0;
            line-height: 1.6;
        }
        
        .course-name {
            font-weight: 600;
            color: ${certificateData.customization.secondaryColor};
        }
        
        .details {
            display: flex;
            justify-content: space-between;
            margin-top: 80px;
            padding: 0 40px;
        }
        
        .detail-item {
            text-align: center;
            flex: 1;
        }
        
        .detail-label {
            font-size: 14px;
            color: ${certificateData.customization.textColor};
            opacity: 0.7;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        
        .detail-value {
            font-size: 18px;
            font-weight: 600;
            color: ${certificateData.customization.primaryColor};
        }
        
        .signature-line {
            width: 200px;
            height: 1px;
            background: ${certificateData.customization.textColor};
            opacity: 0.3;
            margin: 10px auto 5px;
        }
        
        .decorative-border {
            position: absolute;
            width: 100px;
            height: 100px;
            border: 3px solid ${certificateData.customization.secondaryColor};
            opacity: 0.3;
        }
        
        .border-tl { top: 40px; left: 40px; border-right: none; border-bottom: none; }
        .border-tr { top: 40px; right: 40px; border-left: none; border-bottom: none; }
        .border-bl { bottom: 40px; left: 40px; border-right: none; border-top: none; }
        .border-br { bottom: 40px; right: 40px; border-left: none; border-top: none; }
        
        .seal {
            position: absolute;
            bottom: 60px;
            right: 60px;
            width: 120px;
            height: 120px;
            border: 4px solid ${certificateData.customization.primaryColor};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .seal-text {
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            color: ${certificateData.customization.primaryColor};
            line-height: 1.2;
        }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="decorative-border border-tl"></div>
        <div class="decorative-border border-tr"></div>
        <div class="decorative-border border-bl"></div>
        <div class="decorative-border border-br"></div>
        
        <div class="header">
            <div class="organization">${certificateData.organization || 'Organização'}</div>
            <div class="certificate-title">Certificado</div>
            <div class="subtitle">de Conclusão</div>
        </div>
        
        <div class="content">
            <div class="course-info">Certificamos que</div>
            <div class="recipient-name">${certificateData.recipientName}</div>
            <div class="course-info">
                concluiu com sucesso o curso<br>
                <span class="course-name">${certificateData.courseName}</span>
            </div>
        </div>
        
        <div class="details">
            <div class="detail-item">
                <div class="detail-label">Data de Conclusão</div>
                <div class="detail-value">${certificateData.completionDate || new Date().toLocaleDateString('pt-BR')}</div>
                <div class="signature-line"></div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">Carga Horária</div>
                <div class="detail-value">${certificateData.hours || '--'} horas</div>
                <div class="signature-line"></div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">Instrutor</div>
                <div class="detail-value">${certificateData.instructor || 'Instrutor'}</div>
                <div class="signature-line"></div>
            </div>
        </div>
        
        <div class="seal">
            <div class="seal-text">
                CERTIFICADO<br>
                VÁLIDO
            </div>
        </div>
    </div>
</body>
</html>`
  }

  const downloadCertificate = () => {
    if (!generatedCertificate) return
    
    const link = document.createElement('a')
    link.href = generatedCertificate
    link.download = `certificado-${certificateData.recipientName.replace(/\s+/g, '-').toLowerCase()}.html`
    link.click()
  }

  const copyCertificateHTML = () => {
    if (generatedCertificate) {
      const html = generateCertificateHTML()
      navigator.clipboard.writeText(html)
      alert('Código HTML do certificado copiado!')
    }
  }

  const shareCertificate = async () => {
    if (navigator.share && generatedCertificate) {
      try {
        await navigator.share({
          title: `Certificado - ${certificateData.recipientName}`,
          text: `Certificado de conclusão do curso ${certificateData.courseName}`,
          url: generatedCertificate
        })
      } catch (err) {
        copyCertificateHTML()
      }
    } else {
      copyCertificateHTML()
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
            <div className="p-4 bg-gradient-to-r from-cyber-pink to-cyber-purple rounded-2xl">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
            Gerador de <span className="text-cyber-pink">Certificados</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Crie certificados profissionais e personalizados para cursos, workshops, treinamentos e eventos em minutos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Basic Info */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Informações do Certificado
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Nome do Aluno *
                  </label>
                  <input
                    type="text"
                    value={certificateData.recipientName}
                    onChange={(e) => setCertificateData({...certificateData, recipientName: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="João Silva"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Nome do Curso *
                  </label>
                  <input
                    type="text"
                    value={certificateData.courseName}
                    onChange={(e) => setCertificateData({...certificateData, courseName: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Desenvolvimento Web Completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Organização
                  </label>
                  <input
                    type="text"
                    value={certificateData.organization}
                    onChange={(e) => setCertificateData({...certificateData, organization: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Minha Escola Online"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Instrutor
                  </label>
                  <input
                    type="text"
                    value={certificateData.instructor}
                    onChange={(e) => setCertificateData({...certificateData, instructor: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Prof. Maria Santos"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Data de Conclusão
                  </label>
                  <input
                    type="date"
                    value={certificateData.completionDate}
                    onChange={(e) => setCertificateData({...certificateData, completionDate: e.target.value})}
                    className="cyber-input w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Carga Horária
                  </label>
                  <input
                    type="number"
                    value={certificateData.hours}
                    onChange={(e) => setCertificateData({...certificateData, hours: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="40"
                  />
                </div>
              </div>
            </div>

            {/* Template Selection */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Escolha o Template
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {certificateTemplates.map(template => {
                  const Icon = template.icon
                  return (
                    <button
                      key={template.id}
                      onClick={() => setCertificateData({...certificateData, template: template.id})}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        certificateData.template === template.id
                          ? 'border-cyber-pink bg-cyber-pink/20'
                          : 'border-cyber-blue/30 hover:border-cyber-blue/60'
                      }`}
                    >
                      <Icon className={`h-8 w-8 mb-3 ${
                        certificateData.template === template.id ? 'text-cyber-pink' : 'text-cyber-blue'
                      }`} />
                      <div className="font-tech font-semibold text-white text-sm mb-1">
                        {template.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {template.description}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Customization */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Personalização
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-4">
                    Paletas de Cores
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {colorPresets.map(preset => (
                      <button
                        key={preset.name}
                        onClick={() => setCertificateData({
                          ...certificateData,
                          customization: {
                            ...certificateData.customization,
                            primaryColor: preset.primary,
                            secondaryColor: preset.secondary,
                            textColor: preset.text
                          }
                        })}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          certificateData.customization.primaryColor === preset.primary
                            ? 'border-cyber-pink'
                            : 'border-cyber-blue/30 hover:border-cyber-blue/60'
                        }`}
                      >
                        <div className="flex space-x-1 mb-2">
                          <div 
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: preset.primary }}
                          />
                          <div 
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: preset.secondary }}
                          />
                          <div 
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: preset.text }}
                          />
                        </div>
                        <span className="text-xs font-tech text-white">{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Cor Principal
                    </label>
                    <input
                      type="color"
                      value={certificateData.customization.primaryColor}
                      onChange={(e) => setCertificateData({
                        ...certificateData,
                        customization: {...certificateData.customization, primaryColor: e.target.value}
                      })}
                      className="cyber-input w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Cor Secundária
                    </label>
                    <input
                      type="color"
                      value={certificateData.customization.secondaryColor}
                      onChange={(e) => setCertificateData({
                        ...certificateData,
                        customization: {...certificateData.customization, secondaryColor: e.target.value}
                      })}
                      className="cyber-input w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Cor do Texto
                    </label>
                    <input
                      type="color"
                      value={certificateData.customization.textColor}
                      onChange={(e) => setCertificateData({
                        ...certificateData,
                        customization: {...certificateData.customization, textColor: e.target.value}
                      })}
                      className="cyber-input w-full h-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={generateCertificate}
              disabled={isGenerating}
              className="cyber-button-glow w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center space-x-2">
                  <Award className="h-5 w-5 animate-pulse" />
                  <span>Gerando Certificado...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Gerar Certificado</span>
                </span>
              )}
            </button>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="cyber-card sticky top-24">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Pré-visualização
              </h2>

              {generatedCertificate ? (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <iframe
                      src={generatedCertificate}
                      className="w-full h-64 border-0 rounded"
                      title="Certificado Preview"
                    />
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={downloadCertificate}
                      className="cyber-button w-full py-3"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download HTML
                    </button>

                    <button
                      onClick={copyCertificateHTML}
                      className="cyber-button w-full py-3"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar HTML
                    </button>

                    <button
                      onClick={shareCertificate}
                      className="cyber-button w-full py-3"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-cyber-blue/30 rounded-lg p-8 text-center">
                  <Award className="h-16 w-16 text-cyber-blue/50 mx-auto mb-4" />
                  <p className="text-gray-400 font-tech text-sm">
                    Preencha as informações e clique em "Gerar Certificado" para ver o resultado
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
                { icon: Award, title: '6 Templates', desc: 'Designs profissionais variados' },
                { icon: Palette, title: 'Cores Personalizadas', desc: 'Paletas e cores customizáveis' },
                { icon: Type, title: 'Fontes Premium', desc: 'Tipografia elegante e legível' },
                { icon: Download, title: 'Download Gratuito', desc: 'HTML pronto para impressão' },
                { icon: Eye, title: 'Preview Instantâneo', desc: 'Veja em tempo real' },
                { icon: Copy, title: 'Copiar Código', desc: 'HTML limpo e editável' },
                { icon: User, title: 'Dados Dinâmicos', desc: 'Campos automatizados' },
                { icon: Star, title: 'Qualidade Profissional', desc: 'Resultado impecável' }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="p-3 bg-cyber-pink/20 rounded-xl w-fit mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-cyber-pink" />
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
