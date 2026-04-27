import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import VariableProximity from './components/VariableProximity';
import { useRef } from 'react';

function App() {
  const containerRef = useRef(null);
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <CaseStudies />
      <Pricing />
      <Team />
      <Testimonials />
      <FAQ />
      <SocialProof />
      <Contact />

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="text-center mb-12">
            <div
              ref={containerRef}
              style={{ position: 'relative' }}
            >
              <VariableProximity
                label={'Sillymedia'}
                className={'text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 inline-block cursor-pointer'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
            <p className="text-gray-400">Where Creativity Meets Growth</p>
          </div>

          {/* Footer Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Call Us */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Phone className="text-purple-400 mr-2" size={20} />
                <h4 className="text-white font-semibold">Call Us</h4>
              </div>
              <a href="tel:+917070490795" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                +91 70704 90795
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Mail className="text-purple-400 mr-2" size={20} />
                <h4 className="text-white font-semibold">Email</h4>
              </div>
              <a href="mailto:sillymedia.in@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                sillymedia.in@gmail.com
              </a>
            </div>

            {/* Follow Us */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Instagram className="text-purple-400 mr-2" size={20} />
                <h4 className="text-white font-semibold">Follow Us</h4>
              </div>
              <a href="https://instagram.com/sillymedia.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                sillymedia.in
              </a>
            </div>

            {/* Visit Us */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="text-purple-400 mr-2" size={20} />
                <h4 className="text-white font-semibold">Visit Us</h4>
              </div>
              <span className="text-gray-400">
                Greater Noida, India
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Sillymedia. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <span className="text-gray-700">|</span>
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;