import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Хто такий PPC спеціаліст?',
    answer:
      'PPC спеціаліст — це професіонал, який управляє платними рекламними кампаніями в пошукових системах та соціальних мережах для залучення трафіку на веб-сайти.',
  },
  {
    question: 'Що нового в курсі реклами від DigitalStudyUA?',
    answer:
      'Якщо ви шукаєте успішні стратегії та корисні прийоми реклами, запишіться на цей курс вже сьогодні! Ми, на практичних заняттях, надамо актуальні методики, які допоможуть вашому бізнесу розвиватися. Дізнайтеся, як створювати ефективні рекламні кампанії, які приводять постійних клієнтів. Наш інтенсивний курс надає безцінну можливість навчання, яка окупиться з лишком: ви отримаєте знання і зрозумієте концепції маркетингу краще, ніж будь-коли раніше! З нами створити постійний потік клієнтів стало набагато простіше - не пропустіть цей шанс!',
  },
  {
    question: 'Формат навчання рекламі',
    answer:
      'Всі наші заняття проходять в режимі онлайн (запис викладача)  - тож ви зможете вчитися у будь-який зручний для вас час! Та не хвилюйтесь, викладач буде завжди на зв’язку для надання відповідей на всі ваші питання',
  },
  {
    question: 'Чи можна почати вчитися рекламі з нуля?',
    answer:
      'Цей курс буде корисний в першу чергу для тих, хто раніше не мав досвіду з налаштуванням рекламних кампаній! Наші викладачі - досвідчені-практики, які дають вичерпні знання з усіх фундаментальних навичок, необхідних для успішного проходження курсу.',
  },
  {
    question: 'Скільки часу потрібно для навчання?',
    answer:
      '1–2 години на день достатньо, щоб пройти курс за місяць. Ви можете навчатися у зручному для вас темпі.',
  },
  {
    question: 'Скільки триває доступ до курсу?',
    answer: 'Доступ до матеріалів лишається у вас назавжди.',
  },
  {
    question: 'Де я знайду доступ до матеріалу курсу?',
    answer:
      'Доступ до матеріалів ви отримаєте автоматично після оплати на сайті. Якщо у вас виникнуть додаткові питання, ви завжди можете звернутись в підтримку.',
  },
];

const FAQSection = () => {
  return (
    <section id='faq' className='section-padding bg-background'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            Часті <span className='text-gradient'>запитання</span>
          </h2>
          <p className='body-lg text-muted-foreground'>Відповіді на популярні запитання про курс</p>
        </div>

        <div className='max-w-3xl mx-auto'>
          <div className='bg-card rounded-2xl border border-border p-6 md:p-8'>
            <Accordion type='single' collapsible className='w-full'>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className='text-lg'>{faq.question}</AccordionTrigger>
                  <AccordionContent className='text-base'>{faq.answer}</AccordionContent>
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
