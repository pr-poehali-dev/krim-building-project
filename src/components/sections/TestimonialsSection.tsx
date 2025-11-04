import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useInView } from '@/hooks/useInView';

const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Отзывы наших клиентов</h2>
        <div className="max-w-4xl mx-auto">
          <Card className={`border-none shadow-lg ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
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
  );
};

export default TestimonialsSection;