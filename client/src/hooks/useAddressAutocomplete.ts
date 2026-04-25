import { useState, useCallback } from 'react';

// Banco de dados de endereços em Campo Largo e região
const ADDRESSES_DATABASE = [
  // Campo Largo - Centro
  'Rua das Flores, Campo Largo',
  'Avenida Brasil, Campo Largo',
  'Rua XV de Novembro, Campo Largo',
  'Praça da República, Campo Largo',
  
  // Campo Largo - Xaxim
  'Rua Xaxim, Campo Largo',
  'Avenida Xaxim, Campo Largo',
  'Bairro Xaxim, Campo Largo',
  
  // Campo Largo - Palmital
  'Rua Palmital, Campo Largo',
  'Avenida Palmital, Campo Largo',
  'Bairro Palmital, Campo Largo',
  
  // Campo Largo - Guajuvira
  'Rua Guajuvira, Campo Largo',
  'Avenida Guajuvira, Campo Largo',
  'Bairro Guajuvira, Campo Largo',
  
  // Campo Largo - Itapoã
  'Rua Itapoã, Campo Largo',
  'Avenida Itapoã, Campo Largo',
  'Bairro Itapoã, Campo Largo',
  
  // Curitiba
  'Avenida Paulista, Curitiba',
  'Rua 24 de Maio, Curitiba',
  'Avenida Getúlio Vargas, Curitiba',
  'Centro, Curitiba',
  'Bairro Alto, Curitiba',
  'Portão, Curitiba',
  'Bom Retiro, Curitiba',
  'Água Verde, Curitiba',
  
  // Pinhais
  'Centro, Pinhais',
  'Bairro Vossoroca, Pinhais',
  'Avenida Brasília, Pinhais',
  
  // Colombo
  'Centro, Colombo',
  'Bairro Guaraituba, Colombo',
  
  // Almirante Tamandaré
  'Centro, Almirante Tamandaré',
  'Bairro Água Branca, Almirante Tamandaré',
  
  // Piraquara
  'Centro, Piraquara',
  'Bairro Costeira, Piraquara',
  
  // Mandirituba
  'Centro, Mandirituba',
  
  // Contenda
  'Centro, Contenda',
  
  // Balsa Nova
  'Centro, Balsa Nova',
  
  // Araucária
  'Centro, Araucária',
  'Bairro Costeira, Araucária',
  
  // Fazenda Rio Grande
  'Centro, Fazenda Rio Grande',
  
  // Quitandinha
  'Centro, Quitandinha',
];

export function useAddressAutocomplete() {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = useCallback((input: string): string[] => {
    if (!input.trim()) {
      setSuggestions([]);
      return [];
    }

    const normalized = input.toLowerCase().trim();
    const filtered = ADDRESSES_DATABASE.filter(address =>
      address.toLowerCase().includes(normalized)
    ).slice(0, 5); // Limitar a 5 sugestões

    setSuggestions(filtered);
    return filtered;
  }, []);

  const clearSuggestions = useCallback(() => {
    setSuggestions([]);
  }, []);

  return {
    suggestions,
    getSuggestions,
    clearSuggestions,
  };
}
