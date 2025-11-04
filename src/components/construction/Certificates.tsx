import Icon from "@/components/ui/icon";

const certificates = [
  {
    icon: "Award",
    title: "ISO 9001:2015",
    description: "Система менеджмента качества",
    year: "2020"
  },
  {
    icon: "Leaf",
    title: "LEED Certified",
    description: "Зелёное строительство",
    year: "2019"
  },
  {
    icon: "Shield",
    title: "СРО строителей",
    description: "Допуск на все виды работ",
    year: "2008"
  },
  {
    icon: "FileCheck",
    title: "ГОСТ Р",
    description: "Соответствие российским стандартам",
    year: "2021"
  },
  {
    icon: "Zap",
    title: "Energy Star",
    description: "Энергоэффективность",
    year: "2022"
  },
  {
    icon: "Target",
    title: "BREEAM",
    description: "Экологическая сертификация",
    year: "2023"
  }
];

const licenses = [
  "Проектирование зданий и сооружений I-II уровня ответственности",
  "Строительство зданий и сооружений I-II уровня ответственности",
  "Монтаж инженерных систем (отопление, водоснабжение, электрика)",
  "Установка возобновляемых источников энергии (солнечные панели, тепловые насосы)",
  "Проектирование и монтаж систем умный дом",
  "Ландшафтное проектирование и благоустройство территории"
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
            <Icon name="Award" size={20} />
            <span>Гарантия качества</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Лицензии и сертификаты
          </h2>
          <p className="text-xl text-muted-foreground">
            Официальные подтверждения нашей экспертизы и надёжности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon name={cert.icon as any} size={24} />
                </div>
                <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {cert.year}
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="FileText" className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">Наши допуски и лицензии</h3>
            </div>

            <ul className="grid md:grid-cols-2 gap-4">
              {licenses.map((license, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">{license}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">
                  <Icon name="Shield" size={20} />
                  <span>Страхование ответственности 50 млн ₽</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">
                  <Icon name="Award" size={20} />
                  <span>Гарантия 5 лет на все работы</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
            <Icon name="Download" className="text-primary mx-auto mb-4" size={32} />
            <h4 className="font-bold mb-2">Скачать сертификаты</h4>
            <p className="text-sm text-muted-foreground mb-4">PDF с копиями всех документов</p>
            <button className="text-sm text-primary hover:underline flex items-center gap-1 mx-auto">
              Скачать (2.3 МБ)
              <Icon name="Download" size={16} />
            </button>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
            <Icon name="FileCheck" className="text-primary mx-auto mb-4" size={32} />
            <h4 className="font-bold mb-2">Проверить лицензии</h4>
            <p className="text-sm text-muted-foreground mb-4">Реестр СРО и Росреестр</p>
            <button className="text-sm text-primary hover:underline flex items-center gap-1 mx-auto">
              Проверить онлайн
              <Icon name="ExternalLink" size={16} />
            </button>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
            <Icon name="Book" className="text-primary mx-auto mb-4" size={32} />
            <h4 className="font-bold mb-2">Документы для сделки</h4>
            <p className="text-sm text-muted-foreground mb-4">Образцы договоров и смет</p>
            <button className="text-sm text-primary hover:underline flex items-center gap-1 mx-auto">
              Посмотреть примеры
              <Icon name="FileText" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
