import { Target, BarChart3, Users, Palette, TrendingDown, Briefcase } from 'lucide-react';

const results = [
  {
    icon: Target,
    title: 'Запускати рекламу самостійно',
    description: 'Зможете самостійно запускати рекламу на основних платформах.',
  },
  {
    icon: BarChart3,
    title: 'Працювати з аналітикою',
    description: 'Упевнено працюватимете з аналітикою та розумітимете дані.',
  },
  {
    icon: Users,
    title: 'Залучати клієнтів',
    description: 'Зможете залучати клієнтів і керувати трафіком у їхніх проєктах.',
  },
  {
    icon: Palette,
    title: 'Створювати продаючі креативи',
    description: 'Навчитеся створювати продаючі креативи, що конвертують.',
  },
  {
    icon: TrendingDown,
    title: 'Оптимізувати кампанії',
    description: 'Отримаєте навички оптимізації кампаній для зниження вартості кліку.',
  },
  {
    icon: Briefcase,
    title: 'Заробляти в ІТ',
    description: 'Станете фахівцем, який може заробляти в ІТ, на фрилансі або у власному проєкті.',
  },
];

const ResultsSection = () => {
  return (
    <section className='section-padding bg-card'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            Що ви <span className='text-gradient'>отримаєте</span> після курсу
          </h2>
          <p className='body-lg text-muted-foreground'>
            Практичні навички, які дозволять вам почати заробляти одразу після навчання
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {results.map((result, index) => (
            <div
              key={index}
              className='relative p-6 rounded-2xl bg-background border border-border overflow-hidden group hover:border-secondary/50 transition-all duration-300'
            >
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full'></div>
              <div className='relative'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <result.icon className='w-6 h-6 text-secondary' />
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>{result.title}</h3>
                <p className='text-muted-foreground'>{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
