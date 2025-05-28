
import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <div className="h-96 bg-gray-100 animate-pulse" />,
  className = ''
}) => {
  const { ref, hasBeenViewed } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  return (
    <section ref={ref} className={className}>
      {hasBeenViewed ? children : fallback}
    </section>
  );
};

export default LazySection;
