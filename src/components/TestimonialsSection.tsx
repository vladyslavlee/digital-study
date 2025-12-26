const testimonials = [
  {
    name: 'Олена К.',
    role: 'Власниця інтернет-магазину',
    text: 'Завдяки курсу я нарешті зрозуміла, як самостійно налаштовувати рекламу. Тепер економлю на агентствах і отримую кращі результати!',
    rating: 5,
  },
  {
    name: 'Андрій М.',
    role: 'Фрилансер',
    text: 'За місяць після курсу знайшов перших трьох клієнтів. Модуль про пошук замовників — просто золото!',
    rating: 5,
  },
  {
    name: 'Марія С.',
    role: 'Маркетолог',
    text: 'Працюю в маркетингу 3 роки, але курс відкрив багато нового. Особливо сподобався блок про оптимізацію.',
    rating: 5,
  },
  {
    name: 'Дмитро В.',
    role: 'Підприємець',
    text: 'Інвестиція в курс окупилася за 2 тижні. Тепер сам веду рекламу свого бізнесу.',
    rating: 5,
  },
  {
    name: 'Ольга Н.',
    role: 'Блогерка',
    text: 'Навчилася просувати свій блог через рекламу. Аудиторія зросла в 5 разів за 2 місяці!',
    rating: 5,
  },
  {
    name: 'Олександр Т.',
    role: 'Студент',
    text: 'Найкраща інвестиція в себе! Працюю на фрилансі і вже окупив курс за перший місяць.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className='section-padding bg-card'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            Відгуки <span className='text-gradient'>студентів</span>
          </h2>
          <p className='body-lg text-muted-foreground'>
            Дізнайтеся, що говорять наші випускники про курс
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-background rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300'
            >
              {/* Stars */}
              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className='w-5 h-5 text-yellow-400 fill-current' viewBox='0 0 20 20'>
                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className='text-foreground mb-4 leading-relaxed'>"{testimonial.text}"</p>

              {/* Author */}
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center'>
                  <span className='text-sm font-semibold text-primary'>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className='font-semibold text-foreground text-sm'>{testimonial.name}</p>
                  <p className='text-muted-foreground text-xs'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
