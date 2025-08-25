
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EgestorERP from '@/components/EgestorERP';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // SEO and page setup
    document.title = "Acertei Contabilidade - Escritório Contábil em Santa Rosa/RS";
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <EgestorERP />
        <About scrollToSection={scrollToSection} />
        <Services scrollToSection={scrollToSection} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
