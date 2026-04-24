import { useState, useEffect } from 'react';

interface BusinessHours {
  isOpen: boolean;
  message: string;
  nextOpenTime: string;
}

export function useBusinessHours(): BusinessHours {
  const [businessHours, setBusinessHours] = useState<BusinessHours>({
    isOpen: true,
    message: '',
    nextOpenTime: ''
  });

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes; // converter para minutos

      // Horários de funcionamento
      // Segunda a sexta: 7:00 - 18:00
      // Sábado: 8:00 - 12:00
      // Domingo: fechado

      let isOpen = false;
      let message = '';
      let nextOpenTime = '';

      if (day === 0) {
        // Domingo - fechado
        isOpen = false;
        message = '🚫 Estamos fechados no domingo';
        nextOpenTime = 'Segunda-feira às 7:00';
      } else if (day === 6) {
        // Sábado
        const saturdayOpen = 8 * 60; // 8:00
        const saturdayClose = 12 * 60; // 12:00

        if (currentTime >= saturdayOpen && currentTime < saturdayClose) {
          isOpen = true;
          message = '✅ Estamos abertos!';
        } else if (currentTime < saturdayOpen) {
          isOpen = false;
          message = '⏰ Ainda não abrimos. Abrimos às 8:00';
          nextOpenTime = 'Hoje às 8:00';
        } else {
          isOpen = false;
          message = '🚫 Já fechamos. Reabrimos segunda-feira às 7:00';
          nextOpenTime = 'Segunda-feira às 7:00';
        }
      } else if (day >= 1 && day <= 5) {
        // Segunda a sexta
        const weekdayOpen = 7 * 60; // 7:00
        const weekdayClose = 18 * 60; // 18:00

        if (currentTime >= weekdayOpen && currentTime < weekdayClose) {
          isOpen = true;
          message = '✅ Estamos abertos!';
        } else if (currentTime < weekdayOpen) {
          isOpen = false;
          message = '⏰ Ainda não abrimos. Abrimos às 7:00';
          nextOpenTime = 'Hoje às 7:00';
        } else {
          isOpen = false;
          message = '🚫 Já fechamos. Reabrimos amanhã às 7:00';
          nextOpenTime = 'Amanhã às 7:00';
        }
      }

      setBusinessHours({
        isOpen,
        message,
        nextOpenTime
      });
    };

    checkBusinessHours();

    // Verificar a cada minuto se mudou o status
    const interval = setInterval(checkBusinessHours, 60000);

    return () => clearInterval(interval);
  }, []);

  return businessHours;
}
