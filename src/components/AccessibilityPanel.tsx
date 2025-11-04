import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

type FontSize = 'small' | 'normal' | 'large' | 'xlarge';
type ColorScheme = 'default' | 'high-contrast' | 'dark' | 'sepia';

interface AccessibilitySettings {
  fontSize: FontSize;
  colorScheme: ColorScheme;
  lineHeight: number;
  letterSpacing: number;
  reduceAnimations: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  colorScheme: 'default',
  lineHeight: 1.5,
  letterSpacing: 0,
  reduceAnimations: false,
  highlightLinks: false,
  readableFont: false,
};

const fontSizeClasses: Record<FontSize, string> = {
  small: 'text-sm',
  normal: 'text-base',
  large: 'text-lg',
  xlarge: 'text-xl',
};

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Загрузка настроек из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Сохранение настроек в localStorage и применение
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  // Клавиатурные сочетания для изменения размера шрифта
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Plus/Equals для увеличения
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=')) {
        e.preventDefault();
        increaseFontSize();
      }
      // Ctrl/Cmd + Minus для уменьшения
      if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        decreaseFontSize();
      }
      // Ctrl/Cmd + 0 для сброса
      if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        updateSetting('fontSize', 'normal');
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [settings.fontSize]);

  const applySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = {
      small: '14px',
      normal: '16px',
      large: '18px',
      xlarge: '20px',
    }[settings.fontSize];

    // Line height
    root.style.setProperty('--line-height', settings.lineHeight.toString());
    
    // Letter spacing
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);

    // Color schemes
    root.setAttribute('data-accessibility-scheme', settings.colorScheme);
    
    // Reduce animations
    if (settings.reduceAnimations) {
      root.style.setProperty('--animation-duration', '0.01ms');
      document.body.classList.add('reduce-motion');
    } else {
      root.style.removeProperty('--animation-duration');
      document.body.classList.remove('reduce-motion');
    }

    // Highlight links
    if (settings.highlightLinks) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }

    // Readable font
    if (settings.readableFont) {
      document.body.classList.add('readable-font');
    } else {
      document.body.classList.remove('readable-font');
    }
  };

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
    <>
      {/* Floating accessibility button */}
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
                <Icon name="BookOpen" size={16} className="mr-2" />
                Сепия
              </Button>
            </div>
          </div>

          <DropdownMenuSeparator />

          {/* Line Height */}
          <div className="p-3">
            <label className="text-sm font-semibold mb-2 block">
              Межстрочный интервал: {settings.lineHeight.toFixed(1)}
            </label>
            <input
              type="range"
              min="1.2"
              max="2.5"
              step="0.1"
              value={settings.lineHeight}
              onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
              className="w-full"
              aria-label="Межстрочный интервал"
            />
          </div>

          <DropdownMenuSeparator />

          {/* Letter Spacing */}
          <div className="p-3">
            <label className="text-sm font-semibold mb-2 block">
              Межбуквенный интервал: {settings.letterSpacing}px
            </label>
            <input
              type="range"
              min="0"
              max="3"
              step="0.5"
              value={settings.letterSpacing}
              onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
              className="w-full"
              aria-label="Межбуквенный интервал"
            />
          </div>

          <DropdownMenuSeparator />

          {/* Toggle Options */}
          <DropdownMenuItem
            onClick={() => updateSetting('reduceAnimations', !settings.reduceAnimations)}
            className="cursor-pointer"
          >
            <Icon 
              name={settings.reduceAnimations ? 'CheckSquare' : 'Square'} 
              size={18} 
              className="mr-2" 
            />
            Уменьшить анимации
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)}
            className="cursor-pointer"
          >
            <Icon 
              name={settings.highlightLinks ? 'CheckSquare' : 'Square'} 
              size={18} 
              className="mr-2" 
            />
            Подсветка ссылок
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => updateSetting('readableFont', !settings.readableFont)}
            className="cursor-pointer"
          >
            <Icon 
              name={settings.readableFont ? 'CheckSquare' : 'Square'} 
              size={18} 
              className="mr-2" 
            />
            Читаемый шрифт
          </DropdownMenuItem>

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

          {/* Info */}
          <div className="p-3 text-xs text-muted-foreground bg-muted/50">
            <Icon name="Info" size={14} className="inline mr-1" />
            Настройки сохраняются автоматически
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Keyboard shortcuts hint */}
      <div className="sr-only" aria-live="polite">
        Используйте Ctrl + и Ctrl - для изменения размера шрифта
      </div>
    </>
  );
};

export default AccessibilityPanel;