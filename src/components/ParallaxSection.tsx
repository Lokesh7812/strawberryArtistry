import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        const transform = direction === 'up' ? `translateY(${yPos}px)` : `translateY(${-yPos}px)`;
        element.style.transform = transform;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={`parallax-element ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxSection;