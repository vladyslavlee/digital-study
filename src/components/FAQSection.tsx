import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ContentInterface } from '@/interfaces/content.interface';

const FAQSection = ({ content }: { content: ContentInterface }) => {
  return (
    <section id='faq' className='section-padding bg-background'>
      <div className='container-main'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
          <h2 className='heading-lg text-foreground mb-4'>
            <span className='text-gradient'>{content.faq.title}</span>
          </h2>
          <p className='body-lg text-muted-foreground'>{content.faq.subtitle}</p>
        </div>

        <div className='max-w-3xl mx-auto'>
          <div className='bg-card rounded-2xl border border-border p-4 md:p-8'>
            <Accordion type='single' collapsible className='w-full'>
              {content.faq.faqList.map((faq, index) => (
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
