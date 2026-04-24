import { Bike, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/manus-storage/galo-logo_8dc14a0e.jpg" 
                alt="Galo Express" 
                className="w-10 h-10 rounded-lg" 
              />
              <h3 className="text-xl font-bold">Galo Express</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluções de logística ágeis para moto e carro com rastreamento em tempo real. Sua entrega rápida e segura!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Início</a></li>
              <li><a href="#simulator" className="hover:text-orange-500 transition-colors">Simulador</a></li>
              <li><a href="#features" className="hover:text-orange-500 transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Entrega Rápida</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Coleta Urgente</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Orçamento Imediato</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Rastreamento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Contato</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:+5541984167897" className="hover:text-orange-500 transition-colors">(41) 98416-7897</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-1" />
                <span>Campo Largo, PR - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2026 Galo Express. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/galo.express" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
