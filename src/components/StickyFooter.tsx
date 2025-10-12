import React, { useState, useEffect } from 'react';
import { Star, Gift, ChevronUp, X } from 'lucide-react';
import Logo from './Logo';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase";

const StickyFooter = () => {
  type Casino = {
    id: string;
    name: string;
    affiliateLink: string,
    location: string;
    rating: number;
    affiliate: string,
    bonus: string,
    category: string,
    description: string,
    features: {
      games: string;
      support: string;
      withdrawal: string;
      license: string;
    };
    extraFeatures: {
      freespins: string;
      wagering: string;
      mindeposit: string
    };
    imageUrl: string,
    logo: string,
    isCasinoOfTheMonth: boolean,
    highlight: boolean,
    games: string,
    payoutTime: string,
    isCasinoActive: boolean




  }
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [testcasinos, setTestCasinos] = useState<Casino[]>([]);
  const [mycasinoOfTheMonth, setCasinoOfTheMonth] = useState<Casino | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "casinocards"));
        const data: Casino[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Casino, "id">), // cast doc.data()
        }));
        setTestCasinos(data);
        let featuredCasino = data.find(casino => casino.isCasinoOfTheMonth);
        if (featuredCasino) {
          console.log("Casino  STICKY of the Month:", featuredCasino);
          setCasinoOfTheMonth(featuredCasino || null);
          // You can set it in state if you want
          // setCasinoOfTheMonth(featuredCasino);
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
      }

    }
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show footer when scrolling down and past 300px
      if (currentScrollY > 300 && currentScrollY > lastScrollY && !isClosed) {
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

  const closeFooter = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
      {mycasinoOfTheMonth && (
        <div className="glass-dark border-t border-yellow-400/20 shadow-2xl">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              {/* Close Button */}
              <button
                onClick={closeFooter}
                className="glass-effect p-1.5 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300 mr-3"
                aria-label="Close sticky footer"
              >
                <X className="h-3 w-3 text-gray-400 hover:text-white" />
              </button>

              {/* Casino Info */}
              <div className="flex items-center gap-3 flex-1">
                <div className="relative">
                  <img
                    src={mycasinoOfTheMonth.imageUrl} // 🔹 use imageUrl from API
                    alt={`${mycasinoOfTheMonth.name} logo`}
                    className="w-10 h-10 rounded-lg border-2 border-yellow-400"
                  />
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-200 w-5 h-5 rounded-full flex items-center justify-center">
                    <Logo size="sm" className="scale-75 [&_path]:fill-black [&_circle]:fill-black" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  {casinoOfTheMonth.badge && (
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black text-xs font-bold px-2 py-1 rounded-full">
                        {casinoOfTheMonth.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="text-white font-bold text-xs md:text-sm truncate">
                    {mycasinoOfTheMonth.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-2.5 w-2.5 ${i < Math.floor(mycasinoOfTheMonth.rating)
                              ? 'star-rating fill-current'
                              : 'text-gray-600'
                            }`}
                        />
                      ))}
                      <span className="ml-1 text-yellow-400 font-bold text-xs">
                        {mycasinoOfTheMonth.rating}
                      </span>
                    </div>
                    <span className="text-gray-300 text-xs hidden md:inline">
                      • {mycasinoOfTheMonth.bonus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bonus Display - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-3">
                <div className="text-center">
                  <Gift className="h-4 w-4 text-yellow-400 mx-auto mb-0.5" />
                  <p className="text-yellow-400 font-bold text-xs">Welcome Bonus</p>
                  <p className="text-white text-xs">{mycasinoOfTheMonth.bonus}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-2 ml-3">
                <a
                  href={mycasinoOfTheMonth.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glossy-btn text-black font-bold px-3 py-1.5 rounded-full text-xs hover:scale-105 transition-all duration-300"
                >
                  Play Now
                </a>
                <button
                  onClick={scrollToTop}
                  className="glass-effect p-1.5 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  aria-label="Scroll to top"
                >
                  <ChevronUp className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StickyFooter;