import React from 'react';
import { useLazyImage } from '@/hooks/useLazyImage';
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  width,
  height
}) => {
  const {
    imageSrc,
    isLoaded,
    imgRef
  } = useLazyImage({
    src,
    placeholder
  });
  return <div className={`relative overflow-hidden ${className}`}>
      
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
    </div>;
};
export default OptimizedImage;