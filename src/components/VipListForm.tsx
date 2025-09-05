import React, { useState } from 'react';
import { Crown, Mail, User, CheckCircle, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

interface VipFormData {
  name: string;
  email: string;
}

const VipListForm = () => {
  const [formData, setFormData] = useState<VipFormData>({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Add document to Firebase Firestore
      await addDoc(collection(db, 'vipList'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        timestamp: serverTimestamp(),
        source: 'casino-reviews-page'
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to join VIP list. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="glass-effect rounded-3xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-200 rounded-full mb-6">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Welcome to the VIP List!
        </h3>
        <p className="text-xl text-gray-300 mb-6">
          You've successfully joined our exclusive VIP list. Get ready for premium bonuses, exclusive offers, and personalized casino recommendations.
        </p>
        <div className="flex items-center justify-center text-yellow-400 mb-4">
          <Crown className="h-5 w-5 mr-2" />
          <span className="font-semibold">VIP Member Benefits Coming Soon</span>
        </div>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="glass-effect text-white font-semibold px-6 py-3 rounded-full border border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
        >
          Join Another Member
        </button>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-6">
          <Crown className="h-8 w-8 text-black" />
        </div>
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Join Our VIP List
        </h3>
        <p className="text-xl text-gray-300 mb-6">
          Get exclusive access to premium bonuses, personalized recommendations, and VIP-only casino offers.
        </p>
        
        {/* VIP Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-dark rounded-xl p-4">
            <div className="text-yellow-400 mb-2">🎁</div>
            <h4 className="text-white font-semibold text-sm">Exclusive Bonuses</h4>
            <p className="text-gray-400 text-xs">Higher bonus percentages</p>
          </div>
          <div className="glass-dark rounded-xl p-4">
            <div className="text-yellow-400 mb-2">⚡</div>
            <h4 className="text-white font-semibold text-sm">Priority Support</h4>
            <p className="text-gray-400 text-xs">Dedicated VIP assistance</p>
          </div>
          <div className="glass-dark rounded-xl p-4">
            <div className="text-yellow-400 mb-2">🎯</div>
            <h4 className="text-white font-semibold text-sm">Personal Recommendations</h4>
            <p className="text-gray-400 text-xs">Tailored casino suggestions</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="vip-name" className="block text-white font-semibold mb-3">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="vip-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="vip-email" className="block text-white font-semibold mb-3">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="vip-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-6 py-4 rounded-xl bg-black bg-opacity-30 border border-yellow-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        {submitStatus === 'error' && (
          <div className="flex items-center text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl p-4">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>{errorMessage}</span>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="glossy-btn w-full text-black font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
              Joining VIP List...
            </>
          ) : (
            <>
              <Crown className="h-5 w-5 mr-2" />
              Join VIP List
            </>
          )}
        </button>
      </form>

      <p className="text-gray-400 text-sm text-center mt-6">
        By joining, you agree to receive exclusive VIP offers and updates. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default VipListForm;