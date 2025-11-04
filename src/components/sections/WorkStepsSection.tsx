import { useInView } from '@/hooks/useInView';

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

const WorkStepsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: '#F9F7F4' }}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Как мы работаем</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex gap-6 items-start ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="flex-shrink-0 w-20 h-20 text-white rounded-full flex items-center justify-center text-2xl font-bold"
                style={{
                  backgroundColor: index % 2 === 0 ? '#B6552B' : '#194974'
                }}
              >
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
  );
};

export default WorkStepsSection;