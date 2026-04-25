import { CheckCircle } from 'lucide-react';

export default function Gallery() {
  const features = [
    {
      icon: '🚀',
      title: 'Rápido',
      description: 'Entregas em tempo recorde, sempre pontual',
    },
    {
      icon: '💰',
      title: 'Econômico',
      description: 'Preços justos e sem taxas escondidas',
    },
    {
      icon: '✅',
      title: 'Confiável',
      description: 'Rastreamento em tempo real da sua entrega',
    },
    {
      icon: '🛡️',
      title: 'Seguro',
      description: 'Seus materiais chegam intactos',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por que escolher a Galo Express?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Somos especializados em entregas profissionais de materiais, documentos e peças
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-600 transition-colors text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Specialties */}
        <div className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg border border-orange-200 dark:border-orange-600">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Especialidades de Entrega
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Documentos e correspondências urgentes',
              'Materiais de construção e peças',
              'Amostras e catálogos',
              'Equipamentos e máquinas',
              'Medicamentos e produtos farmacêuticos',
              'Eletrônicos e componentes',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
