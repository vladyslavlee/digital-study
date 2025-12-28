import { ContentInterface } from '@/interfaces/content.interface';
import { TrendingUp, Laptop, DollarSign, Clock, Users, Zap } from 'lucide-react';
import { createElement } from 'react';

const reasonsIconList = [TrendingUp, Laptop, DollarSign, Clock, Users, Zap];

const ReasonsSection = ({ content }: { content: ContentInterface }) => {
  return (
    <section id='reasons' className='section-padding bg-card'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            <span className='text-gradient'>{content.reasons.title}</span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {content.reasons.reasonsList.map((reason, index) => (
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
                {createElement(reasonsIconList[index], {
                  className:
                    'w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110',
                })}
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
