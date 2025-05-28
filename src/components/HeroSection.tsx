import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
const HeroSection = () => {
  return <section className="bg-gradient-to-b from-wp-light to-white py-20 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-wp-dark mb-6 leading-tight">
            Gerencie seu WordPress sem preocupações
          </h1>
          <p className="text-xl text-wp-gray mb-8 max-w-lg">
            Manutenção completa, atualizações, segurança e suporte técnico para seu site WordPress. Foque em seu negócio enquanto cuidamos da tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="btn-primary text-lg">Ver Planos</Button>
            <Button className="btn-secondary text-lg">Saiba Mais</Button>
          </div>
          
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white p-2 rounded-lg shadow-xl animate-float">
            <OptimizedImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="WordPress Dashboard" className="rounded-lg" width={800} height={600} />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-wp-primary text-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium">Mais de 1000+ sites mantidos</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-wp-success text-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium">99.9% de uptime</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;