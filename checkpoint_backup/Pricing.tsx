import { useState } from 'react';
import { Check, X, Star, Zap, Crown, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [expandedPlan, setExpandedPlan] = useState<number | null>(1); // Growth expanded by default

  const plans = [
    {
      name: 'Starter Package',
      originalPrice: '₹18,999',
      price: '₹15,999',
      period: '/month',
      description: 'Ideal for small businesses, cafés, and local brands building a consistent social media presence.',
      icon: Star,
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
      services: [
        'Social Media Management',
        'Content Creation (Reels + Posts)',
        'Basic Branding Consistency'
      ],
      deliverables: {
        reels: '4–5',
        posts: '4',
        total: '8–9 creatives'
      },
      features: [
        { text: 'Content planning & monthly calendar', included: true },
        { text: 'Reel ideation, basic editing & captions', included: true },
        { text: 'Graphic post design', included: true },
        { text: 'Caption writing with relevant hashtags', included: true },
        { text: 'Basic engagement & posting support', included: true },
        { text: 'Stories', included: false },
      ],
      revisions: 'Up to 3 revisions per creative before posting. Additional revisions chargeable.',
      workflow: 'Content planned in advance. Posting as per mutually agreed schedule.'
    },
    {
      name: 'Growth Package',
      price: '₹34,999',
      originalPrice: '₹43,999',
      period: '/month',
      description: 'For growing brands, restaurants, cafés, clubs, and businesses aiming for higher visibility and engagement.',
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      services: [
        'Social Media Management',
        'Advanced Content Creation (Reels + Posts)',
        'Branding Support',
        'Growth-Focused Strategy'
      ],
      deliverables: {
        reels: '6',
        posts: '6',
        total: '12 creatives'
      },
      features: [
        { text: 'Structured monthly content calendar', included: true },
        { text: 'High-quality reel ideation, editing & captions', included: true },
        { text: 'Branded graphic & carousel posts', included: true },
        { text: 'Strategic captions with CTAs & hashtags', included: true },
        { text: 'Offer / event-based story updates', included: true },
        { text: 'Trend & competitor analysis', included: true },
        { text: 'Basic performance review & optimisation', included: true },
        { text: 'Stories for offers, events & promos', included: true },
      ],
      revisions: 'Up to 3 revisions per creative. Additional revisions chargeable.',
      workflow: 'Content planned and shared in advance. Regular coordination for campaigns and offers.'
    },
    {
      name: 'Premium Package',
      price: '₹49,999',
      originalPrice: '₹65,999',
      period: '/month',
      description: 'For established brands, clubs, lounges, and businesses seeking strong brand presence, consistency, and growth-driven content.',
      icon: Crown,
      gradient: 'from-orange-500 to-red-500',
      popular: false,
      services: [
        'Full Social Media Management',
        'High-End Content Creation (Reels + Posts)',
        'Brand Building & Creative Direction',
        'Advanced Growth & Conversion Strategy',
        'Google Business Profile Management'
      ],
      deliverables: {
        reels: '8–10',
        posts: '8–10',
        total: '16–20 creatives'
      },
      features: [
        { text: 'Detailed content strategy & monthly calendar', included: true },
        { text: 'Cinematic reels with strong hooks', included: true },
        { text: 'Advanced graphic & carousel storytelling', included: true },
        { text: 'Caption writing with strong CTAs & strategic hashtags', included: true },
        { text: 'Regular story updates (BTS, promos, reposts, announcements)', included: true },
        { text: 'Campaign planning (events, launches, festivals, offers)', included: true },
        { text: 'Trend forecasting & competitor benchmarking', included: true },
        { text: 'Monthly performance insights & optimisation', included: true },
        { text: 'Google Business Profile optimisation', included: true },
        { text: 'Professional customer review replies', included: true },
        { text: 'Brand-aligned reputation management', included: true },
        { text: 'Local visibility & trust-building support', included: true },
        { text: '12–20 stories per month', included: true },
      ],
      revisions: 'Up to 3 revisions per creative. Additional revisions chargeable.',
      workflow: 'Priority handling & faster turnarounds. Content planned well in advance. Regular coordination, review & optimisation.'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            Pricing & Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your growth journey. Every plan includes our signature
            creativity, dedication, and results-driven approach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === index;
            const isExpanded = expandedPlan === index;

            return (
              <div
                key={index}
                className={`relative transform transition-all duration-500 ${isHovered ? 'scale-[1.02] z-10' : plan.popular ? 'md:scale-[1.02]' : ''
                  }`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className={`h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 rounded-3xl p-8 transition-all duration-500 flex flex-col ${plan.popular || isHovered
                  ? `border-transparent bg-gradient-to-br ${plan.gradient} bg-opacity-10`
                  : 'border-white/20 hover:border-purple-500/50'
                  }`}>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 rounded-3xl filter blur-xl transition-opacity duration-500 pointer-events-none ${isHovered || plan.popular ? 'opacity-20' : ''
                    }`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${plan.gradient}`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-lg text-gray-500 line-through font-medium">
                          {plan.originalPrice}
                        </span>
                        <span className="bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                          SAVE {Math.round((1 - parseInt(plan.price.replace(/[₹,]/g, '')) / parseInt(plan.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
                        </span>
                      </div>
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-lg">{plan.period}</span>
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Services Included</h4>
                      <ul className="space-y-2">
                        {plan.services.map((service, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="text-green-400 mt-0.5 mr-2 flex-shrink-0" size={14} />
                            <span className="text-gray-300 text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Monthly Deliverables */}
                    <div className="mb-6 bg-white/5 rounded-xl p-4 border border-white/10">
                      <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Monthly Deliverables</h4>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className={`text-lg font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>{plan.deliverables.reels}</div>
                          <div className="text-gray-400 text-xs">Reels</div>
                        </div>
                        <div>
                          <div className={`text-lg font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>{plan.deliverables.posts}</div>
                          <div className="text-gray-400 text-xs">Posts</div>
                        </div>
                        <div>
                          <div className={`text-lg font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>{plan.deliverables.total.split(' ')[0]}</div>
                          <div className="text-gray-400 text-xs">Total</div>
                        </div>
                      </div>
                    </div>

                    {/* Expand/Collapse Toggle */}
                    <button
                      onClick={() => setExpandedPlan(isExpanded ? null : index)}
                      className="flex items-center justify-center gap-2 text-sm text-purple-300 hover:text-white transition-colors duration-300 mb-4"
                    >
                      {isExpanded ? 'Hide Details' : 'View Full Details'}
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {/* Expanded Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      {/* What's Included */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">What's Included</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              {feature.included ? (
                                <Check className="text-green-400 mt-0.5 mr-2 flex-shrink-0" size={14} />
                              ) : (
                                <X className="text-red-400 mt-0.5 mr-2 flex-shrink-0" size={14} />
                              )}
                              <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                                {feature.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Revisions */}
                      <div className="mb-4 bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">Revisions</h4>
                        <p className="text-gray-300 text-sm">{plan.revisions}</p>
                      </div>

                      {/* Workflow */}
                      <div className="mb-4 bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">Workflow</h4>
                        <p className="text-gray-300 text-sm">{plan.workflow}</p>
                      </div>
                    </div>

                    {/* CTA Button - pushed to bottom */}
                    <div className="mt-auto pt-4">
                      <a
                        href="#contact"
                        className={`group w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center`}
                      >
                        Choose Plan
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                      </a>
                      <p className="text-center text-gray-400 text-xs mt-3">
                        No setup fees • Cancel anytime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Option */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Need Something Custom?</h3>
            <p className="text-xl text-gray-300 mb-6">
              For enterprises, multi-brand management, or unique requirements,
              we create tailored solutions that fit your exact needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110"
              >
                Get Custom Quote
              </a>
              <a
                href="#contact"
                className="border-2 border-white/30 hover:border-purple-400 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                Schedule Call
              </a>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
            <Check className="text-green-400 mr-2" size={20} />
            <span className="text-white font-semibold">30-Day Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;