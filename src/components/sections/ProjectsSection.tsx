import { forwardRef, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useInView } from '@/hooks/useInView';
import { useParallax } from '@/hooks/useParallax';

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

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const { ref: inViewRef, isInView } = useInView();
  const parallaxRef1 = useRef<HTMLImageElement>(null);
  const parallaxRef2 = useRef<HTMLImageElement>(null);
  const parallaxRef3 = useRef<HTMLImageElement>(null);
  const offset1 = useParallax(parallaxRef1, 0.3);
  const offset2 = useParallax(parallaxRef2, 0.3);
  const offset3 = useParallax(parallaxRef3, 0.3);

  const parallaxRefs = [parallaxRef1, parallaxRef2, parallaxRef3];
  const offsets = [offset1, offset2, offset3];

  return (
    <section ref={(node) => {
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
      inViewRef.current = node;
    }} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Проекты домов</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Посмотрите наши типовые и индивидуальные проекты — для постоянного проживания, отдыха, сдачи в аренду
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img 
                  ref={parallaxRefs[index] as React.RefObject<HTMLImageElement>}
                  src={project.image} 
                  alt={`${project.title} - ${project.description} - ${project.area} в ${project.location}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ transform: `translateY(${offsets[index]}px)` }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Home" size={16} className="text-primary" />
                    <span className="font-semibold">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>{project.location}</span>
                  </div>
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
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;