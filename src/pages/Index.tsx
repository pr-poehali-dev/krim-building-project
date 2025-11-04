import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', region: '' });
  };

  const advantages = [
    {
      icon: 'FileText',
      title: 'Честная смета',
      description: 'Без скрытых расходов и дополнительных платежей'
    },
    {
      icon: 'Clock',
      title: 'Строительство в срок',
      description: 'Соблюдаем договорные сроки выполнения работ'
    },
    {
      icon: 'Users',
      title: 'Собственная команда',
      description: 'Опытные мастера с многолетним стажем'
    },
    {
      icon: 'Compass',
      title: 'Архитектурное сопровождение',
      description: 'Контроль на каждом этапе строительства'
    },
    {
      icon: 'Shield',
      title: 'Юридическая чистота',
      description: 'Оформление всех необходимых документов'
    },
    {
      icon: 'Award',
      title: 'Гарантия до 10 лет',
      description: 'Полное гарантийное обслуживание'
    }
  ];

  const projects = [
    {
      image: 'https://cdn.poehali.dev/projects/26eb06fc-8eaa-4f11-a9db-43b650be0b4d/files/7c72594d-ca0c-4fb0-aa25-f4b61235bde3.jpg',
      title: 'Панорамная вилла',
      description: 'Современный дом с видом на море',
      area: '280 м²',
      location: 'Ялта'
    },
    {
      image: 'https://cdn.poehali.dev/projects/26eb06fc-8eaa-4f11-a9db-43b650be0b4d/files/16faeb25-43f4-4044-afd3-794debac263d.jpg',
      title: 'Средиземноморская усадьба',
      description: 'Элегантная вилла с бассейном',
      area: '320 м²',
      location: 'Алушта'
    },
    {
      image: 'https://cdn.poehali.dev/projects/26eb06fc-8eaa-4f11-a9db-43b650be0b4d/files/1bc5d73f-f152-4b11-9b46-c8a24a1c9e16.jpg',
      title: 'Минималистичный коттедж',
      description: 'Современная архитектура у моря',
      area: '240 м²',
      location: 'Судак'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Бесплатная консультация',
      description: 'Обсуждаем ваши пожелания и подбираем участок'
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Индивидуальный проект или адаптация типового'
    },
    {
      number: '03',
      title: 'Договор и смета',
      description: 'Заключение договора с прозрачной сметой'
    },
    {
      number: '04',
      title: 'Строительство',
      description: 'Возведение дома под ключ с постоянным контролем'
    },
    {
      number: '05',
      title: 'Гарантийное обслуживание',
      description: 'Полная поддержка после сдачи объекта'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/26eb06fc-8eaa-4f11-a9db-43b650be0b4d/files/7c72594d-ca0c-4fb0-aa25-f4b61235bde3.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Строительство индивидуальных<br />домов в Крыму
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            С гарантией надежности и качеством под ключ
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto opacity-90">
            Построим дом вашей мечты на крымском побережье — быстро, прозрачно и с учетом всех ваших пожеланий. Проекты. Строительство. Сервис.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-secondary transition-all">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all">
              Посмотреть проекты
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нас</h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Уже более <span className="font-semibold text-primary">10 лет</span> строим индивидуальные дома по всему Крыму — 
              от Ялты до Евпатории. Сочетаем современные технологии, проверенные материалы и профессионализм, 
              чтобы создавать надежные и красивые дома для жизни и отдыха. 
              <span className="font-semibold text-primary"> Гарантия на все работы — до 10 лет.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Проекты домов</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Посмотрите наши типовые и индивидуальные проекты — для постоянного проживания, отдыха, сдачи в аренду
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold text-primary">{project.area}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="px-8 py-6 text-lg">
              Каталог проектов
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Как мы работаем</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex gap-6 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Отзывы наших клиентов</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-10">
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={24} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-xl italic mb-6 text-muted-foreground leading-relaxed">
                  "Спасибо за наш уютный дом! Всё было организованно и по срокам, как обещали. 
                  Отдельно радует гарантия после сдачи дома."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Антон</p>
                    <p className="text-sm text-muted-foreground">Ялта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Готовы начать строительство?</h2>
            <p className="text-lg text-center mb-10 opacity-90">
              Оставьте заявку — мы перезвоним и ответим на все вопросы!
            </p>
            
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Номер телефона
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium mb-2 text-foreground">
                      Желаемый город/регион
                    </label>
                    <Input
                      id="region"
                      type="text"
                      placeholder="Например: Ялта, Алушта, Судак"
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Проекты</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Цены</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Услуги</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold mb-2">Лицензии и сертификаты</p>
                <div className="flex gap-2">
                  <Icon name="Award" size={20} className="opacity-80" />
                  <Icon name="Shield" size={20} className="opacity-80" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Строим в Крыму. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;