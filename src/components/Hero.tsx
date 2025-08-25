import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award } from 'lucide-react';
import { useEffect } from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('inicio');
      if (heroSection) {
        const scrollPosition = window.scrollY;
        const sectionHeight = heroSection.offsetHeight;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = sectionHeight - windowHeight / 2;

        if (scrollPosition > threshold) {
          // Change header background color when the Hero section is out of view
          document.querySelector('header')?.classList.add('bg-primary');
        } else {
          // Revert to the original header background when the Hero section is in view
          document.querySelector('header')?.classList.remove('bg-primary');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/74217e1a-d395-43ca-897b-1037a56268ca.png")',
        }}
      />
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Sua Contabilidade
            <br className="hidden sm:block" />
            <span className="text-accent"> Inteligente e Confiável</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Transformamos a gestão financeira da sua empresa com tecnologia avançada e atendimento personalizado
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px]"
              onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
            >
              Falar no WhatsApp
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px]"
              onClick={() => scrollToSection('servicos')}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="text-center p-4 lg:p-6">
            <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full mb-3 lg:mb-4 mx-auto">
              <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">
              20+ anos de experiência
            </h3>
            <p className="text-sm lg:text-base text-white/80 leading-relaxed">
              Experiência consolidada no mercado contábil
            </p>
          </div>

          <div className="text-center p-4 lg:p-6">
            <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full mb-3 lg:mb-4 mx-auto">
              <Users className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">
              Tecnologia avançada
            </h3>
            <p className="text-sm lg:text-base text-white/80 leading-relaxed">
              Sistemas modernos para gestão eficiente
            </p>
          </div>

          <div className="text-center p-4 lg:p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full mb-3 lg:mb-4 mx-auto">
              <Award className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">
              Atendimento personalizado
            </h3>
            <p className="text-sm lg:text-base text-white/80 leading-relaxed">
              Soluções sob medida para sua empresa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
