'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  QrCode, 
  Link, 
  Download, 
  Copy, 
  Share2,
  Smartphone,
  Wifi,
  Mail,
  MessageSquare,
  MapPin,
  CreditCard,
  Calendar,
  User,
  Globe,
  Eye,
  Settings,
  Palette,
  Zap
} from 'lucide-react'

interface QRCodeData {
  type: string
  content: string
  text?: string
  url?: string
  email?: string
  phone?: string
  wifi?: {
    ssid: string
    password: string
    security: string
  }
  vcard?: {
    name: string
    phone: string
    email: string
    company: string
  }
  event?: {
    title: string
    date: string
    location: string
  }
  customization: {
    size: number
    color: string
    bgColor: string
    logoUrl?: string
  }
}

const qrTypes = [
  { id: 'url', label: 'Link/URL', icon: Globe, description: 'Redirecionar para um site' },
  { id: 'text', label: 'Texto', icon: MessageSquare, description: 'Exibir texto simples' },
  { id: 'email', label: 'Email', icon: Mail, description: 'Abrir cliente de email' },
  { id: 'phone', label: 'Telefone', icon: Smartphone, description: 'Ligar para um número' },
  { id: 'sms', label: 'SMS', icon: MessageSquare, description: 'Enviar mensagem SMS' },
  { id: 'wifi', label: 'WiFi', icon: Wifi, description: 'Conectar a rede WiFi' },
  { id: 'vcard', label: 'Cartão Visita', icon: User, description: 'Salvar contato' },
  { id: 'event', label: 'Evento', icon: Calendar, description: 'Adicionar ao calendário' },
  { id: 'location', label: 'Localização', icon: MapPin, description: 'Abrir no mapa' }
]

const colorPresets = [
  { name: 'Clássico', color: '#000000', bg: '#FFFFFF' },
  { name: 'Azul', color: '#2563EB', bg: '#FFFFFF' },
  { name: 'Verde', color: '#059669', bg: '#FFFFFF' },
  { name: 'Roxo', color: '#7C3AED', bg: '#FFFFFF' },
  { name: 'Vermelho', color: '#DC2626', bg: '#FFFFFF' },
  { name: 'Escuro', color: '#FFFFFF', bg: '#111827' }
]

export default function GeradorQRCodePage() {
  const [qrData, setQrData] = useState<QRCodeData>({
    type: 'url',
    content: '',
    customization: {
      size: 256,
      color: '#000000',
      bgColor: '#FFFFFF'
    }
  })

  const [generatedQR, setGeneratedQR] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)

  const generateQRCode = async () => {
    if (!qrData.content && !getQRContent()) {
      alert('Preencha o conteúdo do QR Code')
      return
    }

    setIsGenerating(true)

    // Simula geração do QR Code
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Em uma implementação real, você usaria uma biblioteca como qrcode
    // Por agora, vamos simular com uma URL da API do Google Charts (descontinuada, mas para exemplo)
    const content = encodeURIComponent(getQRContent())
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrData.customization.size}x${qrData.customization.size}&data=${content}&color=${qrData.customization.color.replace('#', '')}&bgcolor=${qrData.customization.bgColor.replace('#', '')}`
    
    setGeneratedQR(qrUrl)
    setIsGenerating(false)
  }

  const getQRContent = (): string => {
    switch (qrData.type) {
      case 'url':
        return qrData.url || qrData.content
      case 'text':
        return qrData.text || qrData.content
      case 'email':
        return `mailto:${qrData.email || qrData.content}`
      case 'phone':
        return `tel:${qrData.phone || qrData.content}`
      case 'sms':
        return `sms:${qrData.phone || qrData.content}`
      case 'wifi':
        if (qrData.wifi) {
          return `WIFI:T:${qrData.wifi.security};S:${qrData.wifi.ssid};P:${qrData.wifi.password};;`
        }
        return qrData.content
      case 'vcard':
        if (qrData.vcard) {
          return `BEGIN:VCARD\nVERSION:3.0\nFN:${qrData.vcard.name}\nTEL:${qrData.vcard.phone}\nEMAIL:${qrData.vcard.email}\nORG:${qrData.vcard.company}\nEND:VCARD`
        }
        return qrData.content
      case 'event':
        if (qrData.event) {
          const eventDate = new Date(qrData.event.date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
          return `BEGIN:VEVENT\nSUMMARY:${qrData.event.title}\nDTSTART:${eventDate}\nLOCATION:${qrData.event.location}\nEND:VEVENT`
        }
        return qrData.content
      case 'location':
        return `geo:${qrData.content}`
      default:
        return qrData.content
    }
  }

  const downloadQR = () => {
    if (!generatedQR) return
    
    const link = document.createElement('a')
    link.href = generatedQR
    link.download = `qrcode-${Date.now()}.png`
    link.click()
  }

  const copyQRLink = () => {
    if (generatedQR) {
      navigator.clipboard.writeText(generatedQR)
      alert('Link do QR Code copiado!')
    }
  }

  const shareQR = async () => {
    if (navigator.share && generatedQR) {
      try {
        await navigator.share({
          title: 'QR Code Gerado',
          text: 'Confira este QR Code que criei!',
          url: generatedQR
        })
      } catch (err) {
        copyQRLink()
      }
    } else {
      copyQRLink()
    }
  }

  const renderFormFields = () => {
    switch (qrData.type) {
      case 'url':
        return (
          <div>
            <label className="block text-sm font-tech text-gray-300 mb-2">URL do Site</label>
            <input
              type="url"
              value={qrData.url || ''}
              onChange={(e) => setQrData({...qrData, url: e.target.value, content: e.target.value})}
              className="cyber-input w-full"
              placeholder="https://exemplo.com"
            />
          </div>
        )
      
      case 'text':
        return (
          <div>
            <label className="block text-sm font-tech text-gray-300 mb-2">Texto</label>
            <textarea
              value={qrData.text || ''}
              onChange={(e) => setQrData({...qrData, text: e.target.value, content: e.target.value})}
              className="cyber-input w-full h-24 resize-none"
              placeholder="Digite seu texto aqui..."
            />
          </div>
        )
      
      case 'email':
        return (
          <div>
            <label className="block text-sm font-tech text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={qrData.email || ''}
              onChange={(e) => setQrData({...qrData, email: e.target.value, content: e.target.value})}
              className="cyber-input w-full"
              placeholder="contato@exemplo.com"
            />
          </div>
        )
      
      case 'phone':
      case 'sms':
        return (
          <div>
            <label className="block text-sm font-tech text-gray-300 mb-2">
              {qrData.type === 'phone' ? 'Número de Telefone' : 'Número para SMS'}
            </label>
            <input
              type="tel"
              value={qrData.phone || ''}
              onChange={(e) => setQrData({...qrData, phone: e.target.value, content: e.target.value})}
              className="cyber-input w-full"
              placeholder="+55 11 99999-9999"
            />
          </div>
        )
      
      case 'wifi':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Nome da Rede (SSID)</label>
              <input
                type="text"
                value={qrData.wifi?.ssid || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  wifi: {...(qrData.wifi || {security: 'WPA', password: ''}), ssid: e.target.value}
                })}
                className="cyber-input w-full"
                placeholder="MinhaRedeWiFi"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Senha</label>
              <input
                type="password"
                value={qrData.wifi?.password || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  wifi: {...(qrData.wifi || {security: 'WPA', ssid: ''}), password: e.target.value}
                })}
                className="cyber-input w-full"
                placeholder="minhasenha123"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Tipo de Segurança</label>
              <select
                value={qrData.wifi?.security || 'WPA'}
                onChange={(e) => setQrData({
                  ...qrData, 
                  wifi: {...(qrData.wifi || {ssid: '', password: ''}), security: e.target.value}
                })}
                className="cyber-input w-full"
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">Sem senha</option>
              </select>
            </div>
          </div>
        )
      
      case 'vcard':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Nome Completo</label>
              <input
                type="text"
                value={qrData.vcard?.name || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  vcard: {...(qrData.vcard || {phone: '', email: '', company: ''}), name: e.target.value}
                })}
                className="cyber-input w-full"
                placeholder="João Silva"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Telefone</label>
              <input
                type="tel"
                value={qrData.vcard?.phone || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  vcard: {...(qrData.vcard || {name: '', email: '', company: ''}), phone: e.target.value}
                })}
                className="cyber-input w-full"
                placeholder="+55 11 99999-9999"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={qrData.vcard?.email || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  vcard: {...(qrData.vcard || {name: '', phone: '', company: ''}), email: e.target.value}
                })}
                className="cyber-input w-full"
                placeholder="joao@empresa.com"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Empresa</label>
              <input
                type="text"
                value={qrData.vcard?.company || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  vcard: {...(qrData.vcard || {name: '', phone: '', email: ''}), company: e.target.value}
                })}
                className="cyber-input w-full"
                placeholder="Minha Empresa Ltda"
              />
            </div>
          </div>
        )
      
      case 'event':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Nome do Evento</label>
              <input
                type="text"
                value={qrData.event?.title || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  event: {...(qrData.event || {date: '', location: ''}), title: e.target.value}
                })}
                className="cyber-input w-full"
                placeholder="Reunião de Negócios"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Data e Hora</label>
              <input
                type="datetime-local"
                value={qrData.event?.date || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  event: {...(qrData.event || {title: '', location: ''}), date: e.target.value}
                })}
                className="cyber-input w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-gray-300 mb-2">Local</label>
              <input
                type="text"
                value={qrData.event?.location || ''}
                onChange={(e) => setQrData({
                  ...qrData, 
                  event: {...(qrData.event || {title: '', date: ''}), location: e.target.value}
                })}
                className="cyber-input w-full"
                placeholder="Sala de Reuniões A"
              />
            </div>
          </div>
        )
      
      case 'location':
        return (
          <div>
            <label className="block text-sm font-tech text-gray-300 mb-2">Coordenadas (Latitude,Longitude)</label>
            <input
              type="text"
              value={qrData.content || ''}
              onChange={(e) => setQrData({...qrData, content: e.target.value})}
              className="cyber-input w-full"
              placeholder="-23.5505,-46.6333"
            />
            <p className="text-xs text-gray-500 mt-1">
              Exemplo: -23.5505,-46.6333 (São Paulo)
            </p>
          </div>
        )
      
      default:
        return (
          <div>
            <label className="block text-sm font-tech text-gray-300 mb-2">Conteúdo</label>
            <input
              type="text"
              value={qrData.content || ''}
              onChange={(e) => setQrData({...qrData, content: e.target.value})}
              className="cyber-input w-full"
              placeholder="Digite o conteúdo..."
            />
          </div>
        )
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
              <QrCode className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
            Gerador de <span className="text-cyber-pink">QR Code</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Crie QR Codes personalizados para qualquer necessidade. Links, WiFi, cartões de visita, eventos e muito mais!
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
            {/* Type Selection */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Tipo de QR Code
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {qrTypes.map(type => {
                  const Icon = type.icon
                  return (
                    <button
                      key={type.id}
                      onClick={() => setQrData({...qrData, type: type.id, content: ''})}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        qrData.type === type.id
                          ? 'border-cyber-pink bg-cyber-pink/20'
                          : 'border-cyber-blue/30 hover:border-cyber-blue/60'
                      }`}
                    >
                      <Icon className={`h-6 w-6 mb-2 ${
                        qrData.type === type.id ? 'text-cyber-pink' : 'text-cyber-blue'
                      }`} />
                      <div className="font-tech font-semibold text-white text-sm mb-1">
                        {type.label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {type.description}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Content Form */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Conteúdo
              </h2>
              
              <div className="space-y-6">
                {renderFormFields()}
              </div>
            </div>

            {/* Customization */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Personalização
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-4">Cores Pré-definidas</label>
                  <div className="grid grid-cols-3 gap-3">
                    {colorPresets.map(preset => (
                      <button
                        key={preset.name}
                        onClick={() => setQrData({
                          ...qrData, 
                          customization: {
                            ...qrData.customization,
                            color: preset.color,
                            bgColor: preset.bg
                          }
                        })}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          qrData.customization.color === preset.color && qrData.customization.bgColor === preset.bg
                            ? 'border-cyber-pink'
                            : 'border-cyber-blue/30 hover:border-cyber-blue/60'
                        }`}
                      >
                        <div 
                          className="w-8 h-8 rounded mx-auto mb-2 border"
                          style={{ 
                            backgroundColor: preset.bg,
                            borderColor: preset.color,
                            borderWidth: '3px'
                          }}
                        />
                        <span className="text-xs font-tech text-white">{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">Tamanho</label>
                    <select
                      value={qrData.customization.size}
                      onChange={(e) => setQrData({
                        ...qrData,
                        customization: {...qrData.customization, size: parseInt(e.target.value)}
                      })}
                      className="cyber-input w-full"
                    >
                      <option value={128}>128x128</option>
                      <option value={256}>256x256</option>
                      <option value={512}>512x512</option>
                      <option value={1024}>1024x1024</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">Cor Principal</label>
                    <input
                      type="color"
                      value={qrData.customization.color}
                      onChange={(e) => setQrData({
                        ...qrData,
                        customization: {...qrData.customization, color: e.target.value}
                      })}
                      className="cyber-input w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">Cor de Fundo</label>
                    <input
                      type="color"
                      value={qrData.customization.bgColor}
                      onChange={(e) => setQrData({
                        ...qrData,
                        customization: {...qrData.customization, bgColor: e.target.value}
                      })}
                      className="cyber-input w-full h-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={generateQRCode}
              disabled={isGenerating}
              className="cyber-button-glow w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center space-x-2">
                  <QrCode className="h-5 w-5 animate-pulse" />
                  <span>Gerando QR Code...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Gerar QR Code</span>
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

              {generatedQR ? (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <img 
                      src={generatedQR} 
                      alt="QR Code gerado"
                      className="mx-auto max-w-full"
                      style={{ maxWidth: '300px' }}
                    />
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={downloadQR}
                      className="cyber-button w-full py-3"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PNG
                    </button>

                    <button
                      onClick={copyQRLink}
                      className="cyber-button w-full py-3"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar Link
                    </button>

                    <button
                      onClick={shareQR}
                      className="cyber-button w-full py-3"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </button>
                  </div>

                  <div className="bg-dark-surface/50 border border-cyber-blue/20 rounded-lg p-4">
                    <h4 className="text-sm font-tech font-bold text-cyber-pink mb-2">
                      Conteúdo do QR:
                    </h4>
                    <p className="text-xs text-gray-400 break-all">
                      {getQRContent()}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-cyber-blue/30 rounded-lg p-12 text-center">
                  <QrCode className="h-16 w-16 text-cyber-blue/50 mx-auto mb-4" />
                  <p className="text-gray-400 font-tech">
                    Configure o tipo e conteúdo, depois clique em "Gerar QR Code"
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
                { icon: QrCode, title: '9 Tipos de QR', desc: 'URL, WiFi, vCard, SMS e mais' },
                { icon: Palette, title: 'Personalização', desc: 'Cores e tamanhos customizáveis' },
                { icon: Download, title: 'Download Gratuito', desc: 'Baixe em alta qualidade' },
                { icon: Smartphone, title: 'Mobile Friendly', desc: 'Funciona em todos dispositivos' },
                { icon: Eye, title: 'Preview Instantâneo', desc: 'Veja antes de baixar' },
                { icon: Share2, title: 'Fácil Compartilhamento', desc: 'Copie e compartilhe rapidamente' },
                { icon: Settings, title: 'Sem Limitações', desc: 'Gere quantos QRs precisar' },
                { icon: Zap, title: 'Super Rápido', desc: 'Geração em segundos' }
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
