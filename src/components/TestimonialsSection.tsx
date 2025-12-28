import { ContentInterface } from '@/interfaces/content.interface';

const TestimonialsSection = ({ content }: { content: ContentInterface }) => {
  return (
    <section className='section-padding bg-card'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            <span className='text-gradient'>{content.testimonials.title}</span>
          </h2>
          <p className='body-lg text-muted-foreground'>{content.testimonials.subtitle}</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {content.testimonials.testimonialsList.map((testimonial, index) => (
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
