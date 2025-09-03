import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, Zap, Users, Clock, Gift, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';
import CasinoCard from '../components/CasinoCard';
import { useGeoLocation } from '../hooks/useGeoLocation';

const LandingPage = () => {
  const { country, countryCode, loading: geoLoading } = useGeoLocation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Casino data with geo-targeting support
  const casinos = [
    {
      id: 1,
      name: "Royal Palace Casino",
      logo: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      rating: 4.8,
      bonus: "200% up to $2,000 + 100 Free Spins",
      description: `Experience the ultimate in luxury gaming with Royal Palace Casino's extensive collection of premium slots and live dealer games, now available to players in ${country}.`,
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
      description: `Diamond Jackpot offers an impressive selection of progressive jackpots and innovative slot games with stunning graphics, welcoming players from ${country}.`,
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
      description: `Golden Crown stands out with its exceptional live casino experience and exclusive VIP rewards program, proudly serving ${country} players.`,
      features: {
        games: "1800+",
        license: "UK Gambling Commission",
        support: "24/7 Phone & Chat",
        withdrawal: "Same day"
      }
    }
  ];

  // Testimonials with geo-targeting
  const testimonials = [
    {
      name: "Sarah M.",
      location: country,
      rating: 5,
      text: `Elite Wins helped me find the perfect casino for ${country} players. Their reviews are spot-on and saved me from making costly mistakes!`,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    },
    {
      name: "Mike T.",
      location: country,
      rating: 5,
      text: `As a ${country} player, I appreciate how Elite Wins focuses on casinos that actually accept players from our region. Great service!`,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    },
    {
      name: "Emma L.",
      location: country,
      rating: 5,
      text: `The bonus recommendations for ${country} players are incredible. I've claimed several exclusive offers through Elite Wins!`,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Licensed & Secure",
      description: `All recommended casinos are fully licensed and regulated, ensuring safe gaming for ${country} players.`
    },
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      description: `Access special bonus offers and promotions available exclusively to ${country} residents.`
    },
    {
      icon: Star,
      title: "Expert Reviews",
      description: `Our team of ${country}-based experts thoroughly test and review each casino for authenticity.`
    },
    {
      icon: Users,
      title: "Player Support",
      description: `24/7 customer support with dedicated assistance for ${country} players and local payment methods.`
    }
  ];

  const stats = [
    { number: "500+", label: "Casinos Reviewed" },
    { number: "50K+", label: `${country} Players Helped` },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Expert Support" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

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
        <title>{`Elite Wins - Best Online Casinos for ${country} Players | Expert Reviews & Bonuses`}</title>
        <meta name="description" content={`Discover the best online casinos for ${country} players. Expert reviews, exclusive bonuses, and trusted recommendations from Elite Wins casino experts.`} />
        <meta name="keywords" content={`${country} online casinos, casino reviews ${country}, best casinos ${countryCode}, online gambling ${country}`} />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-gray-900/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="floating-animation">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Elite Wins
                </h1>
                <p className="text-2xl md:text-3xl text-white mb-4 font-semibold">
                  Best Online Casinos for {country} Players
                </p>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Discover trusted, licensed casinos with exclusive bonuses tailored for {country} residents. 
                  Expert reviews, secure gaming, and 24/7 support for the ultimate casino experience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg">
                  <Gift className="inline h-6 w-6 mr-2" />
                  Claim {country} Exclusive Bonuses
                </button>
                <button className="glass-effect text-white font-semibold px-8 py-4 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg">
                  <Star className="inline h-6 w-6 mr-2" />
                  View {country} Casino Reviews
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Casinos */}
        <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Top Casinos for {country} Players
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hand-picked casinos that welcome {country} players with exclusive bonuses, 
                local payment methods, and dedicated customer support.
              </p>
            </div>
            
            <div className="space-y-8">
              {casinos.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Why {country} Players Choose Elite Wins
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the unique needs of {country} players and provide tailored recommendations 
                for the best possible gaming experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="casino-card glass-dark rounded-2xl p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-black/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                What {country} Players Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real testimonials from satisfied {country} players who found their perfect casino through Elite Wins.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-8 w-8 star-rating fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl text-white mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full border-2 border-yellow-400 mr-4"
                    />
                    <div className="text-left">
                      <div className="text-yellow-400 font-bold text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-400">
                        Verified Player from {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-yellow-400' : 'bg-white bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <TrendingUp className="h-16 w-16 text-yellow-400 mx-auto mb-8" />
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Ready to Start Winning in {country}?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of {country} players who trust Elite Wins for the best casino recommendations, 
                exclusive bonuses, and expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg">
                  <Award className="inline h-6 w-6 mr-2" />
                  Get {country} Casino Recommendations
                </button>
                <button className="glass-effect text-white font-semibold px-8 py-4 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg">
                  <CheckCircle className="inline h-6 w-6 mr-2" />
                  View All {country} Bonuses
                </button>
              </div>
              
              <div className="flex items-center justify-center text-gray-400 text-sm">
                <Shield className="h-4 w-4 mr-2" />
                <span>Licensed & Regulated • 18+ Only • Gamble Responsibly in {country}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;