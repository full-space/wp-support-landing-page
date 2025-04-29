
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="contato" className="py-20 bg-wp-primary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Deixe-nos cuidar do seu site WordPress hoje mesmo
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Pare de se preocupar com manutenção, atualizações e segurança. 
            Nossos especialistas cuidam de tudo para que você possa focar no seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-wp-primary hover:bg-gray-100 font-medium py-3 px-8 text-lg">
              Ver Planos
            </Button>
            <Button className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 text-lg">
              Falar com Especialista
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">1000+</div>
              <p className="text-white/80">Sites Gerenciados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">99.9%</div>
              <p className="text-white/80">Uptime Garantido</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">24/7</div>
              <p className="text-white/80">Monitoramento</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">12h</div>
              <p className="text-white/80">Tempo de Resposta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
