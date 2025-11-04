import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Алексей и Мария Ковалёвы",
    location: "Подмосковье, 180 м²",
    text: "Переехали из квартиры в экодом полгода назад — это лучшее решение в нашей жизни! Счета за электричество снизились в 3 раза благодаря солнечным панелям. Дети перестали болеть — воздух всегда свежий благодаря рекуперации. Команда работала чётко по графику, смета не изменилась ни на рубль!",
    rating: 5,
    date: "Март 2024",
    avatar: "👨‍👩‍👧‍👦",
    savings: "18 000 ₽/мес"
  },
  {
    name: "Дмитрий Соколов",
    location: "Таунхаус, 140 м²",
    text: "Строил через другую компанию загородный дом — сплошной кошмар с задержками и допами. Здесь всё иначе: онлайн-камеры на стройке, еженедельные отчёты, фиксированная цена. Умный дом — просто космос! Управляю освещением и климатом с телефона. Окупится за счёт экономии на отоплении за 7 лет.",
    rating: 5,
    date: "Январь 2024",
    avatar: "👨‍💼",
    savings: "12 000 ₽/мес"
  },
  {
    name: "Ирина Петрова",
    location: "Дом для большой семьи, 250 м²",
    text: "Нам важна была экология — у дочки аллергия. Все материалы сертифицированные, без формальдегида и химии. В доме реально дышится легче! Геотермальное отопление работает бесшумно, зимой тепло, летом прохладно. Отдельное спасибо архитектору — продумал каждую деталь. Живём уже год, ни одной проблемы!",
    rating: 5,
    date: "Ноябрь 2023",
    avatar: "👩‍👧",
    savings: "25 000 ₽/мес"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
            <Icon name="MessageCircle" size={20} />
            <span>Отзывы клиентов</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-muted-foreground">
            500+ счастливых семей уже живут в экологичных домах
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Icon key={i} name="Star" className="text-amber-500 fill-amber-500" size={18} />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                  <Icon name="TrendingDown" size={16} />
                  {testimonial.savings}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="flex gap-1 justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" className="text-amber-500 fill-amber-500" size={16} />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Средняя оценка</div>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Отзывов на площадках</div>
              <div className="mt-2 flex justify-center gap-2">
                <Icon name="Star" className="text-amber-500" size={16} />
                <Icon name="ThumbsUp" className="text-blue-600" size={16} />
              </div>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Рекомендуют нас друзьям</div>
              <div className="mt-2">
                <Icon name="Users" className="text-primary mx-auto" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Icon name="Video" className="text-primary" size={48} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Видеоотзывы владельцев</h3>
                <p className="text-muted-foreground mb-4">
                  Смотрите истории реальных людей, которые уже живут в экодомах
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="bg-white px-3 py-1 rounded-full text-sm font-medium border border-border">
                    <Icon name="Play" className="inline mr-1" size={14} />
                    25 видео
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm font-medium border border-border">
                    <Icon name="Eye" className="inline mr-1" size={14} />
                    50k просмотров
                  </div>
                </div>
              </div>
              <button className="flex-shrink-0 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Icon name="Play" size={20} />
                Смотреть отзывы
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
