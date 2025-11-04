import Counter from '@/components/Counter';

const AboutSection = () => {
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#194974' }}>
              <Counter end={150} suffix="+" />
            </div>
            <p className="text-lg text-muted-foreground">Домов построено</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#B6552B' }}>
              <Counter end={10} suffix="+" />
            </div>
            <p className="text-lg text-muted-foreground">Лет опыта</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
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
