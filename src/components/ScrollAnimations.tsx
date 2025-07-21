import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'bounceIn' | 'rotateIn';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimations: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeIn':
        return 'fade-in-on-scroll';
      case 'slideInLeft':
        return 'slide-in-left-on-scroll';
      case 'slideInRight':
        return 'slide-in-right-on-scroll';
      case 'scaleIn':
        return 'scale-in-on-scroll';
      case 'bounceIn':
        return 'fade-in-on-scroll';
      case 'rotateIn':
        return 'fade-in-on-scroll';
      default:
        return 'fade-in-on-scroll';
    }
  };

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimations;