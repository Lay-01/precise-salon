import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Route-based code splitting — each page is loaded only when visited
const Home     = lazy(() => import('./pages/Home'));
const About    = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact  = lazy(() => import('./pages/Contact'));

// Minimal loading fallback that matches site background (no flash of white)
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

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
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
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
