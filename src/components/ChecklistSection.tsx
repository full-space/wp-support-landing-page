
import React from 'react';
import { Check } from 'lucide-react';

const checklist = [
  {
    category: 'Atualizações',
    items: [
      'Atualizar núcleo do WordPress para a versão mais recente',
      'Atualizar todos os plugins instalados',
      'Atualizar temas instalados',
      'Verificar compatibilidade de plugins após atualizações',
      'Testar funcionalidades do site após atualizações'
    ]
  },
  {
    category: 'Backups',
    items: [
      'Realizar backup completo do site antes de atualizações',
      'Verificar integridade dos arquivos de backup',
      'Armazenar backups em local seguro',
      'Testar restauração de backups periodicamente',
      'Manter histórico de backups por 30 dias'
    ]
  },
  {
    category: 'Segurança',
    items: [
      'Verificar sinais de malware ou código malicioso',
      'Atualizar senhas de administrador',
      'Verificar permissões de arquivos e pastas',
      'Escanear vulnerabilidades de segurança',
      'Monitorar tentativas de login malsucedidas',
      'Verificar firewall e configurações de segurança'
    ]
  },
  {
    category: 'Otimização',
    items: [
      'Otimizar banco de dados WordPress',
      'Limpar posts de revisão e lixeira',
      'Otimizar imagens para melhor performance',
      'Configurar e verificar cache do site',
      'Minificar arquivos CSS e JavaScript',
      'Testar velocidade de carregamento do site'
    ]
  }
];

const ChecklistSection = () => {
  return (
    <section id="checklist" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossa Checklist Mensal de Manutenção</h2>
          <p className="section-subtitle">
            Todas as tarefas críticas que realizamos para manter seu site WordPress funcionando perfeitamente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {checklist.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6 text-wp-primary border-b border-wp-light pb-2">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-wp-success mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-wp-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-wp-light rounded-lg p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-wp-dark">
              Esta é apenas uma amostra das mais de 25 tarefas que realizamos mensalmente
            </h3>
            <p className="text-wp-gray mb-6">
              Nossos planos de manutenção WordPress incluem todas estas tarefas e muito mais, garantindo que seu site esteja sempre seguro, rápido e atualizado.
            </p>
            <a href="#planos" className="btn-primary inline-block">
              Ver Nossos Planos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
