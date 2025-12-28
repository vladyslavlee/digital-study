import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ContentInterface } from '@/interfaces/content.interface';

const ProgramSection = ({ content }: { content: ContentInterface }) => {
  return (
    <section id='program' className='section-padding bg-background'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            <span className='text-gradient'>{content.program.title}</span>
          </h2>
          <p className='body-lg text-muted-foreground'></p>
        </div>

        <div className='max-w-4xl mx-auto space-y-6'>
          {content.program.modules.map((module, index) => (
            <div className='bg-card rounded-2xl border border-border p-6 md:p-8'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center'>
                  <span className='text-primary-foreground font-bold text-lg'>{index + 1}</span>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-foreground'>{module.title}</h3>
                  <p className='text-muted-foreground'>{module.description}</p>
                </div>
              </div>
              <Accordion type='single' collapsible className='w-full'>
                {module.lessonsList.map((lesson, index) => (
                  <AccordionItem key={lesson.title} value={`m1-${index}`}>
                    <AccordionTrigger className='text-left'>
                      <span className='flex items-center gap-3'>
                        <span className='w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground'>
                          {index + 1}
                        </span>
                        {lesson.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className='pl-11'>
                      <ul className='list-disc'>
                        {lesson.list.map((item, itemIndex) => (
                          <li key={`${lesson.title}-${itemIndex}-${item}`}> {item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <Button variant='cta' size='xl' asChild>
            <a href='#form'>Отримати доступ до курсу</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
