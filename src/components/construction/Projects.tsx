import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Загородный дом в Подмосковье",
    area: "180 м²",
    price: "12 500 000 ₽",
    duration: "5 месяцев",
    features: ["3 спальни", "Солнечные панели", "Умный дом", "Зелёная кровля"],
    image: "🏡",
    eco: "A+"
  },
  {
    title: "Таунхаус в экопоселке",
    area: "140 м²",
    price: "8 900 000 ₽",
    duration: "4 месяца",
    features: ["2 спальни", "Рекуперация", "Тепловой насос", "Сбор дождевой воды"],
    image: "🏘️",
    eco: "A"
  },
  {
    title: "Дом для большой семьи",
    area: "250 м²",
    price: "16 800 000 ₽",
    duration: "6 месяцев",
    features: ["5 спален", "Геотермальное отопление", "Автономная энергия", "Своя скважина"],
    image: "🏠",
    eco: "A+"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
            <Icon name="Home" size={20} />
            <span>Наши проекты</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Построенные мечты
          </h2>
          <p className="text-xl text-muted-foreground">
            Более 500 счастливых семей уже живут в наших экологичных домах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl relative">
                {project.image}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-semibold text-sm flex items-center gap-1">
                  <Icon name="Leaf" className="text-green-600" size={16} />
                  {project.eco}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-muted/50 p-2 rounded-lg text-center">
                    <div className="font-semibold">{project.area}</div>
                    <div className="text-xs text-muted-foreground">Площадь</div>
                  </div>
                  <div className="bg-muted/50 p-2 rounded-lg text-center">
                    <div className="font-semibold">{project.duration}</div>
                    <div className="text-xs text-muted-foreground">Срок</div>
                  </div>
                  <div className="bg-muted/50 p-2 rounded-lg text-center">
                    <div className="font-semibold text-primary">{project.eco}</div>
                    <div className="text-xs text-muted-foreground">Класс</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Стоимость</div>
                      <div className="text-2xl font-bold text-primary">{project.price}</div>
                    </div>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            <Icon name="Building2" size={20} />
            Смотреть все проекты (50+)
          </Button>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20">
            <Icon name="Camera" className="text-primary mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-4">Виртуальный тур</h3>
            <p className="text-muted-foreground mb-6">
              Посмотрите на готовые дома изнутри! 3D-туры по всем нашим проектам.
            </p>
            <Button className="gap-2">
              <Icon name="Video" size={20} />
              Смотреть туры
            </Button>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border border-secondary/20">
            <Icon name="Users" className="text-secondary mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-4">Отзывы владельцев</h3>
            <p className="text-muted-foreground mb-6">
              Читайте истории счастливых семей, которые уже живут в экодомах.
            </p>
            <Button variant="outline" className="gap-2">
              <Icon name="MessageCircle" size={20} />
              Читать отзывы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
