import { Zap, Shield, DollarSign, Clock, MapPin, Bike } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Rapidez',
      description: 'Entregas em tempo recorde para atender suas demandas urgentes.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Segurança',
      description: 'Rastreamento em tempo real durante todo o trajeto.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Preços Justos',
      description: 'Tarifas transparentes, sem cobranças ocultas.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: 'Cobertura Total',
      description: 'Grande Curitiba, Campo Largo, Araçuaia, Pinhais, Colombo e Balsa Nova.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Por que escolher a <span className="text-orange-500">Galo Express</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos especialistas em entregas rápidas e confiáveis. Conheça os diferenciais que nos tornam a melhor escolha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 border-2 border-gray-200 hover:border-red-500 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Faça uma simulação agora e veja como podemos ajudar seu negócio a crescer com entregas rápidas e confiáveis.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('simulator');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-orange-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Começar Simulação
          </button>
        </div>
      </div>
    </section>
  );
}
