import { useState, useEffect } from 'react';

export interface Quote {
  id: string;
  origin: string;
  destination: string;
  distance: number;
  timestamp: number;
  formattedDate: string;
}

const STORAGE_KEY = 'galo-quote-history';
const MAX_QUOTES = 5;

export function useQuoteHistory() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  // Carregar histórico ao montar
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setQuotes(JSON.parse(saved));
      } catch (err) {
        console.error('Erro ao carregar histórico:', err);
      }
    }
  }, []);

  const addQuote = (origin: string, destination: string, distance: number) => {
    const now = new Date();
    const newQuote: Quote = {
      id: `${Date.now()}`,
      origin,
      destination,
      distance,
      timestamp: now.getTime(),
      formattedDate: now.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const updated = [newQuote, ...quotes].slice(0, MAX_QUOTES);
    setQuotes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const removeQuote = (id: string) => {
    const updated = quotes.filter(q => q.id !== id);
    setQuotes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const clearHistory = () => {
    setQuotes([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    quotes,
    addQuote,
    removeQuote,
    clearHistory,
  };
}
