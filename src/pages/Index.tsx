import { useRef } from 'react';
import { useGeolocation } from '@/hooks/useGeolocation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PersonalizedSection from '@/components/sections/PersonalizedSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

const Index = () => {
  const geo = useGeolocation();
  const projectsRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        geo={geo}
        onContactClick={() => {}}
        onProjectsClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <AboutSection />
      <PersonalizedSection 
        geo={geo}
        onContactClick={() => {}}
      />
      <AdvantagesSection />
      <CalculatorSection />
      <ProjectsSection ref={projectsRef} />
      <div className="p-8 text-center">
        <h2 className="text-2xl">6 секций работают</h2>
      </div>
    </div>
  );
};

export default Index;
