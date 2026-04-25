import { Zap, Bike } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-white to-orange-50 overflow-hidden flex items-center">
      {/* Decorative diagonal background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl"></div>
      </div>

      {/* Diagonal cut divider */}
      <svg className="absolute bottom-0 left-0 w-full h-32 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
      </svg>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm">
                <Zap className="w-4 h-4" />
                Entrega Rápida Garantida
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Sua entrega em <span className="text-orange-500">tempo recorde</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A Galo Express oferece soluções de logística ágeis para moto e carro. Rastreamento em tempo real, segurança garantida e preços justos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg h-14 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                onClick={() => {
                  const element = document.getElementById('simulator');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Começar Simulação
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold text-lg h-14 rounded-lg"
                onClick={() => {
                  const element = document.getElementById('simulator');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Saiba Mais
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <p className="text-sm text-gray-600">Entregas/dia</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">15min</div>
                <p className="text-sm text-gray-600">Tempo médio</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">99%</div>
                <p className="text-sm text-gray-600">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated motorcycle silhouette */}
              <div className="relative w-64 h-64 animate-bounce">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bike className="w-40 h-40 text-orange-500 drop-shadow-lg" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 bg-white rounded-lg shadow-lg p-4 transform hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-orange-500">⚡</div>
                <p className="text-xs text-gray-600 font-semibold">Rápido</p>
              </div>
              <div className="absolute bottom-20 left-10 bg-white rounded-lg shadow-lg p-4 transform hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-orange-500">🛡️</div>
                <p className="text-xs text-gray-600 font-semibold">Seguro</p>
              </div>
              <div className="absolute top-1/2 right-0 bg-white rounded-lg shadow-lg p-4 transform hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-orange-500">💰</div>
                <p className="text-xs text-gray-600 font-semibold">Justo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
