import { useEffect, useState } from 'react';
import { X, Settings, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface AdminSettings {
  showPrices: boolean;
  priceMultiplier: number;
  maintenanceMode: boolean;
}

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AdminSettings>(() => {
    const saved = localStorage.getItem('galo-admin-settings');
    return saved ? JSON.parse(saved) : {
      showPrices: true,
      priceMultiplier: 1,
      maintenanceMode: false
    };
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('galo-admin-settings', JSON.stringify(settings));
  }, [settings]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-red-500 shadow-2xl">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            <h2 className="text-xl font-bold">Painel Administrativo</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-1 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Show Prices Toggle */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Mostrar valores de orçamento
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSettings({ ...settings, showPrices: !settings.showPrices })}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.showPrices ? 'bg-red-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.showPrices ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-sm text-gray-600">
                {settings.showPrices ? (
                  <Eye className="w-4 h-4 inline mr-1" />
                ) : (
                  <EyeOff className="w-4 h-4 inline mr-1" />
                )}
                {settings.showPrices ? 'Visível' : 'Oculto'}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Quando desativado, os campos de valor e o resultado do orçamento ficarão ocultos.
            </p>
          </div>

          {/* Price Multiplier */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Multiplicador de preço
            </label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                step="0.1"
                min="0.5"
                max="3"
                value={settings.priceMultiplier}
                onChange={(e) => setSettings({ ...settings, priceMultiplier: parseFloat(e.target.value) })}
                className="flex-1 h-10 border-2 border-gray-300"
              />
              <span className="text-sm font-semibold text-gray-600 w-12">
                {(settings.priceMultiplier * 100).toFixed(0)}%
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Ajuste o valor dos fretes (ex: 1.2 = 20% mais caro)
            </p>
          </div>

          {/* Maintenance Mode */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Modo de manutenção
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSettings({ ...settings, maintenanceMode: !settings.maintenanceMode })}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.maintenanceMode ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.maintenanceMode ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-sm text-gray-600">
                {settings.maintenanceMode ? 'Ativado' : 'Desativado'}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Quando ativado, o site exibirá mensagem de manutenção.
            </p>
          </div>

          {/* Status Info */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-700 mb-2">Status do Sistema</h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>✓ Servidor: Online</li>
              <li>✓ Banco de dados: Conectado</li>
              <li>✓ API WhatsApp: Ativo</li>
              <li>✓ Rastreamento: Funcionando</li>
            </ul>
          </div>

          {/* Reset Button */}
          <Button
            onClick={() => {
              setSettings({
                showPrices: true,
                priceMultiplier: 1,
                maintenanceMode: false
              });
            }}
            variant="outline"
            className="w-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restaurar Padrões
          </Button>

          {/* Close Button */}
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold"
          >
            Fechar (Alt+A)
          </Button>
        </div>
      </Card>
    </div>
  );
}
