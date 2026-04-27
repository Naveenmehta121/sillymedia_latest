import React, { useEffect, useState, useRef } from 'react';
import {
  Search,
  Lightbulb,
  TrendingUp,
  Target,
  ArrowDown,
  CheckCircle
} from 'lucide-react';

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Understand Your Brand',
      description: 'Deep dive into your business, audience, competitors, and goals. We don\'t just create content – we craft stories that resonate.',
      details: [
        'Brand audit and analysis',
        'Target audience research',
        'Competitor benchmarking',
        'Goal setting and KPI definition'
      ]
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Create Bold Strategies & Content',
      description: 'Develop unique creative strategies and produce thumb-stopping content that makes your brand impossible to ignore.',
      details: [
        'Custom content strategy',
        'Visual identity development',
        'Content calendar creation',
        'Creative campaign concepts'
      ]
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Regular Posting & Growth Tracking',
      description: 'Consistent execution with daily content, community engagement, and real-time performance monitoring.',
      details: [
        'Daily content publishing',
        'Community management',
        'Real-time analytics',
        'Performance optimization'
      ]
    },
    {
      number: '04',
      icon: Target,
      title: 'Optimize for Crazy Results',
      description: 'Continuous refinement based on data insights to maximize growth, engagement, and ROI for your brand.',
      details: [
        'Data-driven optimizations',
        'A/B testing strategies',
        'ROI maximization',
        'Scaling successful campaigns'
      ]
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 200);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            How We Do It
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven 4-step process that transforms brands from unknown to unforgettable.
            Every step is designed to maximize your growth and impact.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform md:-translate-x-1/2" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative mb-16 md:mb-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${isVisible
                      ? 'border-purple-400 bg-gradient-to-r from-purple-500 to-pink-500 scale-100'
                      : 'border-gray-600 bg-gray-800 scale-75'
                    }`}>
                    <Icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-20 md:pl-0`}>
                  <div className={`transform transition-all duration-700 ${isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                    }`}>
                    <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 ${isEven ? 'md:ml-auto' : 'md:mr-auto'
                      }`} style={{ maxWidth: '500px' }}>

                      {/* Step Number */}
                      <div className={`inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl font-bold mb-4 ${isEven ? 'md:text-right md:block' : 'md:text-left md:block'
                        }`}>
                        {step.number}
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${isEven ? 'md:text-right' : 'md:text-left'
                        }`}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-gray-300 mb-6 leading-relaxed ${isEven ? 'md:text-right' : 'md:text-left'
                        }`}>
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className={`space-y-2 ${isEven ? 'md:text-right' : 'md:text-left'
                        }`}>
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className={`flex items-center text-sm text-purple-200 ${isEven ? 'md:flex-row-reverse md:justify-start' : ''
                            }`}>
                            <CheckCircle className={`text-purple-400 ${isEven ? 'md:ml-2 mr-2 md:mr-0' : 'mr-2'
                              }`} size={16} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -bottom-10 transform -translate-x-1/2">
                    <ArrowDown className={`text-purple-400 transition-all duration-700 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'
                      }`} size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's put this proven process to work for your brand and create results
              that exceed your expectations.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Begin Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;