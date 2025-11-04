import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Строим в Крыму</h3>
            <p className="text-sm opacity-80">
              Качественное строительство индивидуальных домов с 2013 года
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (978) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@stroim-crimea.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Симферополь, ул. Строительная, 10</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Строительство домов</li>
              <li>Проектирование</li>
              <li>Архитектурный надзор</li>
              <li>Ландшафтный дизайн</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Преимущества</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="opacity-80" />
                <span className="text-sm opacity-80">Гарантия 10 лет</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="opacity-80" />
                <span className="text-sm opacity-80">Точные сроки</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="opacity-80" />
                <span className="text-sm opacity-80">Прозрачные цены</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>© 2024 Строим в Крыму. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
