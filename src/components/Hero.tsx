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
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/lovable-uploads/6a9a7dd5-2906-429f-8f30-803f9b001591.png')"
    }}></div>
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Semi-transparent white background for text */}
          <div className="backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl bg-[#1b1b1b]/[0.54]">
            <h1 className="text-hero mb-6 animate-fade-in text-white">
              <span className="block">Acerte na sua</span>
              <span className="block text-accent">decisão contábil</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Mais de 20 anos de experiência oferecendo soluções contábeis completas 
              para empresas em Santa Rosa/RS e região
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>20+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Tecnologia avançada</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Atendimento personalizado</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-6" onClick={() => window.open('https://wa.me/5555991467177', '_blank')}>
                Falar com Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('servicos')} className="btn-hero-outline text-lg px-8 py-6 bg-green-600 hover:bg-green-500">
                Conhecer Serviços
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 text-center animate-fade-in" style={{
            animationDelay: '0.8s'
          }}>
              <p className="text-white/70 mb-4">Mais de 200 empresas confiam em nossos serviços</p>
              <div className="flex justify-center items-center gap-8 text-white/60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-sm">Anos de experiência</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm">Clientes atendidos</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm">Dedicação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;