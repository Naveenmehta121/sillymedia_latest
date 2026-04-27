import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Delight Dining',
      role: 'Fine Dining Restaurant',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'Sillymedia tripled our engagement in 2 months! Our restaurant is now fully booked every weekend. Their creative approach and consistent posting transformed our entire social presence.',
      rating: 5,
      metric: '+220% Engagement'
    },
    {
      id: 2,
      name: 'The Spot',
      role: 'Entertainment Venue',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'They feel less like an agency, more like growth partners. Our events are now trending topics! The team understands our vibe perfectly and creates content that resonates.',
      rating: 5,
      metric: '+400% Event Attendance'
    },
    {
      id: 3,
      name: 'Bako Yaar',
      role: 'Restaurant Chain',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'Our brand is now consistent across all locations and customer love is through the roof! Sillymedia helped us find our unique voice in a crowded market.',
      rating: 5,
      metric: '+180% Brand Recognition'
    },
    {
      id: 4,
      name: 'Café Deratte',
      role: 'Specialty Coffee',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'From a local café to a recognized coffee brand – Sillymedia made it happen. Their aesthetic content and strategic posting schedule transformed our online presence completely.',
      rating: 5,
      metric: '+250% Online Orders'
    },
    {
      id: 5,
      name: 'Meraki Studio',
      role: 'Creative Agency',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'Working with Sillymedia elevated our own creative standards. They bring fresh perspectives and innovative strategies that deliver real results for creative businesses.',
      rating: 5,
      metric: '+300% Client Inquiries'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it – hear from the brands we've transformed 
            and the relationships we've built along the way.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
            
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full filter blur-2xl" />

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Quote className="text-white" size={28} />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl text-white text-center leading-relaxed mb-8 italic">
                "{currentTest.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-4">
                  <img
                    src={currentTest.image}
                    alt={currentTest.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50"
                  />
                  <div className="text-center md:text-left">
                    <p className="text-xl font-bold text-white">{currentTest.name}</p>
                    <p className="text-purple-300">{currentTest.role}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-2">
                  <span className="text-white font-semibold">{currentTest.metric}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-purple-500/20 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-purple-500/20 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-purple-500/50' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.testimonial.substring(0, 100)}...
              </p>
              
              <div className="mt-4 text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm">
                  {testimonial.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Ready to become our next success story?
          </p>
          <a 
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;