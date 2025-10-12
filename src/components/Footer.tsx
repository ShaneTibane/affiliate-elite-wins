import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';
import { useGeoLocation } from '../hooks/useGeoLocation';

const Footer = () => {
  const { country } = useGeoLocation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
    ],
    reviews: [
      
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
    ],
    legal: [
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Disclaimer', path: '/disclaimer' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/Elite Casinos', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/Elite Casinos', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/Elite Casinos', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/Elite Casinos', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 border-t border-yellow-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <Logo size="lg" className="group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Elite Casinos
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for honest casino reviews, exclusive bonuses, and expert gaming advice. We help Canadian players find the perfect online casino experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                <span>support@elitecasinos.net</span>
              </div>
              
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-yellow-400/20 pb-2">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reviews Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-yellow-400/20 pb-2">
                  Reviews
                </h3>
                <ul className="space-y-3">
                  {footerLinks.reviews.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-yellow-400/20 pb-2">
                  Support
                </h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-yellow-400/20 pb-2">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-400/20 bg-black bg-opacity-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Elite Casinos. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Licensed and regulated. Gambling can be addictive. Play responsibly.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs text-gray-400">
              <span>18+ Only</span>
              <span>•</span>
              <span>Gamble Responsibly</span>
              <span>•</span>
              <a href="/responsible-gaming" className="hover:text-yellow-400 transition-colors">
                BeGambleAware.org
              </a>
            </div>
          </div>

          {/* Affiliate Disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              <strong>Affiliate Disclaimer:</strong> Elite Casinos may receive compensation when you click on links to casinos on our website. 
              This does not influence our reviews or rankings, which are based on our independent analysis and testing. 
              We are committed to providing honest, unbiased information to help you make informed decisions about online gambling.
            </p>
          </div>

          {/* Trust Logos Section */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h4 className="text-center text-gray-400 text-sm font-semibold mb-4">Trusted By Players Worldwide</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
              {/* Trustpilot */}
              <div className="flex items-center space-x-2">
                <img 
                  src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" 
                  alt="Trustpilot" 
                  className="h-6 w-auto"
                />
              </div>
              
              {/* SSL Secured */}
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" fill="#10B981"/>
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-400 text-sm font-medium">SSL Secured</span>
              </div>
              
              {/* 256-bit Encryption */}
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="10" rx="2" ry="2" fill="#EF4444"/>
                  <circle cx="12" cy="16" r="1" fill="white"/>
                  <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-400 text-sm font-medium">256-bit Encryption</span>
              </div>
            </div>
          </div>

          {/* Additional Disclaimer */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              <strong>Disclaimer:</strong> The information provided on this website is for informational purposes only for {country} residents and should not be considered as professional advice. 
              Gambling involves risk and may not be suitable for all individuals in {country}. Please gamble responsibly and within your means. 
              If you believe you may have a gambling problem, please seek help from organizations such as GamCare, Gamblers Anonymous, or similar support groups in your jurisdiction. 
              Elite Casinos is not responsible for any losses incurred as a result of gambling activities. 
              All casino reviews and ratings are based on our independent analysis at the time of review and may change. 
              Always verify current terms and conditions directly with the casino before playing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;