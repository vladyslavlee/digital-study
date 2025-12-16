import logoImage from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="py-4 bg-card border-t border-border">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="/">
            <img src={logoImage} alt="DigitalStudy" className="max-w-[100px]" />
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Умови та положення
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Політика конфіденційності
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          © {new Date().getFullYear()} DigitalStudyUA. Усі права захищено.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
