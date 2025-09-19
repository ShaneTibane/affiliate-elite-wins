import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Shield, Zap, Users, Clock, Gift, Crown, Award, TrendingUp } from 'lucide-react';
import CasinoCard from '../components/CasinoCard';
import VipListForm from '../components/VipListForm';
import { useGeoLocation } from '../hooks/useGeoLocation';

const LandingPage = () => {
  const { country } = useGeoLocation();

  const topCasinos = [
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
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Trusted Reviews",
      description: "Honest, unbiased reviews from industry experts with years of experience in {country}."
    },
    {
      icon: Award,
      title: "Exclusive Bonuses",
      description: "Access to special promotions and bonuses not available elsewhere for {country} players."
    },
    {
      icon: Users,
      title: "Player Protection",
      description: "We only recommend licensed, secure casinos that prioritize player safety in {country}."
    },
    {
      icon: TrendingUp,
      title: "Latest Updates",
      description: "Stay informed with the newest casino launches and industry trends in {country}."
    }
  ];

  const stats = [
    { number: "500+", label: "Casinos Reviewed" },
    { number: "50K+", label: "Players Helped" },
    { number: "5", label: "Years Experience" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Elite Casinos - Best Online Casino Reviews & Bonuses 2024</title>
        <meta name="description" content="Discover the best online casinos with expert reviews, exclusive bonuses, and trusted recommendations. Find your perfect casino experience today." />
        <meta name="keywords" content="online casino, casino reviews, casino bonuses, best casinos, gambling, slots" />
        <link rel="canonical" href="https://shanetibane-affiliat-itlk.bolt.host/" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-yellow-400/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight">
                Elite Casinos
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
                Discover the world's best online casinos with expert reviews, exclusive bonuses, and trusted recommendations for {country} players.
              </p>
              <div className="flex justify-center">
                <Link
                  to="/casino-reviews"
                  className="glossy-btn text-black font-bold px-12 py-6 rounded-full text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 inline-flex items-center"
                >
                  <Crown className="mr-3 h-6 w-6" />
                  Find Your Perfect Casino
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 floating-animation">
            <div className="glass-effect rounded-full p-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
          <div className="absolute top-1/3 right-10 floating-animation" style={{ animationDelay: '2s' }}>
            <div className="glass-effect rounded-full p-4">
              <Gift className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 floating-animation" style={{ animationDelay: '4s' }}>
            <div className="glass-effect rounded-full p-4">
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Casinos Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Top Rated Casinos for {country}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert team has tested and reviewed hundreds of online casinos to bring you only the best options available to {country} players.
              </p>
            </div>
            
            <div className="space-y-8">
              {topCasinos.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/casino-reviews"
                className="glass-effect text-white font-semibold px-8 py-4 rounded-full border border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300 inline-flex items-center"
              >
                View All Casino Reviews
                <Star className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Why Choose Elite Casinos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're committed to helping {country} players find safe, fair, and entertaining online casino experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="casino-card glass-dark rounded-2xl p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description.replace('{country}', country)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIP List Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <VipListForm />
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Trusted by Players Worldwide
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Licensed & Regulated</h3>
                  <p className="text-gray-300">We only recommend casinos with proper licensing and regulation in {country}.</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Industry Recognition</h3>
                  <p className="text-gray-300">Our reviews are trusted by industry professionals and {country} players alike.</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Player First</h3>
                  <p className="text-gray-300">Every recommendation prioritizes player safety and satisfaction in {country}.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-6">
                  <strong>Responsible Gaming:</strong> We promote responsible gambling practices. 
                  If you feel you may have a gambling problem, please seek help from organizations 
                  such as GamCare or Gamblers Anonymous in {country}.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-green-400" />
                    <span className="text-gray-400 text-sm font-medium">SSL Secured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-blue-400" />
                    <span className="text-gray-400 text-sm font-medium">Industry Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-purple-400" />
                    <span className="text-gray-400 text-sm font-medium">Player Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;