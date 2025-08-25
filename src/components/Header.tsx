
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #16a7e0 0%, #1395cc 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top bar - Hidden on mobile */}
        <div className={`border-b border-white/20 py-2 text-sm ${
          isScrolled ? 'hidden' : 'hidden sm:flex justify-between items-center text-white'
        }`}>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs lg:text-sm">(55) 3512-6009</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs lg:text-sm truncate max-w-[200px] lg:max-w-none">jarbas@acerteicontabilidade.com.br</span>
            </div>
          </div>
          <div className="hidden lg:block whitespace-nowrap text-xs lg:text-sm">
            Segunda a sexta, das 08:00 às 17:30
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-3 lg:py-4">
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/6aed9212-8084-4d0b-92fe-accd28ea7e04.png" 
              alt="Acertei Contabilidade - Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-accent transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-accent transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-accent transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-accent transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Contato
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Button 
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-none shadow-md font-medium px-4 xl:px-6 py-2 transition-all duration-300 text-sm xl:text-base whitespace-nowrap"
              onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex-shrink-0 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left px-2 py-2 hover:text-primary transition-colors text-base"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left px-2 py-2 hover:text-primary transition-colors text-base"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left px-2 py-2 hover:text-primary transition-colors text-base"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left px-2 py-2 hover:text-primary transition-colors text-base"
              >
                Contato
              </button>
              <div className="pt-2">
                <Button 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-3"
                  onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
