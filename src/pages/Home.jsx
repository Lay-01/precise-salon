import React from 'react';
import { Link } from 'react-router-dom';
import homehero from "../assets/homehero.png";
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans selection:bg-[#c5a059] selection:text-black">

      <SEO
        title="Luxury Home Salon Services in Bengaluru"
        description="Precise Salon brings bespoke grooming to your doorstep in Bengaluru. Book executive cuts, wet shaves, beard trims & more. Premium. Hygienic. Convenient."
        canonical="https://lay-01.github.io/precise-salon/"
      />

      {/* 1. HERO SECTION */}
      <section id="home" className="hero-section relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0b0b0b]">

        {/* Visually-hidden h1 — crawlers & screen readers get the keyword; design is unaffected */}
        <h1 className="sr-only">
          Precise Salon – Luxury Home Grooming Services in Bengaluru
        </h1>

        {/* Barber Cutout Image Background */}
        <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
          <img
            src={homehero}
            alt="Professional barber holding scissors and comb – Precise Salon Bengaluru"
            className="h-[80%] sm:h-[85%] lg:h-[90%] w-auto object-contain object-bottom filter grayscale contrast-125 brightness-90"
          />
        </div>

        {/* Ambient Linear Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85 pointer-events-none z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-black/60 pointer-events-none z-1" />

        {/* Main Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12">

          {/* Left Headlines — decorative display text, hidden from accessibility tree */}
          <div className="lg:col-span-8 space-y-0 select-none" aria-hidden="true">
            <div className="hero-heading text-3xl sm:text-5xl lg:text-[105px] xl:text-[130px]">
              PRECISE
            </div>
            <div className="hero-heading text-3xl sm:text-5xl lg:text-[105px] xl:text-[130px]">
              SALON
            </div>
            <div className="hero-heading stroke text-3xl sm:text-5xl lg:text-[105px] xl:text-[130px]">
              SERVICES
            </div>
          </div>

          {/* Right Callout Block */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-5 pb-4 z-10">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white uppercase leading-tight font-sans">
                PROFESSIONAL SALON<br />
                SERVICES DELIVERED TO<br />
                YOUR DOORSTEP
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Luxury grooming, delivered across Bengaluru
              </p>
            </div>

            {/* True anchor link — no JS navigation */}
            <Link
              to="/contact"
              className="bg-[#c49b66] hover:bg-[#d6a872] text-[#0b0b0b] font-bold text-xs tracking-[0.15em] py-4 px-8 uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-2xl inline-block"
            >
              BOOK YOUR APPOINTMENT
            </Link>
          </div>

        </div>
      </section>

      {/* 2. ABOUT US TEASER SECTION */}
      <section className="py-24 bg-[#121212] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#c5a059] uppercase block">
                ABOUT US
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white leading-tight">
                Elevated grooming<br />
                wherever you are.
              </h2>

              <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed max-w-xl">
                Precise Salon brings the expertise of a luxury Indian salon to the comfort of your home.
                Our professional stylists focus on precision, hygiene, and personalized service for
                weddings, workdays, and every occasion in between.
              </p>

              <div className="pt-4">
                {/* True anchor link */}
                <Link
                  to="/about"
                  className="border border-white/30 hover:border-[#c5a059] hover:text-[#c5a059] text-white text-[10px] font-bold tracking-[0.2em] px-7 py-3 uppercase transition-all duration-300 inline-block"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>

            {/* Right Salon Interior Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative border border-white/10 shadow-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop"
                  alt="Elegant contemporary Indian salon interior with warm lighting"
                  className="w-full h-[400px] sm:h-[480px] object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
