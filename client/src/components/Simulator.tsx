import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, Zap, AlertCircle, Clock } from 'lucide-react';
import { useBusinessHours } from '@/hooks/useBusinessHours';
import { useGeocoding } from '@/hooks/useGeocoding';
import { useAddressAutocomplete } from '@/hooks/useAddressAutocomplete';

interface AdminSettings {
  showPrices: boolean;
  priceMultiplier: number;
  blockOutsideHours: boolean;
}

export default function Simulator() {
  const businessHours = useBusinessHours();
  const { calculateDistance, loading: geoLoading, error: geoError } = useGeocoding();
  const { suggestions: originSuggestions, getSuggestions: getOriginSuggestions, clearSuggestions: clearOriginSuggestions } = useAddressAutocomplete();
  const { suggestions: destSuggestions, getSuggestions: getDestSuggestions, clearSuggestions: clearDestSuggestions } = useAddressAutocomplete();
  
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    showPrices: false,
    priceMultiplier: 1,
    blockOutsideHours: true,
  });
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestDropdown, setShowDestDropdown] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('galo-admin-settings');
      if (saved) {
        const settings = JSON.parse(saved);
        setAdminSettings({
          showPrices: settings.showPrices ?? false,
          priceMultiplier: settings.priceMultiplier ?? 1,
          blockOutsideHours: settings.blockOutsideHours ?? true,
        });
      }
    };

    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 500);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleOriginChange = (value: string) => {
    setOrigin(value);
    if (value.trim()) {
      getOriginSuggestions(value);
      setShowOriginDropdown(true);
    } else {
      clearOriginSuggestions();
      setShowOriginDropdown(false);
    }
  };

  const handleDestinationChange = (value: string) => {
    setDestination(value);
    if (value.trim()) {
      getDestSuggestions(value);
      setShowDestDropdown(true);
    } else {
      clearDestSuggestions();
      setShowDestDropdown(false);
    }
  };

  const selectOriginSuggestion = (suggestion: string) => {
    setOrigin(suggestion);
    setShowOriginDropdown(false);
    clearOriginSuggestions();
  };

  const selectDestinationSuggestion = (suggestion: string) => {
    setDestination(suggestion);
    setShowDestDropdown(false);
    clearDestSuggestions();
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessHours.isOpen && adminSettings.blockOutsideHours) {
      setError('⏰ Estamos fora do horário de funcionamento. ' + businessHours.nextOpenTime);
      return;
    }
    if (!origin.trim() || !destination.trim()) {
      setError('Por favor, preencha ambos os endereços');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const dist = await calculateDistance(origin, destination);
      if (dist === null) {
        setError(geoError || 'Não conseguimos calcular a distância. Tente endereços mais específicos.');
        setLoading(false);
        return;
      }
      setDistance(dist);
      setShowResult(true);
      setLoading(false);
    } catch (err) {
      setError('Erro ao calcular distância. Tente novamente.');
      setLoading(false);
    }
  };

  const handleSendWhatsApp = () => {
    if (!distance) return;
    const message = `🚚 *SOLICITAÇÃO DE ORÇAMENTO - GALO EXPRESS*\n\n📍 *Endereço de Coleta:*\n${origin}\n\n📍 *Endereço de Entrega:*\n${destination}\n\n📏 *Distância Estimada:*\n${distance.toFixed(1)} km\n\n💰 *Valor:* A confirmar conforme rota\n\n⏱️ *Prazo:* Consulte disponibilidade\n\n---\n\n*Galo Express - Entregas Rápidas*\n📱 (41) 98416-7897\n📍 Campo Largo, PR\n🌍 Cobertura: Grande Curitiba + Região\n\n_Aguardando confirmação de disponibilidade_`;
    const whatsappUrl = `https://wa.me/5541984167897?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="simulator" className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simule seu Frete</h2>
          <p className="text-gray-600">Calcule a distância e receba um orçamento personalizado</p>
        </div>

        {!businessHours.isOpen && adminSettings.blockOutsideHours && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
            <p className="text-yellow-800 font-semibold">⏰ Estamos fechados. Reabrimos {businessHours.nextOpenTime}</p>
          </div>
        )}

        <Card className="max-w-2xl mx-auto p-8 bg-white border-2 border-orange-200">
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="space-y-2 relative">
              <label className="block text-sm font-semibold text-gray-900">📍 Endereço de Coleta</label>
              <Input
                type="text"
                placeholder="Ex: Rua das Flores, Centro, Campo Largo"
                value={origin}
                onChange={(e) => handleOriginChange(e.target.value)}
                onFocus={() => origin.trim() && setShowOriginDropdown(true)}
                disabled={loading || (!businessHours.isOpen && adminSettings.blockOutsideHours)}
                className="h-12 bg-white border-orange-200 placeholder-gray-500 font-medium"
              />
              {showOriginDropdown && originSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-orange-200 rounded-lg shadow-lg z-10">
                  {originSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => selectOriginSuggestion(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors first:rounded-t-lg last:rounded-b-lg text-gray-900"
                    >
                      📍 {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-500">Digite para ver sugestões</p>
            </div>

            <div className="space-y-2 relative">
              <label className="block text-sm font-semibold text-gray-900">📍 Endereço de Entrega</label>
              <Input
                type="text"
                placeholder="Ex: Avenida Brasil, Xaxim, Campo Largo"
                value={destination}
                onChange={(e) => handleDestinationChange(e.target.value)}
                onFocus={() => destination.trim() && setShowDestDropdown(true)}
                disabled={loading || (!businessHours.isOpen && adminSettings.blockOutsideHours)}
                className="h-12 bg-white border-orange-200 placeholder-gray-500 font-medium"
              />
              {showDestDropdown && destSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-orange-200 rounded-lg shadow-lg z-10">
                  {destSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => selectDestinationSuggestion(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors first:rounded-t-lg last:rounded-b-lg text-gray-900"
                    >
                      📍 {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-500">Digite para ver sugestões</p>
            </div>

            {error && (
              <div className="p-4 bg-red-100 border-l-4 border-red-500 rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading || (!businessHours.isOpen && adminSettings.blockOutsideHours)}
              className="w-full h-12 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              {loading ? 'Calculando distância...' : 'Solicitar Orçamento'}
            </Button>
          </form>

          {showResult && distance !== null && (
            <div className="mt-8 p-6 bg-orange-50 rounded-lg border-2 border-orange-300 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Orçamento Calculado</h3>
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-white rounded">
                  <p className="text-sm text-gray-600">Distância estimada</p>
                  <p className="text-2xl font-bold text-orange-500">{distance.toFixed(1)} km</p>
                </div>
                {adminSettings.showPrices && (
                  <div className="p-3 bg-white rounded">
                    <p className="text-sm text-gray-600">Valor estimado</p>
                    <p className="text-2xl font-bold text-orange-500">
                      R$ {(distance * 2.5 * adminSettings.priceMultiplier).toFixed(2)}
                    </p>
                  </div>
                )}
                {!adminSettings.showPrices && (
                  <div className="p-3 bg-white rounded">
                    <p className="text-sm text-gray-600">Valor</p>
                    <p className="text-2xl font-bold text-orange-500">A confirmar</p>
                  </div>
                )}
              </div>
              <Button
                onClick={handleSendWhatsApp}
                className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </Button>
              <button
                onClick={() => {
                  setShowResult(false);
                  setDistance(null);
                  setOrigin('');
                  setDestination('');
                }}
                className="w-full mt-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
              >
                Novo Orçamento
              </button>
            </div>
          )}
        </Card>
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white border-2 border-orange-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Horário de Funcionamento</h4>
              <p className="text-gray-600">
                Segunda a Sexta: 7:00 - 18:00<br />
                Sábado: 8:00 - 12:00<br />
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
