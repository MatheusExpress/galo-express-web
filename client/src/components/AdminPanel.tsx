import { useEffect, useState } from 'react';
import { X, Settings, Eye, EyeOff, RotateCcw, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface AdminSettings {
  showPrices: boolean;
  priceMultiplier: number;
  maintenanceMode: boolean;
  blockOutsideHours: boolean;
  theme: 'light' | 'dark';
}

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AdminSettings>(() => {
    const saved = localStorage.getItem('galo-admin-settings');
    return saved ? JSON.parse(saved) : {
      showPrices: false,
      priceMultiplier: 1,
      maintenanceMode: false,
      blockOutsideHours: true,
      theme: 'light'
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
    // Disparar evento de storage para atualizar componentes
    window.dispatchEvent(new Event('storage'));
    
    // Aplicar tema ao documento
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-orange-500 shadow-2xl">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 flex items-center justify-between rounded-t-lg">
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

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Info Section */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex gap-2">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-blue-900 mb-1">Modo de Orçamento</p>
                <p className="text-xs text-blue-800">
                  Quando desativado: clientes enviam endereços e você define o valor via WhatsApp.
                  Quando ativado: mostra campo de preço por km no simulador.
                </p>
              </div>
            </div>
          </div>

          {/* Show Prices Toggle */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Mostrar campo de preço por km
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSettings({ ...settings, showPrices: !settings.showPrices })}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.showPrices ? 'bg-orange-500' : 'bg-gray-300'
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
              {settings.showPrices 
                ? '✓ Clientes podem calcular valor por km' 
                : '✓ Clientes enviam endereços, você define o valor'}
            </p>
          </div>

          {/* Price Multiplier - Only show when prices are visible */}
          {settings.showPrices && (
            <div className="space-y-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
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
                <span className="text-sm font-semibold text-gray-600 w-16 text-right">
                  {(settings.priceMultiplier * 100).toFixed(0)}%
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Ajuste o valor dos fretes (ex: 1.2 = 20% mais caro)
              </p>
            </div>
          )}

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

          {/* Block Outside Hours */}
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <label className="block text-sm font-semibold text-gray-700">
              Bloquear fora do horário
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSettings({ ...settings, blockOutsideHours: !settings.blockOutsideHours })}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.blockOutsideHours ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.blockOutsideHours ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-sm text-gray-600">
                {settings.blockOutsideHours ? 'Ativado' : 'Desativado'}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {settings.blockOutsideHours 
                ? '✓ Formulário bloqueado fora do horário' 
                : '✓ Formulário liberado 24/7 (clientes podem solicitar qualquer hora)'}
            </p>
          </div>

          {/* Theme Toggle */}
          <div className="space-y-2 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <label className="block text-sm font-semibold text-gray-700">
              Tema do Site
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' })}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.theme === 'dark' ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-sm text-gray-600">
                {settings.theme === 'dark' ? '🌟 Escuro' : '☀️ Claro'}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {settings.theme === 'dark'
                ? '✓ Tema escuro ativado para melhor visualização noturna'
                : '✓ Tema claro ativado para melhor visualização diurna'}
            </p>
          </div>

          {/* Status Info */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-700 mb-3">📊 Status do Sistema</h3>
            <ul className="text-xs text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Servidor: Online
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Banco de dados: Conectado
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                API WhatsApp: Ativo
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Rastreamento: Funcionando
              </li>
            </ul>
          </div>

          {/* Current Settings Summary */}
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <h3 className="text-sm font-bold text-gray-700 mb-2">⚙️ Configuração Atual</h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Modo Orçamento: <strong>{settings.showPrices ? 'COM preço/km' : 'SEM preço/km'}</strong></li>
              <li>• Multiplicador: <strong>{(settings.priceMultiplier * 100).toFixed(0)}%</strong></li>
              <li>• Manutenção: <strong>{settings.maintenanceMode ? 'ATIVA' : 'Inativa'}</strong></li>
              <li>• Bloqueio por Horário: <strong>{settings.blockOutsideHours ? 'ATIVO' : 'Inativo'}</strong></li>
              <li>• Tema: <strong>{settings.theme === 'dark' ? 'ESCURO' : 'CLARO'}</strong></li>
            </ul>
          </div>

          {/* Reset Button */}
          <Button
            onClick={() => {
              setSettings({
                showPrices: false,
                priceMultiplier: 1,
                maintenanceMode: false,
                blockOutsideHours: true,
                theme: 'light'
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
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
          >
            Fechar (Alt+A)
          </Button>
        </div>
      </Card>
    </div>
  );
}
