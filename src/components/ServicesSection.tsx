
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Search, 
  ArrowRight, 
  Book, 
  Star, 
  Layout, 
  MessageSquare 
} from 'lucide-react';

const services = [
  {
    icon: <Search className="h-10 w-10 text-wp-primary" />,
    title: 'Atualizações Regulares',
    description: 'Atualizamos o WordPress, plugins e temas para manter seu site seguro e funcionando sem problemas.'
  },
  {
    icon: <Star className="h-10 w-10 text-wp-primary" />,
    title: 'Otimização de Performance',
    description: 'Melhoramos a velocidade do site, otimizamos imagens e aplicamos as melhores práticas para SEO.'
  },
  {
    icon: <Book className="h-10 w-10 text-wp-primary" />,
    title: 'Backups Diários',
    description: 'Realizamos backups diários do seu site e banco de dados, garantindo que seus dados estejam sempre protegidos.'
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-wp-primary" />,
    title: 'Monitoramento 24/7',
    description: 'Monitoramos seu site continuamente para detectar problemas antes que afetem seus visitantes.'
  },
  {
    icon: <Layout className="h-10 w-10 text-wp-primary" />,
    title: 'Segurança Avançada',
    description: 'Implementamos medidas de segurança robustas para proteger seu site contra hackers e malware.'
  },
  {
    icon: <ArrowRight className="h-10 w-10 text-wp-primary" />,
    title: 'Suporte Técnico',
    description: 'Conte com nossa equipe especializada para resolver qualquer problema com seu WordPress.'
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Serviços de Gerenciamento WordPress</h2>
          <p className="section-subtitle">
            Oferecemos uma lista completa de tarefas mensais para manter seu site WordPress funcionando perfeitamente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="feature-card">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-wp-dark">{service.title}</h3>
              <p className="text-wp-gray">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
