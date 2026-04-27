import { Instagram, Facebook, Youtube, TrendingUp, Linkedin } from 'lucide-react';

const SocialProof = () => {

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500' },
    { name: 'Meta Ads', icon: Facebook, color: 'from-blue-500 to-purple-500' },
    { name: 'YouTube', icon: Youtube, color: 'from-red-500 to-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-400' }
  ];

  const clients = [
    'Bakoo Yaar', 'Delight Dining', 'Saga', 'Olives and Figs',
    'Meraki', 'Odam Café', 'BIRINJ BIRYANI', 'The Spot'
  ];

  const achievements = [
    { number: '20+', label: 'Brands Transformed' },
    { number: '150k+', label: 'Growth Achieved' },
    { number: '90%', label: 'Average Growth Rate' },
    { number: '98%', label: 'Client Retention Rate' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            Trusted by Brands Everywhere
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the community of successful brands that trust us with their digital growth
            across all major social platforms.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-purple-500/50">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Icons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">We Master Every Platform</h3>
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="group text-center">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-3 hover:scale-110 transition-all duration-300 hover:shadow-2xl group-hover:shadow-purple-500/50`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {platform.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scrolling Client Ticker */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Growing Client Family</h3>
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
            <div className="flex animate-scroll space-x-12">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-white font-semibold text-lg whitespace-nowrap"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instagram Feed Mockup */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Live from Our Instagram</h3>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '/images/restaurants/bakoo yaar.jpeg',
                "/images/restaurants/Olives 'n' Figs.jpeg",
                '/images/restaurants/The Spot.jpeg',
                '/images/restaurants/birinj biriyan.jpeg'
              ].map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
                  <img
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center text-white">
                      <Instagram size={20} className="mr-2" />
                      <span className="text-sm font-medium">View on Instagram</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <a
                href="https://instagram.com/sillymedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <Instagram className="mr-2" size={20} />
                Follow @sillymedia.in
              </a>
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <TrendingUp className="text-green-400 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-white mb-4">Industry Recognition</h3>
            <p className="text-xl text-gray-300 mb-6">
              Recognized as one of the fastest-growing creative agencies in India,
              with features in top marketing publications and industry awards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                Top Creative Agency 2025
              </span>
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                Client Choice Award
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                Growth Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Ready to join this success story?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            Start Your Success Story
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;