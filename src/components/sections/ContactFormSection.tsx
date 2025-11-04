import { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ContactFormSectionProps {
  formData: {
    name: string;
    phone: string;
    region: string;
  };
  onFormDataChange: (data: { name: string; phone: string; region: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactFormSection = forwardRef<HTMLElement, ContactFormSectionProps>(
  ({ formData, onFormDataChange, onSubmit }, ref) => {
    return (
      <section ref={ref} className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Готовы начать строительство?</h2>
            <p className="text-lg text-center mb-10 opacity-90">
              Оставьте заявку — мы перезвоним и ответим на все вопросы!
            </p>
            
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Номер телефона
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => onFormDataChange({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium mb-2 text-foreground">
                      Желаемый город/регион
                    </label>
                    <Input
                      id="region"
                      type="text"
                      placeholder="Например, Ялта"
                      value={formData.region}
                      onChange={(e) => onFormDataChange({ ...formData, region: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg h-14 bg-white text-primary hover:bg-secondary"
                  >
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
);

ContactFormSection.displayName = 'ContactFormSection';

export default ContactFormSection;
