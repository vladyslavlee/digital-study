import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Чи підходить курс новачкам?",
    answer: "Так, програма побудована так, що ви опануєте все з нуля до результату. Ми починаємо з базових понять і поступово переходимо до просунутих технік.",
  },
  {
    question: "Чи зможу я знайти клієнтів?",
    answer: "У курсі є окремий модуль про пошук замовників, фриланс та розвиток особистого бренду. Ми даємо практичні інструменти для залучення перших клієнтів.",
  },
  {
    question: "Скільки часу потрібно для навчання?",
    answer: "1–2 години на день достатньо, щоб пройти курс за місяць. Ви можете навчатися у зручному для вас темпі.",
  },
  {
    question: "Чи оновлюються матеріали?",
    answer: "Так, ви отримуєте доступ до всіх оновлень безкоштовно. Рекламні платформи постійно змінюються, і ми оновлюємо матеріали, щоб інформація була актуальною.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Часті <span className="text-gradient">запитання</span>
          </h2>
          <p className="body-lg text-muted-foreground">
            Відповіді на популярні запитання про курс
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
