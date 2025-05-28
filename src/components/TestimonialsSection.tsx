
import React from 'react';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/OptimizedImage';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Proprietária de Loja Online',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Depois de contratar o serviço de gerenciamento WordPress, minha loja online nunca mais ficou fora do ar. A performance melhorou consideravelmente e as vendas aumentaram. Vale cada centavo!',
    stars: 5
  },
  {
    name: 'Carlos Mendes',
    role: 'Blogueiro Profissional',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Como blogueiro, preciso me concentrar na criação de conteúdo. O serviço de manutenção me libertou das preocupações técnicas e meu site está sempre rápido e seguro.',
    stars: 5
  },
  {
    name: 'Mariana Costa',
    role: 'Agência de Marketing',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Gerenciamos dezenas de sites para nossos clientes e o serviço de manutenção WordPress nos permitiu oferecer um valor agregado sem sobrecarregar nossa equipe técnica.',
    stars: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <p className="section-subtitle">
            Centenas de proprietários de sites WordPress confiam em nossos serviços de gerenciamento e manutenção.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white shadow-card">
              <div className="flex items-center mb-6">
                <OptimizedImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4"
                  width={56}
                  height={56}
                />
                <div>
                  <h4 className="font-bold text-wp-dark">{testimonial.name}</h4>
                  <p className="text-sm text-wp-gray">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-wp-gray italic">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#cases" className="text-wp-primary hover:text-wp-secondary font-medium underline">
            Ver todos os depoimentos e casos de sucesso →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
