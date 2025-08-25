
import { Award, Users, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "20+ Anos de Experiência",
      description: "Duas décadas oferecendo soluções contábeis de qualidade"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção dedicada e soluções customizadas"
    },
    {
      icon: Clock,
      title: "Agilidade nos Processos",
      description: "Tecnologia moderna para maior eficiência e rapidez"
    },
    {
      icon: Shield,
      title: "Segurança e Confiabilidade",
      description: "Processos seguros e conformidade com todas as normas"
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
              Sobre a <span className="text-primary">Acertei Contabilidade</span>
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto px-4">
              Com mais de 20 anos de atuação no mercado, a Acertei Contabilidade 
              se consolidou como referência em serviços contábeis em Santa Rosa/RS, 
              sempre investindo em tecnologia e capacitação para oferecer as melhores soluções.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Oferecemos serviços contábeis de excelência, utilizando tecnologia de ponta 
                  e uma equipe altamente qualificada para garantir que nossos clientes tenham 
                  todas as ferramentas necessárias para o sucesso de seus negócios.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">
                  Nossos Valores
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Transparência:</strong> Processos claros e comunicação aberta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Inovação:</strong> Sempre buscando as melhores tecnologias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Compromisso:</strong> Dedicação total ao sucesso dos clientes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Qualidade:</strong> Excelência em todos os serviços prestados</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-primary/20">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-4">Slogan da Empresa</h4>
                  <p className="text-xl sm:text-2xl font-bold text-primary mb-2">
                    "Acerte na sua decisão"
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Porque cada decisão contábil impacta o futuro do seu negócio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-service text-center p-4 sm:p-6 h-full">
                <CardContent className="p-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-3 text-sm sm:text-base">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
