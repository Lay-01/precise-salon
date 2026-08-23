import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans pt-28 pb-20 selection:bg-[#c5a059] selection:text-black">

      <SEO
        title="About Precise Salon | Bengaluru's Luxury At-Home Barber"
        description="Precise Salon was born in Bengaluru to bring classic Indian grooming and modern luxury to your doorstep. Meet our master craftsmen."
        canonical="https://lay-01.github.io/precise-salon/about"
      />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Headline Column */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-bold tracking-tight leading-tight text-white">
              Heritage.<br />
              <span className="text-[#c5a059]">Precision.</span><br />
              Excellence.
            </h1>
            <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed max-w-md pt-2">
              Born in Bengaluru, Precise Salon brings classic Indian grooming traditions and modern luxury directly to your doorstep. We believe true luxury is personal, effortless, and made for your rhythm.
            </p>
          </div>

          {/* Right Master Craftsman Image Column */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="relative border border-white/10 overflow-hidden shadow-2xl max-w-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop"
                alt="Modern luxury Indian salon interior with minimalist dark décor"
                className="w-full h-[450px] sm:h-[520px] object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="bg-[#0e0e0e] border-t border-b border-white/5 py-24 my-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tag */}
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-2">
                <span className="w-[2px] h-4 bg-[#c5a059]" />
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#c5a059] uppercase">
                  OUR MISSION
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="lg:col-span-9">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-semibold text-white leading-snug">
                Redefining the standard of bespoke grooming through uncompromising quality and ultimate convenience.
              </h2>
            </div>
          </div>

          {/* 2-Column Paragraph Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 text-xs text-gray-400 font-light leading-relaxed pt-4 border-t border-white/5">
            <p>
              At Precise Salon, we recognized a gap in the modern Indian professional's lifestyle. Time is
              the ultimate luxury, yet a premium grooming experience often requires crossing the city. We
              bridge this gap by bringing a refined salon ritual to your home, office, or hotel. Our
              master stylists are trained in both timeless...
            </p>
            <p>
              ...techniques and contemporary Indian trends, ensuring every cut, shave, and styling
              session is executed with precision. We use carefully selected products suited to India's
              climate and hair textures, elevating an everyday appointment into a considered ritual of self-care.
            </p>
          </div>

        </div>
      </section>

      {/* MASTER CRAFTSMEN SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white">
            Master Craftsmen
          </h2>
          <p className="text-xs text-gray-400 font-light max-w-md">
            Our team represents the pinnacle of barbering talent, dedicated to their craft.
          </p>
        </div>

        {/* Master Craftsmen Asymmetric Grid (Matching Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column: Elias Thorne (Large Featured Card - 7 Columns) */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-white/10 bg-[#121212] min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=1200&auto=format&fit=crop"
                alt="Arjun Mehta - Founder & Master Barber"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-1 z-10">
              <h3 className="text-2xl font-sans font-bold text-white">
                Arjun Mehta
              </h3>
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#c5a059] uppercase">
                FOUNDER & MASTER BARBER
              </p>
            </div>
          </div>

          {/* Right Column: Marcus Vance & Julian Cross Stacked Cards (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Marcus Vance Card */}
            <div className="relative group overflow-hidden border border-white/10 bg-[#121212] flex-1 min-h-[230px]">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop"
                alt="Rohan Kapoor - Senior Stylist"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 z-10">
                <h3 className="text-lg font-sans font-bold text-white">
                  Rohan Kapoor
                </h3>
                <p className="text-[9px] font-bold tracking-[0.25em] text-[#c5a059] uppercase">
                  SENIOR STYLIST
                </p>
              </div>
            </div>

            {/* Julian Cross Card */}
            <div className="relative group overflow-hidden border border-white/10 bg-[#121212] flex-1 min-h-[230px]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Kabir Shah - Grooming Specialist"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 z-10">
                <h3 className="text-lg font-sans font-bold text-white">
                  Kabir Shah
                </h3>
                <p className="text-[9px] font-bold tracking-[0.25em] text-[#c5a059] uppercase">
                  GROOMING SPECIALIST
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>



    </div>
  );
}
