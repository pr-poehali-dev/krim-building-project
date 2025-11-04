import { useMemo } from 'react';
import Icon from '@/components/ui/icon';

interface HouseVisualizationProps {
  floors: number;
  material: 'brick' | 'block' | 'frame';
  hasPool: boolean;
  hasGarage: boolean;
  hasTerrace: boolean;
}

const materialStyles = {
  brick: {
    color: '#8B4513',
    pattern: 'repeating-linear-gradient(0deg, #8B4513 0px, #8B4513 10px, #A0522D 10px, #A0522D 20px)',
    label: 'Кирпич',
    texture: 'brick',
  },
  block: {
    color: '#E0E0E0',
    pattern: 'repeating-linear-gradient(90deg, #E0E0E0 0px, #E0E0E0 40px, #D0D0D0 40px, #D0D0D0 80px)',
    label: 'Газобетон',
    texture: 'blocks',
  },
  frame: {
    color: '#DEB887',
    pattern: 'linear-gradient(135deg, #DEB887 25%, #D2B48C 25%, #D2B48C 50%, #DEB887 50%, #DEB887 75%, #D2B48C 75%, #D2B48C)',
    label: 'Каркасный',
    texture: 'wood',
  },
};

const HouseVisualization = ({ floors, material, hasPool, hasGarage, hasTerrace }: HouseVisualizationProps) => {
  const materialStyle = useMemo(() => materialStyles[material], [material]);
  const houseHeight = floors * 80;

  return (
    <div className="w-full h-[500px] relative overflow-hidden bg-gradient-to-b from-sky-300 via-sky-200 to-green-100">
      {/* Sun */}
      <div className="absolute top-8 right-12 w-16 h-16 bg-yellow-300 rounded-full shadow-lg animate-pulse" />
      
      {/* Clouds */}
      <div className="absolute top-12 left-[10%] w-24 h-12 bg-white/70 rounded-full blur-sm animate-[float_20s_ease-in-out_infinite]" />
      <div className="absolute top-20 right-[20%] w-32 h-14 bg-white/60 rounded-full blur-sm animate-[float_25s_ease-in-out_infinite]" />

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-green-400 to-green-600" />
      
      {/* House container - centered */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex items-end gap-4">
        {/* Main House */}
        <div className="relative flex flex-col items-center" style={{ perspective: '1000px' }}>
          {/* Roof */}
          <div className="relative w-0 h-0 mb-[-1px] z-10 border-l-[90px] border-r-[90px] border-b-[50px] border-l-transparent border-r-transparent border-b-red-700 drop-shadow-lg" />
          
          {/* House Body */}
          <div
            className="relative w-40 shadow-2xl transition-all duration-500"
            style={{
              height: `${houseHeight}px`,
              background: materialStyle.pattern,
              backgroundSize: material === 'brick' ? '100% 20px' : material === 'block' ? '80px 100%' : '40px 40px',
            }}
          >
            {/* Material label */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
              {materialStyle.label}
            </div>

            {/* Windows per floor */}
            {Array.from({ length: floors }).map((_, floorIndex) => (
              <div
                key={floorIndex}
                className="absolute left-0 right-0 flex justify-around px-4"
                style={{ top: `${floorIndex * 80 + 20}px` }}
              >
                <div className="w-10 h-12 bg-sky-400/80 border-2 border-gray-700 backdrop-blur-sm shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gray-700" />
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gray-700" />
                </div>
                <div className="w-10 h-12 bg-sky-400/80 border-2 border-gray-700 backdrop-blur-sm shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gray-700" />
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gray-700" />
                </div>
              </div>
            ))}

            {/* Door */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-amber-800 to-amber-900 border-2 border-amber-950 shadow-inner">
              <div className="absolute top-6 left-2 w-2 h-2 bg-yellow-600 rounded-full" />
            </div>

            {/* Floor indicator */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-center">
              <Icon name="Layers" size={20} className="text-primary" />
              <span className="text-2xl font-bold text-primary">{floors}</span>
              <span className="text-xs text-muted-foreground">этаж{floors > 1 ? (floors > 4 ? 'ей' : 'а') : ''}</span>
            </div>
          </div>

          {/* Terrace */}
          {hasTerrace && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-20 -z-10">
              <div className="w-full h-2 bg-amber-700 rounded-t-lg" />
              <div className="flex justify-between px-4">
                <div className="w-2 h-16 bg-white rounded-sm" />
                <div className="w-2 h-16 bg-white rounded-sm" />
                <div className="w-2 h-16 bg-white rounded-sm" />
                <div className="w-2 h-16 bg-white rounded-sm" />
              </div>
              <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs whitespace-nowrap">
                <Icon name="Sun" size={12} />
                Терраса
              </div>
            </div>
          )}
        </div>

        {/* Garage */}
        {hasGarage && (
          <div className="relative flex flex-col items-center">
            <div className="w-24 h-16 bg-gradient-to-b from-gray-400 to-gray-500 shadow-lg" style={{ background: materialStyle.pattern, backgroundSize: '60px 60px' }}>
              <div className="absolute inset-x-4 bottom-2 h-12 bg-gradient-to-b from-gray-600 to-gray-700 border border-gray-800">
                <div className="absolute inset-x-2 top-1 bottom-1 space-y-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-[2px] bg-gray-800/50" />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-0 h-0 border-l-[48px] border-r-[48px] border-b-[24px] border-l-transparent border-r-transparent border-b-red-700" />
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1 whitespace-nowrap">
              <Icon name="Car" size={12} />
              Гараж
            </div>
          </div>
        )}
      </div>

      {/* Pool */}
      {hasPool && (
        <div className="absolute bottom-32 left-[15%] -translate-x-1/2">
          <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl relative overflow-hidden border-4 border-gray-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
            <div className="absolute top-2 left-4 w-8 h-8 bg-white/40 rounded-full blur-md animate-pulse" />
            <div className="absolute bottom-4 right-6 w-6 h-6 bg-white/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1 whitespace-nowrap">
            <Icon name="Waves" size={12} />
            Бассейн
          </div>
        </div>
      )}

      {/* Trees */}
      <div className="absolute bottom-32 left-[5%]">
        <div className="w-12 h-16 bg-green-600 rounded-t-full relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-8 bg-amber-800" />
        </div>
      </div>
      <div className="absolute bottom-32 right-[10%]">
        <div className="w-10 h-14 bg-green-700 rounded-t-full relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-6 bg-amber-900" />
        </div>
      </div>
    </div>
  );
};

export default HouseVisualization;
