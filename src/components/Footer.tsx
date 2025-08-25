
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/6aed9212-8084-4d0b-92fe-accd28ea7e04.png" 
                  alt="Acertei Contabilidade - Logo" 
                  className="h-12 w-auto mb-4"
                />
                <p className="text-white/80 leading-relaxed max-w-md">
                  Escritório contábil com mais de 20 anos de experiência, oferecendo 
                  soluções completas e personalizadas para empresas de todos os portes 
                  em Santa Rosa/RS e região.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">CNPJ</h4>
                <p className="text-white/80">10.694.759/0001-75</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Redes Sociais</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/acerteicontabilidade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/acerteicontabilidade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://br.linkedin.com/company/acerteicontabilidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm">
                      Rua Guaporé, 401, Sala 201<br />
                      Centro, Santa Rosa/RS
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div className="text-white/80 text-sm">
                    <p>(55) 3512-6009</p>
                    <p>(55) 99146-7177</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-white/80 text-sm">
                    jarbas@acerteicontabilidade.com.br
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-white/80 text-sm">
                    <p>Segunda a sexta</p>
                    <p>08:00 às 17:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6">Serviços</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Contabilidade</li>
                <li>Escrita Fiscal</li>
                <li>Folha de Pagamento</li>
                <li>Imposto de Renda</li>
                <li>Processos de Licitação</li>
                <li>Assessoria Tributária</li>
                <li>Abertura de Empresas</li>
                <li>BPO Financeiro</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-white/80 text-sm">
                  © {currentYear} Acertei Contabilidade. Todos os direitos reservados.
                </p>
                <p className="text-white/60 text-xs mt-1">
                  "Acerte na sua decisão"
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-white/60 text-xs">
                  Desenvolvido com ❤️ para nossos clientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
