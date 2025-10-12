import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, Clock, Award, CheckCircle, AlertTriangle } from 'lucide-react';

const TopCasinosPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const casinos = [
    {
      name: "PlayOJO",
      description: "Transparent, no-wagering bonuses. Licensed in Malta, available in Canada. Known for fair play and responsible gaming tools.",
      trustScore: 5,
      license: "Malta",
      mobileExperience: "Excellent",
      paymentSpeed: "Fast",
      logo: "https://via.placeholder.com/150?text=PlayOJO",
      features: [
        "No wagering requirements on bonuses",
        "Malta Gaming Authority licensed",
        "Excellent responsible gaming tools",
        "Full game transparency"
      ]
    },
    {
      name: "JackpotCity",
      description: "Established since 1998, strong player reputation. Licensed by MGA. Fast withdrawals and great slot variety.",
      trustScore: 4,
      license: "Malta",
      mobileExperience: "Good",
      paymentSpeed: "Fast",
      logo: "https://via.placeholder.com/150?text=JackpotCity",
      features: [
        "Operating since 1998",
        "Excellent slot game variety",
        "Fast and reliable withdrawals",
        "24/7 customer support"
      ]
    },
    {
      name: "Spin Casino",
      description: "Offers Microgaming and NetEnt titles. Secure banking and 24/7 support. Licensed and popular in Canada.",
      trustScore: 4,
      license: "Malta",
      mobileExperience: "Excellent",
      paymentSpeed: "Moderate",
      logo: "https://via.placeholder.com/150?text=Spin+Casino",
      features: [
        "Premium Microgaming games",
        "NetEnt exclusive titles",
        "Bank-level SSL encryption",
        "Around the clock support"
      ]
    },
    {
      name: "Royal Vegas",
      description: "Long-running online casino with top-tier SSL protection. Kahnawake licensed, reliable payouts. Excellent mobile platform.",
      trustScore: 4,
      license: "Kahnawake",
      mobileExperience: "Very Good",
      paymentSpeed: "Fast",
      logo: "https://via.placeholder.com/150?text=Royal+Vegas",
      features: [
        "Industry-leading SSL protection",
        "Kahnawake Gaming Commission",
        "Reliable payout history",
        "Award-winning mobile app"
      ]
    },
    {
      name: "LeoVegas",
      description: "Known for its mobile-first approach. MGA and Ontario-licensed. Strong responsible gaming program.",
      trustScore: 5,
      license: "Ontario, Malta",
      mobileExperience: "Excellent",
      paymentSpeed: "Very Fast",
      logo: "https://via.placeholder.com/150?text=LeoVegas",
      features: [
        "Mobile-optimized platform",
        "Dual licensing (MGA + Ontario)",
        "Comprehensive responsible gaming",
        "Fast payout processing"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the safest online casino in Canada?",
      answer: "The safest online casinos in Canada are those licensed by reputable authorities like the Malta Gaming Authority, Ontario's iGaming regulator, or the Kahnawake Gaming Commission. PlayOJO and LeoVegas top our list due to their transparency, licensing credentials, and strong responsible gaming programs. Always verify a casino's license before playing."
    },
    {
      question: "Are offshore casinos legal in Canada?",
      answer: "Canadian federal law does not explicitly prohibit individuals from playing at offshore online casinos. However, provincial regulations vary. Ontario has its own regulated market through iGaming Ontario, where only licensed operators can legally offer services to Ontario residents. For other provinces, many players access international casinos, though these operate in a legal grey area. Always check your local regulations and play responsibly."
    },
    {
      question: "How can I verify a casino license?",
      answer: "To verify a casino's license, scroll to the bottom of their website where license information is typically displayed. Click on the license seal or number to be redirected to the regulator's website. You can also visit the licensing authority's official website (such as mga.org.mt for Malta licenses) and search their database for the casino's registration. Legitimate casinos will always display their license prominently and provide verification links."
    },
    {
      question: "What payment options are safest?",
      answer: "The safest payment options for Canadian players include e-wallets like PayPal, Skrill, and Neteller, which add an extra layer of security between your bank and the casino. Credit and debit cards from major providers (Visa, Mastercard) are also secure when used at licensed casinos with SSL encryption. For maximum privacy, cryptocurrencies like Bitcoin offer anonymity, while prepaid cards like Paysafecard allow deposits without sharing banking details."
    }
  ];

  const renderStars = (score: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < score
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Top 5 Most Trusted Online Casinos in Canada (2025)</title>
        <meta
          name="description"
          content="Discover the top 5 most trusted online casinos in Canada for 2025. Learn which casinos are safe, licensed, and fair for Canadian players."
        />
      </Helmet>

      <main className="pt-20 min-h-screen">
        {/* Header Section */}
        <section className="relative py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Top 5 Most Trusted Online Casinos in Canada (2025)
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                When choosing an online casino in Canada, trust and licensing are paramount. A licensed casino ensures fair play, secure transactions, and regulatory oversight to protect your rights as a player. This guide highlights the most trusted online casinos that Canadian players can confidently enjoy in 2025.
              </p>
            </div>
          </div>
        </section>

        {/* How We Ranked Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-5 rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-white">
                How We Ranked These Casinos
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our ranking methodology is based on rigorous testing and evaluation across multiple criteria to ensure we recommend only the safest and most reliable casinos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Licensing & Regulation</h3>
                    <p className="text-gray-300 text-sm">Valid licenses from Ontario iGaming, Malta Gaming Authority, or Kahnawake Gaming Commission</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Security & Fairness</h3>
                    <p className="text-gray-300 text-sm">SSL encryption, certified RNG (Random Number Generator), and third-party audits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Payment Reliability</h3>
                    <p className="text-gray-300 text-sm">Fast withdrawals, multiple payment options, and transparent fee structures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Player Reputation</h3>
                    <p className="text-gray-300 text-sm">Positive reviews, responsible gambling tools, and excellent customer support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Casinos Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              The Top 5 Most Trusted Casinos
            </h2>
            <div className="max-w-5xl mx-auto space-y-8">
              {casinos.map((casino, index) => (
                <article
                  key={index}
                  className="bg-white bg-opacity-5 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={casino.logo}
                        alt={`${casino.name} logo`}
                        className="w-32 h-32 rounded-xl border-2 border-yellow-400 object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {index + 1}. {casino.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            {renderStars(casino.trustScore)}
                            <span className="text-yellow-400 font-bold ml-2">
                              Trust Score: {casino.trustScore}/5
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {casino.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {casino.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        Play Now
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Casino Comparison Table
              </h2>

              {/* Desktop Table */}
              <div className="hidden lg:block bg-white bg-opacity-5 rounded-2xl p-6 shadow-md overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-yellow-400/30">
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold">Casino</th>
                      <th className="text-center py-4 px-4 text-yellow-400 font-bold">License</th>
                      <th className="text-center py-4 px-4 text-yellow-400 font-bold">Mobile Experience</th>
                      <th className="text-center py-4 px-4 text-yellow-400 font-bold">Payment Speed</th>
                      <th className="text-center py-4 px-4 text-yellow-400 font-bold">Trust Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {casinos.map((casino, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-700 hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                      >
                        <td className="py-4 px-4 text-white font-semibold">{casino.name}</td>
                        <td className="py-4 px-4 text-center text-gray-300">{casino.license}</td>
                        <td className="py-4 px-4 text-center text-gray-300">{casino.mobileExperience}</td>
                        <td className="py-4 px-4 text-center text-gray-300">{casino.paymentSpeed}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-center gap-1">
                            {renderStars(casino.trustScore)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {casinos.map((casino, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-5 rounded-xl p-4 shadow-md"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{casino.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">License:</span>
                        <span className="text-white">{casino.license}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mobile:</span>
                        <span className="text-white">{casino.mobileExperience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Payment Speed:</span>
                        <span className="text-white">{casino.paymentSpeed}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Trust Score:</span>
                        <div className="flex gap-1">
                          {renderStars(casino.trustScore)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-5 rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-white">
                How to Choose a Safe Casino
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Selecting a safe and trustworthy online casino requires careful consideration. Use this checklist to ensure you're playing at a legitimate and secure site:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Verify License Details",
                    description: "Check the casino's footer for license information and verify it on the regulator's official website"
                  },
                  {
                    title: "Look for SSL Encryption",
                    description: "Ensure the website uses HTTPS (look for the padlock icon in your browser's address bar)"
                  },
                  {
                    title: "Read Player Reviews",
                    description: "Research player experiences on independent review sites and gambling forums"
                  },
                  {
                    title: "Use Responsible Gambling Tools",
                    description: "Confirm the casino offers deposit limits, self-exclusion, and reality check features"
                  },
                  {
                    title: "Avoid Unclear Withdrawal Terms",
                    description: "Steer clear of casinos with hidden fees, unrealistic wagering requirements, or vague payout policies"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white bg-opacity-5 rounded-lg p-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts Section */}
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-5 rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Final Thoughts
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Playing at trusted online casinos is essential for a safe and enjoyable gaming experience. The five casinos listed above represent the best of what's available to Canadian players in 2025, combining strong licensing credentials, secure platforms, and player-focused features.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Remember to always gamble responsibly. Set limits, take breaks, and never wager more than you can afford to lose. If you or someone you know is struggling with gambling, resources like the Canadian Centre on Substance Use and Addiction (CCSA) are available to help.
              </p>
              <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-200/20 border border-yellow-400/30 rounded-xl p-6 text-center">
                <p className="text-yellow-400 font-bold text-lg mb-2">Coming Soon</p>
                <p className="text-white">
                  Compare casino bonuses and exclusive offers from verified Canadian partners
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="bg-white bg-opacity-5 rounded-2xl p-6 shadow-md">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 last:border-b-0">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left py-4 flex items-center justify-between hover:text-yellow-400 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-bold text-white pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {openFAQ === index ? (
                            <span className="text-yellow-400 text-2xl">−</span>
                          ) : (
                            <span className="text-gray-400 text-2xl">+</span>
                          )}
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openFAQ === index ? 'max-h-96 pb-4' : 'max-h-0'
                        }`}
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibility Statement */}
        <section className="py-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                <p className="text-gray-300 text-sm">
                  Gambling involves risk. Play responsibly. Must be 19+ in Ontario or 18+ elsewhere in Canada.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TopCasinosPage;
