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
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
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
    name: "Email Marketing Hyper-Personalizado",
    description: "Transforme seus envios de email em máquinas de conversão com campanhas hiper-personalizadas alimentadas por IA.",
    category: "marketing",
    icon: Mail,
    rating: 4.9,
    users: "3.1k",
    duration: "4 min",
    difficulty: "Fácil" as const,
    tags: ["Email", "IA", "Personalização"],
    price: "Premium" as const,
    videoUrl: "https://example.com/video4.mp4",
    automationUrl: "https://funil-track.vercel.app/",
    thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
    features: [
      "Personalização automática por IA para cada cliente",
      "A/B Testing em tempo real com ajustes inteligentes",
      "Segmentação avançada por comportamento e perfil",
      "Relatórios com analytics preditivos para decisões mais rápidas"
    ]
  },
  {
    id: 4,
    name: "Email Marketing Hyper-Personalizado",
    automationUrl: "/automacoes/funiltrack",
    description: "Campanhas de email com personalização extrema usando IA para maximizar conversões.",
    category: "marketing",
    icon: Mail,
    rating: 4.9,
    users: "3.1k",
    duration: "4 min",
    difficulty: "Fácil" as const,
    tags: ["Email", "IA", "Personalização"],
    price: "Premium" as const,
    videoUrl: "https://example.com/video4.mp4",
    thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
    features: [
      "Personalização por IA",
      "A/B testing automático",
      "Segmentação avançada",
      "Analytics preditivos"
    ]
  },
  {
    id: 5,
    name: "Backup Inteligente Multi-Cloud",
    description: "Sistema de backup automático com redundância em múltiplas clouds e recuperação instantânea.",
    category: "operacoes",
    icon: Database,
    rating: 4.8,
    users: "1.5k",
    duration: "6 min",
    difficulty: "Médio" as const,
    tags: ["Cloud", "Backup", "Segurança"],
    price: "Premium" as const,
    videoUrl: "https://example.com/video5.mp4",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    features: [
      "Multi-cloud sync",
      "Criptografia end-to-end",
      "Recuperação em 1-click",
      "Monitoramento 24/7"
    ]
  },
  {
    id: 6,
    name: "Chatbot de Atendimento Premium",
    description: "IA conversacional avançada que resolve 90% dos tickets automaticamente com satisfação alta.",
    category: "atendimento",
    icon: MessageSquare,
    rating: 4.6,
    users: "2.7k",
    duration: "7 min",
    difficulty: "Médio" as const,
    tags: ["IA", "Chatbot", "Support"],
    price: "Grátis" as const,
    videoUrl: "https://example.com/video6.mp4",
    thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
    features: [
      "NLP avançado",
      "Integração omnichannel",
      "Analytics de sentimento",
      "Escalação inteligente"
    ]
  }
] as const

export const automations: Automation[] = (automationsRaw as unknown as Omit<Automation, 'categoryId'>[]).map(a => ({
  ...a,
  categoryId: slugify(a.category),
}))



