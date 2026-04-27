import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How soon can I see results?',
      answer: 'You\'ll typically see initial improvements in engagement within the first 2-3 weeks. Significant growth in followers and meaningful business impact usually becomes evident within 4-6 weeks. Our fastest client transformations have achieved 150%+ growth in just 30 days!'
    },
    {
      question: 'Do you only work with cafés and restaurants?',
      answer: 'Not at all! While we have extensive experience in the F&B industry, we work with brands across all sectors - from lifestyle and fashion to tech startups and professional services. We adapt our creative approach to fit any industry that\'s serious about growth.'
    },
    {
      question: 'What makes Sillymedia different from other agencies?',
      answer: 'Three key differentiators: Daily posting with premium content quality, fun personality combined with professional execution, and our focus on building genuine connections rather than just follower counts. We don\'t just manage social media - we create digital experiences that transform brands.'
    },
    {
      question: 'Can I see examples of your work before signing up?',
      answer: 'Absolutely! Our portfolio showcases detailed case studies with before/after comparisons, growth metrics, and client testimonials. We\'re also happy to schedule a call to discuss specific examples relevant to your industry and goals.'
    },
    {
      question: 'Do you handle paid advertising too?',
      answer: 'Yes! Our Growth and Premium packages include comprehensive paid advertising management across Meta (Facebook & Instagram), Google Ads, and other platforms. We integrate paid strategies seamlessly with organic content for maximum impact and ROI.'
    },
    {
      question: 'What if I\'m not satisfied with the results?',
      answer: 'We offer a 30-day money-back guarantee on all our plans. If you\'re not completely satisfied with our work and the results we deliver, we\'ll refund your investment. However, our 98% client retention rate speaks to the quality of our work!'
    },
    {
      question: 'How much input do I have in the content creation process?',
      answer: 'You have as much or as little involvement as you prefer! We start with a comprehensive brand briefing to understand your vision, then create content calendars for your approval. You can be hands-on with reviews and feedback, or trust our expertise for a fully managed experience.'
    },
    {
      question: 'Do you provide analytics and reporting?',
      answer: 'Yes! All plans include detailed monthly analytics reports showing growth metrics, engagement rates, reach, and ROI. Premium clients get access to our custom reporting dashboard with real-time analytics and weekly performance calls with dedicated account managers.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="text-purple-400 mr-3" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              FAQ
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            our clients ask before starting their growth journey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 ${
                openFAQ === index ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-start focus:outline-none group"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 flex-1 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="text-purple-400 transform group-hover:scale-110 transition-transform duration-300" size={24} />
                  ) : (
                    <ChevronDown className="text-purple-400 transform group-hover:scale-110 transition-transform duration-300" size={24} />
                  )}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-4" />
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              We're here to help! Schedule a free consultation call to discuss your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110"
              >
                Schedule Free Call
              </a>
              <a 
                href="#contact"
                className="border-2 border-white/30 hover:border-purple-400 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;