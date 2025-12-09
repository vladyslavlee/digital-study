import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const module1Lessons = [
  { title: "Що таке PPC і як працює цифрова реклама", description: "Основні поняття та принципи роботи платної реклами в інтернеті." },
  { title: "Аналітика та дослідження аудиторії", description: "Як визначити цільову аудиторію та аналізувати її поведінку." },
  { title: "Вибір платформ (Google, Meta, TikTok, YouTube)", description: "Огляд ключових рекламних платформ та їхні особливості." },
  { title: "Створення рекламних кабінетів", description: "Покрокове налаштування акаунтів для запуску реклами." },
  { title: "Налаштування цілей та подій", description: "Як правильно налаштувати відстеження конверсій." },
  { title: "Типи рекламних кампаній", description: "Огляд форматів реклами та коли їх використовувати." },
  { title: "Створення оголошень і креативів", description: "Як створювати ефективні рекламні матеріали." },
  { title: "Принципи бюджетування", description: "Управління бюджетом та стратегії ставок." },
  { title: "Запуск першої кампанії", description: "Практичний запуск рекламної кампанії від А до Я." },
  { title: "Аналіз результатів та оптимізація", description: "Як читати звіти та покращувати результати." },
];

const module2Lessons = [
  { title: "Робота з ретаргетингом", description: "Як повертати потенційних клієнтів за допомогою ретаргетингу." },
  { title: "Воронки та сценарії поведінки", description: "Побудова ефективних воронок продажів." },
  { title: "A/B-тестування", description: "Методи тестування та вибір найкращих варіантів." },
  { title: "Покращення якості трафіку", description: "Як залучати більш цільову аудиторію." },
  { title: "Оптимізація під алгоритми платформ", description: "Секрети алгоритмів рекламних систем." },
  { title: "Робота з великими бюджетами", description: "Стратегії масштабування рекламних кампаній." },
  { title: "Побудова звітів", description: "Створення зрозумілих звітів для клієнтів і себе." },
  { title: "Масштабування кампаній", description: "Як збільшувати охоплення без втрати ефективності." },
  { title: "Як знаходити клієнтів та працювати фрилансером", description: "Пошук замовників та побудова кар'єри." },
  { title: "Формування експертності та особистого бренду", description: "Як стати визнаним експертом у PPC." },
];

const ProgramSection = () => {
  return (
    <section id="program" className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Програма <span className="text-gradient">курсу</span>
          </h2>
          <p className="body-lg text-muted-foreground">
            2 модулі, 20 практичних уроків — від основ до просунутих стратегій
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Module 1 */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Модуль 1</h3>
                <p className="text-muted-foreground">Основи PPC та запуск реклами</p>
              </div>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {module1Lessons.map((lesson, index) => (
                <AccordionItem key={index} value={`m1-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                        {index + 1}
                      </span>
                      {lesson.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11">
                    {lesson.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Module 2 */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Модуль 2</h3>
                <p className="text-muted-foreground">Просунута робота та стратегія</p>
              </div>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {module2Lessons.map((lesson, index) => (
                <AccordionItem key={index} value={`m2-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                        {index + 1}
                      </span>
                      {lesson.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11">
                    {lesson.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="cta" size="xl" asChild>
            <a href="#form">Записатися на курс</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
