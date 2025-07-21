import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-strawberry-50 to-rose-gold-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-strawberry-200 border-t-strawberry-600 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-rose-gold-400 rounded-full animate-spin-reverse mx-auto"></div>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-strawberry-600">Strawberry Artistry</h2>
        <p className="mt-2 text-gray-600">Loading beauty...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;