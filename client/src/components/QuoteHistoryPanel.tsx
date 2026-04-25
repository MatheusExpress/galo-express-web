import { Trash2, RotateCcw, Clock } from 'lucide-react';
import { Quote, useQuoteHistory } from '@/hooks/useQuoteHistory';
import { Button } from '@/components/ui/button';

interface QuoteHistoryPanelProps {
  onSelectQuote: (quote: Quote) => void;
}

export default function QuoteHistoryPanel({ onSelectQuote }: QuoteHistoryPanelProps) {
  const { quotes, removeQuote, clearHistory } = useQuoteHistory();

  if (quotes.length === 0) {
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <Clock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Nenhum orçamento no histórico ainda
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-500" />
          Últimos Orçamentos
        </h3>
        {quotes.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-xs text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Limpar
          </button>
        )}
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">{quote.formattedDate}</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {quote.distance.toFixed(1)} km
                </p>
              </div>
              <button
                onClick={() => removeQuote(quote.id)}
                className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors flex-shrink-0"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>

            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1 mb-2">
              <p className="truncate">📍 {quote.origin}</p>
              <p className="truncate">📍 {quote.destination}</p>
            </div>

            <Button
              onClick={() => onSelectQuote(quote)}
              size="sm"
              className="w-full h-8 bg-orange-500 hover:bg-orange-600 text-white text-xs"
            >
              Usar Este Orçamento
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
