import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useInView } from '@/hooks/useInView';

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

const AdvantagesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-lg hover:shadow-xl transition-shadow duration-300 ${isInView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: index % 3 === 0 ? '#78A678' : index % 3 === 1 ? '#E2B847' : '#EAD9B7'
                  }}
                >
                  <Icon name={advantage.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;