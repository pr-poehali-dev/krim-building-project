import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useGeolocation } from '@/hooks/useGeolocation';
import ChatBot from '@/components/ChatBot';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PersonalizedSection from '@/components/sections/PersonalizedSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import WorkStepsSection from '@/components/sections/WorkStepsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import Footer from '@/components/sections/Footer';

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
      
      <PersonalizedSection 
        geo={geo}
        onContactClick={() => scrollToSection(contactRef)}
      />
      
      <AdvantagesSection />
      
      <ProjectsSection ref={projectsRef} />
      
      <WorkStepsSection />
      
      <TestimonialsSection />
      
      <ContactFormSection 
        ref={contactRef}
        formData={formData}
        onFormDataChange={setFormData}
        onSubmit={handleSubmit}
      />
      
      <Footer />
      
      <ChatBot />
    </div>
  );
};

export default Index;
