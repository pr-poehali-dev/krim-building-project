import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AccessibilityPanel = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform"
      aria-label="Настройки доступности"
      title="Настройки доступности"
    >
      <Icon name="Accessibility" size={24} />
    </Button>
  );
};

export default AccessibilityPanel;
