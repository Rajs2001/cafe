import React from 'react';

const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array.from({ length: 20 })].map((_, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full opacity-60 z-50 overflow-hidden"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingParticles;
