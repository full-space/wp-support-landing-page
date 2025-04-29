
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'O que inclui o serviço de gerenciamento WordPress?',
    answer: 'Nosso serviço inclui atualizações regulares do WordPress, temas e plugins, backups diários, verificações de segurança, otimização de performance, monitoramento de tempo de atividade 24/7, remoção de malware e suporte técnico dedicado.'
  },
  {
    question: 'Com que frequência vocês atualizam os sites?',
    answer: 'Realizamos atualizações semanais para o WordPress, temas e plugins. Antes de cada atualização, criamos um backup completo e testamos as atualizações em um ambiente de preparação para garantir que não ocorram problemas.'
  },
  {
    question: 'O que acontece se meu site ficar fora do ar?',
    answer: 'Nosso sistema de monitoramento detecta quando um site está offline e nossa equipe é imediatamente notificada. Dependendo do seu plano, começamos a trabalhar na resolução em até 30 minutos e restauramos seu site a partir do backup mais recente se necessário.'
  },
  {
    question: 'Vocês trabalham com qualquer tipo de site WordPress?',
    answer: 'Sim, atendemos a todos os tipos de sites WordPress, incluindo blogs, sites corporativos, lojas WooCommerce, portais de membros e sites de cursos online. Nossos planos são adaptados para atender às necessidades específicas de cada tipo de site.'
  },
  {
    question: 'Posso cancelar o serviço a qualquer momento?',
    answer: 'Sim, você pode cancelar a qualquer momento sem taxas de cancelamento. Oferecemos garantia de satisfação de 30 dias em todos os nossos planos de manutenção WordPress.'
  },
  {
    question: 'Como funciona o suporte técnico?',
    answer: 'Dependendo do seu plano, oferecemos suporte por e-mail, chat ou WhatsApp com tempos de resposta garantidos. Nossa equipe de especialistas WordPress está disponível para resolver problemas técnicos, responder perguntas e ajudar com pequenos ajustes no seu site.'
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossos serviços de gerenciamento WordPress.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-wp-dark hover:text-wp-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-wp-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-wp-gray mb-6">
            Ainda tem dúvidas? Entre em contato com nossa equipe de suporte.
          </p>
          <a 
            href="#contato" 
            className="btn-primary inline-block"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
