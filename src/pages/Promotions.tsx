import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Gift, Clock, Star, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

const Promotions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const featuredPromotions = [
    {
      id: 1,
      title: "Mega Welcome Package",
      description: "Get 200% bonus up to $2,000 + 200 Free Spins",
      casino: "Royal Palace Casino",
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      validUntil: "December 31, 2024",
      type: "Welcome Bonus",
      value: "$2000"
    },
    {
      id: 2,
      title: "No Deposit Special",
      description: "50 Free Spins - No deposit required",
      casino: "Diamond Jackpot",
      image: "https://images.pexels.com/photos/6963197/pexels-photo-6963197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      validUntil: "January 15, 2025",
      type: "No Deposit",
      value: "50 FS"
    },
    {
      id: 3,
      title: "VIP High Roller",
      description: "50% bonus up to $5,000 for premium players",
      casino: "Golden Crown",
      image: "https://images.pexels.com/photos/6963478/pexels-photo-6963478.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      validUntil: "Ongoing",
      type: "VIP Exclusive",
      value: "$5000"
    }
  ];

  const allPromotions = [
    {
      id: 4,
      title: "Weekend Reload Bonus",
      description: "50% bonus every Saturday and Sunday",
      casino: "Lucky Stars Casino",
      bonus: "50% up to $500",
      validUntil: "Every Weekend",
      type: "Reload",
      requirements: "Min deposit $50"
    },
    {
      id: 5,
      title: "Free Spin Friday",
      description: "Get 25 free spins every Friday",
      casino: "Neon Nights Casino",
      bonus: "25 Free Spins",
      validUntil: "Every Friday",
      type: "Weekly",
      requirements: "Deposit $25+"
    },
    {
      id: 6,
      title: "Cashback Monday",
      description: "10% cashback on all losses",
      casino: "Platinum Elite",
      bonus: "10% Cashback",
      validUntil: "Every Monday",
      type: "Cashback",
      requirements: "VIP members only"
    },
    {
      id: 7,
      title: "Tournament Special",
      description: "$10,000 prize pool tournament",
      casino: "Royal Palace Casino",
      bonus: "$10,000 Prize Pool",
      validUntil: "Dec 25, 2024",
      type: "Tournament",
      requirements: "Entry fee $10"
    },
    {
      id: 8,
      title: "Mobile Bonus",
      description: "Extra 20% bonus when playing on mobile",
      casino: "Diamond Jackpot",
      bonus: "20% Mobile Bonus",
      validUntil: "Jan 31, 2025",
      type: "Mobile",
      requirements: "Mobile app only"
    },
    {
      id: 9,
      title: "Loyalty Rewards",
      description: "Earn points for every bet placed",
      casino: "Golden Crown",
      bonus: "Loyalty Points",
      validUntil: "Ongoing",
      type: "Loyalty",
      requirements: "All players"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPromotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPromotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPromotions.length) % featuredPromotions.length);
  };

  return (
    <>
      <Helmet>
        <title>Casino Promotions & Bonuses - EliteWins | Latest Offers</title>
        <meta name="description" content="Discover the latest casino promotions, bonuses, and exclusive offers. Get free spins, welcome bonuses, and VIP rewards from top online casinos." />
        <meta name="keywords" content="casino promotions, casino bonuses, free spins, welcome bonus, no deposit bonus" />
      </Helmet>

      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Latest Promotions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover exclusive casino bonuses, free spins, and limited-time offers from the world's top online casinos.
            </p>
          </div>

          {/* Featured Promotions Carousel */}
          <div className="relative mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Featured Promotions
            </h2>
            <div className="relative overflow-hidden rounded-3xl glass-dark shadow-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {featuredPromotions.map((promo, index) => (
                  <div key={promo.id} className="w-full flex-shrink-0 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                      <div className="relative overflow-hidden">
                        <img
                          src={promo.image}
                          alt={promo.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-8 lg:p-12 flex items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black px-4 py-2 rounded-full text-sm font-bold">
                              {promo.type}
                            </span>
                            <span className="glass-effect px-4 py-2 rounded-full text-yellow-400 font-semibold">
                              {promo.value}
                            </span>
                          </div>
                          <h3 className="text-4xl font-bold text-white mb-4">{promo.title}</h3>
                          <p className="text-xl text-gray-300 mb-4">{promo.description}</p>
                          <p className="text-yellow-400 font-semibold mb-2">Casino: {promo.casino}</p>
                          <div className="flex items-center text-gray-400 mb-8">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Valid until: {promo.validUntil}</span>
                          </div>
                          <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
                            Claim Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-white hover:bg-opacity-20 p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-white hover:bg-opacity-20 p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {featuredPromotions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* All Promotions Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              All Current Promotions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPromotions.map((promo) => (
                <div key={promo.id} className="casino-card glass-dark rounded-2xl p-6 shadow-xl group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {promo.type}
                    </div>
                    <Gift className="h-6 w-6 text-yellow-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{promo.title}</h3>
                  <p className="text-gray-300 mb-4">{promo.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Casino:</span>
                      <span className="text-yellow-400 font-semibold">{promo.casino}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Bonus:</span>
                      <span className="text-white font-semibold">{promo.bonus}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Valid:</span>
                      <span className="text-green-400">{promo.validUntil}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Requirements:</span>
                      <span className="text-gray-300 text-sm">{promo.requirements}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="glossy-btn w-full text-black font-bold py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Claim Bonus
                    </button>
                    <button className="glass-effect w-full text-white font-semibold py-3 rounded-full border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Promotion Calendar */}
          <div className="glass-effect rounded-3xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent flex items-center justify-center">
              <Calendar className="mr-3 h-8 w-8" />
              Weekly Promotion Calendar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {[
                { day: 'Monday', promo: 'Cashback', desc: '10% cashback on losses' },
                { day: 'Tuesday', promo: 'Reload', desc: '25% reload bonus' },
                { day: 'Wednesday', promo: 'Free Play', desc: '$50 free play' },
                { day: 'Thursday', promo: 'Tournament', desc: 'Weekly tournament' },
                { day: 'Friday', promo: 'Free Spins', desc: '25 free spins' },
                { day: 'Saturday', promo: 'Reload', desc: '50% reload bonus' },
                { day: 'Sunday', promo: 'VIP Special', desc: 'Exclusive VIP offers' }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 glass-dark rounded-xl hover:scale-105 transition-all duration-300">
                  <h4 className="text-yellow-400 font-bold mb-2">{item.day}</h4>
                  <div className="text-white font-semibold mb-1">{item.promo}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-effect rounded-3xl p-12 text-center">
            <Tag className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Never Miss a Promotion
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive bonuses, free spins, and limited-time offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe anytime. 18+ Only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;