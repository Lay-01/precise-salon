import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';

export default function Services() {
  // Navigate to contact via Link components below — no JS handler needed

  return (
    <div className="min-h-screen bg-salon-bg text-white font-sans pt-28 pb-20">

      <SEO
        title="Salon Services in Bengaluru | Executive Cut, Shave & Beard Trim"
        description="Book executive haircuts, classic wet shaves, precision beard trims & wash and styling delivered to your home in Bengaluru. Starting from ₹650."
        canonical="https://lay-01.github.io/precise-salon/services"
      />
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-4">
        <h1 className="text-4xl sm:text-6xl font-serif text-white font-bold tracking-tight">
          OUR SERVICES.
        </h1>
        <p className="text-gray-400 font-light text-xs sm:text-sm max-w-2xl leading-relaxed">
          Meticulous attention to detail. We offer a curated selection of grooming services
          designed for the modern Indian gentleman, from weekday boardrooms to wedding celebrations.
        </p>
      </section>

      {/* FEATURED SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-8 space-y-12">
        
        {/* Service 1: Executive Cut */}
        <ServiceCard
          title="The Executive Cut"
          price="1,800"
          description="A bespoke haircut tailored to your head shape, hair growth patterns, and personal style. Includes a consultation, precision cutting with scissors and clippers, a refreshing wash with premium botanical products, and professional styling to finish."
          image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop"
          reversed={false}
          bookPath="/contact"
        />

        {/* Service 2: Classic Wet Shave */}
        <ServiceCard
          title="Classic Wet Shave"
          price="1,200"
          description="A traditional hot towel wet shave adapted for India's climate. We begin with pre-shave oil and steam, followed by a straight-razor finish and rich lather. A cooling towel and soothing aftershave balm complete the experience."
          image="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop"
          reversed={true}
          bookPath="/contact"
        />

      </section>

      {/* SECONDARY SERVICES GRID (Beard Trim & Wash & Styling) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 3: Precision Beard Trim */}
          <div className="bg-[#121212] border border-white/10 p-8 space-y-6 flex flex-col justify-between hover:border-salon-gold/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="img-zoom-container h-56 w-full border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop"
                  alt="Precision Beard Trim Visual"
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>

              <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                <h3 className="text-xl font-serif text-white font-semibold">
                  Precision Beard Trim
                </h3>
                <span className="text-xl font-serif text-salon-gold font-bold">
                  ₹900
                </span>
              </div>

              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Expert sculpting and shaping of your beard, including a straight-razor line-up for sharp definition on the cheeks and neck, followed by conditioning beard oil.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-sans font-semibold tracking-widest uppercase transition-all duration-300 focus:outline-none border border-salon-gold/60 text-white hover:border-salon-gold hover:bg-salon-gold/10 hover:text-salon-gold text-xs px-4 py-2 text-[11px] w-full"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>

          {/* Service 4: Wash & Styling */}
          <div className="bg-[#121212] border border-white/10 p-8 space-y-6 flex flex-col justify-between hover:border-salon-gold/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="img-zoom-container h-56 w-full border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop"
                  alt="Wash & Styling Visual"
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>

              <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                <h3 className="text-xl font-serif text-white font-semibold">
                  Wash & Styling
                </h3>
                <span className="text-xl font-serif text-salon-gold font-bold">
                  ₹650
                </span>
              </div>

              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Ideal between full cuts or before a significant event. A thorough wash with premium products is followed by professional blow-drying and styling for your desired look.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-sans font-semibold tracking-widest uppercase transition-all duration-300 focus:outline-none border border-salon-gold/60 text-white hover:border-salon-gold hover:bg-salon-gold/10 hover:text-salon-gold text-xs px-4 py-2 text-[11px] w-full"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE PRECISION BANNER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="bg-gradient-to-r from-[#181818] via-[#121212] to-[#181818] border border-white/10 p-10 sm:p-14 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Experience Precision.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Combine our services for the ultimate grooming session. Appointments are highly
            recommended, especially during festive and wedding seasons, to reserve dedicated time for you.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-sans font-semibold tracking-widest uppercase transition-all duration-300 focus:outline-none bg-salon-gold text-salon-bg hover:bg-salon-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transform hover:-translate-y-0.5 text-xs px-8 py-3.5 tracking-wider"
            >
              RESERVE YOUR TIME
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
