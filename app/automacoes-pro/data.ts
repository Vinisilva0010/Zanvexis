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
    id: 1,
    name: " Pro",
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
    
] as const

export const automations: Automation[] = (automationsRaw as unknown as Omit<Automation, 'categoryId'>[]).map(a => ({
  ...a,
  categoryId: slugify(a.category),
}))


