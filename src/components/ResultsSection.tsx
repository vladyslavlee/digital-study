import { ContentInterface } from '@/interfaces/content.interface';
import { Target, BarChart3, Users, Palette, TrendingDown, Briefcase } from 'lucide-react';
import { createElement } from 'react';

const resultIconList = [Target, BarChart3, Users, Palette, TrendingDown, Briefcase];

const ResultsSection = ({ content }: { content: ContentInterface }) => {
  return (
    <section className='section-padding bg-card'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            <span className='text-gradient'>{content.results.title}</span>
          </h2>
          <p className='body-lg text-muted-foreground'>{content.results.subtitle}</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {content.results.resultsList.map((result, index) => (
            <div
              key={result.title}
              className='relative p-6 rounded-2xl bg-background border border-border overflow-hidden group hover:border-secondary/50 transition-all duration-300'
            >
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full'></div>
              <div className='relative'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {createElement(resultIconList[index], { className: 'w-6 h-6 text-secondary' })}
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
