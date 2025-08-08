'use client';

import { Opportunity } from '@/app/types/funiltrack';
import { Card, CardContent } from '@/app/components/funiltrack/ui/card';
import { Draggable } from '@hello-pangea/dnd';
import { User, DollarSign, Calendar, Trash2 } from 'lucide-react';
import { Button } from '@/app/components/funiltrack/ui/button';

interface OpportunityCardProps {
  opportunity: Opportunity;
  index: number;
  onDelete: (id: string) => void;
}

export function OpportunityCard({ opportunity, index, onDelete }: OpportunityCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(date));
  };

  return (
    <Draggable draggableId={opportunity.id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`mb-3 cursor-move transition-shadow hover:shadow-md ${
            snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-300' : ''
          }`}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2 font-medium text-gray-900">
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{opportunity.clientName}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(opportunity.id);
                }}
                className="h-6 w-6 p-0 text-gray-400 hover:text-red-600"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-700">
                {formatCurrency(opportunity.value)}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>Atualizado em {formatDate(opportunity.lastMovementDate)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}
