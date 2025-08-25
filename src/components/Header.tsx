
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        background: 'linear-gradient(135deg, #16a7e0 0%, #1395cc 100%)'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className={`border-b border-white/20 py-2 text-sm ${
          isScrolled ? 'hidden' : 'flex justify-between items-center text-white'
        }`}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(55) 3512-6009</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>jarbas@acerteicontabilidade.com.br</span>
            </div>
          </div>
          <div className="hidden md:block">
            Segunda a sexta, das 08:00 às 17:30
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6aed9212-8084-4d0b-92fe-accd28ea7e04.png" 
              alt="Acertei Contabilidade - Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-accent transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-accent transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-accent transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-accent transition-colors"
            >
              Contato
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-none shadow-md font-medium px-6 py-2 transition-all duration-300"
              onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
