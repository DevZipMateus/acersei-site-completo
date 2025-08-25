
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto px-4">
              Estamos prontos para ajudar você com suas necessidades contábeis. 
              Entre em contato conosco através dos canais abaixo ou preencha o formulário.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="card-service">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Endereço</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Rua Guaporé, 401, Sala 201<br />
                        Centro, Santa Rosa/RS
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-service">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Telefones</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        (55) 3512-6009<br />
                        (55) 99146-7177
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-service">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">E-mail</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm break-words">
                        jarbas@acerteicontabilidade.com.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-service">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Horário de Funcionamento</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Segunda a sexta<br />
                        08:00 às 17:30
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/acerteicontabilidade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/acerteicontabilidade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://br.linkedin.com/company/acerteicontabilidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-service">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(55) 99999-9999"
                        className="text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Como podemos ajudar?"
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Descreva sua necessidade ou dúvida..."
                      className="text-sm resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full text-sm sm:text-base py-2 sm:py-3" size="lg">
                    Enviar Mensagem
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="mt-12 sm:mt-16">
            <Card>
              <CardContent className="p-0">
                <div className="rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.8756!2d-54.4721!3d-27.8691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb4b5d7b7b5555%3A0x1234567890!2sRua%20Guapor%C3%A9%2C%20401%20-%20Centro%2C%20Santa%20Rosa%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Acertei Contabilidade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
