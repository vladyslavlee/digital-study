import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export enum PaymentFormVariant {
  HERO = 'hero',
  SECTION = 'section',
}

interface PaymentFormProps {
  variant: PaymentFormVariant;
  redirectUrl: string;
}

const PaymentForm = ({
  variant = PaymentFormVariant.HERO,
  redirectUrl = 'https://secure.wayforpay.com/button/b53577cdaf715',
}: Partial<PaymentFormProps>) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      toast({
        title: 'Помилка',
        description: 'Будь ласка, заповніть усі поля',
        variant: 'destructive',
      });

      return;
    }

    setIsLoading(true);

    toast({
      title: 'Перенаправляємо',
      description: 'Відкриваємо сторінку оплати в новій вкладці',
    });

    globalThis.open(redirectUrl, '_blank', 'noopener noreferrer');

    setName('');
    setPhone('');

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Input
        type='text'
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={variant === 'section' ? 'bg-background' : ''}
      />
      <Input
        type='tel'
        placeholder='Номер телефону'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={variant === 'section' ? 'bg-background' : ''}
      />
      <Button type='submit' variant='hero' size='xl' className='w-full' disabled={isLoading}>
        {isLoading ? 'Відправка...' : 'Отримати доступ до курсу'}
      </Button>
    </form>
  );
};

export default PaymentForm;
