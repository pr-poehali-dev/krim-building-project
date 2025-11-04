import Icon from "@/components/ui/icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Leaf" className="text-primary" size={32} />
              <div>
                <h3 className="text-lg font-bold text-primary">ЭкоСтрой</h3>
                <p className="text-xs text-muted-foreground">Строим будущее</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Экологичные дома с современными технологиями. 
              15 лет опыта, 500+ счастливых семей.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Проектирование</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Строительство домов</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Зелёные технологии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Умный дом</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ландшафтный дизайн</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#values" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Портфолио</a></li>
              <li><a href="#certificates" className="hover:text-primary transition-colors">Сертификаты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Mail" size={16} className="text-primary" />
                <a href="mailto:info@ecostroy.ru" className="hover:text-primary transition-colors">
                  info@ecostroy.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Москва, ул. Экологическая, 25</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Пн-Вс: 9:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} ЭкоСтрой. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Публичная оферта</a>
              <a href="#" className="hover:text-primary transition-colors">Карта сайта</a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full">
              <Icon name="Award" size={16} className="text-primary" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full">
              <Icon name="Leaf" size={16} className="text-green-600" />
              <span>LEED Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full">
              <Icon name="Shield" size={16} className="text-blue-600" />
              <span>СРО строителей</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full">
              <Icon name="Zap" size={16} className="text-amber-600" />
              <span>Energy Star</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
