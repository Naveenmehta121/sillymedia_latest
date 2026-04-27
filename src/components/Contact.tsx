import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Clock,
  CheckCircle,
  User,
  MessageSquare
} from 'lucide-react';



const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5b1f648b-6fec-4845-88b8-10baa1fccb1e',
          subject: `New Contact from ${formData.name} - Sillymedia`,
          from_name: 'Sillymedia Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business: formData.business,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', business: '', message: '', service: '' });
      } else {
        alert('Something went wrong. Please try again or contact us directly.');
      }
    } catch {
      alert('Network error. Please try again or email us at sillymedia.in@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 70704 90795',
      link: 'tel:+917070490795',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'sillymedia.in@gmail.com',
      link: 'mailto:sillymedia.in@gmail.com',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      content: 'sillymedia.in',
      link: 'https://instagram.com/sillymedia.in',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Greater Noida, India',
      link: 'https://maps.google.com/?q=Greater+Noida+India',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            Let's Create Magic Together
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your brand? Get in touch and let's start your growth journey today.
            We typically respond within 24 hours!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8">

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">
                    Thanks for reaching out! We'll get back to you within 24 hours with a custom strategy proposal.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <User className="inline mr-2" size={18} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Mail className="inline mr-2" size={18} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Phone className="inline mr-2" size={18} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="+91 70704 90795"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Your business name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    >
                      <option value="" className="bg-gray-900 text-gray-400">Select a service</option>
                      <option value="starter" className="bg-gray-900 text-white">Starter Pack - ₹9,999/month</option>
                      <option value="growth" className="bg-gray-900 text-white">Growth Pack - ₹19,999/month</option>
                      <option value="premium" className="bg-gray-900 text-white">Premium Pack - ₹39,999/month</option>
                      <option value="trial" className="bg-gray-900 text-white">1-Week Trial - ₹999</option>
                      <option value="custom" className="bg-gray-900 text-white">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <MessageSquare className="inline mr-2" size={18} />
                      Tell Us About Your Goals *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your business, current challenges, and what you want to achieve with social media marketing..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-3" size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-sm text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-purple-500/50 flex items-center space-x-4"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.content}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="text-green-400 mr-3" size={24} />
                <h3 className="text-white font-semibold text-lg">Quick Response Guarantee</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We value your time! Here's what you can expect:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-green-200">
                  <CheckCircle className="mr-3 text-green-400" size={16} />
                  Initial response within 24 hours
                </li>
                <li className="flex items-center text-green-200">
                  <CheckCircle className="mr-3 text-green-400" size={16} />
                  Custom strategy proposal within 48 hours
                </li>
                <li className="flex items-center text-green-200">
                  <CheckCircle className="mr-3 text-green-400" size={16} />
                  Free consultation call scheduled within 72 hours
                </li>
              </ul>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                <Clock className="mr-3" size={24} />
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-purple-300">Closed (Emergency support available)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;