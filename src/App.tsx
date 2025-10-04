import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CasinoReviews from './pages/CasinoReviews';
import Promotions from './pages/Promotions';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Pokies from './pages/Pokies';
import Poker from './pages/Poker';
import TermsOfService from './pages/TermsOfService';
import StickyFooter from './components/StickyFooter';
import './App.css';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
          <Header />
          <main>
             <ScrollToTop />   {/* 👈 add this once, inside Router */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/casino-reviews" element={<CasinoReviews />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/pokies" element={<Pokies />} />
              <Route path="/poker" element={<Poker />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
          <StickyFooter />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;