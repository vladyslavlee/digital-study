import CountdownTimer from "./CountdownTimer";
import PaymentForm from "./PaymentForm";
import heroImage from "@/assets/ppc/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24 pb-12 gradient-hero">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="order-0">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm animate__animated animate__fadeInLeft animate__delay-1s">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Набір відкрито
              </div>

              <h1 className="heading-xl text-foreground animate__animated animate__fadeInUp">
                Курс реклами {" "}
                <span className="text-gradient">Google, Instagram, Facebook</span>
              </h1>

              <p className="body-lg text-muted-foreground max-w-xl animate__animated animate__fadeInUp animate__delay-1s">
                Курс для тих, хто хоче працювати віддалено, прокачати навички або залучати клієнтів у свій бізнес.
              </p>

              {/* Pricing */}
              <div className="flex items-center gap-3 animate__animated animate__fadeInLeft animate__delay-1s">
                <span className="text-4xl md:text-5xl font-bold text-foreground">620 грн.</span>
                <span className="text-2xl text-muted-foreground line-through">15 500 грн.</span>
                <span className="px-3 py-1 rounded-full bg-destructive/30 text-destructive font-semibold text-sm animate__animated animate__pulse animate__infinite animate__slower">
                  -96%
                </span>
              </div>

              {/* Timer */}
              <div className="animate__animated animate__fadeInUp animate__delay-2s">
                <p className="text-sm text-muted-foreground mb-3">Знижка діє:</p>
                <CountdownTimer />
              </div>

              {/* Form */}
              <div className="pt-4 animate__animated animate__fadeInUp animate__delay-2s">
                <PaymentForm variant="hero" />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 flex justify-center lg:justify-end animate__animated animate__fadeInRight animate__delay-1s">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img
                src={heroImage}
                alt="Успішна дівчина працює за ноутбуком"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 border border-border animate__animated animate__bounceIn animate__delay-2s">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">800+</p>
                    <p className="text-sm text-muted-foreground">студентів</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 -left-4 bg-card rounded-xl shadow-lg p-3 border border-border animate__animated animate__bounceIn animate__delay-2s">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">🦾</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Доступ назавжди</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[30px] -right-[20px] bg-card rounded-xl shadow-lg p-3 border border-border animate__animated animate__bounceIn animate__delay-2s">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">🤓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Навчання з нуля</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
