import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, Smartphone, CreditCard, Clock, Trophy, Award, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { useGeoLocation } from '../hooks/useGeoLocation';

const PlayOjo = () => {
  const { country } = useGeoLocation();

  const prosAndCons = {
    pros: [
      "No wagering requirements on bonuses",
      "Kicker rewards on every bet",
      "Extensive game library (3000+ games)",
      "Licensed by Malta Gaming Authority",
      "Mobile apps for iOS and Android",
      "Fair play guarantee"
    ],
    cons: [
      "Limited live chat support hours",
      "Geographic restrictions apply",
      "No phone support available"
    ]
  };

  const features = [
    {
      icon: Trophy,
      title: "No Wagering Requirements",
      description: "PlayOjo's standout feature - all bonuses and free spins come with zero wagering requirements. What you win is yours to keep."
    },
    {
      icon: Sparkles,
      title: "OjoPlus Kicker",
      description: "Earn money back on every bet you place, win or lose. This unique loyalty program returns real cash with no strings attached."
    },
    {
      icon: Shield,
      title: "Malta Gaming License",
      description: "Fully licensed and regulated by the Malta Gaming Authority, ensuring fair play and player protection."
    },
    {
      icon: Smartphone,
      title: "Mobile Gaming",
      description: "Dedicated iOS and Android apps plus a fully responsive mobile site for gaming on the go."
    }
  ];

  const gameCategories = [
    { name: "Slots", count: "2500+" },
    { name: "Live Casino", count: "100+" },
    { name: "Table Games", count: "200+" },
    { name: "Jackpots", count: "50+" }
  ];

  const paymentMethods = [
    "Visa", "Mastercard", "PayPal", "Skrill", "Neteller", "Paysafecard", "Bank Transfer"
  ];

  return (
    <>
      <Helmet>
        <title>PlayOjo Casino Review 2025 - No Wagering Requirements | Elite Casinos</title>
        <meta name="description" content="Complete PlayOjo casino review. Discover why PlayOjo stands out with zero wagering requirements, OjoPlus rewards, and 3000+ games. Licensed and trusted." />
        <meta name="keywords" content="PlayOjo review, PlayOjo casino, no wagering casino, OjoPlus, online casino review, PlayOjo bonus" />
      </Helmet>

      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">

          {/* Hero Section */}
          <div className="glass-effect rounded-3xl p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.pexels.com/photos/7594024/pexels-photo-7594024.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="PlayOjo Casino"
                    className="h-20 w-auto rounded-lg shadow-lg"
                  />
                  <div className="ml-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                      PlayOjo Casino
                    </h1>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-gray-300 font-semibold">4.5/5</span>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  PlayOjo revolutionizes online gaming with its fair play promise: no wagering requirements, ever.
                  Get money back on every bet with OjoPlus and enjoy over 3,000 premium casino games.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.playojo.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Play Now at PlayOjo
                  </a>
                  <div className="glass-dark rounded-full px-6 py-4 flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-white font-semibold">Malta Licensed</span>
                  </div>
                </div>
              </div>

              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Established</span>
                    <span className="text-white font-semibold">2017</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-400">License</span>
                    <span className="text-white font-semibold">Malta Gaming Authority</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Games</span>
                    <span className="text-white font-semibold">3,000+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Withdrawal Time</span>
                    <span className="text-white font-semibold">24-48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Support</span>
                    <span className="text-white font-semibold">Email & Live Chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unique Features */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              What Makes PlayOjo Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="casino-card glass-dark rounded-2xl p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus & Promotions */}
          <div className="glass-effect rounded-3xl p-12 mb-12">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Bonuses & Promotions
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-dark rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Welcome Offer</h3>
                </div>
                <p className="text-xl text-gray-300 mb-4">
                  50 Free Spins on first deposit
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No wagering requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Minimum deposit applies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Keep what you win</span>
                  </li>
                </ul>
              </div>

              <div className="glass-dark rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">OjoPlus</h3>
                </div>
                <p className="text-xl text-gray-300 mb-4">
                  Money back on every bet
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Earn cash back on all games</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No wagering on cashback</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automatic rewards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Games Selection */}
          <div className="glass-effect rounded-3xl p-12 mb-12">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Game Selection
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              PlayOjo offers an impressive collection of over 3,000 games from leading software providers including NetEnt,
              Microgaming, Play'n GO, Evolution Gaming, and many more.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {gameCategories.map((category, index) => (
                <div key={index} className="glass-dark rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{category.count}</div>
                  <div className="text-white font-semibold">{category.name}</div>
                </div>
              ))}
            </div>

            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Popular Game Providers</h3>
              <div className="flex flex-wrap gap-3">
                {["NetEnt", "Microgaming", "Play'n GO", "Evolution Gaming", "Pragmatic Play", "Red Tiger", "Blueprint Gaming", "Big Time Gaming"].map((provider, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black rounded-full text-sm font-semibold">
                    {provider}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="glass-effect rounded-3xl p-12 mb-12">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Banking Options
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <CreditCard className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Payment Methods</h3>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {paymentMethods.map((method, index) => (
                    <span key={index} className="glass-dark px-4 py-2 rounded-lg text-white font-semibold">
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Processing Times</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center glass-dark rounded-lg p-4">
                    <span className="text-gray-300">E-Wallets</span>
                    <span className="text-white font-semibold">0-24 hours</span>
                  </div>
                  <div className="flex justify-between items-center glass-dark rounded-lg p-4">
                    <span className="text-gray-300">Credit/Debit Cards</span>
                    <span className="text-white font-semibold">1-3 days</span>
                  </div>
                  <div className="flex justify-between items-center glass-dark rounded-lg p-4">
                    <span className="text-gray-300">Bank Transfer</span>
                    <span className="text-white font-semibold">3-5 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="glass-effect rounded-3xl p-12 mb-12">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Pros & Cons
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                  <CheckCircle className="h-7 w-7 mr-3" />
                  Pros
                </h3>
                <ul className="space-y-4">
                  {prosAndCons.pros.map((pro, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                  <AlertCircle className="h-7 w-7 mr-3" />
                  Cons
                </h3>
                <ul className="space-y-4">
                  {prosAndCons.cons.map((con, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <AlertCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Experience */}
          <div className="glass-effect rounded-3xl p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Mobile Gaming
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  PlayOjo offers exceptional mobile gaming through dedicated apps for iOS and Android,
                  plus a responsive mobile website. All games are optimized for touch screens with
                  smooth performance and intuitive navigation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>iOS app available on App Store</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Android app on Google Play</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Fully responsive mobile website</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Same features as desktop version</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mobile Gaming"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Security & Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect rounded-3xl p-12">
              <div className="flex items-center mb-6">
                <Shield className="h-10 w-10 text-yellow-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">Security</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                PlayOjo is licensed by the Malta Gaming Authority, one of the most respected regulatory bodies in online gaming.
                The casino employs 128-bit SSL encryption to protect all transactions and personal data.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Malta Gaming Authority License</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>SSL encryption technology</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Responsible gaming tools</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Fair play certified</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-3xl p-12">
              <div className="flex items-center mb-6">
                <Trophy className="h-10 w-10 text-yellow-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">Customer Support</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                PlayOjo provides customer support through multiple channels to assist players with any questions or concerns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Live chat support (limited hours)</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Email: support@playojo.com</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive FAQ section</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Available in multiple languages</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Verdict */}
          <div className="glass-effect rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Our Verdict
            </h2>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400 mx-1" />
              ))}
              <span className="ml-4 text-3xl font-bold text-white">4.5/5</span>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              PlayOjo stands out in the crowded online casino market with its revolutionary approach to bonuses and player rewards.
              The complete absence of wagering requirements, combined with the innovative OjoPlus cashback system, makes this
              casino a top choice for players who value transparency and fairness. With over 3,000 games, excellent mobile apps,
              and solid licensing, PlayOjo delivers an exceptional gaming experience. While customer support could be improved,
              the overall offering makes PlayOjo highly recommended for {country} players seeking a trustworthy online casino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.playojo.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="glossy-btn text-black font-bold px-10 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Play Now at PlayOjo
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              18+ only. Terms and conditions apply. Please gamble responsibly.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default PlayOjo;
