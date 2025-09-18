import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  slug: string;
  link: string;
  _embedded?: {
    author?: Array<{
      name: string;
      avatar_urls: {
        '96': string;
      };
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const postsPerPage = 6;

  useEffect(() => {
    fetchCategoryId();
  }, []);

  useEffect(() => {
    if (categoryId !== null) {
      fetchPosts();
    }
  }, [currentPage, searchTerm, categoryId]);

  const fetchCategoryId = async () => {
    try {
      const response = await fetch(
        `https://elitewins.net/wp/wp-json/wp/v2/categories?slug=elitewins`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }
      
      const categories = await response.json();
      if (categories.length > 0) {
        setCategoryId(categories[0].id);
      } else {
        setError('Category "elitewins" not found. Please check if the category exists in your WordPress site.');
        setLoading(false);
      }
    } catch (err) {
      setError('Failed to load category information. Please try again later.');
      setLoading(false);
      console.error('Error fetching category:', err);
    }
  };

  const fetchPosts = async () => {
    if (categoryId === null) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const searchQuery = searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : '';
      const categoryQuery = `&categories=${categoryId}`;
      const response = await fetch(
        `https://elitewins.net/wp/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${currentPage}&_embed${searchQuery}${categoryQuery}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data = await response.json();
      const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');
      
      setPosts(data);
      setTotalPages(Math.ceil(totalPosts / postsPerPage));
    } catch (err) {
      setError('Failed to load blog posts. Please try again later.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const truncateText = (text: string, maxLength: number) => {
    const stripped = stripHtml(text);
    return stripped.length > maxLength ? stripped.substring(0, maxLength) + '...' : stripped;
  };

  return (
    <>
      <Helmet>
        <title>Casino Blog - Elite Casinos | Expert Gaming Insights & Tips</title>
        <meta name="description" content="Read the latest casino news, gaming tips, and expert insights from Elite Casinos. Stay updated with industry trends and winning strategies." />
        <meta name="keywords" content="casino blog, gambling tips, casino news, gaming strategies, online casino insights" />
      </Helmet>

      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Casino Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the game with expert insights, industry news, and winning strategies from our team of casino professionals.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <div className="glass-effect rounded-full p-2 flex items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search blog posts..."
                  className="flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="glossy-btn p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Search className="h-5 w-5 text-black" />
                </button>
              </div>
            </form>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
              <p className="text-gray-300 mt-4">Loading blog posts...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-red-400 mb-4">{error}</p>
                <button
                  onClick={fetchPosts}
                  className="glossy-btn text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && !error && (
            <>
              {posts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
                    <p className="text-gray-300 mb-4">No blog posts found.</p>
                    {searchTerm && (
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setCurrentPage(1);
                        }}
                        className="glossy-btn text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {posts.map((post) => (
                    <article key={post.id} className="casino-card glass-dark rounded-2xl overflow-hidden shadow-xl group">
                      {/* Featured Image */}
                      <div className="relative h-48 overflow-hidden">
                        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                          <img
                            src={post._embedded['wp:featuredmedia'][0].source_url}
                            alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 to-yellow-200/20 flex items-center justify-center">
                            <Tag className="h-12 w-12 text-yellow-400" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Categories */}
                        {post._embedded?.['wp:term']?.[0] && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post._embedded['wp:term'][0].slice(0, 2).map((category) => (
                              <span
                                key={category.id}
                                className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black px-3 py-1 rounded-full text-xs font-bold"
                              >
                                {category.name}
                              </span>
                            ))}
                          </div>
                        )}

                        <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                          {stripHtml(post.title.rendered)}
                        </h2>

                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {truncateText(post.excerpt.rendered, 120)}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          {post._embedded?.author?.[0] && (
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2" />
                              <span>{post._embedded.author[0].name}</span>
                            </div>
                          )}
                        </div>

                        {/* Read More Button */}
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300 group"
                        >
                          Read Full Article
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="glass-effect px-6 py-3 rounded-full text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                            currentPage === pageNum
                              ? 'glossy-btn text-black'
                              : 'glass-effect text-white hover:bg-white hover:bg-opacity-10'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="glass-effect px-6 py-3 rounded-full text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

          {/* Newsletter CTA */}
          <div className="glass-effect rounded-3xl p-12 text-center mt-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest casino insights, expert tips, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="glossy-btn text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;