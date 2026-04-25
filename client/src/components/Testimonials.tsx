import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'João Silva',
    company: 'Silva Comércio',
    text: 'Entrega rápida de materiais de construção. Chegaram intactos e no prazo!',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Maria Santos',
    company: 'Gráfica Santos',
    text: 'Excelente para entregas de documentos urgentes. Muito confiável!',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Carlos Oliveira',
    company: 'Indústria Oliveira',
    text: 'Uso há 6 meses para entregas de peças. Profissional e pontual!',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Ana Costa',
    company: 'Escritório Contábil',
    text: 'Perfeito para documentação. Seguro e rápido. Recomendo!',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Pedro Mendes',
    company: 'Distribuidora Mendes',
    text: 'Entregas de amostras e materiais. Chegam sempre em perfeito estado!',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Lucia Ferreira',
    company: 'Consultoria Ferreira',
    text: 'Urgência? Chamo a Galo! Nunca me deixou na mão com prazos apertados.',
    rating: 5,
    avatar: '👩‍💼',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Confira os depoimentos de empresas que confiam na Galo Express
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-2 border-orange-200 dark:border-orange-600">
            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
              "{current.text}"
            </p>

            {/* Author */}
            <div className="text-center mb-6">
              <p className="text-2xl mb-2">{current.avatar}</p>
              <p className="font-bold text-gray-900 dark:text-white">{current.name}</p>
              <p className="text-sm text-orange-500 font-semibold">{current.company}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prev}
                className="p-2 bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-800 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-orange-600 dark:text-orange-300" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex
                        ? 'bg-orange-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-800 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-orange-600 dark:text-orange-300" />
              </button>
            </div>
          </div>

          {/* Counter */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
            {currentIndex + 1} de {testimonials.length}
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToSimulator}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Solicitar Orçamento Agora
          </button>
        </div>
      </div>
    </section>
  );
}
