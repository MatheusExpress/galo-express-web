import { ArrowRight, Zap, Shield, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full font-semibold text-sm">
                <Zap className="w-4 h-4" />
                Logística Rápida e Confiável
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Entregas profissionais em <span className="text-orange-500">tempo recorde</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Especializada em entregas de materiais, documentos e peças. Cobertura em Grande Curitiba, Campo Largo, Araçuaia, Pinhais, Colombo e Balsa Nova. Rastreamento em tempo real, segurança garantida e preços transparentes.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToSimulator}
              className="w-full md:w-auto h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <p className="text-sm text-gray-400">Entregas/mês</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">15min</div>
                <p className="text-sm text-gray-400">Tempo médio</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">99%</div>
                <p className="text-sm text-gray-400">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rápido</h3>
              <p className="text-sm text-gray-400">Entregas em tempo recorde</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Seguro</h3>
              <p className="text-sm text-gray-400">Rastreamento em tempo real</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pontual</h3>
              <p className="text-sm text-gray-400">Horários respeitados</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cobertura</h3>
              <p className="text-sm text-gray-400">Grande Curitiba, Campo Largo, Araçuaia, Pinhais, Colombo e Balsa Nova</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
