import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Route-based code splitting — each page is loaded only when visited
const Home     = lazy(() => import('./pages/Home'));
const About    = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact  = lazy(() => import('./pages/Contact'));

// Minimal loading fallback that matches site background
const PageFallback = () => (
  <div className="min-h-screen bg-[#0b0b0b]" aria-hidden="true" />
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Strip trailing slash from BASE_URL so both /precise-salon and /precise-salon/ work
const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export default function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0b0b0b] text-gray-200">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
