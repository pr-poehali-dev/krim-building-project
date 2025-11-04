import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useGeolocation } from '@/hooks/useGeolocation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

// Lazy load компонентов ниже fold для улучшения LCP
const PersonalizedSection = lazy(() => import('@/components/sections/PersonalizedSection'));
const AdvantagesSection = lazy(() => import('@/components/sections/AdvantagesSection'));
const CalculatorSection = lazy(() => import('@/components/sections/CalculatorSection'));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'));
const WorkStepsSection = lazy(() => import('@/components/sections/WorkStepsSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const ContactFormSection = lazy(() => import('@/components/sections/ContactFormSection'));
const Footer = lazy(() => import('@/components/sections/Footer'));
const ChatBot = lazy(() => import('@/components/ChatBot'));

const Index = () => {
  const { toast } = useToast();
  const geo = useGeolocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: ''
  });

  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (geo.personalized && geo.city && !formData.region) {
      setFormData(prev => ({ ...prev, region: geo.city }));
    }
  }, [geo.personalized, geo.city]);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', region: geo.personalized ? geo.city : '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        geo={geo}
        onContactClick={() => scrollToSection(contactRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
      />
      
      <AboutSection />
      
      <Suspense fallback={<div className="h-32 bg-muted/30 animate-pulse" />}>
        <PersonalizedSection 
          geo={geo}
          onContactClick={() => scrollToSection(contactRef)}
        />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <AdvantagesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-screen bg-muted/30 animate-pulse" />}>
        <CalculatorSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-muted/30 animate-pulse" />}>
        <ProjectsSection ref={projectsRef} />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <WorkStepsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-muted/30 animate-pulse" />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <ContactFormSection 
          ref={contactRef}
          formData={formData}
          onFormDataChange={setFormData}
          onSubmit={handleSubmit}
        />
      </Suspense>
      
      <Suspense fallback={<div className="h-32 bg-muted animate-pulse" />}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </div>
  );
};

export default Index;