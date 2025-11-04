import HeroSection from '@/components/sections/HeroSection';
import { useGeolocation } from '@/hooks/useGeolocation';

const Index = () => {
  const geo = useGeolocation();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        geo={geo}
        onContactClick={() => {}}
        onProjectsClick={() => {}}
      />
      <div className="p-8 text-center">
        <h2 className="text-2xl">HeroSection загружен успешно</h2>
      </div>
    </div>
  );
};

export default Index;
