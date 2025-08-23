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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-animation"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-animation" style={{ animationDelay: '-2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-animation" style={{ animationDelay: '-4s' }}></div>
          </div>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Best Online Casinos 2025 - Top Rated Casino Sites
              </h1>
              <div className="space-y-6 mb-8">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  Discover the <strong className="text-yellow-400">best online casinos</strong> with exclusive bonuses, trusted reviews, and premium gaming experiences. EliteWins provides comprehensive casino reviews, ratings, and expert analysis to help you find the perfect online gambling destination.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="glass-dark rounded-xl p-4">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Licensed & Secure
                    </h3>
                    <p className="text-gray-300 text-sm">
                      All featured <strong>online casinos</strong> are fully licensed by reputable gaming authorities including Malta Gaming Authority, UK Gambling Commission, and Curacao eGaming.
                    </p>
                  </div>
                  
                  <div className="glass-dark rounded-xl p-4">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2 flex items-center">
                      <Gift className="h-5 w-5 mr-2" />
                      Exclusive Bonuses
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Access <strong>casino bonuses</strong> up to $5,000, free spins, no deposit bonuses, and VIP rewards exclusive to EliteWins players.
                    </p>
                  </div>
                  
                  <div className="glass-dark rounded-xl p-4">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2 flex items-center">
                      <Star className="h-5 w-5 mr-2" />
                      Expert Reviews
                    </h3>
                    <p className="text-gray-300 text-sm">
                      In-depth <strong>casino reviews</strong> covering game selection, payment methods, customer support, and withdrawal times from industry experts.
                    </p>
                  </div>
                </div>
                
                <div className="bg-black bg-opacity-30 rounded-xl p-6 text-left">
                  <h2 className="text-2xl font-bold text-white mb-4">Why Choose Our Top Online Casinos?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">🎰 Game Variety</h4>
                      <p className="text-sm mb-3">Over 2,000+ slots, live dealer games, blackjack, roulette, poker, and progressive jackpots from top providers like NetEnt, Microgaming, and Evolution Gaming.</p>
                      
                      <h4 className="font-semibold text-yellow-400 mb-2">💰 Best Casino Bonuses</h4>
                      <p className="text-sm mb-3">Welcome bonuses up to 200%, daily promotions, cashback offers, and loyalty programs with real value for players.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">⚡ Fast Payouts</h4>
                      <p className="text-sm mb-3">Quick withdrawals within 24 hours, multiple payment methods including crypto, and transparent banking policies.</p>
                      
                      <h4 className="font-semibold text-yellow-400 mb-2">🛡️ Player Protection</h4>
                      <p className="text-sm">SSL encryption, responsible gambling tools, fair play certification, and 24/7 customer support for safe online gambling.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mb-4">
                  <span className="bg-yellow-400 bg-opacity-20 px-3 py-1 rounded-full">🏆 #1 Casino Review Site</span>
                  <span className="bg-yellow-400 bg-opacity-20 px-3 py-1 rounded-full">✅ 500+ Casinos Reviewed</span>
                  <span className="bg-yellow-400 bg-opacity-20 px-3 py-1 rounded-full">🎯 Expert Analysis</span>
                  <span className="bg-yellow-400 bg-opacity-20 px-3 py-1 rounded-full">🔒 Safe & Secure</span>
                </div>
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
                  🎁 Claim Exclusive Bonuses
                </Link>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  <strong>Last Updated:</strong> January 2025 | <strong>Casinos Reviewed:</strong> 500+ | <strong>Players Helped:</strong> 50,000+
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  18+ Only | Gamble Responsibly | Terms & Conditions Apply
                </p>
              </div>
              
            </div>
          </div>
        </div>
        </section>

  {/* Casino Cards */}
       <div className="space-y-6 max-w-5xl mx-auto p-4">
      {casinos.map((casino) => (
        <CasinoCard key={casino.id} casino={casino} />
      ))}
    </div>

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