
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from "lucide-react";
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-wp-primary font-heading text-2xl font-bold">WP<span className="text-wp-accent">Suporte</span></span>
        </div>

        {/* Menu para desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#servicos" className="text-wp-dark hover:text-wp-primary font-medium">Serviços</a>
          <a href="#beneficios" className="text-wp-dark hover:text-wp-primary font-medium">Benefícios</a>
          <a href="#planos" className="text-wp-dark hover:text-wp-primary font-medium">Planos</a>
          <a href="#faq" className="text-wp-dark hover:text-wp-primary font-medium">FAQ</a>
          <a href="#contato" className="text-wp-dark hover:text-wp-primary font-medium">Contato</a>
        </nav>

        <div className="hidden md:block">
          <Button className="btn-primary">Fale Conosco</Button>
        </div>
        
        {/* Botão de menu móvel */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Menu móvel */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md absolute left-0 right-0">
          <nav className="flex flex-col space-y-4">
            <a href="#servicos" className="text-wp-dark hover:text-wp-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#beneficios" className="text-wp-dark hover:text-wp-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
            <a href="#planos" className="text-wp-dark hover:text-wp-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Planos</a>
            <a href="#faq" className="text-wp-dark hover:text-wp-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#contato" className="text-wp-dark hover:text-wp-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <Button className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>Fale Conosco</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
