import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Здравствуйте! Я помогу вам с выбором проекта дома в Крыму. Задайте любой вопрос!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://functions.poehali.dev/c7c5623c-2505-4bf3-b6a1-1e0af89cee08', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Извините, произошла ошибка. Попробуйте позже или позвоните нам: +7 (978) 123-45-67' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          size="lg"
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl z-50 hover:scale-110 transition-transform"
          style={{ background: 'linear-gradient(135deg, #194974 0%, #B6552B 100%)' }}
          onClick={() => setIsOpen(true)}
        >
          <Icon name="MessageCircle" size={28} className="text-white" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          <div className="p-4 text-white rounded-t-lg flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #194974 0%, #B6552B 100%)' }}>
            <div className="flex items-center gap-2">
              <Icon name="Bot" size={24} />
              <div>
                <h3 className="font-semibold">AI Консультант</h3>
                <p className="text-xs opacity-90">Онлайн</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="hover:bg-white/20 text-white">
              <Icon name="X" size={20} />
            </Button>
          </div>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-white shadow-sm border'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                placeholder="Напишите ваш вопрос..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <Button onClick={sendMessage} disabled={isLoading || !input.trim()}>
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;