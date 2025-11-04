import Icon from "@/components/ui/icon";

const technologies = [
  {
    icon: "Cpu",
    title: "Умный дом",
    description: "Системы автоматизации климата, освещения и безопасности. Управление со смартфона",
    features: ["Датчики CO2 и влажности", "Автоматическое проветривание", "Энергомониторинг"]
  },
  {
    icon: "Sun",
    title: "Солнечные панели",
    description: "Автономное электроснабжение до 80%. Экономия до 15 000₽ в месяц",
    features: ["Панели tier-1", "Аккумуляторы Tesla", "Гарантия 25 лет"]
  },
  {
    icon: "Wind",
    title: "Рекуперация воздуха",
    description: "Возврат 90% тепла. Свежий воздух без потери энергии",
    features: ["Фильтрация PM2.5", "Тихая работа <30дБ", "Окупаемость за 3 года"]
  },
  {
    icon: "Droplet",
    title: "Сбор дождевой воды",
    description: "Система фильтрации и хранения. Полив, стирка, технические нужды",
    features: ["Резервуар 3000л", "4-ступенчатая фильтрация", "Экономия до 40%"]
  },
  {
    icon: "Thermometer",
    title: "Тепловой насос",
    description: "Отопление и охлаждение от одной системы. КПД до 400%",
    features: ["Geothermal технология", "Работа до -25°C", "Бесшумность"]
  },
  {
    icon: "Package",
    title: "Модульные стены",
    description: "Заводская сборка панелей. Монтаж дома за 2 недели",
    features: ["Точность ±1мм", "Утепление 300мм", "Готовая отделка"]
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
            <Icon name="Zap" size={20} />
            <span>Современные решения</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Зелёные технологии
          </h2>
          <p className="text-xl text-muted-foreground">
            Инновационные системы для комфорта, экономии и заботы о планете
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Icon name={tech.icon as any} size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {tech.description}
              </p>
              
              <ul className="space-y-2">
                {tech.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Энергоэффективность класса A+</h3>
              <p className="text-muted-foreground mb-6">
                Наши дома потребляют на 70% меньше энергии по сравнению с традиционными постройками. 
                Это экономия до 50 000₽ в год на коммунальных платежах.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-lg p-4 border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">-70%</div>
                  <div className="text-sm text-muted-foreground">Энергопотребление</div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 border border-border">
                  <div className="text-3xl font-bold text-secondary mb-1">50k₽</div>
                  <div className="text-sm text-muted-foreground">Экономия в год</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl font-bold">A+</div>
                  <div className="text-sm">Класс энергоэффективности</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
