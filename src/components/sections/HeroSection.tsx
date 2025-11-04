import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  geo: {
    personalized: boolean;
    city: string;
    isCrimea: boolean;
  };
  onContactClick: () => void;
  onProjectsClick: () => void;
}

const HeroSection = ({ geo, onContactClick, onProjectsClick }: HeroSectionProps) => {
  return (
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
          Строительство домов в Крыму
          {geo.personalized && geo.city && (
            <span className="block text-3xl md:text-4xl mt-4 text-primary-foreground/90">
              для жителей {geo.isCrimea ? `г. ${geo.city}` : `из ${geo.city}`}
            </span>
          )}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          {geo.isCrimea 
            ? `Работаем в вашем городе — быстрый выезд на объект`
            : `Узнайте стоимость строительства для ${geo.city}`
          }
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto opacity-90">
          Построим дом вашей мечты на крымском побережье — быстро, прозрачно и с учетом всех ваших пожеланий. Проекты. Строительство. Сервис.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-secondary transition-all"
            onClick={onContactClick}
          >
            Получить консультацию
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all"
            onClick={onProjectsClick}
          >
            Посмотреть проекты
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-white" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
