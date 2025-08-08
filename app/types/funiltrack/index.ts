export interface Opportunity {
  id: string;
  clientName: string;
  value: number;
  lastMovementDate: Date;
  stage: SalesStage;
  createdAt: Date;
}

export type SalesStage = 'lead' | 'contacted' | 'proposal' | 'closed';

export interface SalesColumn {
  id: SalesStage;
  title: string;
  opportunities: Opportunity[];
}

export interface SalesMetrics {
  totalValueOpen: number;
  conversionRate: number;
  averageTimePerStage: number;
  totalOpportunities: number;
  closedOpportunities: number;
}

export interface DragEndResult {
  destination: {
    droppableId: string;
    index: number;
  } | null;
  source: {
    droppableId: string;
    index: number;
  };
  draggableId: string;
}
