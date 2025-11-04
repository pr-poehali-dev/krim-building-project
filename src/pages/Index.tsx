import { useGeolocation } from '@/hooks/useGeolocation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

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
      <div className="p-8 text-center">
        <h2 className="text-2xl">Hero + About работают</h2>
      </div>
    </div>
  );
};

export default Index;
