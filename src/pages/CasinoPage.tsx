import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Users, Award, Target, Heart, Star, Trophy, Sparkles, Smartphone, LucideIcon } from 'lucide-react';
import { useGeoLocation } from '../hooks/useGeoLocation';
import { Link, useLocation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase";

const CasinoPage = () => {
   type CasinoPage = {
}
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}
  const { country } = useGeoLocation();
   const location = useLocation();

   const [loading, setLoading] = useState(true);
   const [testfeatures, setTestFeatures] = useState<Feature[]>([]);
   const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Sparkles,
  Shield,
  Smartphone,
};



const { casino } = location.state || {};
let features = [
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

   console.log("CHECK",casino)
  if (!casino) {
    console.log("CHECK",casino)
    return <p className="text-center text-gray-400 mt-10">No casino data available.</p>;
  }
  const [casinoPageContent, setCasinoPageContent] = useState<any>();
    useEffect(() => {
      async function fetchData() {
         setLoading(true);
        try {
           const q = query(
                  collection(db, "casinopages"),
                  where("casino.pagename", "==", casino.pagename)
                );
          
                const querySnapshot = await getDocs(q);
                let data: any[] = querySnapshot.docs.map(doc => ({
                  id: doc.id,
                  ...(doc.data() as Omit<any, "id">),
                }));
             let firebaseCasino  = data[0]
           data = data.sort((a, b) => {
          // Move the one with isCasinoOfTheMonth true to the top
          if (a.isCasinoOfTheMonth && !b.isCasinoOfTheMonth) return -1;
          if (!a.isCasinoOfTheMonth && b.isCasinoOfTheMonth) return 1;
          return 0;
        });
          console.log("DATA firebaseCasino",firebaseCasino.features)

        // const uniqueFeaturesJson =  firebaseCasino.features.json();
            const mappedUniqueFeaturesJsonData: Feature[] = firebaseCasino.features.map((item: any) => ({
      ...item,
      icon: iconMap[item.icon] || Trophy, // fallback if icon name is invalid

      
    }));
         setTestFeatures(mappedUniqueFeaturesJsonData)

          setCasinoPageContent(firebaseCasino);
        } catch (err) {
          console.error('Error fetching posts:', err);
        } finally {
           setLoading(false);
        }
  
      }
      fetchData();
    }, []);
    console.log("DATA casinoPageContent:::", casinoPageContent)
  
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
       <title>{`${casinoPageContent?.casino?.name} Casino Review | Elite Casinos`}</title>
        <meta name="description" content={`${casinoPageContent?.casino?.name} Casino Review | Elite Casinos`} />
        <meta name="keywords" content={`${casinoPageContent?.casino?.name} Casino Review | Elite Casinos`}/>
      </Helmet>

       <div className="pt-20">
          {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 floating-animation"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-500 rounded-full opacity-30 floating-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-500 rounded-full opacity-25 floating-animation" style={{ animationDelay: '4s' }}></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">

              {casinoPageContent?.title} 
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
             {casinoPageContent?.welcomeTitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={`${casinoPageContent?.casino?.affiliateLink}`}
                className="glossy-btn glow-pulse text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                🎰  Play Now at {casinoPageContent?.title} 
              </Link>
            </div>
          </div>
        </section>
         {/*Casino Section */}

        {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
              <p className="text-gray-300 mt-4">Loading Casinos...</p>
            </div>
          )}
 


        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src={`${casinoPageContent?.casino?.imageUrl}`}
                    alt={`${casinoPageContent?.casino?.title} Casino`}
                    className="h-20 w-auto rounded-lg shadow-lg"
                  />
                  <div className="ml-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                      {casinoPageContent?.casino?.title}
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
                  {casinoPageContent?.description}
                </p>
                 <p className="text-xl text-gray-300 mb-6 leading-relaxed italic text-gray-400">
                 {`Reviewd by: ${casinoPageContent?.author} |Updated on: ${casinoPageContent?.date}`}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`${casinoPageContent?.casino?.affiliateLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {`Play Now`}
                     
                  </a>
                  <div className="glass-dark rounded-full px-6 py-4 flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-white font-semibold">{`${casinoPageContent?.casino?.features.license} Licensed`}</span>
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
                    <span className="text-white font-semibold">{`${casinoPageContent?.casino?.features.license}`}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Games</span>
                    <span className="text-white font-semibold">{`${casinoPageContent?.casino?.features.games}`}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Withdrawal Time</span>
                    <span className="text-white font-semibold">{`${casinoPageContent?.casino?.features.withdrawal}`}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Support</span>
                    <span className="text-white font-semibold">{`${casinoPageContent?.casino?.features.support}`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/*Unique Features */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">

            <div className="mb-12">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                What Makes {casinoPageContent?.title} Special
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testfeatures.map((feature, index) => (
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
          </div>
        </section>
        
       </div>
    </>
  );
};

export default CasinoPage;