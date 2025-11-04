import Counter from '@/components/Counter';
import { useInView } from '@/hooks/useInView';

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-muted/30" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">О нас</h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Уже более <span className="font-semibold text-primary">10 лет</span> строим индивидуальные дома по всему Крыму — 
            от Ялты до Евпатории. Сочетаем современные технологии, проверенные материалы и профессионализм, 
            чтобы создавать надежные и красивые дома для жизни и отдыха. 
            <span className="font-semibold text-primary"> Гарантия на все работы — до 10 лет.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16" role="list">
          <div className={`text-center p-8 bg-white rounded-lg shadow-lg ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }} role="listitem">
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#194974' }} aria-label="150 плюс домов построено">
              <Counter end={150} suffix="+" />
            </div>
            <p className="text-lg text-muted-foreground">Домов построено</p>
          </div>
          
          <div className={`text-center p-8 bg-white rounded-lg shadow-lg ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#B6552B' }}>
              <Counter end={10} suffix="+" />
            </div>
            <p className="text-lg text-muted-foreground">Лет опыта</p>
          </div>
          
          <div className={`text-center p-8 bg-white rounded-lg shadow-lg ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#78A678' }}>
              <Counter end={98} suffix="%" />
            </div>
            <p className="text-lg text-muted-foreground">Довольных клиентов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;