import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Heart, Eye } from 'lucide-react';

const CaseStudies = () => {
  const [currentStudy, setCurrentStudy] = useState(0);

  const caseStudies = [
    {
      client: 'Bakoo Yaar',
      category: 'Restaurant & Bar',
      challenge: 'Inconsistent brand messaging across multiple locations and low digital engagement',
      solution: 'Unified brand strategy with location-specific content, food photography, and community engagement campaigns',
      results: {
        engagement: '+180%',
        followers: '+20K',
        footfall: '+45%',
        reach: '3.2M+'
      },
      beforeImage: '/images/restaurants/bakoo yaar.jpeg',
      afterImage: '/images/restaurants/bakoo yaar.jpeg',
      testimonial: 'Our brand is now consistent across all locations and customer love is through the roof!',
      duration: '4 months'
    },
    {
      client: 'The Spot',
      category: 'Café',
      challenge: 'Struggling to attract younger audience and increase footfall',
      solution: 'Viral content creation with trending formats and strategic influencer collaborations',
      results: {
        engagement: '+400%',
        followers: '+25K',
        footfall: '+85%',
        reach: '5M+'
      },
      beforeImage: '/images/restaurants/The Spot.jpeg',
      afterImage: '/images/restaurants/The Spot.jpeg',
      testimonial: 'They feel less like an agency, more like growth partners. Our café is now a trending spot!',
      duration: '2 months'
    },
    {
      client: 'Olives and Figs',
      category: 'Restaurant',
      challenge: 'New brand launch with zero digital presence in a competitive dining market',
      solution: 'Full-scale brand launch strategy with premium content, influencer partnerships, and targeted ad campaigns',
      results: {
        engagement: '+300%',
        followers: '+18K',
        footfall: '+60%',
        reach: '2.8M+'
      },
      beforeImage: "/images/restaurants/Olives 'n' Figs.jpeg",
      afterImage: "/images/restaurants/Olives 'n' Figs.jpeg",
      testimonial: 'From zero to a fully booked restaurant in under 3 months — Sillymedia made it happen!',
      duration: '3 months'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [caseStudies.length]);

  const currentCase = caseStudies[currentStudy];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            Case Studies & Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real transformations, real results. See how we've helped brands achieve
            explosive growth and dominate their markets.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 transition-all duration-500">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {currentCase.client}
                </h3>
                <p className="text-purple-300 text-lg">{currentCase.category}</p>
                <div className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mt-2">
                  {currentCase.duration} project
                </div>
              </div>

              <div className="flex space-x-2 mt-4 md:mt-0">
                <button
                  onClick={() => setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)}
                  className="p-3 bg-white/10 hover:bg-purple-500/20 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                <button
                  onClick={() => setCurrentStudy((prev) => (prev + 1) % caseStudies.length)}
                  className="p-3 bg-white/10 hover:bg-purple-500/20 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3" />
                  Challenge
                </h4>
                <img
                  src={currentCase.beforeImage}
                  alt={currentCase.client}
                  className="w-full h-48 object-cover rounded-xl border-2 border-red-500/30"
                />
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <p className="text-red-200 font-semibold">The Problem:</p>
                  <p className="text-gray-300">{currentCase.challenge}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3" />
                  Solution
                </h4>
                <img
                  src={currentCase.afterImage}
                  alt={`${currentCase.client} - Results`}
                  className="w-full h-48 object-cover rounded-xl border-2 border-green-500/30"
                />
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <p className="text-green-200 font-semibold">Our Approach:</p>
                  <p className="text-gray-300">{currentCase.solution}</p>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 text-center">
                <TrendingUp className="text-purple-400 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white">{currentCase.results.engagement}</div>
                <div className="text-sm text-gray-300">Engagement</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6 text-center">
                <Users className="text-blue-400 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white">{currentCase.results.followers}</div>
                <div className="text-sm text-gray-300">New Followers</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                <Heart className="text-green-400 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white">{currentCase.results.footfall}</div>
                <div className="text-sm text-gray-300">Footfall Increase</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6 text-center">
                <Eye className="text-orange-400 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white">{currentCase.results.reach}</div>
                <div className="text-sm text-gray-300">Total Reach</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <p className="text-lg text-white italic mb-4">"{currentCase.testimonial}"</p>
              <p className="text-purple-300 font-semibold">— {currentCase.client}</p>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStudy(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStudy
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-white/30'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Want results like these for your brand?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            Get Your Case Study
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;