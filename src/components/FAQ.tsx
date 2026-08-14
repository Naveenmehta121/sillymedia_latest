import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Does Sillymedia work with restaurants and cafes?',
      answer: 'Yes. Sillymedia specialises in social media marketing for restaurants, cafés, bars, lounges, and hospitality brands across Delhi NCR. Our current and past clients include Bakoo Yaar (restaurant & bar), The Spot (café), Olives and Figs (Mediterranean restaurant), Meraki Café, Odam Café, Delight Dining, Saga, and BIRINJ BIRYANI — all managed from our base in Greater Noida.'
    },
    {
      question: 'What areas of Delhi NCR does Sillymedia cover?',
      answer: 'Sillymedia is based in Greater Noida and serves clients across the entire Delhi NCR region — including Delhi, Noida, Greater Noida, and Gurgaon. We work with both local single-outlet brands and multi-location chains across the NCR.'
    },
    {
      question: 'What does social media management cost at Sillymedia?',
      answer: 'We offer three monthly packages: Starter at ₹15,999/month (8–9 creatives — reels + posts), Growth at ₹34,999/month (12 creatives with strategy, analytics, and stories), and Premium at ₹49,999/month (16–20 creatives with full brand management, Google Business Profile, and reputation management). Custom enterprise quotes are also available.'
    },
    {
      question: 'Does Sillymedia do influencer marketing?',
      answer: 'Yes. Sillymedia runs a dedicated influencer marketing division for restaurant and hospitality brands in Delhi NCR. We handle influencer discovery, outreach, campaign management, and performance tracking. We also offer a commission-based influencer model where compensation is tied to actual results — reducing upfront risk for restaurant and café clients.'
    },
    {
      question: 'What is the commission-based influencer model?',
      answer: 'Unlike flat-fee influencer arrangements, Sillymedia\'s commission-based model ties influencer compensation to measurable outcomes — such as footfall, tracked reservations, or promo code redemptions. This aligns incentives between the brand, agency, and influencer, making it especially effective for restaurants wanting to track direct ROI from influencer campaigns.'
    },
    {
      question: 'How soon can I see results?',
      answer: 'Initial engagement improvements are typically visible within 2–3 weeks. Meaningful follower growth and business impact — footfall, reservations, online orders — usually appear within 4–6 weeks. Our case studies show Bakoo Yaar achieved +180% engagement in 4 months, and The Spot achieved +400% engagement and +85% footfall in just 2 months.'
    },
    {
      question: 'What makes Sillymedia different from other agencies in Delhi NCR?',
      answer: 'Three key differentiators: (1) Deep specialisation in the F&B and hospitality sector — we understand dining occasion marketing and food content standards. (2) A dedicated influencer division with a commission-based model not offered by most generalist agencies. (3) Daily content delivery combined with strategy and analytics, giving you both consistency and growth, not just aesthetics.'
    },
    {
      question: 'Do you provide analytics and reporting?',
      answer: 'Yes. All plans include monthly analytics reports covering engagement rates, follower growth, reach, and ROI tracking. Premium plan clients also receive monthly performance insights, competitor benchmarking reports, and Google Business Profile analytics.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-purple-900 via-black to-blue-900">
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