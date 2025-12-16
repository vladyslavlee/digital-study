import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const module1Lessons = [
  {
    title: 'Введення у контекстну рекламу.',
    list: [
      'Структура курсу.',
      'Створення облікового запису Google Ads.',
      'Типи рекламних кампаній.',
      'Воронка. Маркетинг характеристики.',
    ],
  },
  {
    title: 'Пошукова реклама Збір семантичного ядра.',
    list: [
      'Пошукові рекламні кампанії.',
      'Кейворди, типи відповідностей, мінус слова.',
      'Різниця між мінус словами на рівні кампаній та МСС.',
      'Ресьорч, збір, группування семантики та інструменти за допомогою яких це можно зробити.',
    ],
  },
  {
    title: 'Динамічні пошукові кампанії. Пошукові оголошення.',
    list: [
      'Налаштування динамічних пошукових груп.',
      'Адаптивні пошукові оголошення.',
      'Розширення. Показник якості. Аукціон.',
    ],
  },
  {
    title: 'Налаштування та оптимізація. Google Ads Editor.',
    list: [
      'Google Ads Editor. Способи оптимізації пошукових кампаній.',
      'Шаблон для заливу кампаній та менеджменту сьорч кампаній.',
    ],
  },
  {
    title: 'Торгові рекламні кампанії та Performance Max.',
    list: [
      'Google Merchant (налаштування акаунту та створення фідів).',
      'Performance Max кампанії та способи оптимізації.',
    ],
  },
  {
    title: 'Системи аналітики. Google Analytics.',
    list: ['Встановлення Google Analytics, базові налаштування та звіти.', 'Налаштування цілей.'],
  },
  {
    title: 'Інтерфейс і цілі Google Analytics.',
    list: [
      'Google Tag Manager.',
      'Налаштування цілей через Google Tag Manager.',
      'Електронна комерція.',
    ],
  },
  {
    title: 'Контекстно-медійні рекламні кампанії (КМС).',
    list: [
      'Налаштування аудиторій ремаркетингу.',
      'Налаштування рекламних кампаній у КМС та ремаркетингу.',
      'Оптимізація рекламних кампаній КМС та ремаркетингу.',
    ],
  },
  {
    title: 'Контекстно-медійні рекламні кампанії (КММ). Ремаркетинг.',
    list: ['Налаштування аудиторій ремаркетингу.', 'Налаштування кастомних аудиторій.'],
  },
  {
    title: 'Реклама на Youtube та автоматизація рекламних кампаній.',
    list: [
      'Налаштування та оптимізація відеореклами.',
      'Автоматизація реклами базовими засобами Google Ads.',
      'Модуль з контекстної реклами.',
    ],
  },
  {
    title: 'Стратегії назначення ставок.',
    list: ['Ручні та розумні стратегії в Google Ads, правила використання.', 'Аукціон (додатково)'],
  },
  {
    title: 'Кейси оптимізації рекламних кампаній.',
    list: ['Аудит акаунту.'],
  },
];

const module2Lessons = [
  {
    title: 'Основи роботи із Facebook.',
    list: [
      'Основні аспекти алгоритмів Facebook.',
      'Заборонені теми та типи блоків.',
      'Аналіз та відбір аудиторії.',
    ],
  },
  {
    title: 'Основи роботи із Facebook.',
    list: [
      'Основні аспекти алгоритмів Facebook.',
      'Заборонені теми та типи блоків.',
      'Аналіз та відбір аудиторії.',
    ],
  },
  {
    title: 'Business Suit, Business Manager, Meta Ads, Сторінки кампанії, Каталог.',
    list: [
      'Студенти познайомляться з бізнес-інструментами, доступними на Facebook.',
      'Як створювати кампанії та керувати своїми рекламними обліковими записами?',
    ],
  },
  {
    title: 'Мета pixel.',
    list: [
      'Метапіксель, включаючи встановлення та налаштування пікселя Facebook, а також створення подій.',
    ],
  },
  {
    title: 'Мета pixel (Частина 2)',
    list: ['Встановлення CAPI.', 'Чим відрізняється Meta Pixel від CAPI та як їх використовувати?'],
  },
  {
    title: 'Створення рекламних кампаній.',
    list: [
      'Створення кампаній з метою “Конверсії”.',
      'Створення рекламних кампаній із метою “Трафік”.',
    ],
  },
  {
    title: 'Створення рекламних кампаній (Частина 2).',
    list: [
      'Створення рекламних кампаній з метою “Залучення”.',
      'Створення рекламних кампаній із метою “Ліди”.',
      'Створення рекламних кампаній із метою “Повідомлення” магазину на Facebook.',
    ],
  },
  {
    title: 'Як створювати кеативи які працюють.',
    list: [
      'Різні типи реклами, доступні на Facebook, включаючи ключові компоненти ефективного креативу.',
      'Огляд сервісів для створення креативів – Figma або Lunacy.',
    ],
  },
  {
    title: 'Аналіз та оптимізація рекламних кампаній.',
    list: [
      'Різні звіти, доступні на Facebook, а також про те, як оцінювати та оптимізувати свої рекламні кампанії.',
    ],
  },
  {
    title: 'Що таке ефективна сторінка в Instagram. Як налаштувати. Створення чат-ботів.',
    list: [
      'Як створити та наповнити сторінку в Instagram, у тому числі створити ботів у Telegram.',
      'Сервіси для чат-ботів Integramat (Make) та ManyChat/SmartSender.',
    ],
  },
  {
    title: "Кар'єрний розвиток таргетолога.",
    list: [
      'Про різні кар’єрні шляхи, доступні в цифровому маркетингу, включаючи роль таргетолога та спеціаліста з контекстної реклами.',
      'Навчитеся складати резюме та ефективно спілкуватися з клієнтами.',
    ],
  },
  {
    title: "Розмова з кар'єрним менеджером.",
    list: [
      'Як і де шукати роботу для початківця і які інструменти при цьому використовувати.',
      'Як правильно зробити резюме і яка інформація у ньому є надважлива, а що буде зайвим.',
      'Як створити профіль на Linkedin, щоб його могли побачити потенційні роботодавці.',
      '7 порад, які допоможуть пройти онлайн співбесіду набагато успішніше.',
    ],
  },
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
            2 модулі, 23 практичних уроки — від основ до просунутих стратегій
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
                <p className="text-muted-foreground">Поринемо у вивчення контекстної реклами</p>
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
                    <ul className="list-disc">
                      {lesson.list.map((item) => (
                        <li> {item}</li>
                      ))}
                    </ul>
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
                    <ul className="list-disc">
                      {lesson.list.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="cta" size="xl" asChild>
            <a href="#form">Отримати доступ до курсу</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
