import React from 'react';

const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-particle-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <div 
            className="bg-gradient-to-r from-strawberry-400 to-rose-gold-400 rounded-full animate-morphing"
            style={{
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
            }}
          ></div>
        </div>
      ))}
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-strawberry-400/5 to-rose-gold-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-r from-berry-400/5 to-champagne-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-gradient-to-r from-rose-gold-400/5 to-strawberry-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default FloatingParticles;