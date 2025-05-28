
import React, { Suspense } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LazySection from '@/components/LazySection';

// Lazy load dos componentes below-the-fold
const ServicesSection = React.lazy(() => import('@/components/ServicesSection'));
const BenefitsSection = React.lazy(() => import('@/components/BenefitsSection'));
const ChecklistSection = React.lazy(() => import('@/components/ChecklistSection'));
const TestimonialsSection = React.lazy(() => import('@/components/TestimonialsSection'));
const PricingSection = React.lazy(() => import('@/components/PricingSection'));
const FAQSection = React.lazy(() => import('@/components/FAQSection'));
const CTASection = React.lazy(() => import('@/components/CTASection'));
const Footer = React.lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        <LazySection>
          <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
            <ServicesSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
            <BenefitsSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
            <ChecklistSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
            <TestimonialsSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 bg-wp-light animate-pulse" />}>
            <PricingSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
            <FAQSection />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="h-96 bg-wp-primary animate-pulse" />}>
            <CTASection />
          </Suspense>
        </LazySection>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
