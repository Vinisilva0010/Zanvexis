'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  Upload, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target,
  Sparkles,
  Play,
  RefreshCw,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'

export default function AnalyticsProPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [dragActive, setDragActive] = useState(false)
  const { user } = useUser()

  // Mock data para demonstração
  const mockResults = {
    totalRows: 1247,
    categories: [
      { name: 'Vendas', value: 45, color: 'cyber-blue' },
      { name: 'Marketing', value: 30, color: 'cyber-green' },
      { name: 'Suporte', value: 15, color: 'cyber-yellow' },
      { name: 'Outros', value: 10, color: 'cyber-purple' }
    ],
    insights: [
      'Crescimento de 23% nas vendas no último trimestre',
      'Taxa de conversão melhorou 15% com campanhas de email',
      'Pico de atividade detectado nas terças-feiras',
      'Segmento premium representa 40% da receita'
    ],
    metrics: {
      totalValue: 'R$ 2.847.392',
      avgTicket: 'R$ 2.284',
      conversionRate: '12.5%',
      growth: '+18.7%'
    }
  }

  const handleFileSelect = (file: File) => {
    if (file && (file.type.includes('excel') || file.type.includes('csv') || file.name.endsWith('.xlsx') || file.name.endsWith('.csv'))) {
      setSelectedFile(file)
      setResults(null)
    } else {
      alert('Por favor, selecione um arquivo Excel (.xlsx) ou CSV (.csv)')
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const processFile = async () => {
    if (!selectedFile) return
    
    setIsProcessing(true)
    
    // Simula processamento
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setResults(mockResults)
    setIsProcessing(false)
  }

  const downloadReport = () => {
    // Simula download do relatório
    const element = document.createElement('a')
    const file = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' })
    element.href = URL.createObjectURL(file)
    element.download = 'analytics-report.json'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
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
            <div className="p-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-2xl">
              <BarChart3 className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
            Analytics <span className="text-cyber-blue">Pro</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Transforme suas planilhas Excel em análises poderosas com visualizações modernas e insights automáticos alimentados por IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Upload de Dados
              </h2>

              {/* File Upload */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                  dragActive
                    ? 'border-cyber-blue bg-cyber-blue/10'
                    : 'border-cyber-blue/30 hover:border-cyber-blue/60'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Upload className="h-12 w-12 text-cyber-blue" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-tech text-white">
                      Arraste seu arquivo aqui ou
                    </p>
                    <label className="cyber-button px-6 py-3 cursor-pointer">
                      <span>Selecionar Arquivo</span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".xlsx,.xls,.csv"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                      />
                    </label>
                  </div>
                  
                  <p className="text-sm text-gray-400">
                    Suporte para Excel (.xlsx) e CSV (.csv) - Até 50MB
                  </p>
                </div>
              </div>

              {/* Selected File */}
              {selectedFile && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-cyber-green/10 border border-cyber-green/30 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-cyber-green" />
                      <div>
                        <p className="font-tech text-white">{selectedFile.name}</p>
                        <p className="text-sm text-gray-400">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-cyber-green" />
                  </div>
                </motion.div>
              )}

              {/* Process Button */}
              {selectedFile && !results && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <button
                    onClick={processFile}
                    disabled={isProcessing}
                    className="cyber-button-glow w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center space-x-2">
                        <RefreshCw className="h-5 w-5 animate-spin" />
                        <span>Processando...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <Sparkles className="h-5 w-5" />
                        <span>Gerar Análise com IA</span>
                      </span>
                    )}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="cyber-card">
              <h3 className="text-xl font-tech font-bold text-white mb-4">
                Recursos Inclusos
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: BarChart3, text: 'Gráficos interativos automáticos' },
                  { icon: TrendingUp, text: 'Análise de tendências e padrões' },
                  { icon: Target, text: 'Identificação de oportunidades' },
                  { icon: Users, text: 'Segmentação inteligente' },
                  { icon: Sparkles, text: 'Insights gerados por IA' },
                  { icon: Download, text: 'Relatórios em PDF/Excel' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="h-5 w-5 text-cyber-blue" />
                    <span className="text-gray-300 font-tech text-sm">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="text-xl font-tech font-bold text-white mb-4">
                Como Funciona
              </h3>
              
              <div className="space-y-4">
                {[
                  '1. Faça upload do seu arquivo Excel/CSV',
                  '2. Nossa IA analisa automaticamente os dados',
                  '3. Receba insights e visualizações prontas',
                  '4. Baixe relatórios profissionais'
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyber-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyber-blue text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 font-tech text-sm">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <div className="cyber-card">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-tech font-bold text-white">
                  Análise Completa
                </h2>
                <button
                  onClick={downloadReport}
                  className="cyber-button px-6 py-3"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Relatório
                </button>
              </div>

              {/* Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Valor Total', value: results.metrics.totalValue, icon: Target, color: 'text-cyber-green' },
                  { label: 'Ticket Médio', value: results.metrics.avgTicket, icon: BarChart3, color: 'text-cyber-blue' },
                  { label: 'Taxa Conversão', value: results.metrics.conversionRate, icon: TrendingUp, color: 'text-cyber-yellow' },
                  { label: 'Crescimento', value: results.metrics.growth, icon: Sparkles, color: 'text-cyber-purple' }
                ].map((metric, index) => (
                  <div key={index} className="bg-dark-surface/50 border border-cyber-blue/20 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                    <div className="text-2xl font-cyber font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400 font-tech">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-tech font-bold text-white mb-6">
                    Distribuição por Categoria
                  </h3>
                  <div className="space-y-4">
                    {results.categories.map((category: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-tech text-white">{category.name}</span>
                          <span className={`font-bold text-${category.color}`}>{category.value}%</span>
                        </div>
                        <div className="w-full bg-dark-surface/50 rounded-full h-2">
                          <div
                            className={`bg-${category.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${category.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-tech font-bold text-white mb-6">
                    Insights da IA
                  </h3>
                  <div className="space-y-4">
                    {results.insights.map((insight: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded-lg">
                        <Sparkles className="h-5 w-5 text-cyber-blue flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-tech text-sm leading-relaxed">
                          {insight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Summary */}
              <div className="border-t border-cyber-blue/20 pt-6">
                <div className="text-center">
                  <p className="text-gray-400 font-tech">
                    Arquivo processado: <span className="text-white">{selectedFile?.name}</span> • 
                    Linhas analisadas: <span className="text-cyber-blue">{results.totalRows.toLocaleString()}</span> • 
                    Processado por: <span className="text-white">{user?.firstName || 'Usuário'}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

