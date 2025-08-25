import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Shield, Zap, Gift, Crown, Users, Clock, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
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
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

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
      

  return (
    <>
      <Helmet>
        <title>Best Online Casinos - Top Online Casinos in 2025</title>
        <meta name="description" content="Discover the best online casinos with exclusive bonuses, honest reviews, and top promotions. Join Elite Wins for premium casino experiences." />
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
                  className="glass-effect text-white font-semibold px-8 py-4 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-lg"
                >
                  🎁 View All Bonuses
                </Link>
              </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;