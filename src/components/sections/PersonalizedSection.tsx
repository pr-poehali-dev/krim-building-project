import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useInView } from '@/hooks/useInView';

interface PersonalizedSectionProps {
  geo: {
    personalized: boolean;
    city: string;
    isCrimea: boolean;
  };
  onContactClick: () => void;
}

const PersonalizedSection = ({ geo, onContactClick }: PersonalizedSectionProps) => {
  const { ref, isInView } = useInView();

  if (!geo.personalized) return null;

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <Card className={`max-w-4xl mx-auto border-2 shadow-2xl ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ borderColor: '#194974' }}>
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="MapPin" size={28} style={{ color: '#B6552B' }} />
              <h2 className="text-2xl md:text-3xl font-bold">
                {geo.isCrimea ? `Специально для жителей ${geo.city}` : `Строим для клиентов из ${geo.city}`}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              {geo.isCrimea 
                ? `Бесплатный выезд на участок в течение 24 часов. Знаем все особенности строительства в вашем регионе.`
                : `Поможем с выбором участка в Крыму и организуем строительство под ключ. Консультация онлайн или по телефону.`
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-white rounded-lg shadow">
                <Icon name="Truck" size={32} className="mx-auto mb-2" style={{ color: '#194974' }} />
                <p className="font-semibold">Доставка материалов</p>
                <p className="text-sm text-muted-foreground">
                  {geo.isCrimea ? 'Бесплатно по региону' : 'Организуем логистику'}
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Icon name="BadgePercent" size={32} className="mx-auto mb-2" style={{ color: '#B6552B' }} />
                <p className="font-semibold">Спецпредложение</p>
                <p className="text-sm text-muted-foreground">Скидка 5% при договоре в ноябре</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Icon name="Calendar" size={32} className="mx-auto mb-2" style={{ color: '#78A678' }} />
                <p className="font-semibold">Сроки</p>
                <p className="text-sm text-muted-foreground">От 4 месяцев под ключ</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={onContactClick}
            >
              Узнать точную стоимость для {geo.city}
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PersonalizedSection;