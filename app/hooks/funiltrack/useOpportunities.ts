'use client';

import { useLocalStorage } from '@/app/hooks/funiltrack/useLocalStorage';
import { Opportunity, SalesStage, SalesMetrics } from '@/app/types/funiltrack';
import { useCallback } from 'react';

const STORAGE_KEY = 'funiltrack-opportunities';

const initialOpportunities: Opportunity[] = [
  {
    id: '1',
    clientName: 'João Silva',
    value: 5000,
    lastMovementDate: new Date('2024-01-15'),
    stage: 'lead',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '2',
    clientName: 'Maria Santos',
    value: 12000,
    lastMovementDate: new Date('2024-01-16'),
    stage: 'contacted',
    createdAt: new Date('2024-01-12'),
  },
  {
    id: '3',
    clientName: 'Pedro Costa',
    value: 8500,
    lastMovementDate: new Date('2024-01-17'),
    stage: 'proposal',
    createdAt: new Date('2024-01-14'),
  },
  {
    id: '4',
    clientName: 'Ana Oliveira',
    value: 15000,
    lastMovementDate: new Date('2024-01-18'),
    stage: 'closed',
    createdAt: new Date('2024-01-16'),
  },
];

export function useOpportunities() {
  const [opportunities, setOpportunities] = useLocalStorage<Opportunity[]>(
    STORAGE_KEY,
    initialOpportunities
  );

  const addOpportunity = useCallback((opportunity: Omit<Opportunity, 'id' | 'createdAt' | 'lastMovementDate'>) => {
    const newOpportunity: Opportunity = {
      ...opportunity,
      id: Date.now().toString(),
      createdAt: new Date(),
      lastMovementDate: new Date(),
    };
    
    setOpportunities(prev => [...prev, newOpportunity]);
  }, [setOpportunities]);

  const moveOpportunity = useCallback((opportunityId: string, newStage: SalesStage) => {
    setOpportunities(prev => 
      prev.map(opp => 
        opp.id === opportunityId 
          ? { ...opp, stage: newStage, lastMovementDate: new Date() }
          : opp
      )
    );
  }, [setOpportunities]);

  const deleteOpportunity = useCallback((opportunityId: string) => {
    setOpportunities(prev => prev.filter(opp => opp.id !== opportunityId));
  }, [setOpportunities]);

  const calculateMetrics = useCallback((): SalesMetrics => {
    const totalOpportunities = opportunities.length;
    const closedOpportunities = opportunities.filter(opp => opp.stage === 'closed').length;
    const openOpportunities = opportunities.filter(opp => opp.stage !== 'closed');
    
    const totalValueOpen = openOpportunities.reduce((sum, opp) => sum + opp.value, 0);
    const conversionRate = totalOpportunities > 0 ? (closedOpportunities / totalOpportunities) * 100 : 0;
    
    // Cálculo simplificado do tempo médio (em dias)
    const averageTimePerStage = opportunities.length > 0 
      ? opportunities.reduce((sum, opp) => {
          const daysDiff = Math.floor((new Date().getTime() - new Date(opp.createdAt).getTime()) / (1000 * 60 * 60 * 24));
          return sum + daysDiff;
        }, 0) / opportunities.length
      : 0;

    return {
      totalValueOpen,
      conversionRate,
      averageTimePerStage,
      totalOpportunities,
      closedOpportunities,
    };
  }, [opportunities]);

  return {
    opportunities,
    addOpportunity,
    moveOpportunity,
    deleteOpportunity,
    calculateMetrics,
  };
}
