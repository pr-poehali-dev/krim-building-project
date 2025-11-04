import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

type FontSize = 'small' | 'normal' | 'large' | 'xlarge';
type ColorScheme = 'default' | 'high-contrast' | 'dark' | 'sepia';

interface AccessibilitySettings {
  fontSize: FontSize;
  colorScheme: ColorScheme;
  reduceAnimations: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  colorScheme: 'default',
  reduceAnimations: false,
};

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  const applySettings = useCallback((settings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = {
      small: '14px',
      normal: '16px',
      large: '18px',
      xlarge: '20px',
    }[settings.fontSize];

    // Color schemes
    root.setAttribute('data-accessibility-scheme', settings.colorScheme);
    
    // Reduce animations
    if (settings.reduceAnimations) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, []);

  // Загрузка настроек из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
      } catch (e) {
        console.error('Failed to parse accessibility settings');
      }
    }
  }, []);

  // Сохранение и применение настроек
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings, applySettings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  };

  const increaseFontSize = () => {
    const sizes: FontSize[] = ['small', 'normal', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex < sizes.length - 1) {
      updateSetting('fontSize', sizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const sizes: FontSize[] = ['small', 'normal', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex > 0) {
      updateSetting('fontSize', sizes[currentIndex - 1]);
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform"
          aria-label="Настройки доступности"
          title="Настройки доступности"
        >
          <Icon name="Accessibility" size={24} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className="w-80 max-h-[80vh] overflow-y-auto"
        sideOffset={8}
      >
        <DropdownMenuLabel className="text-lg font-bold">
          <Icon name="Accessibility" size={20} className="inline mr-2" />
          Настройки доступности
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Font Size Controls */}
        <div className="p-3">
          <label className="text-sm font-semibold mb-2 block">Размер шрифта</label>
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={decreaseFontSize}
              disabled={settings.fontSize === 'small'}
              aria-label="Уменьшить шрифт"
            >
              <Icon name="Minus" size={16} />
            </Button>
            <span className="text-sm font-medium flex-1 text-center">
              {settings.fontSize === 'small' && 'Мелкий'}
              {settings.fontSize === 'normal' && 'Обычный'}
              {settings.fontSize === 'large' && 'Крупный'}
              {settings.fontSize === 'xlarge' && 'Очень крупный'}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={increaseFontSize}
              disabled={settings.fontSize === 'xlarge'}
              aria-label="Увеличить шрифт"
            >
              <Icon name="Plus" size={16} />
            </Button>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Color Schemes */}
        <div className="p-3">
          <label className="text-sm font-semibold mb-2 block">Цветовая схема</label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={settings.colorScheme === 'default' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateSetting('colorScheme', 'default')}
              className="justify-start"
            >
              <Icon name="Palette" size={16} className="mr-2" />
              Обычная
            </Button>
            <Button
              variant={settings.colorScheme === 'high-contrast' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateSetting('colorScheme', 'high-contrast')}
              className="justify-start"
            >
              <Icon name="Contrast" size={16} className="mr-2" />
              Контраст
            </Button>
            <Button
              variant={settings.colorScheme === 'dark' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateSetting('colorScheme', 'dark')}
              className="justify-start"
            >
              <Icon name="Moon" size={16} className="mr-2" />
              Тёмная
            </Button>
            <Button
              variant={settings.colorScheme === 'sepia' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateSetting('colorScheme', 'sepia')}
              className="justify-start"
            >
              <Icon name="Sun" size={16} className="mr-2" />
              Сепия
            </Button>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Animations Toggle */}
        <div className="p-3">
          <Button
            variant={settings.reduceAnimations ? 'default' : 'outline'}
            size="sm"
            onClick={() => updateSetting('reduceAnimations', !settings.reduceAnimations)}
            className="w-full justify-start"
          >
            <Icon name="Zap" size={16} className="mr-2" />
            {settings.reduceAnimations ? 'Анимации отключены' : 'Отключить анимации'}
          </Button>
        </div>

        <DropdownMenuSeparator />

        {/* Reset Button */}
        <div className="p-3">
          <Button
            variant="outline"
            size="sm"
            onClick={resetSettings}
            className="w-full"
          >
            <Icon name="RotateCcw" size={16} className="mr-2" />
            Сбросить настройки
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccessibilityPanel;
