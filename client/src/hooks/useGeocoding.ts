import { useState } from 'react';

// Fórmula Haversine para calcular distância entre dois pontos
function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Raio da Terra em km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Dados de cidades e bairros de Campo Largo e região com coordenadas aproximadas
const LOCATIONS_DATABASE: Record<string, { lat: number; lon: number }> = {
  // Campo Largo
  'campo largo': { lat: -25.4542, lon: -49.5169 },
  'centro campo largo': { lat: -25.4542, lon: -49.5169 },
  'xaxim': { lat: -25.4500, lon: -49.5100 },
  'palmital': { lat: -25.4600, lon: -49.5200 },
  'guajuvira': { lat: -25.4400, lon: -49.5300 },
  'itapoã': { lat: -25.4700, lon: -49.5000 },
  
  // Cidades vizinhas
  'curitiba': { lat: -25.4284, lon: -49.2733 },
  'pinhais': { lat: -25.4050, lon: -49.1200 },
  'colombo': { lat: -25.2917, lon: -49.2167 },
  'almirante tamandaré': { lat: -25.3167, lon: -49.1333 },
  'piraquara': { lat: -25.5000, lon: -49.0667 },
  'mandirituba': { lat: -25.6667, lon: -49.3167 },
  'contenda': { lat: -25.7833, lon: -49.4333 },
  'balsa nova': { lat: -25.8167, lon: -49.3833 },
  'araucária': { lat: -25.5833, lon: -49.4167 },
  'fazenda rio grande': { lat: -25.6500, lon: -49.2333 },
  'quitandinha': { lat: -25.5167, lon: -49.1667 },
};

export function useGeocoding() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const geocodeAddress = async (address: string): Promise<{ lat: number; lon: number } | null> => {
    try {
      setError('');
      const normalizedAddress = address.toLowerCase().trim();

      // Procurar no banco de dados local
      for (const [location, coords] of Object.entries(LOCATIONS_DATABASE)) {
        if (normalizedAddress.includes(location)) {
          return coords;
        }
      }

      // Se não encontrou, tentar usar OpenStreetMap Nominatim (gratuito, sem API key)
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          return {
            lat: parseFloat(data[0].lat),
            lon: parseFloat(data[0].lon),
          };
        }
      } catch (e) {
        console.warn('Nominatim não disponível, usando banco de dados local');
      }

      setError(`Endereço não encontrado: "${address}". Tente ser mais específico.`);
      return null;
    } catch (err) {
      setError('Erro ao processar endereço');
      console.error(err);
      return null;
    }
  };

  const calculateDistance = async (
    originAddress: string,
    destinationAddress: string
  ): Promise<number | null> => {
    try {
      setLoading(true);
      setError('');

      const origin = await geocodeAddress(originAddress);
      if (!origin) {
        setError(`Não conseguimos localizar: "${originAddress}"`);
        setLoading(false);
        return null;
      }

      const destination = await geocodeAddress(destinationAddress);
      if (!destination) {
        setError(`Não conseguimos localizar: "${destinationAddress}"`);
        setLoading(false);
        return null;
      }

      const distance = haversineDistance(origin.lat, origin.lon, destination.lat, destination.lon);
      setLoading(false);

      // Adicionar 10% à distância para compensar desvios de rota
      return Math.round(distance * 1.1 * 10) / 10;
    } catch (err) {
      setError('Erro ao calcular distância');
      console.error(err);
      setLoading(false);
      return null;
    }
  };

  return {
    calculateDistance,
    loading,
    error,
    setError,
  };
}
