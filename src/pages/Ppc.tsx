import HeroSection from '@/components/HeroSection';
import ReasonsSection from '@/components/ReasonsSection';
import ProgramSection from '@/components/ProgramSection';
import ResultsSection from '@/components/ResultsSection';
import FAQSection from '@/components/FAQSection';
import MainFormSection from '@/components/MainFormSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeaderCourse from '@/components/HeaderCourse';

const PPC = () => {
  return (
    <div className='min-h-screen bg-background'>
      <HeaderCourse />
      <main>
        <HeroSection />
        <ReasonsSection />
        <ProgramSection />
        <ResultsSection />
        <FAQSection />
        <MainFormSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default PPC;
