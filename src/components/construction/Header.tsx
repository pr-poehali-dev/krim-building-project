import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={32} />
            <div>
              <h1 className="text-xl font-bold text-primary">ЭкоСтрой</h1>
              <p className="text-xs text-muted-foreground">Строим будущее</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("values")} className="text-sm hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection("technologies")} className="text-sm hover:text-primary transition-colors">
              Технологии
            </button>
            <button onClick={() => scrollToSection("process")} className="text-sm hover:text-primary transition-colors">
              Процесс
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition-colors">
              Проекты
            </button>
            <button onClick={() => scrollToSection("certificates")} className="text-sm hover:text-primary transition-colors">
              Сертификаты
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              Связаться
            </Button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Меню"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("values")} className="text-left py-2 hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection("technologies")} className="text-left py-2 hover:text-primary transition-colors">
                Технологии
              </button>
              <button onClick={() => scrollToSection("process")} className="text-left py-2 hover:text-primary transition-colors">
                Процесс
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-left py-2 hover:text-primary transition-colors">
                Проекты
              </button>
              <button onClick={() => scrollToSection("certificates")} className="text-left py-2 hover:text-primary transition-colors">
                Сертификаты
              </button>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Связаться
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
