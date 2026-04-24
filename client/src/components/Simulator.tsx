import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, Zap, AlertCircle } from 'lucide-react';

interface AdminSettings {
  showPrices: boolean;
  priceMultiplier: number;
}

export default function Simulator() {
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    showPrices: false,
    priceMultiplier: 1
  });
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

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
    
    // Verificar mudanças a cada 500ms
    const interval = setInterval(handleStorageChange, 500);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulated distance calculation
    const simulatedDistance = Math.floor(Math.random() * 20) + 3;
    setDistance(simulatedDistance);
    setShowResult(true);
  };

  const handleWhatsApp = () => {
    const message = `🚚 *SOLICITAÇÃO DE ORÇAMENTO - GALO EXPRESS*

📍 *Endereço de Coleta:*
${origin}

📍 *Endereço de Entrega:*
${destination}

📏 *Distância Estimada:*
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
                  placeholder="Ex: Rua A, 123 - Centro"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                  className="h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📍 Endereço de entrega
                </label>
                <Input
                  type="text"
                  placeholder="Ex: Av. B, 456 - Bairro"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                  className="h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>

              {/* Info message */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <div className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-orange-700">
                    <strong>Como funciona:</strong> Envie os endereços e receba um orçamento personalizado via WhatsApp em poucos minutos.
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Solicitar Orçamento
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
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Distância Estimada</p>
                    <p className="text-2xl font-bold text-orange-500">{distance} km</p>
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
