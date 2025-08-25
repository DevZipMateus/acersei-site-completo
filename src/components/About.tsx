import React from 'react';
import { Button } from '@/components/ui/button';

interface AboutProps {
  scrollToSection: (sectionId: string) => void;
}

const About: React.FC<AboutProps> = ({ scrollToSection }) => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/6a9a7dd5-2906-429f-8f30-803f9b001591.png"
              alt="Equipe Acertei Contabilidade"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Sobre a Acertei Contabilidade
              </h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                Com mais de duas décadas de experiência no mercado, a Acertei Contabilidade 
                se consolidou como referência em serviços contábeis, oferecendo soluções 
                completas e personalizadas para empresas de todos os portes.
              </p>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Nossa missão é simplificar a gestão financeira dos nossos clientes, 
                utilizando tecnologia de ponta e um atendimento humanizado que faz a diferença.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="p-4 lg:p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">
                  Nossa Missão
                </h3>
                <p className="text-sm lg:text-base text-gray-600">
                  Facilitar a gestão contábil e financeira das empresas
                </p>
              </div>
              
              <div className="p-4 lg:p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">
                  Nossa Visão
                </h3>
                <p className="text-sm lg:text-base text-gray-600">
                  Ser referência em excelência e inovação contábil
                </p>
              </div>
            </div>

            <Button 
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contato')}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
