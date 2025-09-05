import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Shield, Zap, Gift, Crown, Users, Clock, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import CasinoCard from '../components/CasinoCard';
import { businessLogicService } from "../services/businessLogicService";
import { ListPayload } from "../models/ListPayload";
import { useGeoLocation } from '../hooks/useGeoLocation';
// Match the interface with backend data
interface Casino {
  id: number;
  name: string;
  logo: string;
  rating: number;
  description: string;
  bonus: string;
  features: {
    games: string;
    license: string;
    support: string;
    withdrawal: string;
  };
}
const LandingPage = () => {
 // const [casinos, setCasinos] = useState<Casino[]>([]);
 // const [loading, setLoading] = useState(true);
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);
  const { country, countryCode, loading: geoLoading } = useGeoLocation();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

const casinos = [
    {
      id: 1,
      name: "Royal Palace Casino",
      logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.8,
      bonus: "200% up to $2,000 + 100 Free Spins",
      description: "Experience the ultimate in luxury gaming with Royal Palace Casino's extensive collection of premium slots and live dealer games.",
      isCasinoOfTheMonth: true,
      features: {
        games: "2000+",
        license: "Malta Gaming Authority",
        support: "24/7 Live Chat",
        withdrawal: "1-3 days"
      }
    },
    {
      id: 2,
      name: "Diamond Jackpot",
      logo: "https://images.pexels.com/photos/6963197/pexels-photo-6963197.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.7,
      bonus: "100 Free Spins No Deposit",
      description: "Diamond Jackpot offers an impressive selection of progressive jackpots and innovative slot games with stunning graphics.",
      features: {
        games: "1500+",
        license: "Curacao eGaming",
        support: "24/7 Email & Chat",
        withdrawal: "24-48 hours"
      }
    },
    {
      id: 3,
      name: "Golden Crown",
      logo: "https://images.pexels.com/photos/6963478/pexels-photo-6963478.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.9,
      bonus: "$500 Welcome Package + 200 FS",
      description: "Golden Crown stands out with its exceptional live casino experience and exclusive VIP rewards program.",
      features: {
        games: "1800+",
        license: "UK Gambling Commission",
        support: "24/7 Phone & Chat",
        withdrawal: "Same day"
      }
    },
    {
      id: 4,
      name: "Lucky Stars Casino",
      logo: "https://images.pexels.com/photos/6963765/pexels-photo-6963765.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.6,
      bonus: "150% up to $1,500",
      description: "Lucky Stars Casino provides a perfect balance of classic and modern games with generous daily promotions.",
      features: {
        games: "1200+",
        license: "Malta Gaming Authority",
        support: "Live Chat 18 hours",
        withdrawal: "2-5 days"
      }
    },
    {
      id: 5,
      name: "Platinum Elite",
      logo: "https://images.pexels.com/photos/6963886/pexels-photo-6963886.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.9,
      bonus: "$1,000 High Roller Bonus",
      description: "Platinum Elite caters to high rollers with exclusive tables, personal account managers, and luxury rewards.",
      features: {
        games: "1000+",
        license: "Gibraltar Gambling Commission",
        support: "24/7 Personal Support",
        withdrawal: "Instant"
      }
    },
    {
      id: 6,
      name: "Neon Nights Casino",
      logo: "https://images.pexels.com/photos/6963312/pexels-photo-6963312.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.5,
      bonus: "50 Free Spins + 100% Match",
      description: "Neon Nights brings a modern, vibrant gaming experience with cutting-edge slots and innovative features.",
      features: {
        games: "800+",
        license: "Curacao eGaming",
        support: "Live Chat & Email",
        withdrawal: "1-2 days"
      }
    }
  ];

  const featuredCasinos = [
    {
      id: 1,
      name: "Royal Palace Casino",
      logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.8,
      bonus: "200% up to $2,000",
      features: ["Live Dealers", "Crypto Accepted", "24/7 Support"],
      ctaText: "Play Now"
    },
    {
      id: 2,
      name: "Diamond Jackpot",
      logo: "https://images.pexels.com/photos/6963197/pexels-photo-6963197.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.7,
      bonus: "100 Free Spins",
      features: ["Mobile Optimized", "Fast Payouts", "VIP Program"],
      ctaText: "Claim Bonus"
    },
    {
      id: 3,
      name: "Golden Crown",
      logo: "https://images.pexels.com/photos/6963478/pexels-photo-6963478.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.9,
      bonus: "$500 Welcome Package",
      features: ["High Limits", "Tournament", "Loyalty Rewards"],
      ctaText: "Join Now"
    }
  ];

  const bonusOffers = [
    {
      title: "Welcome Bonus",
      description: "Get up to $2000 + 200 Free Spins",
      casino: "Royal Palace Casino",
      validUntil: "Dec 31, 2024",
      type: "New Player"
    },
    {
      title: "No Deposit Bonus",
      description: "50 Free Spins - No deposit required",
      casino: "Diamond Jackpot",
      validUntil: "Jan 15, 2025",
      type: "No Deposit"
    },
    {
      title: "High Roller Bonus",
      description: "50% up to $5000 for VIP players",
      casino: "Golden Crown",
      validUntil: "Ongoing",
      type: "VIP Only"
    }
  ];

  const faqs = [
    {
      question: "Are online casinos legal in Australia?",
      answer: "Online casino gambling operates in a legal grey area in Australia. While the Interactive Gambling Act 2001 prohibits Australian companies from offering online casino services to Australian residents, it doesn't specifically prohibit Australians from playing at offshore online casinos. Many Australian players access international casino sites that accept AUD and cater to Australian players. However, it's important to understand the current laws and play responsibly."
    },
    {
      question: "What are the best online casino games for Australian players?",
      answer: "Australian players enjoy a wide variety of casino games including online pokies (slots), blackjack, roulette, baccarat, craps, and sic bo. Online pokies are particularly popular among Aussie players, with thousands of titles available from top software providers like Microgaming, NetEnt, and Pragmatic Play. Live dealer games are also increasingly popular, offering an authentic casino experience from home."
    },
    {
      question: "Can I play online casino games for real money in AUD?",
      answer: "Yes, many reputable international online casinos accept Australian Dollar (AUD) deposits and withdrawals. This eliminates currency conversion fees and makes banking more convenient for Australian players. Look for casinos that specifically cater to the Australian market and offer AUD as a primary currency option."
    },
    {
      question: "What payment methods can Australian players use at online casinos?",
      answer: "Australian players have access to various payment methods including credit/debit cards (Visa, Mastercard), bank transfers, digital wallets (PayPal, Skrill, Neteller), prepaid cards (Paysafecard, Neosurf), mobile payments (Apple Pay, Google Pay), and cryptocurrencies (Bitcoin, Ethereum). Each method has different processing times and fee structures, so choose based on your preferences for speed and convenience."
    },
    {
      question: "How do I choose a safe and reliable online casino?",
      answer: "When selecting an online casino, look for valid gambling licenses from reputable jurisdictions like Malta, Gibraltar, or the UK. Check for SSL encryption, fair gaming certifications from eCOGRA or iTech Labs, positive player reviews, responsive customer support, and transparent terms and conditions. Avoid unlicensed operators and always verify the casino's reputation before depositing money."
    },
    {
      question: "What bonuses are available at Australian online casinos?",
      answer: "Australian players can access various casino bonuses including welcome bonuses (deposit matches and free spins), no deposit bonuses, reload bonuses, cashback offers, and VIP rewards. Welcome bonuses typically range from 100% to 200% match bonuses up to $1,000-$2,000, often accompanied by free spins on popular pokies. Always read the terms and conditions, including wagering requirements, before claiming any bonus."
    },
    {
      question: "What are wagering requirements and how do they work?",
      answer: "Wagering requirements specify how many times you must play through a bonus amount before you can withdraw winnings. For example, a $100 bonus with 35x wagering requires $3,500 in total bets. Different games contribute differently to wagering requirements - pokies usually contribute 100%, while table games may contribute 10-20%. Lower wagering requirements (20x-35x) are more player-friendly than higher ones (50x+)."
    },
    {
      question: "Can I play online casino games on my mobile device?",
      answer: "Yes, most modern online casinos offer mobile-optimized websites and dedicated apps for iOS and Android devices. Mobile casinos provide access to hundreds of games including pokies, table games, and live dealer games. The mobile experience is designed to be user-friendly with touch-screen controls, fast loading times, and secure banking options. You can play anywhere with a stable internet connection."
    },
    {
      question: "How long do withdrawals take at Australian online casinos?",
      answer: "Withdrawal times vary by payment method and casino processing policies. E-wallets (PayPal, Skrill) are typically fastest at 24-48 hours, credit/debit cards take 3-5 business days, and bank transfers can take 5-7 business days. Some casinos offer instant withdrawals for VIP players. Always complete account verification early to avoid delays, and check the casino's withdrawal limits and processing times before playing."
    }
  ];

 /* useEffect(() => {
    const fetchCasinos = async () => {
      const payload = new ListPayload("CasinoCard", "/casinoCards");
      try {
        const res = await businessLogicService.listByQuery(payload);
        console.log("RES", res.responseData.data);
        const data = await res.responseData.data;
        setCasinos(data);
      } catch (error) {
        console.error("Error fetching casinos:", error);
        // Use fallback data when API is not available
        setCasinos(fallbackCasinos);
      } finally {
        setLoading(false);
      }
    };

    fetchCasinos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-white text-xl">Loading casinos...</p>
      </div>
    );
  } */
      
 // Show loading state while detecting location
  if (geoLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mb-4"></div>
          <p className="text-gray-300">Detecting your location...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Best Online Casinos - Top Online Casinos in 2025</title>
        <meta name="description" content="Discover the best online casinos with exclusive bonuses, honest reviews, and top promotions. Join Elite Wins for premium casino experiences." />
        <meta name="keywords" content={`${country} online casinos, casino reviews ${country}, best casinos ${countryCode}, online gambling ${country}`} />
      </Helmet>
{/* */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 floating-animation"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-500 rounded-full opacity-30 floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-500 rounded-full opacity-25 floating-animation" style={{animationDelay: '4s'}}></div>
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
  
               Best Online Casinos In {country} 2025
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Welcome to Elite Wins, your trusted partner in finding the top online casinos in Australia for 2025. Whether you're a seasoned player or just getting started, we'll guide you through the best online casino platforms that offers the biggest bonuses, exciting online pokies, and secure real-money gameplay.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/casino-reviews"
                  className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  🎰 Find Your Perfect Casino
                </Link>
                <Link
                  to="/promotions"
                  className="glass-effect text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-lg border border-yellow-400"
                >
                  🎰 View All Promotions
                </Link>
              </div>
          </div>
        </section>

       

        {/* Top Casino Comparison Table - Inspired by CasinoBuddies */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Top Online Casinos in Australia Comparison 2025
              </h2>
            </div>

            {/* Desktop Comparison Table */}
            <div className="hidden lg:block glass-effect rounded-3xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-yellow-400/30">
                    <th className="text-left py-4 px-4 text-yellow-400 font-bold">Casino</th>
                    <th className="text-center py-4 px-4 text-yellow-400 font-bold">Rating</th>
                    <th className="text-center py-4 px-4 text-yellow-400 font-bold">Welcome Bonus</th>
                    <th className="text-center py-4 px-4 text-yellow-400 font-bold">Free Spins</th>
                    <th className="text-center py-4 px-4 text-yellow-400 font-bold">Games</th>
                    <th className="text-center py-4 px-4 text-yellow-400 font-bold">Payout Time</th>
                    <th className="text-center py-4 px-4 text-yellow-400 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Royal Palace Casino",
                      logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                      rating: 4.8,
                      bonus: "200% up to $2,000",
                      freeSpins: "100 FS",
                      games: "2000+",
                      payoutTime: "1-3 days",
                      highlight: true
                    },
                    {
                      name: "Golden Crown",
                      logo: "https://images.pexels.com/photos/6963478/pexels-photo-6963478.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                      rating: 4.9,
                      bonus: "$500 Package",
                      freeSpins: "200 FS",
                      games: "1800+",
                      payoutTime: "Same day",
                      highlight: false
                    },
                    {
                      name: "Diamond Jackpot",
                      logo: "https://images.pexels.com/photos/6963197/pexels-photo-6963197.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                      rating: 4.7,
                      bonus: "100% up to $1,000",
                      freeSpins: "50 FS",
                      games: "1500+",
                      payoutTime: "24-48 hours",
                      highlight: false
                    },
                    {
                      name: "Platinum Elite",
                      logo: "https://images.pexels.com/photos/6963886/pexels-photo-6963886.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                      rating: 4.9,
                      bonus: "$1,000 High Roller",
                      freeSpins: "0 FS",
                      games: "1000+",
                      payoutTime: "Instant",
                      highlight: false
                    },
                    {
                      name: "Lucky Stars Casino",
                      logo: "https://images.pexels.com/photos/6963765/pexels-photo-6963765.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                      rating: 4.6,
                      bonus: "150% up to $1,500",
                      freeSpins: "75 FS",
                      games: "1200+",
                      payoutTime: "2-5 days",
                      highlight: false
                    },
                    {
                      name: "Neon Nights Casino",
                      logo: "https://images.pexels.com/photos/6963312/pexels-photo-6963312.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                      rating: 4.5,
                      bonus: "100% up to $800",
                      freeSpins: "50 FS",
                      games: "800+",
                      payoutTime: "1-2 days",
                      highlight: false
                    }
                  ].map((casino, index) => (
                    <tr key={index} className={`border-b border-gray-700 hover:bg-white hover:bg-opacity-5 transition-all duration-300 ${casino.highlight ? 'bg-yellow-400 bg-opacity-10' : ''}`}>
                      <td className="py-6 px-4">
                        <div className="flex items-center space-x-3">
                          <img src={casino.logo} alt={casino.name} className="w-12 h-12 rounded-lg border-2 border-yellow-400" />
                          <div>
                            <div className="text-white font-semibold">{casino.name}</div>
                            {casino.highlight && (
                              <div className="text-yellow-400 text-xs font-bold">🏆 EDITOR'S CHOICE</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < Math.floor(casino.rating) ? 'star-rating fill-current' : 'text-gray-600'}`} />
                          ))}
                        </div>
                        <div className="text-yellow-400 font-bold text-sm mt-1">{casino.rating}</div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <div className="text-white font-semibold">{casino.bonus}</div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <div className="text-green-400 font-semibold">{casino.freeSpins}</div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <div className="text-white font-semibold">{casino.games}</div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <div className="text-blue-400 font-semibold">{casino.payoutTime}</div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <button className="glossy-btn text-black font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm">
                          Play Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Comparison Cards */}
            <div className="lg:hidden space-y-6">
              {[
                {
                  name: "Royal Palace Casino",
                  logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                  rating: 4.8,
                  bonus: "200% up to $2,000",
                  freeSpins: "100 FS",
                  games: "2000+",
                  payoutTime: "1-3 days",
                  highlight: true
                },
                {
                  name: "Golden Crown",
                  logo: "https://images.pexels.com/photos/6963478/pexels-photo-6963478.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                  rating: 4.9,
                  bonus: "$500 Package",
                  freeSpins: "200 FS",
                  games: "1800+",
                  payoutTime: "Same day",
                  highlight: false
                },
                {
                  name: "Diamond Jackpot",
                  logo: "https://images.pexels.com/photos/6963197/pexels-photo-6963197.jpeg?auto=compress&cs=tinysrgb&w=80&h=80",
                  rating: 4.7,
                  bonus: "100% up to $1,000",
                  freeSpins: "50 FS",
                  games: "1500+",
                  payoutTime: "24-48 hours",
                  highlight: false
                }
              ].map((casino, index) => (
                <div key={index} className={`glass-effect rounded-2xl p-6 ${casino.highlight ? 'border-2 border-yellow-400' : ''}`}>
                  {casino.highlight && (
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black text-center py-2 rounded-lg mb-4 font-bold text-sm">
                      🏆 EDITOR'S CHOICE
                    </div>
                  )}
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={casino.logo} alt={casino.name} className="w-16 h-16 rounded-lg border-2 border-yellow-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{casino.name}</h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(casino.rating) ? 'star-rating fill-current' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-yellow-400 font-bold ml-2">{casino.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-gray-400 text-sm">Welcome Bonus</div>
                      <div className="text-white font-semibold">{casino.bonus}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Free Spins</div>
                      <div className="text-green-400 font-semibold">{casino.freeSpins}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Games</div>
                      <div className="text-white font-semibold">{casino.games}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Payout Time</div>
                      <div className="text-blue-400 font-semibold">{casino.payoutTime}</div>
                    </div>
                  </div>
                  <button className="glossy-btn w-full text-black font-bold py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Play Now
                  </button>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Licensed & Regulated</h4>
                <p className="text-gray-400 text-sm">All casinos are licensed by reputable authorities</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">50,000+ Players</h4>
                <p className="text-gray-400 text-sm">Trusted by thousands of satisfied players</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Fast Payouts</h4>
                <p className="text-gray-400 text-sm">Quick and secure withdrawal processing</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Expert Reviews</h4>
                <p className="text-gray-400 text-sm">Thoroughly tested by casino professionals</p>
              </div>
            </div>
          </div>
        </section>
 <section className="py-20 relative">
            {/* Casino of the Month Section */}
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Hero Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600"
                alt="Casino of the Month"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-black px-6 py-3 rounded-full font-bold text-lg mb-4">
                  <Crown className="h-6 w-6 mr-2" />
                  Casino of the Month
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Royal Palace Casino
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Experience luxury gaming at its finest with our handpicked casino of the month. 
                  Exceptional bonuses, premium games, and unmatched service await.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Casino Logo & Rating */}
                <div className="text-center lg:text-left">
                  <div className="inline-block relative mb-6">
                    <img
                      src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
                      alt="Royal Palace Casino"
                      className="w-32 h-32 rounded-2xl border-4 border-yellow-400 shadow-2xl mx-auto lg:mx-0"
                    />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      #1
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 star-rating fill-current" />
                    ))}
                    <span className="ml-2 text-white font-bold text-xl">4.9</span>
                  </div>
                  <p className="text-gray-200 font-semibold">Rated #1 by Players</p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="glass-effect rounded-xl p-4 text-center">
                    <Gift className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <h4 className="text-white font-bold text-lg mb-1">Welcome Bonus</h4>
                    <p className="text-yellow-400 font-semibold">200% up to $2,000</p>
                    <p className="text-gray-300 text-sm">+ 100 Free Spins</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-effect rounded-xl p-3 text-center">
                      <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-1" />
                      <p className="text-white font-semibold text-sm">2000+ Games</p>
                    </div>
                    <div className="glass-effect rounded-xl p-3 text-center">
                      <Shield className="h-6 w-6 text-yellow-400 mx-auto mb-1" />
                      <p className="text-white font-semibold text-sm">Licensed</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center space-y-4">
                  <button className="glossy-btn text-black font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 text-xl">
                    Play Now & Claim Bonus
                  </button>
                  <button className="glass-effect w-full text-white font-semibold py-3 rounded-full border-2 border-white/30 hover:border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    Read Full Review
                  </button>
                  <div className="text-center text-gray-300 text-sm">
                    <p>18+ | Terms & Conditions Apply</p>
                    <p>New Players Only | Gamble Responsibly</p>
                  </div>
                </div>
              </div>

              {/* Additional Features Bar */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="flex items-center justify-center text-white">
                    <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Users className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">VIP Program</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">Instant Withdrawals</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">SSL Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Casino Types by Game Section */}
        <div className="mb-16 bg-gradient-to-br from-violet-900/80 to-purple-800/90 rounded-3xl p-8 border border-violet-500/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Discover the Best Australian Online Casinos by Game
            </h2>
            <div className="max-w-4xl mx-auto text-gray-300 space-y-4">
              <p className="text-lg leading-relaxed">
                Looking for the top online casino games in Australia? Whether you're a fan of real money pokies and online slots, 
                or you prefer classic table games like blackjack, baccarat, or roulette, Australia's leading casino sites have something for everyone.
              </p>
              <p className="text-lg leading-relaxed">
                The best online casinos offer a massive game selection, often with demo play options so you can try before wagering. 
                From pokies to live dealer tables, you'll find endless ways to enjoy your gaming time and boost your chances of winning big.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Online Pokies",
                icon: "🎰",
                description: "Spin the reels on Australia's most popular pokies with massive jackpots, bonus rounds, and free spins. From classic 3-reel slots to modern video pokies with stunning graphics."
              },
              {
                name: "Online Poker",
                icon: "♠️",
                description: "Test your skills at Texas Hold'em, Omaha, and other poker variants. Join tournaments or cash games with players from around the world in Australia's top poker rooms."
              },
              {
                name: "Online Roulette",
                icon: "🎡",
                description: "Experience the thrill of the spinning wheel with European, American, and French roulette variants. Live dealer options bring the authentic casino atmosphere to your screen."
              },
              {
                name: "Online Blackjack",
                icon: "🃏",
                description: "Master the art of 21 with classic blackjack, Spanish 21, and other exciting variants. Perfect your strategy and beat the dealer in Australia's premier blackjack games."
              },
              {
                name: "Online Baccarat",
                icon: "💎",
                description: "Enjoy the sophisticated game of baccarat with Punto Banco, Chemin de Fer, and live dealer options. Simple rules make it perfect for beginners and high rollers alike."
              },
              {
                name: "Online Bingo",
                icon: "🎱",
                description: "Join the fun with 75-ball, 90-ball, and speed bingo games. Chat with fellow players while competing for progressive jackpots and exciting prizes."
              },
              {
                name: "Online Scratchies",
                icon: "🎫",
                description: "Instant wins await with digital scratch cards featuring themes from adventure to luxury. Quick gameplay and immediate payouts make scratchies perfect for casual gaming."
              },
              {
                name: "Online Craps",
                icon: "🎲",
                description: "Roll the dice in this exciting table game with multiple betting options and social gameplay. Learn the basics or master advanced strategies in Australia's best craps games."
              },
              {
                name: "Online Keno",
                icon: "🔢",
                description: "Pick your lucky numbers in this lottery-style game with draws every few minutes. Simple gameplay with the potential for massive payouts makes keno a player favorite."
              },
              {
                name: "Online Sic Bo",
                icon: "⚂",
                description: "Try your luck with this ancient Chinese dice game featuring multiple betting options and exciting payouts. Three dice determine your fate in this thrilling game of chance."
              }
            ].map((game, index) => (
              <div key={index} className="casino-card glass-dark rounded-2xl p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{game.icon}</div>
                  <div className="flex-1">
                    <Link 
                      to={`/casinos/${game.name.toLowerCase().replace('online ', '').replace(' ', '-')}`}
                      className="text-2xl font-bold text-white mb-4 hover:text-yellow-400 transition-colors duration-300 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:decoration-yellow-300"
                    >
                      {game.name}
                    </Link>
                    <p className="text-gray-300 text-base mb-6 leading-relaxed">{game.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Ready to Start Playing?
              </h3>
              <p className="text-gray-300 mb-6">
                Explore Australia's top-rated online casinos and find your perfect gaming experience today.
              </p>
              <button className="glossy-btn text-black font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View All Casinos
              </button>
            </div>
          </div>
        </div>

        {/* Top Online Casinos by Bonus */}
        <div className="mb-16 bg-gradient-to-br from-violet-900/80 to-purple-800/90 rounded-3xl p-8 border border-violet-500/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Top Online Casinos by Bonus
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-gray-200 leading-relaxed">
                When playing at online casinos in Australia, securing the biggest bonuses can take your gaming to the next level. The right bonus means more spins, more playtime, and a greater chance to win real money.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Below, we've compared the top Australian online casinos with the best bonuses in 2025, so you can quickly see which sites offer the most rewarding welcome packages, free spins, and ongoing promotions.
              </p>
            </div>
          </div>

          {/* Bonus Comparison Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Royal Palace Casino",
                logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
                bonus: "200% up to $2,000",
                freeSpins: "100 Free Spins",
                wagering: "35x",
                minDeposit: "$20",
                rank: 1
              },
              {
                name: "Diamond Jackpot",
                logo: "https://images.pexels.com/photos/6963197/pexels-photo-6963197.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
                bonus: "150% up to $1,500",
                freeSpins: "200 Free Spins",
                wagering: "40x",
                minDeposit: "$25",
                rank: 2
              },
              {
                name: "Golden Crown",
                logo: "https://images.pexels.com/photos/6963478/pexels-photo-6963478.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
                bonus: "100% up to $1,000",
                freeSpins: "50 Free Spins",
                wagering: "30x",
                minDeposit: "$10",
                rank: 3
              },
              {
                name: "Lucky Stars Casino",
                logo: "https://images.pexels.com/photos/6963765/pexels-photo-6963765.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
                bonus: "125% up to $800",
                freeSpins: "75 Free Spins",
                wagering: "35x",
                minDeposit: "$15",
                rank: 4
              },
              {
                name: "Platinum Elite",
                logo: "https://images.pexels.com/photos/6963886/pexels-photo-6963886.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
                bonus: "100% up to $2,500",
                freeSpins: "25 Free Spins",
                wagering: "25x",
                minDeposit: "$50",
                rank: 5
              },
              {
                name: "Neon Nights Casino",
                logo: "https://images.pexels.com/photos/6963312/pexels-photo-6963312.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
                bonus: "75% up to $600",
                freeSpins: "150 Free Spins",
                wagering: "45x",
                minDeposit: "$20",
                rank: 6
              }
            ].map((casino, index) => (
              <div key={index} className="casino-card glass-dark rounded-xl p-4 shadow-xl relative group">
                {/* Rank Badge */}
                <div className="absolute -top-1 -left-1 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg z-10">
                  #{index + 1}
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={casino.logo}
                    alt={`${casino.name} logo`}
                    className="w-12 h-12 rounded-lg border-2 border-yellow-400 shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{casino.name}</h3>
                    <div className="flex items-center text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(casino.rating) ? 'star-rating fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                      <span className="ml-1 text-yellow-400 font-bold text-xs">{casino.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Bonus Display */}
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-lg p-3 text-center mb-3">
                  <Gift className="h-4 w-4 text-black mx-auto mb-1" />
                  <p className="text-black font-bold text-base mb-1">{casino.bonus}</p>
                  <p className="text-black font-semibold text-xs">{casino.freeSpins}</p>
                </div>
                
                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="glass-effect rounded-md p-2 text-center">
                    <p className="text-gray-400 text-xs mb-1">Wagering</p>
                    <p className="text-white font-semibold text-xs">{casino.wagering}</p>
                  </div>
                  <div className="glass-effect rounded-md p-2 text-center">
                    <p className="text-gray-400 text-xs mb-1">Min Deposit</p>
                    <p className="text-white font-semibold text-xs">{casino.minDeposit}</p>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="space-y-2">
                  <button className="glossy-btn w-full text-black font-bold py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm">
                    Claim Bonus
                  </button>
                  <button className="glass-effect w-full text-white font-semibold py-2 rounded-full border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 text-xs">
                    View Details
                  </button>
                </div>

                <div className="text-center text-gray-400 text-xs mt-4">
                  <p>18+ | T&Cs Apply</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Compare All Casino Bonuses
              </h3>
              <p className="text-gray-300 mb-6">
                Want to see detailed bonus terms and conditions? Check out our comprehensive bonus comparison guide.
              </p>
              <button className="glossy-btn text-black font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View Full Comparison
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide Section */}
        <div className="mb-20">
          <div className="glass-effect rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Step-by-Step Guide to Playing at Online Casinos in Australia
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                With so many online casinos available in Australia, choosing where to start can feel overwhelming—especially for beginners. The good news is that getting started is simple when you have the right guidance.
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto mt-4">
                This easy step-by-step guide, tailored for Australian players, will help you register, claim bonuses, and begin your online gambling journey with confidence.
              </p>
            </div>

            {/* Steps */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                How to Get Started
              </h3>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Choose a Licensed Casino",
                    description: "Select a reputable online casino that's licensed and regulated. Look for casinos with proper Australian licensing or international licenses from Malta, UK, or Curacao. Check our reviews to find casinos with excellent security, fair games, and reliable customer support.",
                    icon: "🛡️"
                  },
                  {
                    step: "02",
                    title: "Create Your Account",
                    description: "Click 'Sign Up' and fill in your personal details including name, email, date of birth, and address. Choose a strong password and ensure all information is accurate as you'll need to verify your identity later. The process typically takes 2-3 minutes.",
                    icon: "📝"
                  },
                  {
                    step: "03",
                    title: "Verify Your Identity",
                    description: "Upload required documents such as a driver's license or passport for identity verification, and a utility bill or bank statement for address confirmation. This step ensures your account security and enables withdrawals. Verification usually takes 24-48 hours.",
                    icon: "✅"
                  },
                  {
                    step: "04",
                    title: "Make Your First Deposit",
                    description: "Navigate to the cashier section and choose your preferred payment method (credit card, bank transfer, e-wallet, or cryptocurrency). Enter your deposit amount, ensuring it meets the minimum requirement to qualify for welcome bonuses. Most deposits are instant.",
                    icon: "💳"
                  },
                  {
                    step: "05",
                    title: "Claim Your Bonus & Start Playing",
                    description: "Activate your welcome bonus if available, read the terms and conditions, and start exploring games. Begin with free demos to familiarize yourself with games before wagering real money. Set your budget and enjoy responsible gaming.",
                    icon: "🎮"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-6 glass-dark rounded-2xl p-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full flex items-center justify-center text-black font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{step.icon}</span>
                        <h4 className="text-2xl font-bold text-white">{step.title}</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Playing Smart Ideas */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Playing Smart Ideas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Set a Budget & Stick to It",
                    description: "Before you start playing, decide how much you can afford to lose and never exceed this amount. Use the casino's deposit limits and self-exclusion tools to help maintain control. Remember, gambling should be entertainment, not a way to make money.",
                    icon: "💰",
                    tip: "Pro Tip: Set daily, weekly, and monthly limits"
                  },
                  {
                    title: "Understand Game Rules & Odds",
                    description: "Take time to learn the rules and odds of games before playing with real money. Use free demo modes to practice and develop strategies. Focus on games with better RTP (Return to Player) percentages for better long-term value.",
                    icon: "📚",
                    tip: "Pro Tip: Look for games with 96%+ RTP"
                  },
                  {
                    title: "Take Regular Breaks",
                    description: "Avoid long gaming sessions that can lead to poor decision-making. Set time limits and take regular breaks to stay focused and in control. Use casino tools like session timers and reality checks to help manage your playing time effectively.",
                    icon: "⏰",
                    tip: "Pro Tip: Use the 20-20-20 rule - every 20 minutes, look away for 20 seconds"
                  }
                ].map((idea, index) => (
                  <div key={index} className="glass-dark rounded-2xl p-6 text-center casino-card">
                    <div className="text-5xl mb-4">{idea.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-4">{idea.title}</h4>
                    <p className="text-gray-300 leading-relaxed mb-4">{idea.description}</p>
                    <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-200/20 rounded-lg p-3 border border-yellow-400/30">
                      <p className="text-yellow-400 font-semibold text-sm">{idea.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Online Gambling Tips For Australian Players */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Online Gambling Tips For Australian Players
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Master the art of online gambling with expert tips designed specifically for Australian players. 
                From bankroll management to game selection, these proven strategies will help you play smarter, 
                stay safe, and maximize your entertainment value at Australia's top online casinos.
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8 md:p-12">
              {/* Essential Tips Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* Tip 1 */}
                <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold text-xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Bankroll Management</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Set a gambling budget before you start and never exceed it. Use the 5% rule - never bet more than 5% of your total bankroll on a single game or session.
                  </p>
                </div>

                {/* Tip 2 */}
                <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Choose High RTP Games</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Look for games with Return to Player (RTP) rates above 96%. Pokies like Starburst (96.1%) and Gonzo's Quest (95.97%) offer better long-term value.
                  </p>
                </div>

                {/* Tip 3 */}
                <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold text-xl">📖</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Read Bonus Terms</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Always read wagering requirements before claiming bonuses. Look for bonuses with 35x wagering or lower and check which games contribute to playthrough.
                  </p>
                </div>

                {/* Tip 4 */}
                <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold text-xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Set Time Limits</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Use casino time limit tools or set phone alarms. Take a 15-minute break every hour and never gamble when tired, stressed, or under the influence.
                  </p>
                </div>

                {/* Tip 5 */}
                <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold text-xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Verify Casino Licenses</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Only play at casinos licensed by reputable authorities like Malta Gaming Authority, UK Gambling Commission, or Curacao eGaming.
                  </p>
                </div>

                {/* Tip 6 */}
                <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold text-xl">🎮</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Practice in Demo Mode</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Try games in free play mode first to understand mechanics and features. This helps you develop strategies without risking real money.
                  </p>
                </div>
              </div>

              {/* Advanced Strategies */}
              <div className="border-t border-yellow-400/20 pt-12">
                <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Advanced Strategies for Experienced Players
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Strategy 1 */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                      Volatility Management
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Match your game choice to your bankroll size. High volatility pokies require larger bankrolls but offer bigger wins. 
                      Low volatility games provide more frequent, smaller wins perfect for extended play sessions.
                    </p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                      <p className="text-yellow-400 text-xs font-semibold">
                        💡 Pro Tip: Start with low volatility games if you're new to online gambling
                      </p>
                    </div>
                  </div>

                  {/* Strategy 2 */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                      Bonus Hunting Strategy
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Focus on bonuses with reasonable wagering requirements (35x or lower) and favorable game contributions. 
                      Pokies usually contribute 100%, while table games may contribute only 10-20%.
                    </p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                      <p className="text-yellow-400 text-xs font-semibold">
                        💡 Pro Tip: Calculate the true value of bonuses by considering wagering requirements
                      </p>
                    </div>
                  </div>

                  {/* Strategy 3 */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                      Payment Method Optimization
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Use e-wallets like PayPal, Skrill, or Neteller for faster withdrawals. Some casinos offer exclusive bonuses for specific payment methods. 
                      Avoid credit cards for gambling to prevent debt accumulation.
                    </p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                      <p className="text-yellow-400 text-xs font-semibold">
                        💡 Pro Tip: Set up separate accounts for gambling funds to better track spending
                      </p>
                    </div>
                  </div>

                  {/* Strategy 4 */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                      VIP Program Maximization
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Focus your play on one or two casinos to climb VIP tiers faster. Higher tiers offer better bonuses, faster withdrawals, 
                      and personal account managers. Track your progress and compare VIP benefits across casinos.
                    </p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                      <p className="text-yellow-400 text-xs font-semibold">
                        💡 Pro Tip: Ask about VIP program benefits before making large deposits
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsible Gambling Reminder */}
              <div className="mt-12 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-400/30 rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <span className="text-red-400 mr-3">⚠️</span>
                  Remember: Gambling Should Be Fun
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  These tips are designed to help you play smarter, but remember that gambling should always be treated as entertainment, not as a way to make money. 
                  If gambling stops being fun or starts affecting your life negatively, it's time to take a break.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://www.gamblinghelponline.org.au" target="_blank" rel="noopener noreferrer" 
                     className="glass-effect text-white font-semibold px-6 py-3 rounded-full border border-red-400/50 hover:border-red-400 transition-all duration-300">
                    Get Help - Gambling Help Online
                  </a>
                  <a href="https://www.gambleaware.org.au" target="_blank" rel="noopener noreferrer"
                     className="glass-effect text-white font-semibold px-6 py-3 rounded-full border border-red-400/50 hover:border-red-400 transition-all duration-300">
                    Gamble Aware Australia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Banking Options For Online Casinos In Australia */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Best Banking Options For Online Casinos In Australia
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Australian players have access to a wide variety of secure and convenient banking methods for online casino deposits and withdrawals. 
                From traditional bank transfers to modern digital wallets and cryptocurrencies, choose the payment option that best suits your needs.
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8 md:p-12">
              {/* Payment Methods Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    name: "Credit & Debit Cards",
                    icon: "💳",
                    methods: ["Visa", "Mastercard", "American Express"],
                    depositTime: "Instant",
                    withdrawalTime: "3-5 business days",
                    fees: "Usually free",
                    pros: ["Widely accepted", "Instant deposits", "Familiar to use"],
                    cons: ["Slower withdrawals", "May have limits"]
                  },
                  {
                    name: "Bank Transfer",
                    icon: "🏦",
                    methods: ["Direct Bank Transfer", "Wire Transfer", "BPAY"],
                    depositTime: "1-3 business days",
                    withdrawalTime: "3-7 business days",
                    fees: "May apply",
                    pros: ["High security", "Large transaction limits", "Direct to bank"],
                    cons: ["Slower processing", "Potential fees"]
                  },
                  {
                    name: "Digital Wallets",
                    icon: "📱",
                    methods: ["PayPal", "Skrill", "Neteller", "ecoPayz"],
                    depositTime: "Instant",
                    withdrawalTime: "24-48 hours",
                    fees: "Low fees",
                    pros: ["Fast withdrawals", "Extra security layer", "Easy to use"],
                    cons: ["Not all casinos accept", "Account verification needed"]
                  },
                  {
                    name: "Prepaid Cards",
                    icon: "🎫",
                    methods: ["Paysafecard", "Neosurf", "Flexepin"],
                    depositTime: "Instant",
                    withdrawalTime: "Not available",
                    fees: "Purchase fees may apply",
                    pros: ["Anonymous deposits", "Budget control", "No bank details needed"],
                    cons: ["Deposit only", "Limited availability", "Purchase required"]
                  },
                  {
                    name: "Cryptocurrency",
                    icon: "₿",
                    methods: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin"],
                    depositTime: "15-60 minutes",
                    withdrawalTime: "15-60 minutes",
                    fees: "Network fees only",
                    pros: ["Fast transactions", "Low fees", "High privacy"],
                    cons: ["Price volatility", "Technical knowledge needed", "Limited acceptance"]
                  },
                  {
                    name: "Mobile Payments",
                    icon: "📲",
                    methods: ["Apple Pay", "Google Pay", "Samsung Pay"],
                    depositTime: "Instant",
                    withdrawalTime: "Varies",
                    fees: "Usually free",
                    pros: ["Convenient", "Secure", "Quick setup"],
                    cons: ["Limited casino support", "Deposit focused", "Device dependent"]
                  }
                ].map((method, index) => (
                  <div key={index} className="casino-card glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{method.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{method.name}</h3>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {method.methods.map((m, i) => (
                          <span key={i} className="bg-yellow-400 bg-opacity-20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Deposit Time:</span>
                        <span className="text-green-400 font-semibold">{method.depositTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Withdrawal Time:</span>
                        <span className="text-blue-400 font-semibold">{method.withdrawalTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Fees:</span>
                        <span className="text-yellow-400 font-semibold">{method.fees}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="glass-effect rounded-xl p-4">
                        <h4 className="text-green-400 font-bold mb-2 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          Pros
                        </h4>
                        <ul className="space-y-1">
                          {method.pros.map((pro, i) => (
                            <li key={i} className="text-gray-300 text-sm">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="glass-effect rounded-xl p-4">
                        <h4 className="text-red-400 font-bold mb-2 flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          Cons
                        </h4>
                        <ul className="space-y-1">
                          {method.cons.map((con, i) => (
                            <li key={i} className="text-gray-300 text-sm">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Banking Tips */}
              <div className="border-t border-yellow-400/20 pt-12">
                <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Smart Banking Tips for Australian Players
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: "🔒",
                      title: "Verify Security",
                      tip: "Always ensure the casino uses SSL encryption and secure payment gateways before making deposits."
                    },
                    {
                      icon: "💰",
                      title: "Check Limits",
                      tip: "Review minimum and maximum deposit/withdrawal limits to ensure they match your playing style."
                    },
                    {
                      icon: "⚡",
                      title: "Consider Speed",
                      tip: "Choose faster withdrawal methods like e-wallets if you prefer quick access to your winnings."
                    },
                    {
                      icon: "📋",
                      title: "Read Terms",
                      tip: "Always read the banking terms and conditions, including any fees or processing times."
                    }
                  ].map((tip, index) => (
                    <div key={index} className="glass-dark rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                      <div className="text-4xl mb-4">{tip.icon}</div>
                      <h4 className="text-white font-bold mb-3">{tip.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{tip.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notice */}
              <div className="mt-12 glass-dark rounded-2xl p-8 border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚠️</div>
                  <div>
                    <h4 className="text-yellow-400 font-bold text-xl mb-3">Important Banking Information</h4>
                    <div className="space-y-2 text-gray-300">
                      <p>• Always verify your identity before making your first withdrawal to avoid delays</p>
                      <p>• Some banks may block gambling transactions - contact your bank if deposits are declined</p>
                      <p>• Keep records of all transactions for tax purposes as gambling winnings may be taxable</p>
                      <p>• Use the same payment method for deposits and withdrawals when possible</p>
                      <p>• Contact customer support if you experience any banking issues</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Casinos in Australia FAQs */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <HelpCircle className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Online Casinos in Australia FAQs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about playing at online casinos in Australia. 
                Our expert team has compiled comprehensive answers to help you make informed decisions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-3xl p-8">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-yellow-400/20 last:border-b-0">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left py-6 flex items-center justify-between hover:text-yellow-400 transition-colors duration-300"
                      >
                        <h3 className="text-xl font-bold text-white pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {openFAQ === index ? (
                            <ChevronUp className="h-6 w-6 text-yellow-400" />
                          ) : (
                            <ChevronDown className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        openFAQ === index ? 'max-h-96 pb-6' : 'max-h-0'
                      }`}>
                        <div className="text-gray-300 leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 pt-8 border-t border-yellow-400/20 text-center">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Still Have Questions?
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Our expert team is here to help you find the perfect online casino for your needs.
                  </p>
                  <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Contact Our Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-gray-800 py-20">
        </div>
        {/* How We Review Casinos - CasinoBuddies Style */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                How We Review Online Casinos
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our comprehensive review process ensures you get honest, detailed information about every casino we recommend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Registration & Testing",
                  description: "We create real accounts and test the entire registration process, from sign-up to verification.",
                  icon: Users,
                  details: ["Account creation process", "Identity verification", "Welcome bonus claiming", "Initial deposit testing"]
                },
                {
                  step: "02",
                  title: "Games & Software",
                  description: "We test hundreds of games across all categories to evaluate quality, fairness, and variety.",
                  icon: Zap,
                  details: ["Slot machine testing", "Live dealer games", "Table games variety", "Mobile compatibility"]
                },
                {
                  step: "03",
                  title: "Banking & Security",
                  description: "We thoroughly test deposit and withdrawal methods, security measures, and payment processing times.",
                  icon: Shield,
                  details: ["Deposit methods", "Withdrawal testing", "Security protocols", "License verification"]
                },
                {
                  step: "04",
                  title: "Customer Support",
                  description: "We evaluate response times, helpfulness, and availability of customer support channels.",
                  icon: Clock,
                  details: ["Live chat testing", "Email response times", "Phone support quality", "FAQ comprehensiveness"]
                },
                {
                  step: "05",
                  title: "Bonuses & Promotions",
                  description: "We analyze all bonus offers, terms and conditions, and ongoing promotional value.",
                  icon: Gift,
                  details: ["Welcome bonus terms", "Wagering requirements", "Ongoing promotions", "VIP program benefits"]
                },
                {
                  step: "06",
                  title: "Final Rating",
                  description: "We compile all findings into a comprehensive rating and detailed review for our users.",
                  icon: Star,
                  details: ["Overall score calculation", "Pros and cons analysis", "Player recommendations", "Regular updates"]
                }
              ].map((item, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {item.step}
                    </div>
                    <item.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-400 text-sm flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

  {/* Casino Cards */}
       <div className="space-y-6 max-w-5xl mx-auto p-4">
      {casinos.map((casino) => (
        <CasinoCard key={casino.id} casino={casino} />
      ))}
    </div>

 

        {/* How We Review Casinos - CasinoBuddies Style */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                How We Review Online Casinos
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our comprehensive review process ensures you get honest, detailed information about every casino we recommend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Registration & Testing",
                  description: "We create real accounts and test the entire registration process, from sign-up to verification.",
                  icon: Users,
                  details: ["Account creation process", "Identity verification", "Welcome bonus claiming", "Initial deposit testing"]
                },
                {
                  step: "02",
                  title: "Games & Software",
                  description: "We test hundreds of games across all categories to evaluate quality, fairness, and variety.",
                  icon: Zap,
                  details: ["Slot machine testing", "Live dealer games", "Table games variety", "Mobile compatibility"]
                },
                {
                  step: "03",
                  title: "Banking & Security",
                  description: "We thoroughly test deposit and withdrawal methods, security measures, and payment processing times.",
                  icon: Shield,
                  details: ["Deposit methods", "Withdrawal testing", "Security protocols", "License verification"]
                },
                {
                  step: "04",
                  title: "Customer Support",
                  description: "We evaluate response times, helpfulness, and availability of customer support channels.",
                  icon: Clock,
                  details: ["Live chat testing", "Email response times", "Phone support quality", "FAQ comprehensiveness"]
                },
                {
                  step: "05",
                  title: "Bonuses & Promotions",
                  description: "We analyze all bonus offers, terms and conditions, and ongoing promotional value.",
                  icon: Gift,
                  details: ["Welcome bonus terms", "Wagering requirements", "Ongoing promotions", "VIP program benefits"]
                },
                {
                  step: "06",
                  title: "Final Rating",
                  description: "We compile all findings into a comprehensive rating and detailed review for our users.",
                  icon: Star,
                  details: ["Overall score calculation", "Pros and cons analysis", "Player recommendations", "Regular updates"]
                }
              ].map((item, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {item.step}
                    </div>
                    <item.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-400 text-sm flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
         {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Why Choose Elite Wins?
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
              At Elite Wins, our mission is to guide Australian players toward the best online casino sites that accept AUD deposits and withdrawals. We only recommend casinos that are fully secure, reliable, and tailored for Aussie players. Whether you enjoy classic table games like roulette, blackjack, craps, baccarat, or sic bo, or prefer spinning the reels on real money online pokies, Elite Wins ensures you'll find safe, top-rated platforms to play and win.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Trusted Reviews", description: "Honest, detailed reviews from casino experts" },
                { icon: Zap, title: "Exclusive Bonuses", description: "Access to the best casino bonuses and promotions" },
                { icon: TrendingUp, title: "Top Rated", description: "Only the highest rated casinos make our list" }
              ].map((feature, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Featured Casinos */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Featured Casinos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCasinos.map((casino) => (
                <div key={casino.id} className="casino-card glass-dark rounded-2xl p-6 shadow-xl group">
                  <div className="text-center mb-6">
                    <img
                      src={casino.logo}
                      alt={`${casino.name} logo`}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-yellow-400 shadow-lg"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2">{casino.name}</h3>
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(casino.rating) ? 'star-rating fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                      <span className="ml-2 text-yellow-400 font-semibold">{casino.rating}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-xl p-4 mb-6">
                    <p className="text-black font-bold text-center text-lg">{casino.bonus}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {casino.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Crown className="h-4 w-4 text-yellow-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="glossy-btn w-full text-black font-bold py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    {casino.ctaText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Offers */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Latest Bonus Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bonusOffers.map((offer, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {offer.type}
                    </div>
                    <Gift className="h-6 w-6 text-yellow-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-xl text-yellow-400 mb-4 font-semibold">{offer.description}</p>
                  <p className="text-gray-300 mb-2">Casino: {offer.casino}</p>
                  <p className="text-gray-400 text-sm mb-6">Valid until: {offer.validUntil}</p>
                  
                  <button className="glossy-btn w-full text-black font-bold py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Claim Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Ready to Win Big?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of players who trust Elite Wins for the best casino experiences and exclusive bonuses
              </p>
              <Link
                to="/casino-reviews"
                className="glossy-btn text-black font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl inline-block"
              >
                Start Playing Now
              </Link>
            </div>
          </div>
        </section>
        </section>
      </div>
    </>
  );
};

export default LandingPage;