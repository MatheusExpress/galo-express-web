import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { MessageCircle, Zap } from 'lucide-react';

export default function Simulator() {
  const [vehicleType, setVehicleType] = useState('motorcycle');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [pricePerKm, setPricePerKm] = useState('2.50');
  const [distance, setDistance] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulated distance calculation (in real app, would use Google Maps API)
    const simulatedDistance = Math.floor(Math.random() * 20) + 3;
    setDistance(simulatedDistance);
    setShowResult(true);
  };

  const totalPrice = distance ? (distance * parseFloat(pricePerKm)).toFixed(2) : '0.00';

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de um orçamento para entrega:\n\nVeículo: ${vehicleType === 'motorcycle' ? 'Moto' : 'Carro'}\nDistância: ${distance} km\nValor: R$ ${totalPrice}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Simule sua <span className="text-red-500">entrega</span>
          </h2>
          <p className="text-lg text-gray-600">
            Calcule o valor do seu frete em segundos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="p-8 border-2 border-gray-200 shadow-lg">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de veículo
                </label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger className="w-full h-12 border-2 border-gray-300 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="motorcycle">🏍️ Moto (Rápido e ágil)</SelectItem>
                    <SelectItem value="car">🚗 Carro (Maior capacidade)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Endereço de origem
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
                  Endereço de destino
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Valor por km (R$)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  min="0"
                  value={pricePerKm}
                  onChange={(e) => setPricePerKm(e.target.value)}
                  required
                  className="h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Calcular entrega
              </Button>
            </form>
          </Card>

          {/* Result */}
          {showResult && (
            <Card className="p-8 border-2 border-red-500 bg-gradient-to-br from-red-50 to-orange-50 shadow-xl animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black">Resultado da simulação</h3>

                <div className="space-y-4 bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Veículo:</span>
                    <span className="text-lg font-bold text-red-500">
                      {vehicleType === 'motorcycle' ? '🏍️ Moto' : '🚗 Carro'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Distância estimada:</span>
                    <span className="text-lg font-bold text-red-500">{distance} km</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Valor por km:</span>
                    <span className="text-lg font-bold text-red-500">R$ {pricePerKm}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-6 text-white">
                  <p className="text-sm font-semibold opacity-90 mb-1">Valor total</p>
                  <p className="text-4xl font-bold">R$ {totalPrice}</p>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar orçamento pelo WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Distância é uma estimativa. O valor final pode variar conforme a rota.
                </p>
              </div>
            </Card>
          )}

          {/* Empty state */}
          {!showResult && (
            <Card className="p-8 border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center h-96">
              <div className="text-center">
                <div className="text-5xl mb-4">📦</div>
                <p className="text-gray-600 font-semibold">
                  Preencha o formulário e veja o resultado aqui
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
