import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({
  title,
  price,
  description,
  image,
  reversed = false,
  // bookPath: a route string used to render a true <Link> instead of an onClick button
  bookPath,
  onBook,
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#121212] border border-white/10 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-salon-gold/40`}>
      
      {/* Visual Image */}
      <div className={`lg:col-span-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative img-zoom-container h-72 sm:h-80 lg:h-96 w-full border border-white/5">
          <img
            src={image}
            alt={`${title} – at-home grooming service in Bengaluru`}
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Details & Pricing */}
      <div className={`lg:col-span-6 space-y-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-semibold">
            {title}
          </h3>
          <span className="text-2xl sm:text-3xl font-serif text-salon-gold font-bold">
            ₹{price}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
          {description}
        </p>

        <div className="pt-2">
          {/* Prefer a true <Link> anchor when bookPath is provided */}
          {bookPath ? (
            <Link
              to={bookPath}
              className="inline-flex items-center justify-center font-sans font-semibold tracking-widest uppercase transition-all duration-300 focus:outline-none border border-salon-gold/60 text-white hover:border-salon-gold hover:bg-salon-gold/10 hover:text-salon-gold text-[11px] px-4 py-2"
            >
              BOOK NOW
            </Link>
          ) : (
            <button
              type="button"
              onClick={onBook}
              className="inline-flex items-center justify-center font-sans font-semibold tracking-widest uppercase transition-all duration-300 focus:outline-none border border-salon-gold/60 text-white hover:border-salon-gold hover:bg-salon-gold/10 hover:text-salon-gold text-[11px] px-4 py-2"
            >
              BOOK NOW
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
