
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-wp-light to-white py-20 md:py-32">
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
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              <OptimizedImage
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Cliente"
                className="w-10 h-10 rounded-full border-2 border-white"
                width={40}
                height={40}
              />
              <OptimizedImage
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="Cliente"
                className="w-10 h-10 rounded-full border-2 border-white"
                width={40}
                height={40}
              />
              <OptimizedImage
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="Cliente"
                className="w-10 h-10 rounded-full border-2 border-white"
                width={40}
                height={40}
              />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-wp-gray">
                <span className="font-medium">4.9/5</span> por mais de <span className="font-medium">200+ clientes</span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white p-2 rounded-lg shadow-xl animate-float">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="WordPress Dashboard"
              className="rounded-lg"
              width={800}
              height={600}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-wp-primary text-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium">Mais de 1000+ sites mantidos</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-wp-success text-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium">99.9% de uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
