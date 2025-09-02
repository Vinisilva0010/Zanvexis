'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageSquare, 
  Download, 
  Copy, 
  Share2,
  Send,
  Bot,
  User,
  Settings,
  Palette,
  Eye,
  Zap,
  Plus,
  Trash2,
  Edit3,
  Smartphone,
  Globe,
  Code,
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react'

interface ChatMessage {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface FAQItem {
  id: string
  question: string
  answer: string
  keywords: string[]
}

interface ChatbotConfig {
  name: string
  welcomeMessage: string
  fallbackMessage: string
  avatar: string
  primaryColor: string
  secondaryColor: string
  textColor: string
  backgroundColor: string
  position: 'bottom-right' | 'bottom-left'
  faq: FAQItem[]
}

const defaultFAQ: FAQItem[] = [
  {
    id: '1',
    question: 'Qual o horário de funcionamento?',
    answer: 'Nosso atendimento funciona de segunda a sexta, das 8h às 18h. Fora desse horário, responderemos assim que possível!',
    keywords: ['horário', 'funcionamento', 'atendimento', 'aberto', 'funciona']
  },
  {
    id: '2',
    question: 'Como posso entrar em contato?',
    answer: 'Você pode nos contatar por email (contato@empresa.com), telefone (11) 99999-9999 ou através deste chat. Estamos sempre prontos para ajudar!',
    keywords: ['contato', 'telefone', 'email', 'falar', 'conversar']
  },
  {
    id: '3',
    question: 'Quais são os preços dos serviços?',
    answer: 'Nossos preços variam conforme o serviço. Entre em contato conosco para um orçamento personalizado e gratuito!',
    keywords: ['preço', 'valor', 'custo', 'orçamento', 'quanto custa']
  },
  {
    id: '4',
    question: 'Como funciona o processo de trabalho?',
    answer: 'Nosso processo é simples: 1) Conversa inicial, 2) Proposta personalizada, 3) Desenvolvimento, 4) Entrega e suporte. Tudo transparente!',
    keywords: ['processo', 'trabalho', 'como funciona', 'etapas', 'metodologia']
  }
]

const colorPresets = [
  { name: 'Azul Moderno', primary: '#3B82F6', secondary: '#EFF6FF', text: '#1F2937', bg: '#FFFFFF' },
  { name: 'Verde Sucesso', primary: '#10B981', secondary: '#ECFDF5', text: '#1F2937', bg: '#FFFFFF' },
  { name: 'Roxo Premium', primary: '#8B5CF6', secondary: '#F3E8FF', text: '#1F2937', bg: '#FFFFFF' },
  { name: 'Rosa Criativo', primary: '#EC4899', secondary: '#FDF2F8', text: '#1F2937', bg: '#FFFFFF' },
  { name: 'Laranja Energia', primary: '#F59E0B', secondary: '#FFFBEB', text: '#1F2937', bg: '#FFFFFF' },
  { name: 'Escuro Tech', primary: '#6366F1', secondary: '#1F2937', text: '#FFFFFF', bg: '#111827' }
]

const avatarOptions = [
  { id: 'robot', name: 'Robô Clássico', emoji: '🤖' },
  { id: 'woman', name: 'Atendente Feminina', emoji: '👩‍💼' },
  { id: 'man', name: 'Atendente Masculino', emoji: '👨‍💼' },
  { id: 'assistant', name: 'Assistente Virtual', emoji: '💬' },
  { id: 'support', name: 'Suporte Técnico', emoji: '🛠️' },
  { id: 'sparkle', name: 'IA Moderna', emoji: '✨' }
]

export default function ChatbotIAPage() {
  const [config, setConfig] = useState<ChatbotConfig>({
    name: 'Assistente Virtual',
    welcomeMessage: 'Olá! 👋 Como posso ajudar você hoje?',
    fallbackMessage: 'Desculpe, não entendi sua pergunta. Pode reformular ou escolher uma das opções abaixo?',
    avatar: '🤖',
    primaryColor: '#3B82F6',
    secondaryColor: '#EFF6FF',
    textColor: '#1F2937',
    backgroundColor: '#FFFFFF',
    position: 'bottom-right',
    faq: defaultFAQ
  })

  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [generatedCode, setGeneratedCode] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isPreviewOpen && messages.length === 0) {
      // Adiciona mensagem de boas-vindas quando abre o preview
      setMessages([{
        id: '1',
        text: config.welcomeMessage,
        isBot: true,
        timestamp: new Date()
      }])
    }
  }, [isPreviewOpen, config.welcomeMessage])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addFAQItem = () => {
    const newFAQ: FAQItem = {
      id: Date.now().toString(),
      question: '',
      answer: '',
      keywords: []
    }
    setConfig({
      ...config,
      faq: [...config.faq, newFAQ]
    })
  }

  const updateFAQItem = (id: string, field: keyof FAQItem, value: string | string[]) => {
    setConfig({
      ...config,
      faq: config.faq.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    })
  }

  const removeFAQItem = (id: string) => {
    if (config.faq.length > 1) {
      setConfig({
        ...config,
        faq: config.faq.filter(item => item.id !== id)
      })
    }
  }

  const findBestAnswer = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Procura pela melhor resposta baseada em palavras-chave
    for (const faqItem of config.faq) {
      const hasKeyword = faqItem.keywords.some(keyword => 
        message.includes(keyword.toLowerCase())
      )
      if (hasKeyword) {
        return faqItem.answer
      }
    }
    
    // Se não encontrou, retorna a mensagem padrão
    return config.fallbackMessage
  }

  const sendMessage = () => {
    if (!currentMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: currentMessage,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage('')

    // Simula delay da resposta do bot
    setTimeout(() => {
      const botResponse = findBestAnswer(currentMessage)
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const resetChat = () => {
    setMessages([{
      id: '1',
      text: config.welcomeMessage,
      isBot: true,
      timestamp: new Date()
    }])
  }

  const generateChatbotCode = async () => {
    setIsGenerating(true)
    await new Promise(resolve => setTimeout(resolve, 2000))

    const code = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot - ${config.name}</title>
    <style>
        /* Chatbot Styles */
        .chatbot-container {
            position: fixed;
            ${config.position}: 20px;
            bottom: 20px;
            z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .chatbot-toggle {
            width: 60px;
            height: 60px;
            background: ${config.primaryColor};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
            border: none;
            font-size: 24px;
        }

        .chatbot-toggle:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 25px rgba(0,0,0,0.2);
        }

        .chatbot-window {
            display: none;
            position: absolute;
            bottom: 80px;
            ${config.position === 'bottom-right' ? 'right: 0' : 'left: 0'};
            width: 350px;
            height: 500px;
            background: ${config.backgroundColor};
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            overflow: hidden;
            border: 1px solid #e5e7eb;
        }

        .chatbot-window.open {
            display: flex;
            flex-direction: column;
            animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .chatbot-header {
            background: ${config.primaryColor};
            color: white;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .chatbot-avatar {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }

        .chatbot-info h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
        }

        .chatbot-info p {
            margin: 0;
            font-size: 12px;
            opacity: 0.9;
        }

        .chatbot-messages {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
            background: ${config.secondaryColor};
        }

        .message {
            margin-bottom: 16px;
            display: flex;
            gap: 8px;
        }

        .message.user {
            justify-content: flex-end;
        }

        .message-content {
            max-width: 80%;
            padding: 12px 16px;
            border-radius: 18px;
            font-size: 14px;
            line-height: 1.4;
        }

        .message.bot .message-content {
            background: white;
            color: ${config.textColor};
            border-bottom-left-radius: 4px;
        }

        .message.user .message-content {
            background: ${config.primaryColor};
            color: white;
            border-bottom-right-radius: 4px;
        }

        .chatbot-input {
            padding: 16px;
            border-top: 1px solid #e5e7eb;
            display: flex;
            gap: 8px;
            background: ${config.backgroundColor};
        }

        .chatbot-input input {
            flex: 1;
            padding: 12px 16px;
            border: 1px solid #d1d5db;
            border-radius: 24px;
            outline: none;
            font-size: 14px;
        }

        .chatbot-input input:focus {
            border-color: ${config.primaryColor};
        }

        .send-button {
            width: 40px;
            height: 40px;
            background: ${config.primaryColor};
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
        }

        .send-button:hover {
            opacity: 0.9;
        }

        .send-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .quick-replies {
            padding: 0 16px 16px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .quick-reply {
            background: white;
            border: 1px solid ${config.primaryColor};
            color: ${config.primaryColor};
            padding: 8px 12px;
            border-radius: 16px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .quick-reply:hover {
            background: ${config.primaryColor};
            color: white;
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
            .chatbot-window {
                width: calc(100vw - 40px);
                height: calc(100vh - 140px);
                ${config.position === 'bottom-right' ? 'right: 20px' : 'left: 20px'};
            }
        }
    </style>
</head>
<body>
    <div class="chatbot-container">
        <button class="chatbot-toggle" onclick="toggleChatbot()">
            ${config.avatar}
        </button>
        
        <div class="chatbot-window" id="chatbotWindow">
            <div class="chatbot-header">
                <div class="chatbot-avatar">${config.avatar}</div>
                <div class="chatbot-info">
                    <h3>${config.name}</h3>
                    <p>Online agora</p>
                </div>
            </div>
            
            <div class="chatbot-messages" id="chatbotMessages">
                <div class="message bot">
                    <div class="message-content">${config.welcomeMessage}</div>
                </div>
            </div>
            
            <div class="quick-replies" id="quickReplies">
                ${config.faq.slice(0, 3).map(faq => 
                    `<button class="quick-reply" onclick="sendQuickReply('${faq.question}')">${faq.question}</button>`
                ).join('')}
            </div>
            
            <div class="chatbot-input">
                <input type="text" id="messageInput" placeholder="Digite sua mensagem..." onkeypress="handleKeyPress(event)">
                <button class="send-button" onclick="sendMessage()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <script>
        const chatbotData = {
            faq: ${JSON.stringify(config.faq)},
            fallbackMessage: "${config.fallbackMessage}"
        };

        let isOpen = false;

        function toggleChatbot() {
            const window = document.getElementById('chatbotWindow');
            isOpen = !isOpen;
            
            if (isOpen) {
                window.classList.add('open');
                document.getElementById('messageInput').focus();
            } else {
                window.classList.remove('open');
            }
        }

        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            addMessage(message, false);
            input.value = '';
            
            // Simula delay da resposta
            setTimeout(() => {
                const response = findBestAnswer(message);
                addMessage(response, true);
            }, 1000);
        }

        function sendQuickReply(question) {
            const faqItem = chatbotData.faq.find(item => item.question === question);
            if (faqItem) {
                addMessage(question, false);
                setTimeout(() => {
                    addMessage(faqItem.answer, true);
                }, 800);
            }
        }

        function addMessage(text, isBot) {
            const messagesContainer = document.getElementById('chatbotMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = \`message \${isBot ? 'bot' : 'user'}\`;
            messageDiv.innerHTML = \`<div class="message-content">\${text}</div>\`;
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function findBestAnswer(userMessage) {
            const message = userMessage.toLowerCase();
            
            for (const faqItem of chatbotData.faq) {
                const hasKeyword = faqItem.keywords.some(keyword => 
                    message.includes(keyword.toLowerCase())
                );
                if (hasKeyword) {
                    return faqItem.answer;
                }
            }
            
            return chatbotData.fallbackMessage;
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }
    </script>
</body>
</html>`

    setGeneratedCode(code)
    setIsGenerating(false)
  }

  const downloadCode = () => {
    if (!generatedCode) return
    
    const blob = new Blob([generatedCode], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `chatbot-${config.name.replace(/\s+/g, '-').toLowerCase()}.html`
    link.click()
    URL.revokeObjectURL(url)
  }

  const copyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode)
      alert('Código do chatbot copiado!')
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
              <MessageSquare className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
            Gerador de <span className="text-cyber-pink">Chatbot IA</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Crie um chatbot inteligente para seu site ou negócio. Interface moderna, respostas automáticas e fácil integração!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Basic Config */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Configurações Básicas
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Nome do Chatbot
                    </label>
                    <input
                      type="text"
                      value={config.name}
                      onChange={(e) => setConfig({...config, name: e.target.value})}
                      className="cyber-input w-full"
                      placeholder="Assistente Virtual"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Posição na Tela
                    </label>
                    <select
                      value={config.position}
                      onChange={(e) => setConfig({...config, position: e.target.value as any})}
                      className="cyber-input w-full"
                    >
                      <option value="bottom-right">Inferior Direito</option>
                      <option value="bottom-left">Inferior Esquerdo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Mensagem de Boas-vindas
                  </label>
                  <input
                    type="text"
                    value={config.welcomeMessage}
                    onChange={(e) => setConfig({...config, welcomeMessage: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Olá! Como posso ajudar?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">
                    Mensagem quando não entender
                  </label>
                  <input
                    type="text"
                    value={config.fallbackMessage}
                    onChange={(e) => setConfig({...config, fallbackMessage: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Não entendi. Pode reformular?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-4">
                    Avatar do Chatbot
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {avatarOptions.map(avatar => (
                      <button
                        key={avatar.id}
                        onClick={() => setConfig({...config, avatar: avatar.emoji})}
                        className={`p-4 rounded-lg border-2 text-center transition-all duration-300 ${
                          config.avatar === avatar.emoji
                            ? 'border-cyber-pink bg-cyber-pink/20'
                            : 'border-cyber-blue/30 hover:border-cyber-blue/60'
                        }`}
                      >
                        <div className="text-3xl mb-2">{avatar.emoji}</div>
                        <div className="text-xs text-gray-400">{avatar.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="cyber-card">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Personalização Visual
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
                        onClick={() => setConfig({
                          ...config,
                          primaryColor: preset.primary,
                          secondaryColor: preset.secondary,
                          textColor: preset.text,
                          backgroundColor: preset.bg
                        })}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          config.primaryColor === preset.primary
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Cor Principal
                    </label>
                    <input
                      type="color"
                      value={config.primaryColor}
                      onChange={(e) => setConfig({...config, primaryColor: e.target.value})}
                      className="cyber-input w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Cor Secundária
                    </label>
                    <input
                      type="color"
                      value={config.secondaryColor}
                      onChange={(e) => setConfig({...config, secondaryColor: e.target.value})}
                      className="cyber-input w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Cor do Texto
                    </label>
                    <input
                      type="color"
                      value={config.textColor}
                      onChange={(e) => setConfig({...config, textColor: e.target.value})}
                      className="cyber-input w-full h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">
                      Cor de Fundo
                    </label>
                    <input
                      type="color"
                      value={config.backgroundColor}
                      onChange={(e) => setConfig({...config, backgroundColor: e.target.value})}
                      className="cyber-input w-full h-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Configuration */}
            <div className="cyber-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-tech font-bold text-white">
                  FAQ e Respostas Automáticas
                </h2>
                <button
                  onClick={addFAQItem}
                  className="cyber-button py-2 px-4"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar
                </button>
              </div>
              
              <div className="space-y-6">
                {config.faq.map((faq, index) => (
                  <div key={faq.id} className="bg-dark-surface/30 border border-cyber-blue/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-tech font-semibold text-cyber-pink">
                        Pergunta {index + 1}
                      </h3>
                      {config.faq.length > 1 && (
                        <button
                          onClick={() => removeFAQItem(faq.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-tech text-gray-300 mb-2">
                          Pergunta
                        </label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => updateFAQItem(faq.id, 'question', e.target.value)}
                          className="cyber-input w-full"
                          placeholder="Ex: Qual o horário de funcionamento?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-tech text-gray-300 mb-2">
                          Resposta
                        </label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) => updateFAQItem(faq.id, 'answer', e.target.value)}
                          className="cyber-input w-full h-20 resize-none"
                          placeholder="Digite a resposta completa..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-tech text-gray-300 mb-2">
                          Palavras-chave (separadas por vírgula)
                        </label>
                        <input
                          type="text"
                          value={faq.keywords.join(', ')}
                          onChange={(e) => updateFAQItem(faq.id, 'keywords', e.target.value.split(',').map(k => k.trim()))}
                          className="cyber-input w-full"
                          placeholder="horário, funcionamento, aberto"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="cyber-button flex-1 py-4"
              >
                <Eye className="h-5 w-5 mr-2" />
                Testar Chatbot
              </button>

              <button
                onClick={generateChatbotCode}
                disabled={isGenerating}
                className="cyber-button-glow flex-1 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Bot className="h-5 w-5 animate-pulse" />
                    <span>Gerando...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Gerar Código</span>
                  </span>
                )}
              </button>
            </div>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="cyber-card sticky top-24">
              <h2 className="text-2xl font-tech font-bold text-white mb-6">
                Código Gerado
              </h2>

              {generatedCode ? (
                <div className="space-y-6">
                  <div className="bg-dark-surface/50 border border-cyber-blue/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-tech font-semibold">Código Pronto!</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                      Seu chatbot está pronto para uso. Baixe o arquivo HTML e adicione ao seu site.
                    </p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>📁 Arquivo: chatbot-{config.name.replace(/\s+/g, '-').toLowerCase()}.html</div>
                      <div>📊 Tamanho: ~{Math.round(generatedCode.length / 1024)}KB</div>
                      <div>🔧 Tipo: HTML + CSS + JavaScript</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={downloadCode}
                      className="cyber-button w-full py-3"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download HTML
                    </button>

                    <button
                      onClick={copyCode}
                      className="cyber-button w-full py-3"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar Código
                    </button>
                  </div>

                  <div className="bg-cyber-pink/10 border border-cyber-pink/20 rounded-lg p-4">
                    <h4 className="text-sm font-tech font-bold text-cyber-pink mb-2">
                      Como usar:
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>1. Baixe o arquivo HTML</li>
                      <li>2. Adicione ao seu site</li>
                      <li>3. O chatbot aparece automaticamente</li>
                      <li>4. Personalize conforme necessário</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-cyber-blue/30 rounded-lg p-8 text-center">
                  <Bot className="h-16 w-16 text-cyber-blue/50 mx-auto mb-4" />
                  <p className="text-gray-400 font-tech text-sm">
                    Configure o chatbot e clique em "Gerar Código" para ver o resultado
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Chat Preview Modal */}
        <AnimatePresence>
          {isPreviewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setIsPreviewOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl w-full max-w-md h-[600px] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Chat Header */}
                <div 
                  className="p-4 rounded-t-2xl text-white flex items-center justify-between"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-white/20"
                    >
                      {config.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold">{config.name}</h3>
                      <p className="text-xs opacity-90">Online agora</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Messages */}
                <div 
                  className="flex-1 p-4 overflow-y-auto space-y-4"
                  style={{ backgroundColor: config.secondaryColor }}
                >
                  {messages.map(message => (
                    <div 
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                          message.isBot 
                            ? 'bg-white rounded-bl-sm' 
                            : 'text-white rounded-br-sm'
                        }`}
                        style={{ 
                          backgroundColor: message.isBot ? 'white' : config.primaryColor,
                          color: message.isBot ? config.textColor : 'white'
                        }}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Replies */}
                {messages.length <= 1 && (
                  <div className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2">
                      {config.faq.slice(0, 3).map(faq => (
                        <button
                          key={faq.id}
                          onClick={() => {
                            const userMessage: ChatMessage = {
                              id: Date.now().toString(),
                              text: faq.question,
                              isBot: false,
                              timestamp: new Date()
                            }
                            setMessages(prev => [...prev, userMessage])
                            
                            setTimeout(() => {
                              const botMessage: ChatMessage = {
                                id: (Date.now() + 1).toString(),
                                text: faq.answer,
                                isBot: true,
                                timestamp: new Date()
                              }
                              setMessages(prev => [...prev, botMessage])
                            }, 1000)
                          }}
                          className="px-3 py-2 text-xs rounded-full border transition-colors hover:bg-opacity-10"
                          style={{ 
                            borderColor: config.primaryColor, 
                            color: config.primaryColor 
                          }}
                        >
                          {faq.question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div 
                  className="p-4 border-t flex items-center space-x-3"
                  style={{ backgroundColor: config.backgroundColor }}
                >
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1 p-3 border rounded-full outline-none text-sm"
                    placeholder="Digite sua mensagem..."
                    style={{ borderColor: config.primaryColor + '40' }}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!currentMessage.trim()}
                    className="w-10 h-10 rounded-full text-white disabled:opacity-50 flex items-center justify-center"
                    style={{ backgroundColor: config.primaryColor }}
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-3 text-center">
                  <button
                    onClick={resetChat}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Reiniciar conversa
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                { icon: MessageCircle, title: 'Interface Moderna', desc: 'Design responsivo e profissional' },
                { icon: Bot, title: 'Respostas Inteligentes', desc: 'FAQ personalizada com IA simulada' },
                { icon: Palette, title: 'Totalmente Customizável', desc: 'Cores, avatar e posicionamento' },
                { icon: Code, title: 'Código Limpo', desc: 'HTML/CSS/JS pronto para usar' },
                { icon: Smartphone, title: 'Mobile Friendly', desc: 'Funciona em todos os dispositivos' },
                { icon: Clock, title: 'Respostas Rápidas', desc: 'Sugestões automáticas de perguntas' },
                { icon: Sparkles, title: 'Efeitos Visuais', desc: 'Animações suaves e atrativas' },
                { icon: Globe, title: 'Fácil Integração', desc: 'Adicione a qualquer site' }
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