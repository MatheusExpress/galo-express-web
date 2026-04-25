import { MapPin } from 'lucide-react';

export default function CoverageMap() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Área de Cobertura
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Atendemos Campo Largo e região metropolitana de Curitiba
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Map SVG */}
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto max-w-sm"
              style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
            >
              {/* Background */}
              <rect width="400" height="400" fill="#f3f4f6" className="dark:fill-gray-700" />

              {/* Coverage Area (Círculo) */}
              <circle cx="200" cy="200" r="120" fill="#ff8c00" opacity="0.2" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#ff8c00" strokeWidth="2" strokeDasharray="5,5" />

              {/* Campo Largo (Centro) */}
              <circle cx="200" cy="200" r="8" fill="#ef4444" />
              <text x="200" y="230" textAnchor="middle" className="text-xs font-bold fill-gray-900 dark:fill-white">
                Campo Largo
              </text>

              {/* Cidades Vizinhas */}
              {[
                { x: 280, y: 150, name: 'Curitiba' },
                { x: 150, y: 120, name: 'Pinhais' },
                { x: 120, y: 280, name: 'Colombo' },
                { x: 280, y: 280, name: 'Araucária' },
              ].map((city, i) => (
                <g key={i}>
                  <circle cx={city.x} cy={city.y} r="6" fill="#ff8c00" />
                  <text
                    x={city.x}
                    y={city.y + 25}
                    textAnchor="middle"
                    className="text-xs fill-gray-700 dark:fill-gray-300"
                  >
                    {city.name}
                  </text>
                </g>
              ))}

              {/* Legenda */}
              <text x="20" y="380" className="text-xs fill-gray-600 dark:fill-gray-400">
                🔴 Cobertura Principal | 🟠 Cidades Atendidas
              </text>
            </svg>
          </div>

          {/* Coverage Details */}
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                Cobertura Principal
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✓ Campo Largo (todos os bairros)</li>
                <li>✓ Centro, Xaxim, Palmital</li>
                <li>✓ Guajuvira, Itapoã</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                Cidades Atendidas
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✓ Curitiba (zona sul)</li>
                <li>✓ Pinhais, Colombo</li>
                <li>✓ Araucária, Fazenda Rio Grande</li>
                <li>✓ Almirante Tamandaré, Piraquara</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                ⚠️ Outras Localidades
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Consulte-nos para regiões fora da cobertura. Podemos atender com taxa adicional!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
