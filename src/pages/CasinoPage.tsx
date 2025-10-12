import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Users, Award, Target, Heart } from 'lucide-react';
import { useGeoLocation } from '../hooks/useGeoLocation';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase";

const CasinoPage = () => {
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
  const { country } = useGeoLocation();
   const location = useLocation();
const { casino } = location.state || {};
   console.log("CHECK",casino)
  if (!casino) {
    console.log("CHECK",casino)
    return <p className="text-center text-gray-400 mt-10">No casino data available.</p>;
  }


  const [testcasinos, setTestCasinos] = useState<Casino[]>([]);
    useEffect(() => {
      async function fetchData() {
       
        try {
           const q = query(
                  collection(db, "casinopages"),
                  where("casino.pagename", "==", casino.pagename)
                );
          
                const querySnapshot = await getDocs(q);
                let data: Casino[] = querySnapshot.docs.map(doc => ({
                  id: doc.id,
                  ...(doc.data() as Omit<Casino, "id">),
                }));
           data = data.sort((a, b) => {
          // Move the one with isCasinoOfTheMonth true to the top
          if (a.isCasinoOfTheMonth && !b.isCasinoOfTheMonth) return -1;
          if (!a.isCasinoOfTheMonth && b.isCasinoOfTheMonth) return 1;
          return 0;
        });
          console.log("DATA 123",data)
          setTestCasinos(data);
        } catch (err) {
          console.error('Error fetching posts:', err);
        } finally {
          
        }
  
      }
      fetchData();
    }, []);
    console.log("DATA:::", testcasinos)
  
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We provide honest, unbiased reviews based on thorough testing and analysis of each casino."
    },
    {
      icon: Users,
      title: "Player First",
      description: "Every recommendation is made with player safety, fairness, and enjoyment as our top priorities."
    },
    {
      icon: Award,
      title: "Expert Analysis",
      description: "Our team of industry experts brings decades of combined experience in casino gaming."
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "We fact-check every bonus offer, review every game, and verify every claim we make."
    }
  ];

  const achievements = [
    { number: "500+", label: "Casinos Reviewed" },
    { number: "50K+", label: "Players Helped" },
    { number: "5", label: "Years Experience" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <>
      <Helmet>
        <title>About Elite Casinos - Your Trusted Casino Review Experts</title>
        <meta name="description" content="Learn about Elite Casinos' mission to provide honest casino reviews, expert analysis, and player protection. Meet our team of gaming industry professionals." />
        <meta name="keywords" content="casino review experts, gambling professionals, online casino analysis, player protection" />
      </Helmet>

      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              {casino.pagename}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in finding the world's best online casinos for {country} players. We combine industry expertise with player advocacy to deliver honest, comprehensive reviews tailored for {country} residents.
            </p>
          </div>

          {/* Mission Section */}
          <div className="glass-effect rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At Elite Casinos, we believe every player deserves a safe, fair, and enjoyable gaming experience. Our mission is to bridge the gap between players and reputable online casinos through transparent reviews, expert analysis, and unwavering commitment to player protection.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We don't just review casinos – we test them rigorously with a focus on {country} player needs, analyze their practices, and ensure they meet our strict standards for security, fairness, and player satisfaction in {country}.
                </p>
                <div className="flex items-center text-yellow-400">
                  <Heart className="h-6 w-6 mr-2" />
                  <span className="font-semibold">Committed to Responsible Gaming</span>
                </div>
              </div>
              <div className="relative">
                <div className="glass-dark rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">{achievement.number}</div>
                        <div className="text-gray-300">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="casino-card glass-dark rounded-2xl p-8 text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>


          {/* Process Section */}
          <div className="glass-effect rounded-3xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Our Review Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Registration", description: "We create real accounts and test the signup process" },
                { step: "02", title: "Testing", description: "Rigorous testing of games, bonuses, and features" },
                { step: "03", title: "Analysis", description: "Comprehensive analysis of terms, security, and support" },
                { step: "04", title: "Review", description: "Honest review based on our findings and experience" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full text-black font-bold text-xl mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="glass-effect rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Questions About Our Reviews?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always here to help {country} players. Contact our team of experts for personalized recommendations or any questions about our review process for {country} casinos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contact Our Experts
              </button>
              <button className="glass-effect text-white font-semibold px-8 py-4 rounded-full border border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                View Our Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasinoPage;