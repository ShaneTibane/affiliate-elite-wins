import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, Zap, Users, Clock, Gift, Crown, TrendingUp, Award, CheckCircle, Target, Heart, Mail, Phone, MapPin, Calendar, Tag, ChevronDown, ChevronUp, HelpCircle, UserPlus } from 'lucide-react';
import CasinoCard from '../components/CasinoCard';
import { businessLogicService } from "../services/businessLogicService";
import { ListPayload } from "../models/ListPayload";

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [vipForm, setVipForm] = useState({
    email: '',
    name: '',
    preferences: {
      bonuses: false,
      newCasinos: false,
      pokies: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const whyChooseUsFeatures = [
    {
      icon: Shield,
      title: "100% Secure & Licensed",
      description: "All recommended casinos are fully licensed and use advanced encryption to protect your data and funds."
    },
    {
      icon: Star,
      title: "Expert Reviews",
      description: "Our team of gaming experts thoroughly test each casino to ensure quality, fairness, and reliability."
    },
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      description: "Access special promotions and bonuses available only through EliteWins partnerships."
    },
    {
      icon: Zap,
      title: "Fast Payouts",
      description: "We only recommend casinos with proven track records of quick and reliable withdrawal processing."
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Get help whenever you need it with round-the-clock customer support from our recommended casinos."
    },
    {
      icon: Award,
      title: "Award-Winning Casinos",
      description: "Play at industry-recognized casinos that have won awards for excellence and player satisfaction."
    }
  ];

  const bankingOptions = [
    {
      icon: "💳",
      title: "Credit & Debit Cards",
      methods: "Visa, Mastercard, American Express",
      depositTime: "Instant",
      withdrawalTime: "3-5 business days",
      fees: "Usually free deposits",
      pros: ["Widely accepted", "Instant deposits", "Secure transactions"],
      cons: ["Longer withdrawal times", "Some banks block gambling transactions"]
    },
    {
      icon: "🏦",
      title: "Bank Transfer",
      methods: "Direct Transfer, Wire Transfer, BPAY",
      depositTime: "1-3 business days",
      withdrawalTime: "3-7 business days",
      fees: "May have transfer fees",
      pros: ["High security", "Large transaction limits", "Direct from bank"],
      cons: ["Slower processing", "Higher fees", "Not instant"]
    },
    {
      icon: "📱",
      title: "Digital Wallets",
      methods: "PayPal, Skrill, Neteller, ecoPayz",
      depositTime: "Instant",
      withdrawalTime: "24-48 hours",
      fees: "Low to moderate fees",
      pros: ["Fast transactions", "Enhanced privacy", "Easy to use"],
      cons: ["Not all casinos accept", "Account verification required"]
    },
    {
      icon: "🎫",
      title: "Prepaid Cards",
      methods: "Paysafecard, Neosurf, Flexepin",
      depositTime: "Instant",
      withdrawalTime: "Not available",
      fees: "Purchase fees apply",
      pros: ["Anonymous deposits", "Budget control", "No bank details needed"],
      cons: ["Deposit only", "Limited availability", "Purchase fees"]
    },
    {
      icon: "₿",
      title: "Cryptocurrency",
      methods: "Bitcoin, Ethereum, Litecoin, Dogecoin",
      depositTime: "15-60 minutes",
      withdrawalTime: "1-24 hours",
      fees: "Network fees only",
      pros: ["Fast transactions", "Low fees", "Enhanced privacy"],
      cons: ["Price volatility", "Limited casino acceptance", "Technical knowledge needed"]
    },
    {
      icon: "📲",
      title: "Mobile Payments",
      methods: "Apple Pay, Google Pay, Samsung Pay",
      depositTime: "Instant",
      withdrawalTime: "Varies by casino",
      fees: "Usually free",
      pros: ["Convenient", "Secure", "Quick setup"],
      cons: ["Limited casino support", "Deposit limits", "Device dependent"]
    }
  ];

  const faqs = [
    {
      question: "Are online casinos legal in Australia?",
      answer: "Online casino gambling operates in a legal grey area in Australia. While the Interactive Gambling Act 2001 prohibits Australian companies from offering online casino services to Australian residents, it doesn't specifically prohibit Australians from playing at offshore online casinos. Many Australian players choose to play at licensed international casinos that accept AUD and cater to Australian players."
    },
    {
      question: "What are the best casino games for Australian players?",
      answer: "Australian players love a variety of casino games including online pokies (slot machines), blackjack, roulette, baccarat, and poker. Pokies are particularly popular, with many casinos offering hundreds of different titles. Live dealer games are also increasingly popular, providing an authentic casino experience from home. Many games are available in demo mode so you can try before you play with real money."
    },
    {
      question: "Can I play online casinos with Australian dollars (AUD)?",
      answer: "Yes, many reputable online casinos accept Australian dollars as a primary currency. This eliminates currency conversion fees and makes it easier to manage your bankroll. Look for casinos that specifically cater to Australian players and offer AUD as a supported currency for both deposits and withdrawals."
    },
    {
      question: "What payment methods are available for Australian players?",
      answer: "Australian players have access to various payment methods including credit/debit cards (Visa, Mastercard), bank transfers, digital wallets (PayPal, Skrill, Neteller), prepaid cards (Paysafecard, Neosurf), and increasingly, cryptocurrencies like Bitcoin. Each method has different processing times and fees, so choose based on your preferences for speed, security, and convenience."
    },
    {
      question: "How do I know if an online casino is safe and trustworthy?",
      answer: "Look for casinos with valid licenses from reputable authorities like Malta Gaming Authority, UK Gambling Commission, or Curacao eGaming. Check for SSL encryption, fair gaming certifications from companies like eCOGRA, positive player reviews, transparent terms and conditions, and reliable customer support. At EliteWins, we thoroughly vet all recommended casinos for safety and reliability."
    },
    {
      question: "What types of bonuses can Australian players expect?",
      answer: "Australian players can access various bonuses including welcome bonuses (match bonuses + free spins), no deposit bonuses, reload bonuses, cashback offers, and VIP rewards. Welcome bonuses typically range from 100% to 200% of your first deposit, often accompanied by free spins on popular pokies. Always read the terms and conditions, including wagering requirements, before claiming any bonus."
    },
    {
      question: "What are wagering requirements and how do they work?",
      answer: "Wagering requirements specify how many times you must play through a bonus amount before you can withdraw winnings. For example, a $100 bonus with 30x wagering requires $3,000 in total bets. Different games contribute differently to wagering - pokies usually contribute 100%, while table games may contribute 10-20%. Lower wagering requirements (20x-35x) are generally more player-friendly."
    },
    {
      question: "Can I play casino games on my mobile device?",
      answer: "Absolutely! Most modern online casinos offer mobile-optimized websites or dedicated apps for iOS and Android devices. Mobile casinos provide the same games, bonuses, and features as desktop versions. Many casinos are now 'mobile-first', meaning they're designed primarily for mobile play. You can deposit, withdraw, and play your favorite pokies and table games anywhere with an internet connection."
    },
    {
      question: "How long do withdrawals take at Australian online casinos?",
      answer: "Withdrawal times vary by payment method and casino. E-wallets (Skrill, Neteller) are typically fastest at 24-48 hours, while credit cards take 3-5 business days, and bank transfers can take 3-7 business days. Cryptocurrency withdrawals are usually processed within 24 hours. Most reputable casinos process withdrawal requests within 24-48 hours, but additional time may be needed for verification procedures."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleVipFormChange = (field: string, value: string | boolean) => {
    if (field === 'email' || field === 'name') {
      setVipForm(prev => ({ ...prev, [field]: value }));
    } else {
      setVipForm(prev => ({
        ...prev,
        preferences: { ...prev.preferences, [field]: value }
      }));
    }
  };

  const handleVipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vipForm.email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setVipForm({
        email: '',
        name: '',
        preferences: { bonuses: false, newCasinos: false, pokies: false }
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>EliteWins - Best Online Casinos Australia 2024 | Expert Reviews & Bonuses</title>
        <meta name="description" content="Discover Australia's top-rated online casinos with expert reviews, exclusive bonuses, and secure AUD gaming. Find the best pokies, table games, and live dealer experiences." />
        <meta name="keywords" content="online casinos Australia, Australian online gambling, best casino sites, AUD casinos, online pokies, casino bonuses Australia" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0">
            <div className="floating-animation absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 blur-xl"></div>
            <div className="floating-animation absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-xl" style={{ animationDelay: '2s' }}></div>
            <div className="floating-animation absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-xl" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Crown className="h-16 w-16 text-yellow-400 mr-4" />
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  EliteWins
                </h1>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Australia's Premier Online Casino Review Site
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover the best online casinos for Australian players with expert reviews, exclusive bonuses, and secure AUD gaming experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 transition-all duration-300">
                  View Top Casinos
                </button>
                <button className="glass-effect text-white font-semibold px-8 py-4 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  Latest Bonuses
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">100% Secure</h3>
                  <p className="text-gray-300">Licensed & regulated casinos only</p>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Expert Reviews</h3>
                  <p className="text-gray-300">Unbiased analysis by gaming professionals</p>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <Gift className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Exclusive Bonuses</h3>
                  <p className="text-gray-300">Special offers for EliteWins members</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Casinos Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Top Rated Australian Online Casinos
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our experts have tested and ranked the best online casinos for Australian players. Each casino offers secure AUD gaming, generous bonuses, and exceptional player experiences.
              </p>
            </div>
            
            <div className="space-y-8">
              {topCasinos.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View All Casino Reviews
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Why Choose EliteWins?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Elite Wins, our mission is to guide Australian players toward the best online casino sites that accept AUD deposits and withdrawals. We only recommend casinos that are fully secure, reliable, and tailored for Aussie players. Whether you enjoy classic table games like roulette, blackjack, craps, baccarat, or sic bo, or prefer spinning the reels on real money online pokies, Elite Wins ensures you'll find safe, top-rated platforms to play and win.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUsFeatures.map((feature, index) => (
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

        {/* Banking Options Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Best Banking Options For Online Casinos In Australia
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose from a variety of secure payment methods designed for Australian players. All options support AUD transactions with competitive fees and processing times.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {bankingOptions.map((option, index) => (
                  <div key={index} className="casino-card glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{option.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                      <p className="text-yellow-400 font-semibold">{option.methods}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Deposit Time:</span>
                        <span className="text-green-400 font-semibold">{option.depositTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Withdrawal Time:</span>
                        <span className="text-blue-400 font-semibold">{option.withdrawalTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Fees:</span>
                        <span className="text-yellow-400 font-semibold">{option.fees}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h4 className="text-green-400 font-bold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Pros
                        </h4>
                        <ul className="space-y-1">
                          {option.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="text-gray-300 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-400 font-bold mb-2 flex items-center">
                          <Target className="h-4 w-4 mr-2" />
                          Cons
                        </h4>
                        <ul className="space-y-1">
                          {option.cons.map((con, conIndex) => (
                            <li key={conIndex} className="text-gray-300 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Banking Tips */}
              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Smart Banking Tips for Australian Players
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold mb-2">Verify Security</h4>
                    <p className="text-gray-300 text-sm">Always check for SSL encryption and secure payment processing</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold mb-2">Check Processing Times</h4>
                    <p className="text-gray-300 text-sm">Understand deposit and withdrawal timeframes before playing</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold mb-2">Compare Fees</h4>
                    <p className="text-gray-300 text-sm">Look for payment methods with low or no transaction fees</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold mb-2">Set Limits</h4>
                    <p className="text-gray-300 text-sm">Use deposit limits and responsible gambling tools</p>
                  </div>
                </div>
              </div>

              {/* Important Banking Notice */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-200/10 border border-yellow-400/30 rounded-xl">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-yellow-400 font-bold mb-2">Important Banking Information</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Always ensure you're using legitimate payment methods and playing at licensed casinos. Some Australian banks may restrict gambling transactions, so check with your bank's policy. Never share your banking details with unlicensed operators, and always verify the casino's security measures before making deposits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <HelpCircle className="h-12 w-12 text-yellow-400 mr-4" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                    Online Casinos in Australia FAQs
                  </h2>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Get answers to the most common questions about online casino gaming in Australia, from legal considerations to payment methods and game selection.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="glass-dark rounded-2xl border border-yellow-400/20 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                        <ChevronDown className="h-6 w-6 text-yellow-400" />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 pb-6">
                        <div className="border-t border-yellow-400/20 pt-6">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-300 mb-6">Still have questions? Our experts are here to help!</p>
                <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* VIP Signup Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <UserPlus className="h-12 w-12 text-yellow-400 mr-4" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                    Join Our VIP Club
                  </h2>
                </div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Get exclusive access to the best casino bonuses, new casino launches, and premium pokies before anyone else. Join thousands of Australian players in our VIP community.
                </p>
              </div>

              {submitSuccess && (
                <div className="mb-8 p-6 bg-green-500/20 border border-green-400 rounded-xl text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-bold">Welcome to the VIP Club! Check your email for your exclusive bonus.</p>
                </div>
              )}

              <form onSubmit={handleVipSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vip-email" className="block text-white font-semibold mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="vip-email"
                      value={vipForm.email}
                      onChange={(e) => handleVipFormChange('email', e.target.value)}
                      required
                      className="w-full px-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="vip-name" className="block text-white font-semibold mb-3">
                      Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="vip-name"
                      value={vipForm.name}
                      onChange={(e) => handleVipFormChange('name', e.target.value)}
                      className="w-full px-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">What interests you most? (Select all that apply)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center p-4 glass-dark rounded-xl cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all duration-300">
                      <input
                        type="checkbox"
                        checked={vipForm.preferences.bonuses}
                        onChange={(e) => handleVipFormChange('bonuses', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                        vipForm.preferences.bonuses ? 'bg-yellow-400 border-yellow-400' : 'border-gray-400'
                      }`}>
                        {vipForm.preferences.bonuses && <CheckCircle className="h-3 w-3 text-black" />}
                      </div>
                      <span className="text-white font-medium">🎁 Bonuses</span>
                    </label>

                    <label className="flex items-center p-4 glass-dark rounded-xl cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all duration-300">
                      <input
                        type="checkbox"
                        checked={vipForm.preferences.newCasinos}
                        onChange={(e) => handleVipFormChange('newCasinos', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                        vipForm.preferences.newCasinos ? 'bg-yellow-400 border-yellow-400' : 'border-gray-400'
                      }`}>
                        {vipForm.preferences.newCasinos && <CheckCircle className="h-3 w-3 text-black" />}
                      </div>
                      <span className="text-white font-medium">🆕 New Casinos</span>
                    </label>

                    <label className="flex items-center p-4 glass-dark rounded-xl cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all duration-300">
                      <input
                        type="checkbox"
                        checked={vipForm.preferences.pokies}
                        onChange={(e) => handleVipFormChange('pokies', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                        vipForm.preferences.pokies ? 'bg-yellow-400 border-yellow-400' : 'border-gray-400'
                      }`}>
                        {vipForm.preferences.pokies && <CheckCircle className="h-3 w-3 text-black" />}
                      </div>
                      <span className="text-white font-medium">🎰 Pokies</span>
                    </label>
                  </div>
                </div>

                {/* Cloudflare Turnstile Placeholder */}
                <div className="flex justify-center">
                  <div className="glass-dark rounded-xl p-6 border border-yellow-400/20">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 border-2 border-yellow-400 rounded"></div>
                        <span className="text-white">I'm not a robot</span>
                      </div>
                      <div className="text-right">
                        <Shield className="h-8 w-8 text-yellow-400 mb-1" />
                        <div className="text-xs text-gray-400">
                          <div>Protected by</div>
                          <div className="font-bold">Cloudflare</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={!vipForm.email || isSubmitting}
                    className={`glossy-btn text-black font-bold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                      (!vipForm.email || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      'Get Your Bonus'
                    )}
                  </button>
                  <p className="text-gray-400 text-sm mt-4">
                    By joining, you agree to our Terms & Conditions and Privacy Policy. 18+ only.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;