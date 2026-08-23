import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-white/10 py-8 text-gray-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-7 text-[9px] tracking-[0.35em] text-[#c5a059] uppercase">
          <span className="block w-8 h-px bg-[#c5a059]" />
          Precision in every detail
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-6 lg:gap-10">

          {/* Column 1: Brand Info & Copyright (Cols 1-6) */}
          <div className="md:col-span-6 space-y-4">
            <div className="space-y-3">
              <Link
                to="/"
                className="text-lg md:text-xl font-sans tracking-[0.2em] font-bold text-white uppercase inline-flex items-center gap-3"
              >
                <span className="w-1 h-7 bg-[#c5a059]" />
                PRECISE SALON
              </Link>
              <p className="text-gray-400 max-w-sm leading-relaxed text-xs font-light">
                Elevated Indian grooming delivered directly to your doorstep across Bengaluru. Experience thoughtful luxury and precision.
              </p>
            </div>

            <div className="pt-2 text-[10px] tracking-widest text-gray-500 font-medium uppercase border-t border-white/10">
              © 2024 PRECISE SALON. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Column 2: Navigation Links (Cols 7-9) */}
          <div className="md:col-start-9 md:col-span-4 space-y-3 md:text-right">
            <h4 className="text-[10px] font-bold text-[#c5a059] tracking-[0.25em] uppercase inline-block border-b border-[#c5a059]/50 pb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2 font-medium md:flex md:flex-col md:items-end">
              <li className="flex items-center justify-end gap-3 group">
                <span className="text-[9px] text-gray-600 tracking-widest transition-colors group-hover:text-[#c5a059]">01</span>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors tracking-widest text-[11px] uppercase relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-px after:bg-[#c5a059] after:transition-all after:duration-300 hover:after:w-full">
                  HOME
                </Link>
              </li>
              <li className="flex items-center justify-end gap-3 group">
                <span className="text-[9px] text-gray-600 tracking-widest transition-colors group-hover:text-[#c5a059]">02</span>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors tracking-widest text-[11px] uppercase relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-px after:bg-[#c5a059] after:transition-all after:duration-300 hover:after:w-full">
                  ABOUT US
                </Link>
              </li>
              <li className="flex items-center justify-end gap-3 group">
                <span className="text-[9px] text-gray-600 tracking-widest transition-colors group-hover:text-[#c5a059]">03</span>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors tracking-widest text-[11px] uppercase relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-px after:bg-[#c5a059] after:transition-all after:duration-300 hover:after:w-full">
                  SERVICES
                </Link>
              </li>
              <li className="flex items-center justify-end gap-3 group">
                <span className="text-[9px] text-gray-600 tracking-widest transition-colors group-hover:text-[#c5a059]">04</span>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors tracking-widest text-[11px] uppercase relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-px after:bg-[#c5a059] after:transition-all after:duration-300 hover:after:w-full">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
