import React from 'react';

const StarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
      {/* 
         USER TODO: Replace '/background.gif' with your actual GIF file in the public folder.
         Recommended: A slow-moving abstract gold dust, deep blue nebula, or ancient hieroglyph fade.
      */}
      <img 
        src="/public/1.gif" 
        alt="Background Animation" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        onError={(e) => {
            // Fallback gradient if GIF is missing
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.classList.add('bg-gradient-to-b', 'from-myth-dark', 'via-myth-stone', 'to-myth-dark');
        }}
      />
      
      {/* Overlay Gradient to blend the GIF into the Deep Blue theme so it's not too distracting */}
      <div className="absolute inset-0 bg-gradient-to-b from-myth-dark/90 via-myth-dark/70 to-myth-dark/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-myth-lapis/10 mix-blend-overlay" />
    </div>
  );
};

export default StarBackground;