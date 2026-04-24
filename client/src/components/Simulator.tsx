import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, Zap, AlertCircle, Clock } from 'lucide-react';
import { useBusinessHours } from '@/hooks/useBusinessHours';
interface AdminSettings {
  showPrices: boolean;
  priceMultiplier: number;
  blockOutsideHours: boolean;
  theme: 'light' | 'dark';
}



export default function Simulator() {
  const businessHours = useBusinessHours();
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    showPrices: false,
    priceMultiplier: 1,
    blockOutsideHours: true,
    theme: 'light'
  });
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const directionsServiceRef = useRef<any>(null);

  // Carregar configurações do admin panel
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('galo-admin-settings');
      if (saved) {
        const settings = JSON.parse(saved);
        setAdminSettings(settings);
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

  // Inicializar Google Maps Directions Service
  useEffect(() => {
    if (window.google && window.google.maps) {
      directionsServiceRef.current = new window.google.maps.DirectionsService();
    }
  }, []);

  const calculateDistance = async (originAddress: string, destinationAddress: string) => {
    if (!directionsServiceRef.current) {
      setError('Google Maps não está disponível. Tente novamente.');
      return null;
    }

    try {
      setLoading(true);
      setError('');

      const result = await directionsServiceRef.current.route({
        origin: originAddress,
        destination: destinationAddress,
        travelMode: window.google.maps.TravelMode.DRIVING,
        region: 'BR'
      });

      if (result.routes.length > 0) {
        const route = result.routes[0];
        const leg = route.legs[0];
        
        // Distância em metros, converter para km
        const distanceInKm = Math.round((leg.distance.value / 1000) * 10) / 10;
        
        return distanceInKm;
      } else {
        setError('Não foi possível calcular a rota. Verifique os endereços.');
        return null;
      }
    } catch (err: any) {
      let errorMessage = 'Erro ao calcular distância. ';
      
      if (err.message?.includes('ZERO_RESULTS')) {
        errorMessage += 'Endereço não encontrado. Verifique a digitação.';
      } else if (err.message?.includes('NOT_FOUND')) {
        errorMessage += 'Um ou ambos os endereços não foram encontrados.';
      } else if (err.message?.includes('INVALID_REQUEST')) {
        errorMessage += 'Requisição inválida. Verifique os endereços.';
      } else {
        errorMessage += 'Tente novamente.';
      }
      
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessHours.isOpen && adminSettings.blockOutsideHours) {
      setError('⏰ Estamos fora do horário de funcionamento. ' + businessHours.nextOpenTime);
      return;
    }

    setError('');
    setLoading(true);

    const calculatedDistance = await calculateDistance(origin, destination);
    
    if (calculatedDistance !== null) {
      setDistance(calculatedDistance);
      setShowResult(true);
    }

    setLoading(false);
  };

  const handleWhatsApp = () => {
    const message = `🚚 *SOLICITAÇÃO DE ORÇAMENTO - GALO EXPRESS*

📍 *Endereço de Coleta:*
${origin}

📍 *Endereço de Entrega:*
${destination}

📏 *Distância:*
${distance} km

💰 *Valor:* A confirmar

---
Aguardo confirmação do valor para encaminhar ao motoboy.`;
    
    const whatsappUrl = `https://wa.me/5541984167897?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="simulator" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Solicite seu <span className="text-orange-500">orçamento</span>
          </h2>
          <p className="text-lg text-gray-600">
            Preencha os endereços e receba uma proposta personalizada
          </p>
        </div>

        {/* Status de Horário */}
        <div className={`mb-8 p-4 rounded-lg border-l-4 flex items-start gap-3 ${
          businessHours.isOpen 
            ? 'bg-green-50 border-green-500' 
            : 'bg-orange-50 border-orange-500'
        }`}>
          <Clock className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
            businessHours.isOpen ? 'text-green-600' : 'text-orange-600'
          }`} />
          <div>
            <p className={`font-semibold ${
              businessHours.isOpen ? 'text-green-700' : 'text-orange-700'
            }`}>
              {businessHours.message}
            </p>
            {businessHours.nextOpenTime && (
              <p className={`text-sm ${
                businessHours.isOpen ? 'text-green-600' : 'text-orange-600'
              }`}>
                {businessHours.nextOpenTime}
              </p>
            )}
            <p className="text-xs text-gray-600 mt-1">
              📅 Seg-Sex: 7:00 - 18:00 | Sábado: 8:00 - 12:00
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="p-8 border-2 border-gray-200 shadow-lg">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📍 Endereço de coleta
                </label>
                <Input
                  type="text"
                  placeholder="Ex: Rua A, 123 - Centro, Campo Largo"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                  disabled={loading}
                  className="h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📍 Endereço de entrega
                </label>
                <Input
                  type="text"
                  placeholder="Ex: Av. B, 456 - Bairro, Campo Largo"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                  disabled={loading}
                  className="h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {/* Info message */}
              {!error && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <div className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-orange-700">
                      <strong>Como funciona:</strong> Envie os endereços e receba um orçamento personalizado via WhatsApp em poucos minutos.
                    </p>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading || (!businessHours.isOpen && adminSettings.blockOutsideHours)}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:hover:scale-100"
              >
                <Zap className="w-5 h-5 mr-2" />
                {loading ? 'Calculando distância...' : 'Solicitar Orçamento'}
              </Button>
            </form>
          </Card>

          {/* Result */}
          {showResult && (
            <Card className="p-8 border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-orange-50 shadow-xl animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black">✅ Orçamento Preparado</h3>

                <div className="space-y-4 bg-white rounded-lg p-6 border border-gray-200">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Coleta</p>
                      <p className="text-sm text-gray-800 font-medium">{origin}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-orange-500 text-2xl">↓</div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Entrega</p>
                      <p className="text-sm text-gray-800 font-medium">{destination}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Distância Calculada</p>
                    <p className="text-2xl font-bold text-orange-500">{distance} km</p>
                    <p className="text-xs text-gray-500 mt-1">✓ Calculada via Google Maps</p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-sm text-blue-700">
                    <strong>📱 Próximo passo:</strong> Clique no botão abaixo para enviar os endereços via WhatsApp. Você receberá um orçamento personalizado em breve!
                  </p>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Você será redirecionado para o WhatsApp com a mensagem pronta
                </p>
              </div>
            </Card>
          )}

          {/* Empty state */}
          {!showResult && (
            <Card className="p-8 border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center h-96">
              <div className="text-center">
                <div className="text-5xl mb-4">📦</div>
                <p className="text-gray-600 font-semibold mb-2">
                  Preencha os endereços
                </p>
                <p className="text-sm text-gray-500">
                  e veja a prévia do seu orçamento aqui
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Admin Info */}
        {!adminSettings.showPrices && (
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-700 font-semibold">
              ℹ️ <strong>Modo de Orçamento Ativo:</strong> Os clientes enviam os endereços e você define os valores via WhatsApp.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
