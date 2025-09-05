import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, Zap, Users, Clock, Gift, Filter } from 'lucide-react';
import VipListForm from '../components/VipListForm';

const CasinoReviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const casinos = [
    {
      id: 1,
      name: "Royal Palace Casino",
      logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.8,
      bonus: "200% up to $2,000 + 100 Free Spins",
      description: "Experience the ultimate in luxury gaming with Royal Palace Casino's extensive collection of premium slots and live dealer games.",
      pros: ["Excellent customer support", "Fast withdrawals", "VIP program", "Mobile optimized"],
      cons: ["High wagering requirements", "Limited cryptocurrency options"],
      features: {
        games: "2000+",
        license: "Malta Gaming Authority",
        support: "24/7 Live Chat",
        withdrawal: "1-3 days"
      },
      category: "premium"
    },
    {
      id: 2,
      name: "Diamond Jackpot",
      logo: "https://images.pexels.com/photos/6963197/pexels-photo-6963197.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.7,
      bonus: "100 Free Spins No Deposit",
      description: "Diamond Jackpot offers an impressive selection of progressive jackpots and innovative slot games with stunning graphics.",
      pros: ["No deposit bonus", "Progressive jackpots", "Regular tournaments", "Crypto friendly"],
      cons: ["Limited live dealer games", "Restricted in some countries"],
      features: {
        games: "1500+",
        license: "Curacao eGaming",
        support: "24/7 Email & Chat",
        withdrawal: "24-48 hours"
      },
      category: "popular"
    },
    {
      id: 3,
      name: "Golden Crown",
      logo: "https://images.pexels.com/photos/6963478/pexels-photo-6963478.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.9,
      bonus: "$500 Welcome Package + 200 FS",
      description: "Golden Crown stands out with its exceptional live casino experience and exclusive VIP rewards program.",
      pros: ["Premium live dealers", "Exclusive VIP perks", "High betting limits", "Multiple languages"],
      cons: ["Higher minimum deposits", "Complex bonus terms"],
      features: {
        games: "1800+",
        license: "UK Gambling Commission",
        support: "24/7 Phone & Chat",
        withdrawal: "Same day"
      },
      category: "vip"
    },
    {
      id: 4,
      name: "Lucky Stars Casino",
      logo: "https://images.pexels.com/photos/6963765/pexels-photo-6963765.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.6,
      bonus: "150% up to $1,500",
      description: "Lucky Stars Casino provides a perfect balance of classic and modern games with generous daily promotions.",
      pros: ["Daily promotions", "Classic game variety", "User-friendly interface", "Regular bonuses"],
      cons: ["Limited payment methods", "Average customer support"],
      features: {
        games: "1200+",
        license: "Malta Gaming Authority",
        support: "Live Chat 18 hours",
        withdrawal: "2-5 days"
      },
      category: "popular"
    },
    {
      id: 5,
      name: "Platinum Elite",
      logo: "https://images.pexels.com/photos/6963886/pexels-photo-6963886.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.9,
      bonus: "$1,000 High Roller Bonus",
      description: "Platinum Elite caters to high rollers with exclusive tables, personal account managers, and luxury rewards.",
      pros: ["High roller focus", "Personal managers", "Luxury rewards", "Premium experience"],
      cons: ["High minimum bets", "Exclusive membership required"],
      features: {
        games: "1000+",
        license: "Gibraltar Gambling Commission",
        support: "24/7 Personal Support",
        withdrawal: "Instant"
      },
      category: "vip"
    },
    {
      id: 6,
      name: "Neon Nights Casino",
      logo: "https://images.pexels.com/photos/6963312/pexels-photo-6963312.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.5,
      bonus: "50 Free Spins + 100% Match",
      description: "Neon Nights brings a modern, vibrant gaming experience with cutting-edge slots and innovative features.",
      pros: ["Modern interface", "Innovative games", "Mobile-first design", "Social features"],
      cons: ["New in market", "Limited game providers"],
      features: {
        games: "800+",
        license: "Curacao eGaming",
        support: "Live Chat & Email",
        withdrawal: "1-2 days"
      },
      category: "new"
    }
  ];

  const filteredCasinos = selectedFilter === 'all' 
    ? casinos 
    : casinos.filter(casino => casino.category === selectedFilter);

  const filters = [
    { value: 'all', label: 'All Casinos' },
    { value: 'premium', label: 'Premium' },
    { value: 'popular', label: 'Popular' },
    { value: 'vip', label: 'VIP' },
    { value: 'new', label: 'New' }
  ];

  return (
    <>
      <Helmet>
        <title>Casino Reviews - Elite Wins | In-Depth Casino Analysis</title>
        <meta name="description" content="Read comprehensive casino reviews with ratings, bonuses, pros & cons. Find the perfect online casino for your gaming preferences." />
        <meta name="keywords" content="casino reviews, online casino ratings, casino bonuses, gambling reviews" />
      </Helmet>

      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Casino Reviews
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover comprehensive reviews of the world's top online casinos. Our expert analysis covers bonuses, games, security, and user experience.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter.value
                    ? 'glossy-btn text-black'
                    : 'glass-effect text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <Filter className="inline h-4 w-4 mr-2" />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Casino Cards */}
          <div className="space-y-8">
            {filteredCasinos.map((casino) => (
              <div key={casino.id} className="casino-card glass-dark rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Casino Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={casino.logo}
                        alt={`${casino.name} logo`}
                        className="w-16 h-16 rounded-xl border-2 border-yellow-400 shadow-md"
                      />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-1">{casino.name}</h2>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < Math.floor(casino.rating) ? 'star-rating fill-current' : 'text-gray-600'}`}
                              />
                            ))}
                            <span className="ml-1 text-yellow-400 font-bold text-lg">{casino.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{casino.description}</p>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(casino.features).map(([key, value]) => (
                        <div key={key} className="glass-effect rounded-lg p-3 text-center">
                          <div className="text-yellow-400 mb-1">
                            {key === 'games' && <Zap className="h-5 w-5 mx-auto" />}
                            {key === 'license' && <Shield className="h-5 w-5 mx-auto" />}
                            {key === 'support' && <Users className="h-5 w-5 mx-auto" />}
                            {key === 'withdrawal' && <Clock className="h-5 w-5 mx-auto" />}
                          </div>
                          <p className="text-white font-semibold capitalize text-sm">{key}</p>
                          <p className="text-gray-300 text-xs">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bonus & CTA */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-xl p-4 text-center">
                      <Gift className="h-6 w-6 text-black mx-auto mb-2" />
                      <h3 className="text-black font-bold text-xl mb-1">Welcome Bonus</h3>
                      <p className="text-black font-semibold text-md">{casino.bonus}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <button className="glossy-btn w-full text-black font-bold py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-base">
                        Play Now
                      </button>
                      <button className="glass-effect w-full text-white font-semibold py-3 rounded-full border border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-sm">
                        Read Full Review
                      </button>
                    </div>

                    <div className="text-center text-gray-400 text-xs">
                      <p>18+ | Terms & Conditions Apply</p>
                      <p>Gamble Responsibly</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mb-16">
            <VipListForm />
          </div>

          <div className="text-center mt-16">
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-gray-300 mb-6">
                Our experts are constantly reviewing new casinos. Contact us for personalized recommendations.
              </p>
              <button className="glossy-btn text-black font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasinoReviews;