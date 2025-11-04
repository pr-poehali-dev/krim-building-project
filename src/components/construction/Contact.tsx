import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 30 минут",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
            <Icon name="MessageCircle" size={20} />
            <span>Свяжитесь с нами</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Начните строить своё будущее
          </h2>
          <p className="text-xl text-muted-foreground">
            Бесплатная консультация и выезд архитектора на участок
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о проекте</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Площадь участка, желаемый размер дома, особые пожелания..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                
                <div className="space-y-4">
                  <a href="tel:+74951234567" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name="Phone" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-semibold">+7 (495) 123-45-67</div>
                    </div>
                  </a>

                  <a href="mailto:info@ecostroy.ru" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold">info@ecostroy.ru</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Офис</div>
                      <div className="font-semibold">Москва, ул. Экологическая, 25</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Режим работы</div>
                      <div className="font-semibold">Пн-Вс: 9:00 - 21:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="MessageCircle" className="text-primary" size={20} />
                  Мессенджеры
                </h4>
                <div className="flex gap-3">
                  <a 
                    href="https://wa.me/74951234567" 
                    className="flex-1 p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Icon name="MessageCircle" size={20} />
                    WhatsApp
                  </a>
                  <a 
                    href="https://t.me/ecostroy" 
                    className="flex-1 p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Icon name="Send" size={20} />
                    Telegram
                  </a>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Gift" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Бонус при заявке сегодня</h4>
                    <p className="text-sm text-white/90">
                      Бесплатный 3D-проект дома стоимостью 50 000 ₽
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Clock" size={16} />
                  <span>Предложение действует до конца месяца</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
