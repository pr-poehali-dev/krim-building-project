import { useGeolocation } from '@/hooks/useGeolocation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PersonalizedSection from '@/components/sections/PersonalizedSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';

const Index = () => {
  const geo = useGeolocation();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        geo={geo}
        onContactClick={() => {}}
        onProjectsClick={() => {}}
      />
      <AboutSection />
      <PersonalizedSection 
        geo={geo}
        onContactClick={() => {}}
      />
      <AdvantagesSection />
      <div className="p-8 text-center">
        <h2 className="text-2xl">4 секции работают</h2>
      </div>
    </div>
  );
};

export default Index;
