import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // useNavigate removed — all navigation now uses <Link> for true anchor semantics

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b] border-b border-white/5 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Left Brand Logo */}
        <Link
          to="/about"
          className="flex items-center gap-3 text-lg md:text-xl font-sans tracking-[0.18em] font-extrabold text-white hover:text-[#c49b66] transition-colors duration-300 uppercase flex-shrink-0"
        >
          <img
            src={logo}
            alt="Precise Salon Logo"
            className="h-11 md:h-12 w-auto object-contain"
          />
          PRECISE SALON
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-14">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] tracking-[0.2em] font-bold transition-all duration-300 relative py-1 uppercase ${isActive
                  ? 'text-white'
                  : 'text-gray-500 hover:text-white'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#c49b66]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Top CTA Button — true anchor link */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            to="/contact"
            className="bg-[#c49b66] hover:bg-[#d6a872] text-[#0b0b0b] text-[11px] font-bold tracking-[0.18em] px-6 py-3 uppercase rounded-none transition-all duration-300 inline-block"
          >
            BOOK APPOINTMENT
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-[#c49b66] p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0b0b0b] border-b border-white/10 px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs tracking-[0.2em] font-bold transition-colors py-2 border-b border-white/5 uppercase ${isActive ? 'text-[#c49b66] pl-2 border-l-2 border-[#c49b66]' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#c49b66] text-[#0b0b0b] font-bold text-xs tracking-widest py-3 uppercase rounded-none inline-block text-center"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
