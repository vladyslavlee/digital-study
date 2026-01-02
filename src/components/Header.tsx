import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import logoImage from '@/assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className='container-main'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <a href='/'>
            <img src={logoImage} alt='DigitalStudy' className='max-w-[100px] md:max-w-[150px]' />
          </a>

          {/* CTA Button */}
          <Button variant='telegram' size='lg' asChild>
            <a href='https://t.me/digital_study_ua' target='_blank' rel='noopener noreferrer'>
              <Send className='w-4 h-4' />
              Telegram
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
