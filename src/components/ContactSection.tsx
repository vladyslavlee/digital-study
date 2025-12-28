import { Button } from '@/components/ui/button';
import { ContentInterface } from '@/interfaces/content.interface';
import { Send, MessageCircle } from 'lucide-react';

const ContactSection = ({ content }: { content: ContentInterface }) => {
  return (
    <section className='section-padding bg-background'>
      <div className='container-main'>
        <div className='max-w-2xl mx-auto text-center'>
          <div className='w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6'>
            <MessageCircle className='w-10 h-10 text-primary' />
          </div>

          <h2 className='heading-lg text-foreground mb-4'>
            <span className='text-gradient'>{content.contact.title}</span>
          </h2>

          <p className='body-lg text-muted-foreground mb-8'>{content.contact.subtitle}</p>

          <Button variant='telegram' size='xl' asChild>
            <a href='https://t.me/digital_study_ua' target='_blank' rel='noopener noreferrer'>
              <Send className='w-5 h-5' />
              {content.contact.ctaButtonText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
