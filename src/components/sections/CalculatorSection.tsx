import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { useInView } from '@/hooks/useInView';

interface CalculatorState {
  area: number;
  floors: number;
  material: 'brick' | 'block' | 'frame';
  finishing: 'basic' | 'standard' | 'premium';
  extras: {
    pool: boolean;
    garage: boolean;
    terrace: boolean;
    smartHome: boolean;
  };
}

const materialPrices = {
  brick: 35000,
  block: 28000,
  frame: 25000,
};

const finishingPrices = {
  basic: 8000,
  standard: 15000,
  premium: 25000,
};

const extrasPrices = {
  pool: 800000,
  garage: 400000,
  terrace: 250000,
  smartHome: 350000,
};

const CalculatorSection = () => {
  const { ref, isInView } = useInView();
  const [state, setState] = useState<CalculatorState>({
    area: 150,
    floors: 1,
    material: 'block',
    finishing: 'standard',
    extras: {
      pool: false,
      garage: false,
      terrace: false,
      smartHome: false,
    },
  });

  const calculatePrice = () => {
    const basePrice = state.area * materialPrices[state.material];
    const finishingPrice = state.area * finishingPrices[state.finishing];
    const floorMultiplier = 1 + (state.floors - 1) * 0.15;
    
    let extrasTotal = 0;
    Object.entries(state.extras).forEach(([key, value]) => {
      if (value) extrasTotal += extrasPrices[key as keyof typeof extrasPrices];
    });

    return Math.round((basePrice + finishingPrice) * floorMultiplier + extrasTotal);
  };

  const price = calculatePrice();
  const pricePerSqm = Math.round(price / state.area);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Калькулятор стоимости
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Рассчитайте примерную стоимость вашего дома за 30 секунд
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Левая часть - настройки */}
          <Card className={`border-none shadow-2xl ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <CardContent className="p-8 space-y-8">
              {/* Площадь */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <Icon name="Home" size={24} className="text-primary" />
                    Площадь дома
                  </label>
                  <span className="text-2xl font-bold text-primary">{state.area} м²</span>
                </div>
                <Slider
                  value={[state.area]}
                  onValueChange={(value) => setState({ ...state, area: value[0] })}
                  min={80}
                  max={500}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>80 м²</span>
                  <span>500 м²</span>
                </div>
              </div>

              {/* Этажность */}
              <div>
                <label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                  <Icon name="Layers" size={24} className="text-primary" />
                  Количество этажей
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((floors) => (
                    <button
                      key={floors}
                      onClick={() => setState({ ...state, floors })}
                      className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                        state.floors === floors
                          ? 'border-primary bg-primary text-primary-foreground shadow-lg scale-105'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {floors} этаж{floors > 1 ? 'а' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Материал */}
              <div>
                <label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                  <Icon name="Package" size={24} className="text-primary" />
                  Материал стен
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'frame', label: 'Каркасный', price: materialPrices.frame },
                    { value: 'block', label: 'Газобетон', price: materialPrices.block },
                    { value: 'brick', label: 'Кирпич', price: materialPrices.brick },
                  ].map((material) => (
                    <button
                      key={material.value}
                      onClick={() => setState({ ...state, material: material.value as any })}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        state.material === material.value
                          ? 'border-primary bg-primary/10 shadow-md'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{material.label}</span>
                        <span className="text-sm text-muted-foreground">
                          {material.price.toLocaleString('ru-RU')} ₽/м²
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Отделка */}
              <div>
                <label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                  <Icon name="Paintbrush" size={24} className="text-primary" />
                  Уровень отделки
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'basic', label: 'Базовая', desc: 'Черновая отделка', price: finishingPrices.basic },
                    { value: 'standard', label: 'Стандарт', desc: 'Под ключ', price: finishingPrices.standard },
                    { value: 'premium', label: 'Премиум', desc: 'Дизайнерская', price: finishingPrices.premium },
                  ].map((finishing) => (
                    <button
                      key={finishing.value}
                      onClick={() => setState({ ...state, finishing: finishing.value as any })}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        state.finishing === finishing.value
                          ? 'border-primary bg-primary/10 shadow-md'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">{finishing.label}</span>
                        <span className="text-sm text-muted-foreground">
                          +{finishing.price.toLocaleString('ru-RU')} ₽/м²
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{finishing.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Дополнительно */}
              <div>
                <label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                  <Icon name="Plus" size={24} className="text-primary" />
                  Дополнительно
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: 'pool', label: 'Бассейн', icon: 'Waves', price: extrasPrices.pool },
                    { key: 'garage', label: 'Гараж', icon: 'Car', price: extrasPrices.garage },
                    { key: 'terrace', label: 'Терраса', icon: 'Sun', price: extrasPrices.terrace },
                    { key: 'smartHome', label: 'Умный дом', icon: 'Smartphone', price: extrasPrices.smartHome },
                  ].map((extra) => (
                    <button
                      key={extra.key}
                      onClick={() =>
                        setState({
                          ...state,
                          extras: { ...state.extras, [extra.key]: !state.extras[extra.key as keyof typeof state.extras] },
                        })
                      }
                      className={`p-4 rounded-lg border-2 transition-all ${
                        state.extras[extra.key as keyof typeof state.extras]
                          ? 'border-primary bg-primary/10 shadow-md'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Icon
                        name={extra.icon as any}
                        size={28}
                        className={`mx-auto mb-2 ${
                          state.extras[extra.key as keyof typeof state.extras] ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      />
                      <div className="text-sm font-semibold">{extra.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        +{(extra.price / 1000000).toFixed(1)} млн ₽
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Правая часть - результат */}
          <div className={`space-y-6 ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <Card className="border-none shadow-2xl sticky top-8">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-sm text-muted-foreground mb-2">Примерная стоимость</div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                    {(price / 1000000).toFixed(1)} млн ₽
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {pricePerSqm.toLocaleString('ru-RU')} ₽/м²
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">Площадь</span>
                    <span className="font-semibold">{state.area} м²</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">Этажей</span>
                    <span className="font-semibold">{state.floors}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">Материал</span>
                    <span className="font-semibold">
                      {state.material === 'brick' ? 'Кирпич' : state.material === 'block' ? 'Газобетон' : 'Каркас'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">Отделка</span>
                    <span className="font-semibold">
                      {state.finishing === 'basic' ? 'Базовая' : state.finishing === 'standard' ? 'Стандарт' : 'Премиум'}
                    </span>
                  </div>
                  {Object.entries(state.extras).some(([_, v]) => v) && (
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="text-muted-foreground mb-2">Дополнительно:</div>
                      <div className="space-y-1">
                        {state.extras.pool && <div className="text-sm">• Бассейн</div>}
                        {state.extras.garage && <div className="text-sm">• Гараж</div>}
                        {state.extras.terrace && <div className="text-sm">• Терраса</div>}
                        {state.extras.smartHome && <div className="text-sm">• Умный дом</div>}
                      </div>
                    </div>
                  )}
                </div>

                <Button size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Получить точный расчет
                </Button>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg text-sm text-center">
                  <Icon name="Info" size={20} className="inline mr-2 text-primary" />
                  Это предварительный расчет. Точную стоимость определим после осмотра участка
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} className="text-primary" />
                  Что входит в стоимость?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Проектирование и документация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Материалы и доставка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Строительно-монтажные работы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Коммуникации (вода, электричество)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Гарантия 10 лет</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
