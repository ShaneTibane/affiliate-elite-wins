import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Zap, TrendingUp, Gift, Crown, Shield, Users, Trophy } from 'lucide-react';

const Poker = () => {
  return (
    <>
      <Helmet>
        <title>Online Poker - Best Poker Sites & Games 2025</title>
        <meta name="description" content="Play online poker at Australia's top-rated poker rooms. Texas Hold'em, Omaha, tournaments, and cash games with real money prizes." />
        <meta name="keywords" content="online poker, poker games, Texas Hold'em, Omaha poker, poker tournaments, cash games" />
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
            <div className="text-6xl mb-6">♠️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Best Online Poker Sites in Australia 2025
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Test your skills at Texas Hold'em, Omaha, and other poker variants. Join tournaments or cash games
              with players from around the world at Australia's top poker rooms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/casino-reviews"
                className="glossy-btn glow-pulse text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                ♠️ Play Poker Now
              </Link>
            </div>
          </div>
        </section>

        {/* What is Online Poker? */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                What is Online Poker?
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Online poker brings the excitement and strategy of traditional poker to your screen. Whether you're
                  playing on your computer or mobile device, you can compete against real players from around the world
                  in cash games, tournaments, and sit-and-go events.
                </p>
                <p>
                  Unlike pokies or other casino games that rely purely on luck, poker is a skill-based game where strategy,
                  psychology, and mathematical understanding can give you an edge over your opponents. The best online poker
                  sites offer a variety of game types, stake levels, and tournament formats to suit players of all skill levels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Poker Variants */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Popular Poker Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Texas Hold'em",
                  icon: "♥️",
                  description: "The most popular poker variant worldwide. Players receive two hole cards and share five community cards to make the best five-card hand.",
                  features: ["2 hole cards", "5 community cards", "Most popular variant", "Multiple betting rounds"]
                },
                {
                  title: "Omaha",
                  icon: "♦️",
                  description: "Similar to Hold'em but with four hole cards. You must use exactly two hole cards and three community cards to make your hand.",
                  features: ["4 hole cards", "Must use 2 hole cards", "More action", "Higher variance"]
                },
                {
                  title: "Seven Card Stud",
                  icon: "♣️",
                  description: "A classic poker variant where players receive seven cards throughout the hand, with the best five-card hand winning.",
                  features: ["No community cards", "7 cards per player", "Classic variant", "Memory important"]
                },
                {
                  title: "Five Card Draw",
                  icon: "♠️",
                  description: "The simplest poker variant where each player receives five cards and can discard and replace cards to improve their hand.",
                  features: ["5 cards dealt", "One draw", "Simple rules", "Great for beginners"]
                },
                {
                  title: "Pot Limit Omaha",
                  icon: "♥️",
                  description: "High-action Omaha variant where maximum bet is limited to the current pot size. Popular among experienced players.",
                  features: ["4 hole cards", "Pot-sized bets", "High action", "Big pots"]
                },
                {
                  title: "Short Deck Hold'em",
                  icon: "♦️",
                  description: "Fast-paced Hold'em variant played with a 36-card deck (2-5 removed). Different hand rankings and more action.",
                  features: ["36-card deck", "Modified rankings", "Fast-paced", "More premiums"]
                }
              ].map((variant, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-5xl text-center mb-4">{variant.icon}</div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">{variant.title}</h3>
                  <p className="text-gray-300 text-center mb-6">{variant.description}</p>
                  <ul className="space-y-2">
                    {variant.features.map((feature, i) => (
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

        {/* Game Formats */}
        <section className="py-20 relative bg-gradient-to-br from-violet-900/80 to-purple-800/90">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Poker Game Formats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cash Games",
                  icon: Gift,
                  description: "Play with real money chips at any time. Buy in for any amount within table limits and leave whenever you want. Blinds stay constant.",
                  features: ["Flexible buy-ins", "Come and go", "Fixed blinds", "Real-time action"]
                },
                {
                  title: "Tournaments",
                  icon: Trophy,
                  description: "Pay a fixed buy-in to compete for prize pool. Play until one player has all chips. Blinds increase at regular intervals.",
                  features: ["Fixed buy-in", "Prize pool", "Increasing blinds", "Winner takes most"]
                },
                {
                  title: "Sit & Go",
                  icon: Users,
                  description: "Single-table tournaments that start as soon as enough players register. Quick format perfect for shorter sessions.",
                  features: ["Quick start", "Single table", "Fast-paced", "Fixed duration"]
                }
              ].map((format, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <format.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">{format.title}</h3>
                  <p className="text-gray-300 text-center mb-6">{format.description}</p>
                  <ul className="space-y-2">
                    {format.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Play Texas Hold'em */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                How to Play Texas Hold'em
              </h2>
              <div className="space-y-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "The Deal",
                    description: "Each player receives two private cards (hole cards) face down. The player to the left of the dealer posts the small blind, and the next player posts the big blind."
                  },
                  {
                    step: "02",
                    title: "Pre-Flop",
                    description: "First betting round. Starting with the player to the left of the big blind, each player can fold, call, or raise based on their hole cards."
                  },
                  {
                    step: "03",
                    title: "The Flop",
                    description: "Three community cards are dealt face up. Another betting round begins with the first active player to the left of the dealer button."
                  },
                  {
                    step: "04",
                    title: "The Turn",
                    description: "A fourth community card is dealt. Another betting round occurs. Bet sizes typically double on this street."
                  },
                  {
                    step: "05",
                    title: "The River",
                    description: "The fifth and final community card is dealt. The last betting round takes place."
                  },
                  {
                    step: "06",
                    title: "Showdown",
                    description: "Remaining players reveal their hands. The player with the best five-card hand using any combination of their hole cards and community cards wins the pot."
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

        {/* Poker Hand Rankings */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Poker Hand Rankings
            </h2>
            <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  { rank: "1", name: "Royal Flush", example: "A♥ K♥ Q♥ J♥ 10♥", description: "Ace-high straight flush" },
                  { rank: "2", name: "Straight Flush", example: "9♠ 8♠ 7♠ 6♠ 5♠", description: "Five cards in sequence, same suit" },
                  { rank: "3", name: "Four of a Kind", example: "K♣ K♦ K♥ K♠ 3♣", description: "Four cards of same rank" },
                  { rank: "4", name: "Full House", example: "Q♥ Q♦ Q♠ 7♣ 7♦", description: "Three of a kind plus a pair" },
                  { rank: "5", name: "Flush", example: "K♦ J♦ 9♦ 6♦ 3♦", description: "Five cards of same suit" },
                  { rank: "6", name: "Straight", example: "10♥ 9♣ 8♦ 7♠ 6♥", description: "Five cards in sequence" },
                  { rank: "7", name: "Three of a Kind", example: "8♣ 8♦ 8♥ K♠ 5♣", description: "Three cards of same rank" },
                  { rank: "8", name: "Two Pair", example: "A♠ A♣ J♦ J♥ 4♠", description: "Two different pairs" },
                  { rank: "9", name: "One Pair", example: "10♥ 10♣ K♠ 6♦ 3♣", description: "Two cards of same rank" },
                  { rank: "10", name: "High Card", example: "A♣ Q♦ 9♥ 6♠ 3♣", description: "No matching cards" }
                ].map((hand, index) => (
                  <div key={index} className="glass-dark rounded-xl p-6 flex items-center justify-between hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {hand.rank}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{hand.name}</h3>
                        <p className="text-gray-400 text-sm">{hand.description}</p>
                      </div>
                    </div>
                    <div className="text-yellow-400 font-mono text-lg font-semibold hidden md:block">
                      {hand.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Poker Strategy Tips */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Essential Poker Strategy Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Starting Hand Selection",
                  tip: "Play tight and only enter pots with strong starting hands. Position matters - play more hands from late position."
                },
                {
                  icon: "💰",
                  title: "Bankroll Management",
                  tip: "Never risk more than 5% of your bankroll on a single game. Move down in stakes if you hit a losing streak."
                },
                {
                  icon: "🎭",
                  title: "Read Your Opponents",
                  tip: "Pay attention to betting patterns and timing. Look for tells and adjust your strategy based on opponent tendencies."
                },
                {
                  icon: "📊",
                  title: "Understand Position",
                  tip: "Late position is powerful - you act last and have more information. Play more aggressively when in position."
                },
                {
                  icon: "🎲",
                  title: "Calculate Pot Odds",
                  tip: "Compare the pot size to the cost of calling to determine if a draw is profitable. Learn basic poker math."
                },
                {
                  icon: "🧠",
                  title: "Control Emotions",
                  tip: "Don't let bad beats affect your play. Take breaks when tilting and never chase losses with poor decisions."
                },
                {
                  icon: "🔄",
                  title: "Mix Up Your Play",
                  tip: "Don't be predictable. Balance your ranges and occasionally bluff to keep opponents guessing."
                },
                {
                  icon: "📚",
                  title: "Study the Game",
                  tip: "Watch training videos, read strategy books, and review your hands. Continuous learning is key to improvement."
                },
                {
                  icon: "⚡",
                  title: "Aggression Pays",
                  tip: "Betting and raising is usually better than calling. Aggressive play gives you two ways to win - making the best hand or getting opponents to fold."
                }
              ].map((tip, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-5xl text-center mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-white text-center mb-4">{tip.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online vs Live Poker */}
        <section className="py-20 relative bg-gradient-to-br from-violet-900/80 to-purple-800/90">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Online vs Live Poker
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-white">Online Poker</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Play from anywhere, anytime",
                    "Much faster pace - see 3-4x more hands per hour",
                    "Multi-table for increased profit potential",
                    "Lower stakes available for beginners",
                    "Player tracking tools and statistics",
                    "No physical tells to read",
                    "Instant hand history and analysis",
                    "More game variety and formats"
                  ].map((item, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🏛️</div>
                  <h3 className="text-2xl font-bold text-white">Live Poker</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Social experience and atmosphere",
                    "Physical tells and body language",
                    "Slower pace - more time to think",
                    "More recreational players",
                    "Cash-out immediately after winning",
                    "No multi-tabling possible",
                    "Higher minimum stakes typically",
                    "Travel required to poker rooms"
                  ].map((item, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <Users className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Ready to Test Your Skills?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join Australia's top-rated online poker rooms and compete against players worldwide in tournaments and cash games
              </p>
              <Link
                to="/casino-reviews"
                className="glossy-btn text-black font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl inline-block"
              >
                Play Poker Now
              </Link>
              <div className="mt-8 text-gray-400 text-sm">
                <p>18+ | Terms & Conditions Apply | Play Responsibly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Gaming */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="glass-dark rounded-2xl p-8 border-l-4 border-red-400 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Play Responsibly</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    While poker is a skill game, it still involves gambling and carries risks. Set limits, manage your bankroll carefully,
                    and never play with money you can't afford to lose. Take breaks and seek help if gambling becomes a problem.
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

export default Poker;
