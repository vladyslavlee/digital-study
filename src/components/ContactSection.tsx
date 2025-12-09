import { Button } from "@/components/ui/button";
import { Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="heading-lg text-foreground mb-4">
            Є <span className="text-gradient">питання</span>?
          </h2>
          
          <p className="body-lg text-muted-foreground mb-8">
            Пишіть у наш Telegram — ми допоможемо та проконсультуємо. Відповімо на будь-які запитання про курс і допоможемо визначитися.
          </p>

          <Button variant="telegram" size="xl" asChild>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <Send className="w-5 h-5" />
              Написати в Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
