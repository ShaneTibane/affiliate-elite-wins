import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Shield, Zap, Gift, Crown } from 'lucide-react';

const LandingPage = () => {
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

  return (
    <>
      <Helmet>
        <title>EliteWins - Top Online Casino Reviews & Bonuses</title>
        <meta name="description" content="Discover the best online casinos with exclusive bonuses, honest reviews, and top promotions. Join EliteWins for premium casino experiences." />
        <meta name="keywords" content="online casino, casino bonus, casino reviews, gambling, slots, jackpots" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-animation"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-animation" style={{ animationDelay: '-2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-animation" style={{ animationDelay: '-4s' }}></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Elite Casino Experience
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Discover premium online casinos with exclusive bonuses, honest reviews, and unmatched rewards
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/casino-reviews"
                  className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  Explore Top Casinos
                </Link>
                <Link
                  to="/promotions"
                  className="glass-effect text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-lg border border-yellow-400"
                >
                  View Promotions
                </Link>
              </div>
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