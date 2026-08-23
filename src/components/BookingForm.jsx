import React, { useState } from 'react';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'The Executive Cut (₹1,800)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.assign('https://the-social-dev.vercel.app/');
  };

  return (
    <div className="bg-[#141414] border border-white/10 p-8 sm:p-10 space-y-6">
      <h2 className="text-xl sm:text-2xl font-serif text-white font-semibold">
        Request an Appointment
      </h2>

      {submitted ? (
        <div className="bg-salon-gold/10 border border-salon-gold/40 p-8 text-center space-y-4 rounded-none animate-fadeIn">
          <CheckCircle2 className="w-12 h-12 text-salon-gold mx-auto" />
          <h3 className="text-xl font-serif text-white">Appointment Request Received</h3>
          <p className="text-xs text-gray-300 font-light leading-relaxed max-w-sm mx-auto">
            Thank you, {formData.firstName}! Our concierge team will confirm your preferred appointment time within 2 hours.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSubmitted(false)}
            className="text-[10px]"
          >
            SUBMIT ANOTHER REQUEST
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-sans font-semibold tracking-widest text-gray-400 uppercase mb-2">
                FIRST NAME
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Rajesh"
                className="w-full bg-[#0b0b0b] border border-white/15 px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-salon-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-sans font-semibold tracking-widest text-gray-400 uppercase mb-2">
                LAST NAME
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Waghle"
                className="w-full bg-[#0b0b0b] border border-white/15 px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-salon-gold transition-colors"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-sans font-semibold tracking-widest text-gray-400 uppercase mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="raj12@example.com"
                className="w-full bg-[#0b0b0b] border border-white/15 px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-salon-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-sans font-semibold tracking-widest text-gray-400 uppercase mb-2">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-[#0b0b0b] border border-white/15 px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-salon-gold transition-colors"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block text-[10px] font-sans font-semibold tracking-widest text-gray-400 uppercase mb-2">
              SELECT SERVICE
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#0b0b0b] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-salon-gold transition-colors cursor-pointer"
            >
              <option value="The Executive Cut (₹1,800)">The Executive Cut (₹1,800)</option>
              <option value="Classic Wet Shave (₹1,200)">Classic Wet Shave (₹1,200)</option>
              <option value="Precision Beard Trim (₹900)">Precision Beard Trim (₹900)</option>
              <option value="Wash & Styling (₹650)">Wash & Styling (₹650)</option>
              <option value="Full Experience Package (₹4,000)">Full Experience Package (₹4,000)</option>
            </select>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-[10px] font-sans font-semibold tracking-widest text-gray-400 uppercase mb-2">
              ADDITIONAL DETAILS OR PREFERRED TIME
            </label>
            <textarea
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us your preferred date, Bengaluru address, or specific grooming preferences..."
              className="w-full bg-[#0b0b0b] border border-white/15 px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-salon-gold transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full text-xs py-4"
          >
            SUBMIT REQUEST
          </Button>
        </form>
      )}
    </div>
  );
}
