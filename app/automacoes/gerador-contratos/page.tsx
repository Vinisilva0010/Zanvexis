'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  Copy, 
  Share2,
  User,
  Building,
  Calendar,
  DollarSign,
  Clock,
  Shield,
  Eye,
  CheckCircle,
  AlertCircle,
  Users,
  Briefcase,
  Home,
  Laptop,
  Palette,
  Zap,
  Edit3
} from 'lucide-react'

interface ContractData {
  type: string
  contractor: {
    name: string
    document: string
    address: string
    email: string
    phone: string
  }
  client: {
    name: string
    document: string
    address: string
    email: string
    phone: string
  }
  project: {
    title: string
    description: string
    deliverables: string[]
    startDate: string
    endDate: string
    value: string
    paymentTerms: string
    paymentMethod: string
  }
  terms: {
    cancellation: string
    revision: string
    intellectual: string
    confidentiality: boolean
    warranty: string
  }
}

const contractTypes = [
  {
    id: 'freelance',
    name: 'Freelancer/Prestação de Serviço',
    description: 'Para trabalhos independentes e consultoria',
    icon: User,
    color: 'bg-blue-500'
  },
  {
    id: 'development',
    name: 'Desenvolvimento de Software',
    description: 'Para projetos de desenvolvimento web/mobile',
    icon: Laptop,
    color: 'bg-purple-500'
  },
  {
    id: 'design',
    name: 'Design Gráfico/Web',
    description: 'Para projetos criativos e visuais',
    icon: Palette,
    color: 'bg-pink-500'
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    description: 'Para campanhas e estratégias digitais',
    icon: Users,
    color: 'bg-green-500'
  },
  {
    id: 'consultoria',
    name: 'Consultoria Empresarial',
    description: 'Para assessoria e consultoria',
    icon: Briefcase,
    color: 'bg-orange-500'
  },
  {
    id: 'manutencao',
    name: 'Manutenção/Suporte',
    description: 'Para contratos de manutenção recorrente',
    icon: Shield,
    color: 'bg-cyan-500'
  }
]

const paymentTermsOptions = [
  'À vista (100% na entrega)',
  '50% início + 50% entrega',
  '30% início + 70% entrega',
  '3x sem juros (parcelado)',
  'Mensal durante o projeto',
  'Por milestone/etapa',
  'Personalizado'
]

const paymentMethods = [
  'PIX',
  'Transferência bancária',
  'Boleto bancário',
  'Cartão de crédito',
  'PayPal',
  'Dinheiro',
  'Cheque'
]

export default function GeradorContratosPage() {
  const [contractData, setContractData] = useState<ContractData>({
    type: 'freelance',
    contractor: {
      name: '',
      document: '',
      address: '',
      email: '',
      phone: ''
    },
    client: {
      name: '',
      document: '',
      address: '',
      email: '',
      phone: ''
    },
    project: {
      title: '',
      description: '',
      deliverables: [''],
      startDate: '',
      endDate: '',
      value: '',
      paymentTerms: paymentTermsOptions[0],
      paymentMethod: paymentMethods[0]
    },
    terms: {
      cancellation: '7 dias',
      revision: '2 revisões incluídas',
      intellectual: 'Transferida ao cliente após pagamento',
      confidentiality: true,
      warranty: '90 dias'
    }
  })

  const [generatedContract, setGeneratedContract] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)

  const addDeliverable = () => {
    setContractData({
      ...contractData,
      project: {
        ...contractData.project,
        deliverables: [...contractData.project.deliverables, '']
      }
    })
  }

  const updateDeliverable = (index: number, value: string) => {
    const newDeliverables = [...contractData.project.deliverables]
    newDeliverables[index] = value
    setContractData({
      ...contractData,
      project: {
        ...contractData.project,
        deliverables: newDeliverables
      }
    })
  }

  const removeDeliverable = (index: number) => {
    if (contractData.project.deliverables.length > 1) {
      const newDeliverables = contractData.project.deliverables.filter((_, i) => i !== index)
      setContractData({
        ...contractData,
        project: {
          ...contractData.project,
          deliverables: newDeliverables
        }
      })
    }
  }

  const generateContract = async () => {
    if (!contractData.contractor.name || !contractData.client.name || !contractData.project.title) {
      alert('Preencha pelo menos os dados básicos: contratante, cliente e título do projeto')
      return
    }

    setIsGenerating(true)
    await new Promise(resolve => setTimeout(resolve, 2000))

    const contractHTML = generateContractHTML()
    const blob = new Blob([contractHTML], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    
    setGeneratedContract(url)
    setIsGenerating(false)
  }

  const generateContractHTML = (): string => {
    const selectedType = contractTypes.find(t => t.id === contractData.type)
    const today = new Date().toLocaleDateString('pt-BR')

    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contrato - ${contractData.project.title}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #1F2937;
            max-width: 210mm;
            margin: 0 auto;
            padding: 20mm;
            background: white;
        }
        
        .contract-header {
            text-align: center;
            border-bottom: 3px solid #2563EB;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .contract-title {
            font-size: 28px;
            font-weight: 700;
            color: #1E40AF;
            margin-bottom: 8px;
        }
        
        .contract-subtitle {
            font-size: 16px;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #1E40AF;
            margin-bottom: 12px;
            padding-bottom: 5px;
            border-bottom: 1px solid #E5E7EB;
        }
        
        .parties {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 25px;
        }
        
        .party {
            padding: 20px;
            border: 1px solid #E5E7EB;
            border-radius: 8px;
            background: #F9FAFB;
        }
        
        .party-title {
            font-weight: 600;
            color: #1E40AF;
            margin-bottom: 10px;
            font-size: 16px;
        }
        
        .party-info {
            font-size: 14px;
            line-height: 1.5;
        }
        
        .project-details {
            background: #F0F9FF;
            border: 1px solid #BAE6FD;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .deliverables {
            list-style: none;
            padding-left: 0;
        }
        
        .deliverables li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 8px;
        }
        
        .deliverables li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #059669;
            font-weight: bold;
        }
        
        .terms-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        
        .term-item {
            padding: 15px;
            border: 1px solid #E5E7EB;
            border-radius: 6px;
            background: white;
        }
        
        .term-label {
            font-weight: 600;
            color: #374151;
            font-size: 14px;
            margin-bottom: 5px;
        }
        
        .term-value {
            color: #6B7280;
            font-size: 14px;
        }
        
        .value-highlight {
            background: #FEF3C7;
            border: 1px solid #F59E0B;
            border-radius: 6px;
            padding: 15px;
            text-align: center;
            margin: 20px 0;
        }
        
        .value-amount {
            font-size: 24px;
            font-weight: 700;
            color: #D97706;
        }
        
        .signatures {
            margin-top: 50px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }
        
        .signature-box {
            text-align: center;
            padding-top: 40px;
            border-top: 1px solid #374151;
        }
        
        .signature-name {
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .signature-role {
            font-size: 14px;
            color: #6B7280;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #E5E7EB;
            text-align: center;
            font-size: 12px;
            color: #9CA3AF;
        }
        
        .clause {
            margin-bottom: 15px;
            text-align: justify;
        }
        
        .clause-number {
            font-weight: 600;
            color: #1E40AF;
        }
        
        @media print {
            body { padding: 15mm; }
            .contract-header { page-break-after: avoid; }
            .section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="contract-header">
        <div class="contract-title">CONTRATO DE ${selectedType?.name.toUpperCase()}</div>
        <div class="contract-subtitle">${contractData.project.title}</div>
    </div>

    <div class="section">
        <div class="section-title">PARTES CONTRATANTES</div>
        <div class="parties">
            <div class="party">
                <div class="party-title">CONTRATANTE</div>
                <div class="party-info">
                    <strong>Nome:</strong> ${contractData.contractor.name}<br>
                    <strong>Documento:</strong> ${contractData.contractor.document}<br>
                    <strong>Endereço:</strong> ${contractData.contractor.address}<br>
                    <strong>Email:</strong> ${contractData.contractor.email}<br>
                    <strong>Telefone:</strong> ${contractData.contractor.phone}
                </div>
            </div>
            
            <div class="party">
                <div class="party-title">CONTRATADO</div>
                <div class="party-info">
                    <strong>Nome:</strong> ${contractData.client.name}<br>
                    <strong>Documento:</strong> ${contractData.client.document}<br>
                    <strong>Endereço:</strong> ${contractData.client.address}<br>
                    <strong>Email:</strong> ${contractData.client.email}<br>
                    <strong>Telefone:</strong> ${contractData.client.phone}
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">OBJETO DO CONTRATO</div>
        <div class="project-details">
            <p><strong>Projeto:</strong> ${contractData.project.title}</p>
            <p><strong>Descrição:</strong> ${contractData.project.description}</p>
            
            <p style="margin-top: 15px;"><strong>Entregáveis:</strong></p>
            <ul class="deliverables">
                ${contractData.project.deliverables.filter(d => d.trim()).map(deliverable => 
                    `<li>${deliverable}</li>`
                ).join('')}
            </ul>
        </div>
    </div>

    <div class="section">
        <div class="section-title">VALOR E PAGAMENTO</div>
        <div class="value-highlight">
            <div class="value-amount">R$ ${contractData.project.value}</div>
            <div>${contractData.project.paymentTerms}</div>
            <div>Método: ${contractData.project.paymentMethod}</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">PRAZOS</div>
        <div class="terms-grid">
            <div class="term-item">
                <div class="term-label">Data de Início</div>
                <div class="term-value">${contractData.project.startDate ? new Date(contractData.project.startDate).toLocaleDateString('pt-BR') : 'A definir'}</div>
            </div>
            <div class="term-item">
                <div class="term-label">Data de Entrega</div>
                <div class="term-value">${contractData.project.endDate ? new Date(contractData.project.endDate).toLocaleDateString('pt-BR') : 'A definir'}</div>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">TERMOS E CONDIÇÕES</div>
        
        <div class="clause">
            <span class="clause-number">1.</span> <strong>Cancelamento:</strong> O contrato pode ser cancelado com ${contractData.terms.cancellation} de antecedência.
        </div>
        
        <div class="clause">
            <span class="clause-number">2.</span> <strong>Revisões:</strong> ${contractData.terms.revision}. Revisões adicionais serão cobradas à parte.
        </div>
        
        <div class="clause">
            <span class="clause-number">3.</span> <strong>Propriedade Intelectual:</strong> ${contractData.terms.intellectual}.
        </div>
        
        <div class="clause">
            <span class="clause-number">4.</span> <strong>Garantia:</strong> O trabalho possui garantia de ${contractData.terms.warranty} para correções de bugs ou problemas técnicos.
        </div>
        
        ${contractData.terms.confidentiality ? `
        <div class="clause">
            <span class="clause-number">5.</span> <strong>Confidencialidade:</strong> Ambas as partes concordam em manter sigilo sobre informações confidenciais trocadas durante o projeto.
        </div>
        ` : ''}
    </div>

    <div class="signatures">
        <div class="signature-box">
            <div class="signature-name">${contractData.contractor.name}</div>
            <div class="signature-role">Contratante</div>
        </div>
        
        <div class="signature-box">
            <div class="signature-name">${contractData.client.name}</div>
            <div class="signature-role">Contratado</div>
        </div>
    </div>

    <div class="footer">
        Contrato gerado em ${today} | Este documento possui valor legal quando assinado por ambas as partes
    </div>
</body>
</html>`
  }

  const downloadContract = () => {
    if (!generatedContract) return
    
    const link = document.createElement('a')
    link.href = generatedContract
    link.download = `contrato-${contractData.project.title.replace(/\s+/g, '-').toLowerCase()}.html`
    link.click()
  }

  const copyContractHTML = () => {
    if (generatedContract) {
      const html = generateContractHTML()
      navigator.clipboard.writeText(html)
      alert('Código HTML do contrato copiado!')
    }
  }

  const shareContract = async () => {
    if (navigator.share && generatedContract) {
      try {
        await navigator.share({
          title: `Contrato - ${contractData.project.title}`,
          text: `Contrato para o projeto ${contractData.project.title}`,
          url: generatedContract
        })
      } catch (err) {
        copyContractHTML()
      }
    } else {
      copyContractHTML()
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
              <FileText className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
            Gerador de <span className="text-cyber-pink">Contratos</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Crie contratos profissionais e juridicamente sólidos para seus projetos. Templates especializados por área!
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
            {/* Contract Type */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Tipo de Contrato
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contractTypes.map(type => {
                  const Icon = type.icon
                  return (
                    <button
                      key={type.id}
                      onClick={() => setContractData({...contractData, type: type.id})}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        contractData.type === type.id
                          ? 'border-cyber-pink bg-cyber-pink/20'
                          : 'border-cyber-blue/30 hover:border-cyber-blue/60'
                      }`}
                    >
                      <Icon className={`h-6 w-6 mb-3 ${
                        contractData.type === type.id ? 'text-cyber-pink' : 'text-cyber-blue'
                      }`} />
                      <div className="font-tech font-semibold text-white text-sm mb-1">
                        {type.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {type.description}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Parties Info */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Dados das Partes
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contractor */}
                <div>
                  <h3 className="text-lg font-tech font-semibold text-cyber-pink mb-4">
                    Contratante (Você)
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nome completo"
                      value={contractData.contractor.name}
                      onChange={(e) => setContractData({
                        ...contractData,
                        contractor: {...contractData.contractor, name: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                    <input
                      type="text"
                      placeholder="CPF/CNPJ"
                      value={contractData.contractor.document}
                      onChange={(e) => setContractData({
                        ...contractData,
                        contractor: {...contractData.contractor, document: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                    <input
                      type="text"
                      placeholder="Endereço completo"
                      value={contractData.contractor.address}
                      onChange={(e) => setContractData({
                        ...contractData,
                        contractor: {...contractData.contractor, address: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={contractData.contractor.email}
                      onChange={(e) => setContractData({
                        ...contractData,
                        contractor: {...contractData.contractor, email: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone"
                      value={contractData.contractor.phone}
                      onChange={(e) => setContractData({
                        ...contractData,
                        contractor: {...contractData.contractor, phone: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                  </div>
                </div>

                {/* Client */}
                <div>
                  <h3 className="text-lg font-tech font-semibold text-cyber-blue mb-4">
                    Cliente (Contratado)
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nome completo"
                      value={contractData.client.name}
                      onChange={(e) => setContractData({
                        ...contractData,
                        client: {...contractData.client, name: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                    <input
                      type="text"
                      placeholder="CPF/CNPJ"
                      value={contractData.client.document}
                      onChange={(e) => setContractData({
                        ...contractData,
                        client: {...contractData.client, document: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                    <input
                      type="text"
                      placeholder="Endereço completo"
                      value={contractData.client.address}
                      onChange={(e) => setContractData({
                        ...contractData,
                        client: {...contractData.client, address: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={contractData.client.email}
                      onChange={(e) => setContractData({
                        ...contractData,
                        client: {...contractData.client, email: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone"
                      value={contractData.client.phone}
                      onChange={(e) => setContractData({
                        ...contractData,
                        client: {...contractData.client, phone: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Detalhes do Projeto
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Título do Projeto *
                    </label>
                    <input
                      type="text"
                      value={contractData.project.title}
                      onChange={(e) => setContractData({
                        ...contractData,
                        project: {...contractData.project, title: e.target.value}
                      })}
                      className="cyber-input w-full"
                      placeholder="Ex: Desenvolvimento de Site Institucional"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Valor Total (R$)
                    </label>
                    <input
                      type="text"
                      value={contractData.project.value}
                      onChange={(e) => setContractData({
                        ...contractData,
                        project: {...contractData.project, value: e.target.value}
                      })}
                      className="cyber-input w-full"
                      placeholder="5.000,00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Descrição do Projeto
                  </label>
                  <textarea
                    value={contractData.project.description}
                    onChange={(e) => setContractData({
                      ...contractData,
                      project: {...contractData.project, description: e.target.value}
                    })}
                    className="cyber-input w-full h-24 resize-none"
                    placeholder="Descreva detalhadamente o que será desenvolvido..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Entregáveis
                  </label>
                  {contractData.project.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={deliverable}
                        onChange={(e) => updateDeliverable(index, e.target.value)}
                        className="cyber-input flex-1"
                        placeholder={`Entregável ${index + 1}`}
                      />
                      {contractData.project.deliverables.length > 1 && (
                        <button
                          onClick={() => removeDeliverable(index)}
                          className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addDeliverable}
                    className="text-cyber-blue hover:text-cyber-pink transition-colors font-tech text-sm"
                  >
                    + Adicionar entregável
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Data de Início
                    </label>
                    <input
                      type="date"
                      value={contractData.project.startDate}
                      onChange={(e) => setContractData({
                        ...contractData,
                        project: {...contractData.project, startDate: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Data de Entrega
                    </label>
                    <input
                      type="date"
                      value={contractData.project.endDate}
                      onChange={(e) => setContractData({
                        ...contractData,
                        project: {...contractData.project, endDate: e.target.value}
                      })}
                      className="cyber-input w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Forma de Pagamento
                    </label>
                    <select
                      value={contractData.project.paymentTerms}
                      onChange={(e) => setContractData({
                        ...contractData,
                        project: {...contractData.project, paymentTerms: e.target.value}
                      })}
                      className="cyber-input w-full"
                    >
                      {paymentTermsOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Método de Pagamento
                    </label>
                    <select
                      value={contractData.project.paymentMethod}
                      onChange={(e) => setContractData({
                        ...contractData,
                        project: {...contractData.project, paymentMethod: e.target.value}
                      })}
                      className="cyber-input w-full"
                    >
                      {paymentMethods.map(method => (
                        <option key={method} value={method}>{method}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Termos e Condições
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Prazo para Cancelamento
                  </label>
                  <input
                    type="text"
                    value={contractData.terms.cancellation}
                    onChange={(e) => setContractData({
                      ...contractData,
                      terms: {...contractData.terms, cancellation: e.target.value}
                    })}
                    className="cyber-input w-full"
                    placeholder="7 dias"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Política de Revisões
                  </label>
                  <input
                    type="text"
                    value={contractData.terms.revision}
                    onChange={(e) => setContractData({
                      ...contractData,
                      terms: {...contractData.terms, revision: e.target.value}
                    })}
                    className="cyber-input w-full"
                    placeholder="2 revisões incluídas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Propriedade Intelectual
                  </label>
                  <input
                    type="text"
                    value={contractData.terms.intellectual}
                    onChange={(e) => setContractData({
                      ...contractData,
                      terms: {...contractData.terms, intellectual: e.target.value}
                    })}
                    className="cyber-input w-full"
                    placeholder="Transferida ao cliente após pagamento"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Garantia
                  </label>
                  <input
                    type="text"
                    value={contractData.terms.warranty}
                    onChange={(e) => setContractData({
                      ...contractData,
                      terms: {...contractData.terms, warranty: e.target.value}
                    })}
                    className="cyber-input w-full"
                    placeholder="90 dias"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={contractData.terms.confidentiality}
                    onChange={(e) => setContractData({
                      ...contractData,
                      terms: {...contractData.terms, confidentiality: e.target.checked}
                    })}
                    className="w-5 h-5 text-cyber-pink bg-transparent border-2 border-cyber-blue rounded focus:ring-cyber-pink"
                  />
                  <span className="text-white font-tech">
                    Incluir cláusula de confidencialidade
                  </span>
                </label>
              </div>
            </div>

            <button
              onClick={generateContract}
              disabled={isGenerating}
              className="cyber-button-glow w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center space-x-2">
                  <FileText className="h-5 w-5 animate-pulse" />
                  <span>Gerando Contrato...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Gerar Contrato</span>
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

              {generatedContract ? (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <iframe
                      src={generatedContract}
                      className="w-full h-96 border-0 rounded"
                      title="Contrato Preview"
                    />
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={downloadContract}
                      className="cyber-button w-full py-3"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download HTML
                    </button>

                    <button
                      onClick={copyContractHTML}
                      className="cyber-button w-full py-3"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar HTML
                    </button>

                    <button
                      onClick={shareContract}
                      className="cyber-button w-full py-3"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </button>
                  </div>

                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-tech font-semibold">Pronto!</span>
                    </div>
                    <p className="text-sm text-green-300">
                      Contrato gerado com sucesso. Imprima e colete as assinaturas.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-cyber-blue/30 rounded-lg p-8 text-center">
                  <FileText className="h-16 w-16 text-cyber-blue/50 mx-auto mb-4" />
                  <p className="text-gray-400 font-tech text-sm">
                    Preencha os dados e clique em "Gerar Contrato" para visualizar
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
                { icon: FileText, title: '6 Tipos de Contrato', desc: 'Templates especializados por área' },
                { icon: Shield, title: 'Juridicamente Válido', desc: 'Cláusulas profissionais incluídas' },
                { icon: Edit3, title: 'Totalmente Editável', desc: 'HTML limpo para customização' },
                { icon: Download, title: 'Download Gratuito', desc: 'Formato pronto para impressão' },
                { icon: User, title: 'Dados Automáticos', desc: 'Preenche campos dinamicamente' },
                { icon: Eye, title: 'Preview Instantâneo', desc: 'Veja antes de finalizar' },
                { icon: Clock, title: 'Geração Rápida', desc: 'Contrato pronto em minutos' },
                { icon: CheckCircle, title: 'Pronto para Usar', desc: 'Imprima e colete assinaturas' }
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
