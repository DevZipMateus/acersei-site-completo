
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('/lovable-uploads/0bc62ec1-88fe-47b9-b0e8-1b7860cc4afe.png')"
        }}
      ></div>
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Semi-transparent background for text */}
          <div className="backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl bg-white/10 mx-auto max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in text-white leading-tight">
              <span className="block">Acerte na sua</span>
              <span className="block text-accent">decisão contábil</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in leading-relaxed px-2" style={{
              animationDelay: '0.2s'
            }}>
              Mais de 20 anos de experiência oferecendo soluções contábeis completas 
              para empresas em Santa Rosa/RS e região
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 animate-fade-in px-2" style={{
              animationDelay: '0.4s'
            }}>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">20+ anos de experiência</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">Tecnologia avançada</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">Atendimento personalizado</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in px-2" style={{
              animationDelay: '0.6s'
            }}>
              <Button 
                size="lg" 
                className="btn-hero-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto whitespace-nowrap" 
                onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
              >
                <span className="hidden sm:inline">Falar com Especialista</span>
                <span className="sm:hidden">Falar Conosco</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('servicos')} 
                className="btn-hero-outline text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-green-600 hover:bg-green-500 w-full sm:w-auto whitespace-nowrap"
              >
                <span className="hidden sm:inline">Conhecer Serviços</span>
                <span className="sm:hidden">Nossos Serviços</span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 sm:mt-16 text-center animate-fade-in" style={{
              animationDelay: '0.8s'
            }}>
              <p className="text-white/70 mb-4 text-sm sm:text-base px-2">Mais de 200 empresas confiam em nossos serviços</p>
              <div className="flex justify-center items-center gap-4 sm:gap-8 text-white/60 flex-wrap">
                <div className="text-center min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-white">20+</div>
                  <div className="text-xs sm:text-sm">Anos de experiência</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-white/30 hidden sm:block"></div>
                <div className="text-center min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-white">200+</div>
                  <div className="text-xs sm:text-sm">Clientes atendidos</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-white/30 hidden sm:block"></div>
                <div className="text-center min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                  <div className="text-xs sm:text-sm">Dedicação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
