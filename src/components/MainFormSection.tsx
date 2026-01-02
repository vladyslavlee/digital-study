import PaymentForm, { PaymentFormVariant } from './PaymentForm';
import CountdownTimer from './CountdownTimer';
import { ContentInterface } from '@/interfaces/content.interface';

const MainFormSection = ({ content }: { content: ContentInterface }) => {
  return (
    <section
      id='form'
      className='section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5'
    >
      <div className='container-main'>
        <div className='max-w-2xl mx-auto'>
          <div className='bg-card rounded-3xl border border-border shadow-lg p-8 md:p-12'>
            <div className='text-center mb-8'>
              <h2 className='heading-lg text-foreground mb-4'>
                Готові почати <span className='text-gradient'>навчання</span>?
              </h2>
              <p className='body-lg text-muted-foreground mb-6'>
                Отримайте доступ до курсу назавжди зі знижкою {content.prices.percentageOff}%
              </p>

              {/* Pricing */}
              <div className='flex items-center justify-center gap-4 mb-6'>
                <span className='text-4xl font-bold text-foreground'>
                  {content.prices.current} {content.prices.currency}
                </span>
                <span className='text-2xl text-muted-foreground line-through'>
                  {content.prices.original} {content.prices.currency}
                </span>
                <span className='px-3 py-1 rounded-full bg-destructive/10 text-destructive font-semibold text-sm'>
                  -{content.prices.percentageOff}%
                </span>
              </div>
            </div>

            <PaymentForm
              variant={PaymentFormVariant.SECTION}
              redirectUrl={content.paymentForm.link}
            />

            {/* Timer */}
            <div className='flex flex-col items-center  mt-4'>
              <p className='text-sm text-muted-foreground mb-3'>Знижка діє:</p>
              <CountdownTimer />
            </div>

            {/* Trust badges */}
            <div className='mt-8 pt-6 border-t border-border'>
              <div className='flex flex-wrap justify-center gap-6 text-sm text-muted-foreground'>
                <div className='flex items-center gap-2'>
                  <span className='text-secondary'>✓</span>
                  Доступ назавжди
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-secondary'>✓</span>
                  Підтримка
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-secondary'>✓</span>
                  Самі обираєте темп навчання
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFormSection;
