
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'R$ 197',
    period: '/mês',
    description: 'Ideal para blogs e sites pequenos',
    features: [
      'Atualizações de WordPress',
      'Atualizações de plugins (até 10)',
      'Backup semanal',
      'Verificação de segurança mensal',
      'Relatório mensal de performance',
      'Suporte por e-mail',
    ],
    cta: 'Começar Agora',
    popular: false
  },
  {
    name: 'Profissional',
    price: 'R$ 397',
    period: '/mês',
    description: 'Perfeito para sites de negócios e e-commerce',
    features: [
      'Atualizações de WordPress',
      'Atualizações de plugins (ilimitados)',
      'Backup diário',
      'Verificações de segurança semanais',
      'Remoção de malware',
      'Otimização de performance',
      'Relatório semanal',
      'Suporte prioritário',
      'Tempo de resposta de 24h',
    ],
    cta: 'Escolher Profissional',
    popular: true
  },
  {
    name: 'Empresarial',
    price: 'R$ 797',
    period: '/mês',
    description: 'Para sites de alto tráfego e lojas online',
    features: [
      'Tudo do plano Profissional',
      'Backups diários em múltiplos locais',
      'Verificações de segurança diárias',
      'CDN e otimização avançada',
      'Desenvolvimento personalizado',
      'Migração de site gratuita',
      'Suporte via WhatsApp',
      'Tempo de resposta de 6h',
      'Relatório detalhado semanal'
    ],
    cta: 'Falar com Especialista',
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="planos" className="section bg-wp-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Planos de Gerenciamento WordPress</h2>
          <p className="section-subtitle">
            Escolha o plano ideal para manter seu site WordPress sempre funcionando perfeitamente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden ${
                plan.popular 
                ? 'bg-white border-2 border-wp-primary shadow-lg transform md:-translate-y-4' 
                : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-wp-primary py-2 text-center">
                  <span className="text-white text-sm font-medium">Mais Popular</span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-wp-dark mb-2">{plan.name}</h3>
                <p className="text-wp-gray mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-wp-dark">{plan.price}</span>
                  <span className="text-wp-gray">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-wp-success mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-wp-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={plan.popular ? "btn-primary w-full" : "btn-secondary w-full"}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-wp-gray mb-4">
            Precisa de um plano personalizado para atender às suas necessidades específicas?
          </p>
          <Button variant="outline" className="border-wp-primary text-wp-primary hover:bg-wp-primary hover:text-white">
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
