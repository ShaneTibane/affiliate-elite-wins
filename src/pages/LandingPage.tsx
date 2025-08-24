import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Crown, Gift, Zap, Shield, Users, Clock, TrendingUp, Award, CheckCircle } from 'lucide-react';
import CasinoCard from '../components/CasinoCard';

// Define the shape of casino data
interface Casino {
  id: number;
  name: string;
  logo: string;
  rating: number;
  description: string;
  bonus: string;
  isCasinoOfTheMonth?: boolean;
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

  const topCasinos: Casino[] = [
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
      description: "Honest, unbiased reviews from industry experts"
    },
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      description: "Access to special offers and promotions"
    },
    {
      icon: Award,
      title: "Expert Analysis",
      description: "In-depth analysis of games, security, and support"
    },
    {
      icon: Users,
      title: "Player Protection",
      description: "Ensuring safe and responsible gaming experiences"
    }
  ];

  const stats = [
    { number: "500+", label: "Casinos Reviewed" },
    { number: "50K+", label: "Players Helped" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <>
      <Helmet>
        <title>EliteWins - Top Casino Reviews & Exclusive Bonuses</title>
        <meta name="description" content="Discover the best online casinos with expert reviews, exclusive bonuses, and trusted recommendations. Find your perfect gaming experience today." />
        <meta name="keywords" content="online casino reviews, casino bonuses, gambling reviews, best casinos, casino ratings" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="floating-animation mb-8">
                <Crown className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                EliteWins
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your Gateway to the World's <span className="text-yellow-400 font-semibold">Premier Online Casinos</span>
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                Expert reviews, exclusive bonuses, and trusted recommendations to elevate your gaming experience
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="glossy-btn text-black font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg">
                  Explore Top Casinos
                </button>
                <button className="glass-effect text-white font-semibold px-10 py-4 rounded-full border border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-lg">
                  View Latest Bonuses
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Casinos */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Top Rated Casinos
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Handpicked by our experts for exceptional gaming experiences, security, and player satisfaction
              </p>
            </div>

            <div className="space-y-8">
              {topCasinos.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
                View All Casino Reviews
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Why Choose EliteWins?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're committed to providing you with the most comprehensive and trustworthy casino reviews in the industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="casino-card glass-dark rounded-2xl p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Promotions Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Exclusive Promotions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't miss out on these limited-time offers from our partner casinos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Welcome Bonus Extravaganza",
                  description: "Up to $5,000 + 200 Free Spins",
                  casino: "Multiple Casinos",
                  validUntil: "Limited Time"
                },
                {
                  title: "No Deposit Special",
                  description: "50 Free Spins - No Deposit Required",
                  casino: "Selected Partners",
                  validUntil: "This Week Only"
                },
                {
                  title: "VIP High Roller Package",
                  description: "Exclusive bonuses for premium players",
                  casino: "Elite Casinos",
                  validUntil: "Ongoing"
                }
              ].map((promo, index) => (
                <div key={index} className="casino-card glass-dark rounded-2xl p-8 text-center group">
                  <Gift className="h-12 w-12 text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-4">{promo.title}</h3>
                  <p className="text-xl text-yellow-400 font-semibold mb-4">{promo.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-300">Available at: <span className="text-white">{promo.casino}</span></p>
                    <p className="text-gray-400 text-sm">Valid: {promo.validUntil}</p>
                  </div>
                  <button className="glossy-btn w-full text-black font-bold py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Claim Now
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="glass-effect text-white font-semibold px-8 py-4 rounded-full border border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-lg">
                View All Promotions
              </button>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-purple-900/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-effect rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Trusted by Players Worldwide
                </h2>
                <p className="text-xl text-gray-300">
                  Our commitment to transparency and player protection has earned us the trust of thousands
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Licensed & Regulated",
                    description: "We only review casinos with proper licensing and regulation"
                  },
                  {
                    icon: CheckCircle,
                    title: "Verified Reviews",
                    description: "Every review is based on real testing and player feedback"
                  },
                  {
                    icon: TrendingUp,
                    title: "Regular Updates",
                    description: "Our reviews are continuously updated to reflect current standards"
                  }
                ].map((trust, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-6">
                      <trust.icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{trust.title}</h3>
                    <p className="text-gray-300">{trust.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12 text-center">
              <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-8" />
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Ready to Find Your Perfect Casino?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied players who trust EliteWins for their casino recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="glossy-btn text-black font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg">
                  Start Exploring Now
                </button>
                <button className="glass-effect text-white font-semibold px-10 py-4 rounded-full border border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-lg">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;