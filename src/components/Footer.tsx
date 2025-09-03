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
      { name: 'Our Team', path: '/about#team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' }
    ],
    reviews: [
      { name: 'Casino Reviews', path: '/casino-reviews' },
      { name: 'Latest Promotions', path: '/promotions' },
      { name: 'Blog', path: '/blog' },
      { name: 'Game Reviews', path: '/games' },
      { name: 'Bonus Guide', path: '/bonus-guide' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Help Center', path: '/help' },
      { name: 'Responsible Gaming', path: '/responsible-gaming' },
      { name: 'Problem Gambling', path: '/problem-gambling' }
    ],
    legal: [
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Disclaimer', path: '/disclaimer' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/Elite Wins', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/Elite Wins', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/Elite Wins', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/Elite Wins', label: 'YouTube' }
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
                Elite Wins
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for honest casino reviews, exclusive bonuses, and expert gaming advice. We help {country} players find the perfect online casino experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                <span>support@elitewins.net</span>
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
        <div className="border-t border-yellow-400/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-white font-semibold">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass-effect p-3 rounded-full hover:bg-yellow-400 hover:bg-opacity-20 transition-all duration-300 hover:scale-110 transform"
                >
                  <social.icon className="h-5 w-5 text-gray-300 hover:text-yellow-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="flex-1 px-4 py-3 rounded-full bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 text-sm"
              />
              <button className="glossy-btn text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-400/20 bg-black bg-opacity-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Elite Wins. All rights reserved.
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
              <strong>Affiliate Disclaimer:</strong> Elite Wins may receive compensation when you click on links to casinos on our website. 
              This does not influence our reviews or rankings, which are based on our independent analysis and testing specifically for {country} players. 
              We are committed to providing honest, unbiased information to help {country} residents make informed decisions about online gambling.
            </p>
          </div>

          {/* Trust Logos Section */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h4 className="text-center text-gray-400 text-sm font-semibold mb-4">Trusted By Players Worldwide</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
              {/* Trustpilot */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-gray-400 text-sm font-medium">Trustpilot</span>
              </div>
              
              {/* Help Online */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-gray-400 text-sm font-medium">Help Online</span>
              </div>
              
              {/* As Seen On */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <span className="text-gray-400 text-sm font-medium">As Seen On</span>
              </div>
              
              {/* Community */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-gray-400 text-sm font-medium">Community</span>
              </div>
              
              {/* SSL Secured */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SSL</span>
                </div>
                <span className="text-gray-400 text-sm font-medium">SSL Secured</span>
              </div>
              
              {/* 256-bit Encryption */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">256</span>
                </div>
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
              Elite Wins is not responsible for any losses incurred as a result of gambling activities by {country} players. 
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