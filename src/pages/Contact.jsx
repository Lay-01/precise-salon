import React from 'react';
import BookingForm from '../components/BookingForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="min-h-screen bg-salon-bg text-white font-sans pt-28 pb-20">

      <SEO
        title="Book a Home Salon Appointment in Bengaluru"
        description="Schedule your at-home grooming session with Precise Salon in Bengaluru. Reach us by phone, email, or fill out the booking form. Serving all of Bengaluru."
        canonical="https://lay-01.github.io/precise-salon/contact"
      />
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-8 space-y-3">
        <span className="text-xs font-semibold tracking-[0.3em] text-salon-gold uppercase block">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-white font-bold tracking-tight">
          Book your appointment today.
        </h1>
        <p className="text-gray-400 font-light text-xs sm:text-sm max-w-xl leading-relaxed">
          We bring premium grooming directly to your doorstep across Bengaluru. Schedule an appointment
          or reach out with any inquiries.
        </p>
      </section>

      {/* MAIN LAYOUT: FORM + CONTACT & BUSINESS HOURS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

          {/* Right Column: Contact Info & Business Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Information Box */}
            <div className="bg-[#121212] border border-white/10 p-8 space-y-6">
              <h2 className="text-xs font-semibold tracking-[0.25em] text-white uppercase border-b border-white/10 pb-4">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <Phone className="w-4 h-4 text-salon-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] tracking-widest text-gray-500 uppercase block">PHONE</span>
                    <a href="tel:+919876543210" className="text-xs text-white hover:text-salon-gold transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-4 h-4 text-salon-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] tracking-widest text-gray-500 uppercase block">EMAIL</span>
                    <a href="mailto:hello@precisesalon.in" className="text-xs text-white hover:text-salon-gold transition-colors">
                      hello@precisesalon.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-4 h-4 text-salon-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] tracking-widest text-gray-500 uppercase block">SERVICE AREA</span>
                    <span className="text-xs text-white">Bengaluru and surrounding areas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Box */}
            <div className="bg-[#121212] border border-white/10 p-8 space-y-6">
              <h2 className="text-xs font-semibold tracking-[0.25em] text-white uppercase border-b border-white/10 pb-4 flex items-center justify-between">
                <span>BUSINESS HOURS</span>
                <Clock className="w-4 h-4 text-salon-gold" />
              </h2>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center text-gray-300">
                  <span className="font-light">Mon – Fri</span>
                  <span className="font-medium text-white">08:00 – 20:00 IST</span>
                </div>
                <div className="flex justify-between items-center text-gray-300 border-t border-white/5 pt-2">
                  <span className="font-light">Saturday</span>
                  <span className="font-medium text-white">09:00 – 18:00 IST</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 border-t border-white/5 pt-2">
                  <span className="font-light">Sunday</span>
                  <span className="text-salon-gold font-medium">Closed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MAP VISUAL SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="relative border border-white/10 bg-[#121212] h-72 sm:h-96 overflow-hidden flex items-center justify-center group">
          {/* Dark Map Visual Background */}
          <img
            src="https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=1400&auto=format&fit=crop"
            alt="Indian city architecture"
            className="w-full h-full object-cover opacity-25 filter grayscale invert hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-[#0b0b0b]" />

              {/* Bengaluru Service Area Label */}
          <div className="relative z-10 bg-[#121212]/90 border border-salon-gold/50 px-6 py-4 text-center space-y-1 backdrop-blur-md shadow-2xl">
            <div className="w-3 h-3 bg-salon-gold rounded-full mx-auto animate-ping mb-1" />
            <span className="text-xs font-serif text-white tracking-widest uppercase block font-bold">
              BENGALURU AREA
            </span>
            <span className="text-[10px] text-gray-400 font-light">
              Doorstep Luxury Service Zone
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
