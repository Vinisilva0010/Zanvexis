'use client';

import { SalesMetrics } from '@/app/types/funiltrack';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/funiltrack/ui/card';
import { DollarSign, TrendingUp, Clock, Target } from 'lucide-react';

interface MetricsPanelProps {
  metrics: SalesMetrics;
}

export function MetricsPanel({ metrics }: MetricsPanelProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatDays = (value: number) => {
    return `${value.toFixed(0)} dias`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Valor em Aberto</CardTitle>
          <DollarSign className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-700">
            {formatCurrency(metrics.totalValueOpen)}
          </div>
          <p className="text-xs text-muted-foreground">
            Em {metrics.totalOpportunities - metrics.closedOpportunities} oportunidades
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
          <TrendingUp className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-700">
            {formatPercentage(metrics.conversionRate)}
          </div>
          <p className="text-xs text-muted-foreground">
            {metrics.closedOpportunities} de {metrics.totalOpportunities} oportunidades
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
          <Clock className="h-4 w-4 text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-700">
            {formatDays(metrics.averageTimePerStage)}
          </div>
          <p className="text-xs text-muted-foreground">
            Por oportunidade
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de Oportunidades</CardTitle>
          <Target className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-700">
            {metrics.totalOpportunities}
          </div>
          <p className="text-xs text-muted-foreground">
            {metrics.closedOpportunities} fechadas
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
