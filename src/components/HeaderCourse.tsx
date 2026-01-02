import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Send } from 'lucide-react';
import logoImage from '@/assets/images/logo.png';

const HeaderCourse = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#reasons', label: 'Для кого' },
    { href: '#program', label: 'Програма курсу' },
    { href: '#faq', label: 'FAQ' },
  ];

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

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button variant='telegram' size='lg' asChild>
            <a href='https://t.me/digital_study_ua' target='_blank' rel='noopener noreferrer'>
              <Send className='w-4 h-4' />
              Telegram
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 text-foreground'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg'>
            <nav className='flex flex-col p-4 gap-4'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className='text-foreground hover:text-primary transition-colors py-2 font-medium'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderCourse;
