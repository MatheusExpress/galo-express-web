import { Zap, Shield, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white text-gray-900 overflow-hidden border-b border-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
              <Zap className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600">Logística Rápida e Confiável</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-4 text-black">
                Entregas
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  profissionais em
                </span>
                <br />
                tempo recorde
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mt-6">
                Especializada em entregas de materiais, documentos e peças. Cobertura em Grande Curitiba, Campo Largo, Araçuaia, Pinhais, Colombo e Balsa Nova. Rastreamento em tempo real, segurança garantida e preços transparentes.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 hover:border-red-500/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-lg text-black">Rápido</span>
                </div>
                <p className="text-sm text-gray-500">Entregas em tempo recorde</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 hover:border-red-500/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-lg text-black">Seguro</span>
                </div>
                <p className="text-sm text-gray-500">Rastreamento em tempo real</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 hover:border-red-500/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-lg text-black">Pontual</span>
                </div>
                <p className="text-sm text-gray-500">Horários respeitados</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 hover:border-red-500/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-lg text-black">Cobertura</span>
                </div>
                <p className="text-sm text-gray-500">Grande Curitiba + Região</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToSimulator}
                className="h-14 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 px-8"
              >
                <Zap className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
              <Button
                onClick={scrollToSimulator}
                variant="outline"
                className="h-14 border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold text-lg rounded-lg px-8"
              >
                Simular Frete
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-gray-100">
              <div>
                <p className="text-3xl font-black text-red-600">500+</p>
                <p className="text-sm text-gray-500">Entregas realizadas</p>
              </div>
              <div>
                <p className="text-3xl font-black text-red-600">15min</p>
                <p className="text-sm text-gray-500">Tempo médio</p>
              </div>
              <div>
                <p className="text-3xl font-black text-red-600">99%</p>
                <p className="text-sm text-gray-500">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl blur-2xl"></div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663596602135/YGdGE37RA6xvzrU8Ai6VXz/moto-hero-JCm2YK3mwhXPrxEE2aRjS3.webp"
              alt="Moto em ação"
              className="relative w-full h-auto rounded-2xl shadow-xl object-cover border border-gray-100"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-green-500 text-white px-4 py-3 rounded-lg font-bold shadow-lg">
              ✓ Entrega Garantida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
