import React from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb, ShieldCheck, BarChart4, PiggyBank, FileText, MessageCircle } from 'lucide-react';

const services = [
  {
    title: 'Contabilidade Geral',
    description: 'Escrituração contábil completa para sua empresa, garantindo conformidade e organização.',
    icon: Lightbulb,
  },
  {
    title: 'Planejamento Tributário',
    description: 'Estratégias para otimizar sua carga tributária, aproveitando ao máximo os benefícios fiscais.',
    icon: ShieldCheck,
  },
  {
    title: 'Análise Financeira',
    description: 'Relatórios e análises para auxiliar na tomada de decisões estratégicas e no crescimento do seu negócio.',
    icon: BarChart4,
  },
  {
    title: 'Gestão de Folha de Pagamento',
    description: 'Administração completa da folha de pagamento, desde o cálculo até as obrigações acessórias.',
    icon: PiggyBank,
  },
  {
    title: 'Declaração de Imposto de Renda',
    description: 'Elaboração e envio da declaração de imposto de renda pessoa jurídica e física.',
    icon: FileText,
  },
];

interface ServicesProps {
  scrollToSection: (sectionId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ scrollToSection }) => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Oferecemos soluções completas em contabilidade e consultoria para empresas de todos os portes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-xl mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
