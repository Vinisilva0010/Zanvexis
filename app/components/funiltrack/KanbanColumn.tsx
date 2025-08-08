'use client';

import { Opportunity, SalesStage } from '@/app/types/funiltrack';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/funiltrack/ui/card';
import { Droppable } from '@hello-pangea/dnd';
import { OpportunityCard } from './OpportunityCard';

interface KanbanColumnProps {
  stage: SalesStage;
  title: string;
  opportunities: Opportunity[];
  onDeleteOpportunity: (id: string) => void;
}

const stageColors = {
  lead: 'bg-blue-50 border-blue-200',
  contacted: 'bg-yellow-50 border-yellow-200',
  proposal: 'bg-orange-50 border-orange-200',
  closed: 'bg-green-50 border-green-200',
};

const stageBadgeColors = {
  lead: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  proposal: 'bg-orange-100 text-orange-800',
  closed: 'bg-green-100 text-green-800',
};

export function KanbanColumn({ stage, title, opportunities, onDeleteOpportunity }: KanbanColumnProps) {
  const totalValue = opportunities.reduce((sum, opp) => sum + opp.value, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <Card className={`min-h-[600px] ${stageColors[stage]}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between items-center">
          <span className="text-lg font-semibold">{title}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${stageBadgeColors[stage]}`}>
            {opportunities.length}
          </span>
        </CardTitle>
        {totalValue > 0 && (
          <div className="text-sm font-medium text-gray-600">
            Total: {formatCurrency(totalValue)}
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <Droppable droppableId={stage}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-[400px] transition-colors ${
                snapshot.isDraggingOver ? 'bg-blue-100/50 rounded-lg' : ''
              }`}
            >
              {opportunities.map((opportunity, index) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  index={index}
                  onDelete={onDeleteOpportunity}
                />
              ))}
              {provided.placeholder}
              {opportunities.length === 0 && (
                <div className="text-center text-gray-400 mt-8">
                  <p>Nenhuma oportunidade</p>
                </div>
              )}
            </div>
          )}
        </Droppable>
      </CardContent>
    </Card>
  );
}
