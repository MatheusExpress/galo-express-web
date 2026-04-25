import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="/manus-storage/galo-logo_8dc14a0e.jpg" 
            alt="Galo Express" 
            className="w-12 h-12 rounded-lg group-hover:scale-110 transition-transform" 
          />
          <div>
            <h1 className="text-2xl font-bold text-black">Galo Express</h1>
            <p className="text-xs text-gray-600 font-semibold">Campo Largo, PR</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#simulator" className="text-gray-700 font-semibold hover:text-orange-500 transition-colors">
            Simulador
          </a>
          <a href="#features" className="text-gray-700 font-semibold hover:text-orange-500 transition-colors">
            Serviços
          </a>
          <a href="#contact" className="text-gray-700 font-semibold hover:text-orange-500 transition-colors">
            Contato
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            onClick={() => {
              const element = document.getElementById('simulator');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Solicitar Entrega
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#simulator" className="block text-gray-700 font-semibold hover:text-orange-500 transition-colors">
              Simulador
            </a>
            <a href="#features" className="block text-gray-700 font-semibold hover:text-orange-500 transition-colors">
              Serviços
            </a>
            <a href="#contact" className="block text-gray-700 font-semibold hover:text-orange-500 transition-colors">
              Contato
            </a>
            <Button 
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById('simulator');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg"
            >
              Solicitar Entrega
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
