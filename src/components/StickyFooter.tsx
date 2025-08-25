import React, { useState, useEffect } from 'react';
import { Star, Gift, ChevronUp } from 'lucide-react';
import Logo from './Logo';

const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show footer when scrolling down and past 300px
      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      }
      // Hide footer when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const casinoOfTheMonth = {
    name: "Royal Palace Casino",
    logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
    rating: 4.9,
    bonus: "200% up to $2,000 + 100 FS",
    badge: "Casino of the Month"
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="glass-dark border-t border-yellow-400/20 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Casino Info */}
            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <img
                  src={casinoOfTheMonth.logo}
                  alt={`${casinoOfTheMonth.name} logo`}
                  className="w-12 h-12 rounded-lg border-2 border-yellow-400"
                />
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black text-xs font-bold px-2 py-1 rounded-full">
                  <Logo size="sm" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {casinoOfTheMonth.badge}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm md:text-base truncate">
                  {casinoOfTheMonth.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.floor(casinoOfTheMonth.rating) ? 'star-rating fill-current' : 'text-gray-600'}`}
                      />
                    ))}
                    <span className="ml-1 text-yellow-400 font-bold text-xs">
                      {casinoOfTheMonth.rating}
                    </span>
                  </div>
                  <span className="text-gray-300 text-xs hidden sm:inline">
                    • {casinoOfTheMonth.bonus}
                  </span>
                </div>
              </div>
            </div>

            {/* Bonus Display - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-4">
              <div className="text-center">
                <Gift className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                <p className="text-yellow-400 font-bold text-sm">Welcome Bonus</p>
                <p className="text-white text-xs">{casinoOfTheMonth.bonus}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 ml-4">
              <button className="glossy-btn text-black font-bold px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-300">
                Play Now
              </button>
              <button
                onClick={scrollToTop}
                className="glass-effect p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ChevronUp className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;