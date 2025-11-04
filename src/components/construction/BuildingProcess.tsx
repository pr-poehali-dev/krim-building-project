import Icon from "@/components/ui/icon";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Консультация и проект",
    duration: "1-2 недели",
    description: "Встреча с архитектором, выбор участка, создание 3D-визуализации",
    details: [
      "Бесплатный выезд на участок",
      "3D-модель будущего дома",
      "Расчёт энергоэффективности",
      "Смета с фиксированной ценой"
    ],
    icon: "Pencil"
  },
  {
    number: 2,
    title: "Документы и разрешения",
    duration: "2-3 недели",
    description: "Оформление всех разрешений под ключ. Берём бюрократию на себя",
    details: [
      "Согласование в администрации",
      "Разрешение на строительство",
      "Подключение коммуникаций",
      "Экологическая экспертиза"
    ],
    icon: "FileText"
  },
  {
    number: 3,
    title: "Фундамент",
    duration: "3-4 недели",
    description: "Геологические изыскания, выбор оптимального типа фундамента",
    details: [
      "Геологический анализ почвы",
      "Утеплённая шведская плита (УШП)",
      "Встроенный тёплый пол",
      "Гидроизоляция и дренаж"
    ],
    icon: "Layers"
  },
  {
    number: 4,
    title: "Коробка и кровля",
    duration: "4-6 недель",
    description: "Монтаж стен из энергоэффективных панелей, установка кровли",
    details: [
      "Модульные эко-панели",
      "Утепление 300мм (минвата)",
      "Зелёная кровля / солнечные панели",
      "Установка окон с тройным стеклопакетом"
    ],
    icon: "Home"
  },
  {
    number: 5,
    title: "Инженерные системы",
    duration: "3-4 недели",
    description: "Монтаж умного дома, рекуперации, теплового насоса",
    details: [
      "Система рекуперации воздуха",
      "Тепловой насос",
      "Умный дом (освещение, климат)",
      "Солнечные панели и аккумуляторы"
    ],
    icon: "Cpu"
  },
  {
    number: 6,
    title: "Отделка",
    duration: "6-8 недель",
    description: "Чистовая отделка эко-материалами, установка мебели",
    details: [
      "Натуральные краски без VOC",
      "Паркет из FSC-древесины",
      "Керамогранит / натуральный камень",
      "Дизайнерская мебель (опционально)"
    ],
    icon: "Paintbrush"
  },
  {
    number: 7,
    title: "Сдача и гарантия",
    duration: "1 неделя",
    description: "Финальная приёмка, обучение системам, передача ключей",
    details: [
      "Проверка всех систем",
      "Обучение системе умный дом",
      "Гарантийные документы (5 лет)",
      "Бесплатное обслуживание 1 год"
    ],
    icon: "Award"
  }
];

export default function BuildingProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const totalDuration = "4-6 месяцев";

  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
            <Icon name="Clock" size={20} />
            <span>Полная прозрачность</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Процесс строительства
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            7 прозрачных этапов от идеи до ключей. Онлайн-контроль каждого шага.
          </p>
          <div className="inline-flex items-center gap-2 text-2xl font-bold text-primary">
            <Icon name="Calendar" size={28} />
            {totalDuration}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className="relative"
                >
                  <div 
                    className={`md:ml-20 bg-card p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                      activeStep === step.number 
                        ? 'border-primary shadow-lg' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setActiveStep(activeStep === step.number ? null : step.number)}
                  >
                    <div className="hidden md:flex absolute -left-20 top-6 w-16 h-16 rounded-full bg-primary text-white items-center justify-center font-bold text-2xl border-4 border-background shadow-lg">
                      {step.number}
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="md:hidden w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex items-center gap-3">
                            <Icon name={step.icon as any} className="text-primary" size={24} />
                            <h3 className="text-xl font-bold">{step.title}</h3>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full flex-shrink-0">
                            <Icon name="Clock" size={16} />
                            {step.duration}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>

                        {activeStep === step.number && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Icon name="CheckCircle2" className="text-primary" size={20} />
                              Что входит в этап:
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-3">
                              {step.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={16} />
                                  <span className="text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <button 
                          className="mt-4 text-sm text-primary hover:underline flex items-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveStep(activeStep === step.number ? null : step.number);
                          }}
                        >
                          {activeStep === step.number ? 'Скрыть детали' : 'Показать детали'}
                          <Icon 
                            name={activeStep === step.number ? "ChevronUp" : "ChevronDown"} 
                            size={16} 
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white">
          <div className="flex items-center gap-4 mb-4">
            <Icon name="Video" size={32} />
            <h3 className="text-2xl font-bold">Онлайн-контроль 24/7</h3>
          </div>
          <p className="text-white/90 mb-6">
            Следите за стройкой из любой точки мира! Камеры на объекте, еженедельные отчёты 
            и личный кабинет с фотографиями каждого этапа.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Icon name="Camera" size={20} />
              <span>HD-камеры</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Icon name="Smartphone" size={20} />
              <span>Мобильное приложение</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Icon name="Bell" size={20} />
              <span>Уведомления</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
