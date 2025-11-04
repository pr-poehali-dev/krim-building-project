import Icon from "@/components/ui/icon";

const values = [
  {
    icon: "Leaf",
    title: "Экология",
    description: "Используем только сертифицированные эко-материалы и энергоэффективные технологии",
    color: "text-green-600"
  },
  {
    icon: "Shield",
    title: "Надёжность",
    description: "5 лет гарантии на все работы. Строим по ГОСТам и европейским стандартам",
    color: "text-blue-600"
  },
  {
    icon: "Eye",
    title: "Прозрачность",
    description: "Честная смета без скрытых платежей. Онлайн-доступ к ходу строительства 24/7",
    color: "text-amber-600"
  }
];

export default function Values() {
  return (
    <section id="values" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Наши ценности
          </h2>
          <p className="text-xl text-muted-foreground">
            Мы создаём не просто дома — мы строим будущее с заботой о вас и планете
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${value.color}/10 to-${value.color}/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon name={value.icon as any} className={value.color} size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Построенных домов</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">15</div>
            <div className="text-muted-foreground">Лет на рынке</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Эко-материалы</div>
          </div>
        </div>
      </div>
    </section>
  );
}
