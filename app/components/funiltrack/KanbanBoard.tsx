'use client';

import { useOpportunities } from '@/app/hooks/funiltrack/useOpportunities';
import { SalesStage, Opportunity } from '@/app/types/funiltrack';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { KanbanColumn } from './KanbanColumn';
import { MetricsPanel } from './MetricsPanel';
import { AddOpportunityModal } from './AddOpportunityModal';

const COLUMNS = [
  { id: 'lead' as SalesStage, title: 'Lead' },
  { id: 'contacted' as SalesStage, title: 'Contato Feito' },
  { id: 'proposal' as SalesStage, title: 'Proposta Enviada' },
  { id: 'closed' as SalesStage, title: 'Fechamento' },
];

export function KanbanBoard() {
  const { opportunities, addOpportunity, moveOpportunity, deleteOpportunity, calculateMetrics } = useOpportunities();

  const getOpportunitiesByStage = (stage: SalesStage): Opportunity[] => {
    return opportunities.filter(opp => opp.stage === stage);
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // Dropped outside of a droppable area
    if (!destination) {
      return;
    }

    // Dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Move the opportunity to the new stage
    moveOpportunity(draggableId, destination.droppableId as SalesStage);
  };

  const metrics = calculateMetrics();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              FunilTrack Pro
            </h1>
            <p className="text-gray-600">Automação de Vendas Inteligente</p>
          </div>
          <AddOpportunityModal onAddOpportunity={addOpportunity} />
        </div>

        {/* Metrics Panel */}
        <MetricsPanel metrics={metrics} />

        {/* Kanban Board */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COLUMNS.map(column => (
              <KanbanColumn
                key={column.id}
                stage={column.id}
                title={column.title}
                opportunities={getOpportunitiesByStage(column.id)}
                onDeleteOpportunity={deleteOpportunity}
              />
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
