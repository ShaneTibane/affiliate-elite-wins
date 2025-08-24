import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Shield, Zap, Gift, Crown, Users, Clock } from 'lucide-react';
import CasinoCard from '../components/CasinoCard';
import { businessLogicService } from "../services/businessLogicService";
import { ListPayload } from "../models/ListPayload";
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
const casinos = [
    {
      id: 1,
      name: "Royal Palace Casino",
      logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.8,
      bonus: "200% up to $2,000 + 100 Free Spins",
      description: "Experience the ultimate in luxury gaming with Royal Palace Casino's extensive collection of premium slots and live dealer games.",
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
        {/* Casino of the Month Section */}
        <div className="mb-16 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 rounded-3xl border border-yellow-400/50 overflow-hidden">
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

  return (
    <>
      <Helmet>
        <title>Best Online Casinos - Top Online Casinos in 2025</title>
        <meta name="description" content="Discover the best online casinos with exclusive bonuses, honest reviews, and top promotions. Join EliteWins for premium casino experiences." />
        <meta name="keywords" content="online casino, casino bonus, casino reviews, gambling, slots, jackpots" />
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
              Best Online Casinos Australia 2025
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
                Top 6 Online Casinos Comparison 2025
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

        {/* Top Casino Comparison Table - Inspired by CasinoBuddies */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Top 6 Online Casinos Comparison 2025
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Compare the best online casinos side by side. Our experts have tested and ranked these casinos based on bonuses, games, security, and player experience.
              </p>
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Why Choose EliteWins?
            </h2>
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

       

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Why Choose EliteWins?
            </h2>
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
                Join thousands of players who trust EliteWins for the best casino experiences and exclusive bonuses
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
      </div>
    </>
  );
};

export default LandingPage;