import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Shield, Star } from 'lucide-react';
import { useGeoLocation } from '../hooks/useGeoLocation';

const Contact = () => {
  const { country } = useGeoLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "support@elitewins.net",
      available: "24/7"
    }
  ];

  const faqItems = [
    {
      question: "How do you choose which casinos to review?",
      answer: "We have strict criteria including valid licensing, security measures, game variety, customer support quality, and reputation in the industry."
    },
    {
      question: "Are your reviews completely unbiased?",
      answer: "Yes, our reviews are based on thorough testing and analysis. We maintain editorial independence and are not influenced by affiliate partnerships."
    },
    {
      question: "How often do you update casino reviews?",
      answer: "We continuously monitor casinos and update reviews quarterly or immediately if there are significant changes to their services."
    },
    {
      question: "Do you offer personalized casino recommendations?",
      answer: "Absolutely! Contact our experts and we'll provide personalized recommendations based on your gaming preferences and requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Elite Casinos - Expert Casino Review Support</title>
        <meta name="description" content="Get in touch with Elite Casinos' casino experts. Contact us for personalized recommendations, questions about our reviews, or general support." />
        <meta name="keywords" content="contact casino experts, casino review support, gambling advice, online casino help" />
      </Helmet>

      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Contact Our Experts
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our casino reviews? Need personalized recommendations for {country} players? Our team of experts is here to help you find the perfect gaming experience in {country}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-effect rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-white font-semibold mb-3">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="review">Casino Review Question</option>
                        <option value="recommendation">Recommendation Request</option>
                        <option value="partnership">Partnership</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white font-semibold mb-3">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                        placeholder="Enter message subject"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="glossy-btn w-full text-black font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information & FAQ */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 p-3 rounded-full">
                        <method.icon className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{method.description}</p>
                        <p className="text-yellow-400 font-semibold">{method.contact}</p>
                        <div className="flex items-center text-gray-400 text-xs mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{method.available}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-dark rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-yellow-400 mr-2" />
                  <h4 className="text-white font-bold">Response Time Guarantee</h4>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Email inquiries: Within 24 hours</li>
                </ul>
              </div>

              {/* Testimonial */}
              <div className="glass-dark rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 star-rating fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-3">
                  "Elite Casinos team helped me find the perfect casino for my preferences. Their expert advice saved me time and money!"
                </p>
                <p className="text-yellow-400 font-semibold text-sm">- Sarah M., Verified Player</p>
                <p className="text-yellow-400 font-semibold text-sm">- Sarah M., Verified {country} Player</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqItems.map((item, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{item.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Location */}
        
        </div>
      </div>
    </>
  );
};

export default Contact;