
import { 
  Calculator, 
  FileText, 
  Users, 
  DollarSign, 
  Briefcase, 
  TrendingUp, 
  Building, 
  PieChart,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade",
      description: "Escrituração contábil completa, demonstrativos financeiros e análise patrimonial para sua empresa.",
      features: ["Balanço Patrimonial", "DRE", "Análise Financeira"]
    },
    {
      icon: FileText,
      title: "Escrita Fiscal",
      description: "Gerenciamento completo das obrigações fiscais, apuração de impostos e cumprimento de prazos.",
      features: ["SPED Fiscal", "ICMS", "IPI", "PIS/COFINS"]
    },
    {
      icon: Users,
      title: "Folha de Pagamento",
      description: "Processamento de folha, cálculos trabalhistas, férias, 13º salário e obrigações acessórias.",
      features: ["eSocial", "FGTS", "INSS", "IRRF"]
    },
    {
      icon: DollarSign,
      title: "Imposto de Renda",
      description: "Declaração de IR para pessoas físicas e jurídicas, planejamento tributário e restituições.",
      features: ["DIRPF", "DIRPJ", "Planejamento", "Consultoria"]
    },
    {
      icon: Briefcase,
      title: "Processos de Licitação",
      description: "Assessoria completa em licitações públicas, documentação e acompanhamento de editais.",
      features: ["Documentação", "Habilitação", "Acompanhamento"]
    },
    {
      icon: TrendingUp,
      title: "Assessoria Tributária",
      description: "Consultoria especializada em otimização tributária e escolha do melhor regime fiscal.",
      features: ["Simples Nacional", "Lucro Presumido", "Lucro Real"]
    },
    {
      icon: Building,
      title: "Abertura e Fechamento",
      description: "Abertura de empresas, alterações contratuais, baixas e regularizações junto aos órgãos.",
      features: ["CNPJ", "Junta Comercial", "Receita Federal", "Prefeitura"]
    },
    {
      icon: PieChart,
      title: "BPO Financeiro",
      description: "Terceirização de processos financeiros, controle de fluxo de caixa e conciliações bancárias.",
      features: ["Contas a Pagar", "Contas a Receber", "Fluxo de Caixa"]
    }
  ];

  return (
    <section id="servicos" className="py-20 section-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-section mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços contábeis para empresas de todos os portes, 
              sempre com foco na qualidade e na satisfação do cliente.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="card-service group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-4">
              Precisa de uma <span className="text-primary">consultoria personalizada</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para analisar suas necessidades específicas e 
              oferecer a melhor solução contábil para o seu negócio.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-lg px-8"
              onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
