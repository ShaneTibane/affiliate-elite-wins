import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, Zap, Users, Clock, Gift, Filter } from 'lucide-react';
import CasinoCard from '../components/CasinoCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase";
type Casino = {
  id: string;
  name: string;
  affiliateLink:string,
  location: string;
  rating: number;
  affiliate: string,
  bonus: string,
  category: string,
  description: string,
  features: object,
  imageUrl: string,
  logo: string,
  isCasinoOfTheMonth: boolean



};
const CasinoReviews = () => {
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [testcasinos, setTestCasinos] = useState<Casino[]>([]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "casinocards"));
        const data: Casino[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Casino, "id">), // cast doc.data()
        }));
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
      },
      category: "premium"
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
      },
      category: "popular"
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
      },
      category: "vip"
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
      },
      category: "popular"
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
      },
      category: "vip"
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
      },
      category: "new"
    }
  ];

  const filteredCasinos = selectedFilter === 'all'
    ? testcasinos
    : testcasinos.filter(casino => casino.category === selectedFilter);

  const filters = [
    { value: 'all', label: 'All Casinos' },
    { value: 'premium', label: 'Premium' },
    { value: 'popular', label: 'Popular' },
    { value: 'vip', label: 'VIP' },
    { value: 'new', label: 'New' }
  ];

  return (
    <>
      <Helmet>
        <title>Casino Reviews - Elite Casinos | In-Depth Casino Analysis</title>
        <meta name="description" content="Read comprehensive casino reviews with ratings, bonuses, pros & cons. Find the perfect online casino for your gaming preferences." />
        <meta name="keywords" content="casino reviews, online casino ratings, casino bonuses, gambling reviews" />
      </Helmet>

      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Best Online Casinos In Canada 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the best of Canadas top online casinos. Our expert analysis covers bonuses, games, security, and user experience.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedFilter === filter.value
                    ? 'glossy-btn text-black'
                    : 'glass-effect text-white hover:bg-white hover:bg-opacity-10'
                  }`}
              >
                <Filter className="inline h-4 w-4 mr-2" />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Casino Cards */}
          <div className="space-y-6 max-w-5xl mx-auto p-4">
            {filteredCasinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
              <p className="text-gray-300 mt-4">Loading Casinos...</p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-gray-300 mb-6">
                Our experts are constantly reviewing new casinos. Contact us for personalized recommendations.
              </p>
              <button className="glossy-btn text-black font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasinoReviews;