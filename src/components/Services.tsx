import {
  Share2,
  Palette,
  Camera,
  Target,
  Users,
  Video,
  MessageCircle,
  Globe,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';

const Services = () => {
  const headingReveal = useScrollReveal();
  const gridReveal = useStaggerReveal({ threshold: 0.05 });

  const services = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Daily posting, community engagement, and platform optimization across all social channels.',
      features: ['Daily Content Creation', 'Community Management', 'Analytics & Insights', 'Hashtag Strategy']
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Complete brand identity creation and positioning that makes your business unforgettable.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Professional photography, graphics, and copywriting that stops scrollers in their tracks.',
      features: ['Photography', 'Graphic Design', 'Copywriting', 'Content Planning']
    },
    {
      icon: Target,
      title: 'Ads & Campaigns',
      description: 'Targeted advertising campaigns that convert browsers into loyal customers.',
      features: ['Meta Ads', 'Google Ads', 'Campaign Strategy', 'Performance Tracking']
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Strategic partnerships with influencers who align with your brand values.',
      features: ['Influencer Outreach', 'Campaign Management', 'Performance Analysis', 'Relationship Building']
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video content that engages, entertains, and converts your audience.',
      features: ['Reels & Shorts', 'Promotional Videos', 'Motion Graphics', 'Video Strategy']
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp API Marketing',
      description: 'Leverage the power of WhatsApp Business API to reach customers directly with personalized messaging campaigns.',
      features: ['Broadcast Campaigns', 'Automated Replies', 'Customer Segmentation', 'Analytics & Tracking']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technology to drive conversions and elevate your brand online.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Landing Pages', 'SEO Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingReveal.ref}
          className="text-center mb-16"
          style={{
            opacity: headingReveal.isVisible ? 1 : 0,
            transform: headingReveal.isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="flex items-center justify-center mb-6">
            <Zap className="text-purple-400 mr-3" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              What We Do
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just manage social media – we craft digital experiences that transform
            brands and create lasting connections with audiences.
          </p>
        </div>

        <div ref={gridReveal.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                style={gridReveal.getItemStyle(index)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/60 p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                {/* Animated Background — fills card with gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/15 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow Effect */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Bottom glow */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover CTA */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-4" />
                    <a
                      href="#contact"
                      className="inline-flex items-center text-purple-300 hover:text-white font-semibold text-sm"
                    >
                      Learn More
                      <TrendingUp className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a custom strategy that combines the perfect mix of services
              for your unique business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                Get Custom Strategy
              </a>
              <a
                href="#pricing"
                className="border-2 border-white/30 hover:border-purple-400 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;