import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Zap, TrendingUp, Gift, Crown, Shield } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase";
import CasinoCard from '../components/CasinoCard';

const Pokies = () => {
    type Casino = {
  id: string;
  name: string;
  affiliateLink: string,
  location: string;
  rating: number;
  affiliate: string,
  bonus: string,
  category: string,
  description: string,
  features: {
    games: string;
    support: string;
    withdrawal: string;
    license: string;
    features: string;
    freespins: string;
    wagering:string;
    mindeposit:string
  };
   extraFeatures: {
    freespins: string;
    wagering:string;
    mindeposit:string
  };
  imageUrl: string,
  logo: string,
  isCasinoOfTheMonth: boolean,
  highlight: boolean,
  games: string,
  payoutTime: string,
  isCasinoActive: boolean




}
 const [loading, setLoading] = useState(true);
   const [testcasinos, setTestCasinos] = useState<Casino[]>([]);
      useEffect(() => {
        async function fetchData() {
          setLoading(true);
          try {
            const querySnapshot = await getDocs(collection(db, "casinocards"));
            let data: Casino[] = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...(doc.data() as Omit<Casino, "id">), // cast doc.data()
            })); 
             data = data.sort((a, b) => {
            // Move the one with isCasinoOfTheMonth true to the top
            if (a.isCasinoOfTheMonth && !b.isCasinoOfTheMonth) return -1;
            if (!a.isCasinoOfTheMonth && b.isCasinoOfTheMonth) return 1;
            return 0;
          });
            console.log("DATA 2",data)
            setTestCasinos(data);
          } catch (err) {
            console.error('Error fetching posts:', err);
          } finally {
            setLoading(false);
          }
    
        }
        fetchData();
      }, []);
      console.log("DATA:::", testcasinos)
  return (
    <>
      <Helmet>
        <title>Online Pokies - Best Pokies Games & Casinos 2025</title>
        <meta name="description" content="Discover the best online pokies in Canada. Play top-rated slot games with massive jackpots, bonus rounds, and free spins at Elite Casinos." />
        <meta name="keywords" content="online pokies, pokies games, slot machines, online slots, casino pokies, free spins" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 floating-animation"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-500 rounded-full opacity-30 floating-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-500 rounded-full opacity-25 floating-animation" style={{ animationDelay: '4s' }}></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-12">
            <div className="text-6xl mb-6">🎰</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Best Online Pokies in Canada 2025
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Spin the reels on Canada's most popular pokies with massive jackpots, exciting bonus rounds, and free spins.
              From classic 3-reel slots to modern video pokies with stunning graphics and innovative features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/casino-reviews"
                className="glossy-btn glow-pulse text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                🎰 Play Top Pokies Now
              </Link>
            </div> 
          </div>
        </section>

                {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
              <p className="text-gray-300 mt-4">Loading Casinos...</p>
            </div>
          )}
 
 <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
             Best Real Money Online Pokies Casinos In Canada - October 2025
            </h2>
            <div className="max-w-5xl mx-auto space-y-8">
                {testcasinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
              
          {/* Casino Cards */}
          
            </div>
          </div>
        </section>
          

        {/* What Are Online Pokies? */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                What Are Online Pokies?
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Online pokies, also known as slot machines or online slots, are digital versions of the classic casino games
                  that have been entertaining players for generations. These exciting games feature spinning reels, vibrant graphics,
                  and the chance to win big with every spin.
                </p>
                <p>
                  Modern online pokies come in various formats, from traditional 3-reel classics to advanced 5-reel video slots
                  with multiple paylines, bonus features, and progressive jackpots that can reach millions of dollars. Whether you're
                  looking for simple gameplay or complex features with free spins and interactive bonus rounds, there's a pokie game
                  for every type of player.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Pokies */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Types of Online Pokies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Classic Pokies",
                  icon: "🎰",
                  description: "Traditional 3-reel pokies with simple gameplay and nostalgic symbols like fruits, bars, and sevens. Perfect for beginners and purists.",
                  features: ["3 reels", "Single payline", "Simple mechanics", "Fast gameplay"]
                },
                {
                  title: "Video Pokies",
                  icon: "🎬",
                  description: "Modern 5-reel pokies with multiple paylines, stunning graphics, and exciting bonus features. The most popular type of online pokie.",
                  features: ["5+ reels", "Multiple paylines", "Bonus rounds", "Free spins"]
                },
                {
                  title: "Progressive Jackpots",
                  icon: "💰",
                  description: "Pokies with growing jackpots that increase with every bet placed. Life-changing wins possible with a single spin.",
                  features: ["Growing jackpots", "Massive payouts", "Network prizes", "Mega wins"]
                },
                {
                  title: "Megaways Pokies",
                  icon: "⚡",
                  description: "Revolutionary pokies with up to 117,649 ways to win. Each spin features a different number of symbols per reel.",
                  features: ["Variable reels", "Thousands of ways to win", "Cascading reels", "High volatility"]
                },
                {
                  title: "3D Pokies",
                  icon: "🎮",
                  description: "Immersive pokies with three-dimensional graphics, cinematic animations, and engaging storylines for an enhanced gaming experience.",
                  features: ["3D graphics", "Animations", "Story-driven", "Interactive features"]
                },
                {
                  title: "Branded Pokies",
                  icon: "🎬",
                  description: "Pokies based on popular movies, TV shows, musicians, and celebrities. Play your favorite themes with authentic soundtracks.",
                  features: ["Licensed content", "Familiar themes", "Original soundtracks", "Movie clips"]
                }
              ].map((type, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-5xl text-center mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">{type.title}</h3>
                  <p className="text-gray-300 text-center mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Pokie Features */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Popular Pokie Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Free Spins",
                  icon: Gift,
                  description: "Trigger free spin rounds to play without using your balance. Often come with multipliers and additional bonus features."
                },
                {
                  title: "Wild Symbols",
                  icon: Zap,
                  description: "Special symbols that substitute for other symbols to create winning combinations. Some wilds expand, stick, or come with multipliers."
                },
                {
                  title: "Scatter Symbols",
                  icon: Star,
                  description: "Pay out regardless of payline position and often trigger bonus features like free spins or bonus games."
                },
                {
                  title: "Bonus Rounds",
                  icon: Gift,
                  description: "Interactive mini-games within the pokie that offer additional winning opportunities and unique gameplay experiences."
                },
                {
                  title: "Multipliers",
                  icon: TrendingUp,
                  description: "Increase your winnings by 2x, 3x, or even higher. Can appear in base game or bonus features."
                },
                {
                  title: "Gamble Feature",
                  icon: Crown,
                  description: "Risk your winnings for a chance to double or quadruple them. Guess the correct card color or suit."
                }
              ].map((feature, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 flex items-start gap-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 p-4 rounded-full flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Play Online Pokies */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                How to Play Online Pokies
              </h2>
              <div className="space-y-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Choose Your Pokie",
                    description: "Browse the casino's pokies library and select a game that appeals to you. Check the paytable to understand symbols and payouts."
                  },
                  {
                    step: "02",
                    title: "Set Your Bet",
                    description: "Adjust your coin value and bet level to match your budget. Start with smaller bets until you're familiar with the game."
                  },
                  {
                    step: "03",
                    title: "Spin the Reels",
                    description: "Click the spin button or use autoplay to set multiple spins. Watch as the reels spin and symbols land on the paylines."
                  },
                  {
                    step: "04",
                    title: "Win & Collect",
                    description: "Matching symbols on active paylines result in wins. Trigger bonus features for bigger payouts and free spins."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-6 glass-dark rounded-2xl p-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-16 h-16 rounded-full flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Playing Pokies */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Tips for Playing Online Pokies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "💰",
                  title: "Set a Budget",
                  tip: "Always decide how much you're willing to spend before you start playing and stick to that limit."
                },
                {
                  icon: "📊",
                  title: "Check the RTP",
                  tip: "Look for pokies with Return to Player (RTP) rates of 96% or higher for better long-term value."
                },
                {
                  icon: "🎮",
                  title: "Try Free Play",
                  tip: "Use demo modes to practice and understand game mechanics before wagering real money."
                },
                {
                  icon: "🎯",
                  title: "Understand Volatility",
                  tip: "High volatility pokies pay less frequently but bigger amounts. Low volatility offers more frequent smaller wins."
                },
                {
                  icon: "🎁",
                  title: "Use Bonuses Wisely",
                  tip: "Take advantage of free spins and bonus offers, but always read the wagering requirements."
                },
                {
                  icon: "⏰",
                  title: "Know When to Stop",
                  tip: "Set win and loss limits. Take breaks regularly and never chase losses."
                }
              ].map((tip, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{tip.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Ready to Spin & Win?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join Canada's top-rated online casinos and start playing the best pokies with exclusive bonuses and free spins
              </p>
              <Link
                to="/casino-reviews"
                className="glossy-btn text-black font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl inline-block"
              >
                Play Pokies Now
              </Link>
              <div className="mt-8 text-gray-400 text-sm">
                <p>18+ | Terms & Conditions Apply | Gamble Responsibly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Gaming */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="glass-dark rounded-2xl p-8 border-l-4 border-red-400 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Play Responsibly</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Online pokies should be entertaining, not a way to make money. Set limits, take breaks, and seek help
                    if gambling becomes a problem. Remember that the house always has an edge, and all outcomes are determined by chance.
                  </p>
                  <a
                    href="https://www.gamblinghelponline.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 underline font-semibold"
                  >
                    Get Help - Gambling Help Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pokies;
