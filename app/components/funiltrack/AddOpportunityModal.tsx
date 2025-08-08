'use client';

import { useState } from 'react';
import { SalesStage } from '@/app/types/funiltrack';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/funiltrack/ui/dialog';
import { Button } from '@/app/components/funiltrack/ui/button';
import { Input } from '@/app/components/funiltrack/ui/input';
import { Label } from '@/app/components/funiltrack/ui/label';
import { Plus } from 'lucide-react';

interface AddOpportunityModalProps {
  onAddOpportunity: (opportunity: {
    clientName: string;
    value: number;
    stage: SalesStage;
  }) => void;
}

export function AddOpportunityModal({ onAddOpportunity }: AddOpportunityModalProps) {
  const [open, setOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [value, setValue] = useState('');
  const [stage, setStage] = useState<SalesStage>('lead');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!clientName.trim() || !value.trim()) {
      return;
    }

    onAddOpportunity({
      clientName: clientName.trim(),
      value: parseFloat(value),
      stage,
    });

    // Reset form
    setClientName('');
    setValue('');
    setStage('lead');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nova Oportunidade
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Nova Oportunidade</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="clientName">Nome do Cliente</Label>
            <Input
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Digite o nome do cliente"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="value">Valor da Oportunidade (R$)</Label>
            <Input
              id="value"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="0,00"
              min="0"
              step="0.01"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="stage">Estágio Inicial</Label>
            <select
              id="stage"
              value={stage}
              onChange={(e) => setStage(e.target.value as SalesStage)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="lead">Lead</option>
              <option value="contacted">Contato Feito</option>
              <option value="proposal">Proposta Enviada</option>
              <option value="closed">Fechamento</option>
            </select>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Adicionar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
