import type { ComponentType } from 'react'
import { 
  Users,
  ShoppingCart,
  Mail,
  Database,
  MessageSquare,
} from 'lucide-react'

export type PriceType = 'Grátis' | 'Premium' | 'Enterprise'
export type DifficultyType = 'Fácil' | 'Médio' | 'Avançado'

export interface Automation {
  id: number
  name: string
  description: string
  category: string
  categoryId: string
  icon: ComponentType<React.SVGProps<SVGSVGElement>>
  rating: number
  users: string
  duration: string
  difficulty: DifficultyType
  tags: string[]
  price: PriceType
  videoUrl: string
  automationUrl: string
  thumbnail: string
  features: string[]
}

export const slugify = (value: string): string => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const automationsRaw = [
  {
    id: 1,
    name: "Analytics Pro",
    description: "Transforme suas planilhas Excel em análises poderosas com visualizações modernas e insights automáticos.",
    category: "Analise",
    icon: Users,
    rating: 4.9,
    users: "2.3k",
    duration: "5 min",
    difficulty: "Fácil" as const,
    tags: ["IA", "CRM", "Analytics"],
    price: "Grátis" as const,
    videoUrl: "/videos/ANALITYPRO.mp4",
    automationUrl: "/automacoes/analytics-pro",
    thumbnail: "/image/image105.png",
    features: [
      "Upload de Excel/CSV automático",
      "Análise de dados com IA",
      "Gráficos e visualizações modernas",
      "Relatórios profissionais prontos",
      "Insights inteligentes automáticos",
      "Download em múltiplos formatos"
    ]
  },
  {
    id: 2,
    name: "Sistema Inteligente de Controle de Estoque",
    description: "Controle total e profissional do seu estoque. Organize produtos, evite perdas, acompanhe cada movimentação em tempo real e tome decisões com base em dados. Tudo isso com uma interface intuitiva e visual.",
    category: "Gestão Empresarial",
    icon: ShoppingCart,
    rating: 4.9,
    users: "2.3k",
    duration: "5 min",
    difficulty: "Fácil" as const,
    tags: ["Estoque", "Empresas", "Gestão", "Logística"],
    price: "Grátis" as const,
    videoUrl: "https://example.com/video2.mp4",
    automationUrl: "/automacoes/sistema-estoque",
    thumbnail: "/image/image1.png",
    features: [
      "Controle de produtos em tempo real",
      "Alertas automáticos de estoque baixo",
      "Gestão de fornecedores integrada",
      "Relatórios e métricas detalhadas",
      "Interface intuitiva e responsiva",
      "Exportação de dados em CSV"
    ]
  },
  {
    id: 3,
    name: "Gerador de Landing Pages",
    description: "Crie landing pages profissionais em minutos. Escolha temas, personalize conteúdo e gere páginas otimizadas para conversão automaticamente.",
    category: "marketing",
    icon: Mail,
    rating: 4.8,
    users: "1.8k",
    duration: "3 min",
    difficulty: "Fácil" as const,
    tags: ["Landing Page", "Design", "Conversão", "Marketing"],
    price: "Grátis" as const,
    videoUrl: "https://example.com/video3.mp4",
    automationUrl: "/automacoes/gerador-landing",
    thumbnail: "/image/image101.png",
    features: [
      "6 temas profissionais inclusos",
      "Design responsivo automático",
      "Otimização para SEO integrada",
      "Preview em tempo real",
      "Download de código HTML",
      "Copiar código com um clique"
    ]
  },
  {
    id: 4,
    name: "Gerador de QR Code Inteligente",
    automationUrl: "/automacoes/gerador-qrcode",
    description: "Crie QR Codes personalizados para qualquer necessidade: links, WiFi, cartões de visita, eventos e muito mais com customização completa.",
    category: "ferramentas",
    icon: Mail,
    rating: 4.7,
    users: "2.1k",
    duration: "2 min",
    difficulty: "Fácil" as const,
    tags: ["QR Code", "Ferramentas", "Personalização", "Compartilhamento"],
    price: "Grátis" as const,
    videoUrl: "https://example.com/video4.mp4",
    thumbnail:"/image/image.png",
    features: [
      "9 tipos de QR Code diferentes",
      "Personalização de cores e tamanhos",
      "Download em alta qualidade",
      "Preview em tempo real",
      "Compartilhamento instantâneo",
      "Sem limitações de uso"
    ]
  },
  {
    id: 5,
    name: "Gerador de Certificados Digitais",
    description: "Crie certificados profissionais e personalizados para cursos, treinamentos e eventos. 6 templates elegantes com customização completa de cores e dados.",
    category: "educacao",
    icon: Database,
    rating: 4.9,
    users: "3.2k",
    duration: "3 min",
    difficulty: "Fácil" as const,
    tags: ["Certificados", "Educação", "Templates", "Personalização"],
    price: "Grátis" as const,
    videoUrl: "https://example.com/video5.mp4",
    thumbnail:"/image/image33.png",
    automationUrl: "/automacoes/gerador-certificados",
    features: [
      "6 templates profissionais inclusos",
      "Personalização completa de cores",
      "Campos dinâmicos automatizados",
      "Download em HTML para impressão",
      "Preview em tempo real",
      "Código HTML limpo e editável"
    ]
  },
  
  {
    id: 7,
    name: "Gerador de Contratos Inteligente",
    description: "Crie contratos profissionais e juridicamente válidos para freelancers e empresas. 6 tipos especializados com cláusulas personalizáveis.",
    category: "juridico",
    icon: MessageSquare,
    rating: 4.8,
    users: "1.9k",
    duration: "4 min",
    difficulty: "Médio" as const,
    tags: ["Contratos", "Jurídico", "Freelancer", "Empresas"],
    price: "Grátis" as const,
    videoUrl: "https://example.com/video6.mp4",
    thumbnail:"/image/image2.png",
    automationUrl: "/automacoes/gerador-contratos",
    features: [
      "6 tipos de contrato especializados",
      "Cláusulas juridicamente válidas",
      "Formulário completo automatizado",
      "Download em HTML para impressão",
      "Termos e condições customizáveis",
      "Preview em tempo real"
    ]
    },
  {
    id: 8,
    name: "Chatbot de Atendimento IA",
    description: "Crie um chatbot inteligente para seu site ou WhatsApp. Respostas automáticas, FAQ personalizada e integração fácil com interface moderna.",
    category: "atendimento",
    icon: MessageSquare,
    rating: 4.7,
    users: "2.8k",
    duration: "5 min",
    difficulty: "Fácil" as const,
    tags: ["Chatbot", "IA", "Atendimento", "WhatsApp"],
    price: "Grátis" as const,
    videoUrl: "https://example.com/video7.mp4",
    thumbnail:"/image/image6.png",
    automationUrl: "/automacoes/chatbot-ia",
    features: [
      "Interface de chat moderna e responsiva",
      "FAQ personalizada com respostas automáticas",
      "Simulação de IA com respostas inteligentes",
      "Código pronto para integração",
      "Design customizável (cores e avatar)",
      "Export para HTML/JavaScript"
    ]
  }
  
    
] as const

export const automations: Automation[] = (automationsRaw as unknown as Omit<Automation, 'categoryId'>[]).map(a => ({
  ...a,
  categoryId: slugify(a.category),
}))


