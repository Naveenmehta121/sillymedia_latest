import React, { useState, useEffect } from 'react';
import { Siren as Fire, Clock, ArrowRight } from 'lucide-react';

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent animate-pulse" />
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-bounce" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full animate-ping" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          {/* Fire Icon and Badge */}
          <div className="flex items-center justify-center mb-6">
            <Fire className="text-yellow-300 animate-bounce mr-2" size={32} />
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm animate-pulse">
              LIMITED TIME OFFER
            </span>
            <Fire className="text-yellow-300 animate-bounce ml-2" size={32} />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            🔥 1-Week Trial at just <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">₹999</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience the Sillymedia magic with a full week of premium social media management. 
            No commitments, just results!
          </p>

          {/* What's Included */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              'Daily Content Creation',
              'Community Management',
              'Performance Analytics'
            ].map((feature, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <p className="text-white font-semibold">{feature}</p>
              </div>
            ))}
          </div>

          {/* Countdown Timer */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Clock className="text-yellow-300 mr-2" size={24} />
              <span className="text-white font-semibold">Offer Expires In:</span>
            </div>
            <div className="flex justify-center space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 min-w-[50px]">
                    <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                  </div>
                  <div className="text-white/70 text-xs mt-1 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <a 
              href="#contact"
              className="group inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50"
            >
              <span className="flex items-center">
                Try Now - Just ₹999
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </span>
            </a>
            
            <p className="text-white/80 text-sm">
              Regular price: ₹9,999/month • Save 90% • No setup fees
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white/90 mb-4">
              "The trial week convinced us immediately. We saw 150% growth in just 7 days!"
            </p>
            <p className="text-yellow-300 font-semibold">— Recent Trial Client</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;