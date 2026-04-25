import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const galleryItems = [
  {
    title: 'Moto Pronta para Entrega',
    description: 'Nossa frota está sempre pronta para atender',
    emoji: '🏍️',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Entrega Rápida',
    description: 'Chegamos em tempo recorde',
    emoji: '⚡',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Segurança Garantida',
    description: 'Seus pedidos chegam com segurança',
    emoji: '🛡️',
    color: 'from-green-400 to-blue-500',
  },
  {
    title: 'Profissionalismo',
    description: 'Motoboys treinados e uniformizados',
    emoji: '👨‍💼',
    color: 'from-blue-400 to-purple-500',
  },
  {
    title: 'Cobertura Total',
    description: 'Atendemos toda a região',
    emoji: '🗺️',
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Disponibilidade',
    description: 'Sempre pronto para você',
    emoji: '📱',
    color: 'from-pink-400 to-red-500',
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Conheça Nosso Serviço
          </h2>
          <p className="text-gray-400">
            Veja o que torna a Galo Express especial
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Image */}
            <div className={`bg-gradient-to-br ${galleryItems[currentIndex].color} rounded-lg p-12 text-center min-h-96 flex flex-col items-center justify-center shadow-2xl`}>
              <div className="text-8xl mb-6 animate-bounce">
                {galleryItems[currentIndex].emoji}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {galleryItems[currentIndex].title}
              </h3>
              <p className="text-lg text-white/90">
                {galleryItems[currentIndex].description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-gray-400 text-sm mt-4">
            {currentIndex + 1} de {galleryItems.length}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: '🚀', title: 'Rápido', desc: 'Entregas em tempo recorde' },
            { icon: '💰', title: 'Econômico', desc: 'Preços justos e competitivos' },
            { icon: '✅', title: 'Confiável', desc: 'Sempre no horário' },
          ].map((feature, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
