import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
              <Icon name="Award" size={20} />
              <span>15 лет экологичного строительства</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Строим{" "}
              <span className="text-primary">экологичные</span> дома вашей мечты
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Современные технологии, зелёные материалы и прозрачное управление проектом. 
              Гарантируем качество на каждом этапе строительства.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold">100% эко-материалы</div>
                  <div className="text-sm text-muted-foreground">Сертифицированные</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="text-secondary" size={24} />
                </div>
                <div>
                  <div className="font-semibold">5 лет гарантии</div>
                  <div className="text-sm text-muted-foreground">На все работы</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8"
                onClick={() => scrollToSection("calculator")}
              >
                Рассчитать стоимость
                <Icon name="Calculator" size={20} className="ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                onClick={() => scrollToSection("process")}
              >
                Как мы работаем
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <div className="w-full h-full rounded-2xl bg-white shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Icon name="Home" className="text-primary mx-auto" size={120} />
                  <p className="text-2xl font-semibold text-muted-foreground">
                    Ваш будущий дом
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-secondary text-white px-6 py-3 rounded-full shadow-lg font-semibold">
              <Icon name="TrendingDown" size={20} className="inline mr-2" />
              -30% на отопление
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg font-semibold">
              <Icon name="Zap" size={20} className="inline mr-2" />
              Энергоэффективность A+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
