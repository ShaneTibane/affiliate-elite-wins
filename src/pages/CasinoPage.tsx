import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Loader2 } from 'lucide-react';

interface CasinoData {
  name: string;
  description: string;
  logo: string;
  link: string;
  features: Record<string, string>;
}

export default function CasinoPage() {
  const { id } = useParams<{ id: string }>();
  const [casino, setCasino] = useState<CasinoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCasino = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.example.com/casino/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch casino data');
        }

        const data = await response.json();
        setCasino(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCasino();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Helmet>
          <title>Loading Casino...</title>
        </Helmet>
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading casino information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Helmet>
          <title>Error Loading Casino</title>
        </Helmet>
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Error</h2>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!casino) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Helmet>
          <title>Casino Not Found</title>
        </Helmet>
        <div className="text-center">
          <p className="text-gray-600">Casino not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Helmet>
        <title>{casino.name}</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {casino.name}
          </h1>
        </header>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 inline-block">
                <img
                  src={casino.logo}
                  alt={`${casino.name} logo`}
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                About {casino.name}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {casino.description}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(casino.features).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a
                href={casino.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-12 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
