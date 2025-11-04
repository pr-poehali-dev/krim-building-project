import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Slider } from "@/components/ui/slider";

export default function PriceCalculator() {
  const [area, setArea] = useState(150);
  const [floors, setFloors] = useState(1);
  const [techLevel, setTechLevel] = useState<"basic" | "standard" | "premium">("standard");

  const basePricePerSqm = 70000;
  const floorMultiplier = floors === 1 ? 1 : 1.15;
  
  const techMultipliers = {
    basic: 1,
    standard: 1.2,
    premium: 1.5
  };

  const totalPrice = Math.round(area * basePricePerSqm * floorMultiplier * techMultipliers[techLevel]);
  const monthlyPayment = Math.round(totalPrice / 60);

  const techLevels = [
    {
      id: "basic" as const,
      name: "Базовый",
      icon: "Home",
      features: ["Энергоэффективные материалы", "Качественная отделка", "Стандартные окна"],
      color: "text-blue-600"
    },
    {
      id: "standard" as const,
      name: "Стандарт",
      icon: "Zap",
      features: ["+ Умный дом (базовый)", "+ Рекуперация воздуха", "+ Солнечные панели (3кВт)"],
      color: "text-green-600",
      popular: true
    },
    {
      id: "premium" as const,
      name: "Премиум",
      icon: "Star",
      features: ["+ Полная автономность", "+ Геотермальное отопление", "+ Дизайнерская отделка"],
      color: "text-amber-600"
    }
  ];

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
            <Icon name="Calculator" size={20} />
            <span>Прозрачная смета</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Рассчитайте стоимость
          </h2>
          <p className="text-xl text-muted-foreground">
            Честный калькулятор без скрытых платежей. Итоговая цена не изменится!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <label className="block mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">Площадь дома</span>
                    <span className="text-2xl font-bold text-primary">{area} м²</span>
                  </div>
                  <Slider
                    value={[area]}
                    onValueChange={(value) => setArea(value[0])}
                    min={80}
                    max={400}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>80 м²</span>
                    <span>400 м²</span>
                  </div>
                </label>

                <label className="block mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">Количество этажей</span>
                    <span className="text-2xl font-bold text-primary">{floors}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() => setFloors(num)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          floors === num
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="text-2xl font-bold">{num}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {num === 1 ? 'этаж' : 'этажа'}
                        </div>
                      </button>
                    ))}
                  </div>
                </label>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-semibold mb-4">Уровень технологий</h3>
                <div className="space-y-3">
                  {techLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setTechLevel(level.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left relative ${
                        techLevel === level.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {level.popular && (
                        <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-3 py-1 rounded-full font-semibold">
                          Популярный
                        </div>
                      )}
                      
                      <div className="flex items-start gap-3">
                        <Icon name={level.icon as any} className={level.color} size={24} />
                        <div className="flex-1">
                          <div className="font-semibold mb-2">{level.name}</div>
                          <ul className="space-y-1">
                            {level.features.map((feature, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                                <Icon name="Check" size={12} className="text-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-8">Ваш проект</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between pb-2 border-b border-white/20">
                    <span className="text-white/80">Площадь</span>
                    <span className="font-semibold">{area} м²</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-white/20">
                    <span className="text-white/80">Этажей</span>
                    <span className="font-semibold">{floors}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-white/20">
                    <span className="text-white/80">Комплектация</span>
                    <span className="font-semibold">
                      {techLevels.find(l => l.id === techLevel)?.name}
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur p-6 rounded-xl mb-8">
                  <div className="text-white/80 text-sm mb-2">Полная стоимость</div>
                  <div className="text-5xl font-bold mb-4">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-white/80 text-sm">
                    или {monthlyPayment.toLocaleString('ru-RU')} ₽/мес
                  </div>
                  <div className="text-white/60 text-xs mt-1">
                    при рассрочке на 5 лет (0% переплаты)
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={18} />
                    <span>Фиксированная цена в договоре</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={18} />
                    <span>Без скрытых платежей</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={18} />
                    <span>Гарантия 5 лет</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 text-lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Получить детальную смету
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>

                <p className="text-xs text-white/60 mt-4 text-center">
                  Бесплатный выезд специалиста для точного расчёта
                </p>
              </div>

              <div className="mt-6 p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">В стоимость входит:</p>
                    <ul className="space-y-1 text-muted-foreground text-xs">
                      <li>• Проект и все разрешения</li>
                      <li>• Материалы и работы</li>
                      <li>• Инженерные системы</li>
                      <li>• Чистовая отделка</li>
                      <li>• Вывоз мусора</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
