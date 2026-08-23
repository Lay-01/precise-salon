import React from 'react';

export default function CraftsmanCard({ name, role, image, isMain = false }) {
  return (
    <div className={`relative group overflow-hidden border border-white/10 bg-[#121212] transition-all duration-500 hover:border-salon-gold/50 ${isMain ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="img-zoom-container h-80 sm:h-96 md:h-[420px] w-full relative">
        <img
          src={image}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-1 z-10">
        <h3 className="text-xl sm:text-2xl font-serif text-white font-semibold tracking-wide">
          {name}
        </h3>
        <p className="text-[11px] font-sans font-semibold tracking-[0.25em] text-salon-gold uppercase">
          {role}
        </p>
      </div>
    </div>
  );
}
