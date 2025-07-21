import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute animate-particle-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <div 
            className="bg-gradient-to-r from-strawberry-400 to-rose-gold-400 rounded-full animate-morphing"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
          ></div>
        </div>
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-strawberry-400/10 to-rose-gold-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-berry-400/10 to-champagne-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-rose-gold-400/10 to-strawberry-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" 
            fill="url(#wave-gradient)"
            className="animate-wave"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B9D" />
              <stop offset="50%" stopColor="#E8B4B8" />
              <stop offset="100%" stopColor="#8B1538" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;