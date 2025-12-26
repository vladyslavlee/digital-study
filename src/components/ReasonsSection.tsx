import { TrendingUp, Laptop, DollarSign, Clock, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Ти власник малого бізнесу?',
    description: 'Ти зможеш самостійно запускати ефективну рекламу для пошуку нових клієнтів.',
  },
  {
    icon: Laptop,
    title: 'Хочеш працювати віддалено?',
    description:
      'Опанувавши цю навичку, ти зможеш вийти на дохід який не залежить від місця проживання.',
  },
  {
    icon: DollarSign,
    title: 'Ти фахівець з SMM або суміжних сфер?',
    description: 'Поєднай рекламу з уже наявними знаннями і отримуй кращі результати для клієнтів',
  },
  {
    icon: Users,
    title: 'Розвиваєш особистий бренд?',
    description: 'Ти навчишся точково залучати аудиторію та монетизувати трафік.',
  },
  {
    icon: Clock,
    title: 'Хочеш збільшити свій дохід?',
    description:
      'Знання PPC дозволять тобі брати більше клієнтів і швидше вийти на новий рівень доходу.',
  },
  {
    icon: Zap,
    title: 'Хочеш змінити професію?',
    description:
      'PPC – простий і зрозумілий старт без глибоких технічних навичок. Ти отримаєш перші результати вже під час навчання.',
  },
];

const ReasonsSection = () => {
  return (
    <section id='reasons' className='section-padding bg-card'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            <span className='text-gradient'>Кому підійде цей курс?</span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className='group p-6 rounded-2xl bg-background border border-border/50
                         transition-all duration-500 ease-out cursor-pointer
                         hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10
                         hover:-translate-y-2 hover:scale-[1.02]
                         animate__animated animate__fadeInUp'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className='w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10
                              flex items-center justify-center mb-5
                              transition-all duration-500 ease-out
                              group-hover:scale-110 group-hover:rotate-6
                              group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20
                              group-hover:shadow-lg group-hover:shadow-primary/20'
              >
                <reason.icon className='w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary'>
                {reason.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80'>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
