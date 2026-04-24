import { MessageCircle } from 'lucide-react';
import { useBusinessHours } from '@/hooks/useBusinessHours';

export default function FloatingWhatsApp() {
  const businessHours = useBusinessHours();

  const handleWhatsAppClick = () => {
    if (!businessHours.isOpen) {
      alert(`⏰ Estamos fora do horário de funcionamento.\n\n${businessHours.nextOpenTime}\n\nHorário: Seg-Sex 7:00-18:00 | Sábado 8:00-12:00`);
      return;
    }

    const message = `Olá! Gostaria de solicitar um orçamento para entrega.`;
    const whatsappUrl = `https://wa.me/5541984167897?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
        businessHours.isOpen
          ? 'bg-green-500 hover:bg-green-600 text-white'
          : 'bg-gray-400 text-white cursor-not-allowed'
      }`}
      title={businessHours.isOpen ? 'Fale conosco no WhatsApp' : 'Fora do horário de funcionamento'}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold text-sm hidden sm:inline">Fale Conosco</span>
      
      {/* Pulse animation quando aberto */}
      {businessHours.isOpen && (
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-75"></span>
      )}
    </button>
  );
}
