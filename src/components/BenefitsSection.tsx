
import React from 'react';

const benefits = [
  {
    number: '01',
    title: 'Economize Tempo',
    description: 'Liberte-se das tarefas técnicas e foque no crescimento do seu negócio enquanto cuidamos do seu site.'
  },
  {
    number: '02',
    title: 'Site Sempre Atualizado',
    description: 'Mantenha seu WordPress, plugins e temas sempre na versão mais recente, evitando problemas de compatibilidade.'
  },
  {
    number: '03',
    title: 'Segurança Reforçada',
    description: 'Proteja seu site contra ameaças online com nossas medidas de segurança avançadas e monitoramento constante.'
  },
  {
    number: '04',
    title: 'Melhor Performance',
    description: 'Site mais rápido significa mais conversões. Otimizamos seu WordPress para carregamento ultrarrápido.'
  },
  {
    number: '05',
    title: 'Resolução Rápida',
    description: 'Conte com atendimento prioritário para resolver qualquer problema que surgir em seu site WordPress.'
  },
  {
    number: '06',
    title: 'Sem Surpresas',
    description: 'Preços transparentes e previsíveis, sem cobranças extras por atualizações ou manutenções básicas.'
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Por que escolher nosso gerenciamento WordPress?</h2>
          <p className="section-subtitle">
            Somos especialistas dedicados exclusivamente ao WordPress. Conheça os benefícios do nosso serviço.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-gray-100 absolute -left-2 -top-8">
                {benefit.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-wp-dark">{benefit.title}</h3>
                <p className="text-wp-gray">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-wp-light p-8 rounded-xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-wp-dark mb-2">Checklist Mensal Completo</h3>
              <p className="text-wp-gray">
                Seguimos uma lista de verificação mensal rigorosa para garantir que seu site WordPress esteja sempre protegido, otimizado e atualizado. Nosso processo abrange mais de 25 pontos críticos de manutenção.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center md:justify-end">
              <a href="#checklist" className="btn-primary">Ver Checklist Completo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
