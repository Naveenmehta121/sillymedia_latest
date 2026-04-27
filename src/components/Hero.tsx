import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    };

    const animate = () => {
      // Lerp for smoother movement
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate3d(${currentX * 100}px, ${currentY * 50}px, 0)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate3d(${(1 - currentX) * 120}px, ${(1 - currentY) * 80}px, 0)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate3d(${currentX * -80}px, ${currentY * 100}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.3))]" />

        {/* Moving Gradients - GPU-accelerated with will-change and translate3d */}
        <div
          ref={blob1Ref}
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"
          style={{ willChange: 'transform' }}
        />
        <div
          ref={blob2Ref}
          className="absolute w-80 h-80 bg-pink-500/30 rounded-full filter blur-3xl"
          style={{ willChange: 'transform', animation: 'float 6s ease-in-out infinite' }}
        />
        <div
          ref={blob3Ref}
          className="absolute w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl"
          style={{ willChange: 'transform', animation: 'glow 4s ease-in-out infinite' }}
        />

        {/* Floating Shapes - lightweight animations only */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-pink-400/30 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center items-center space-x-2">
          <Sparkles className="text-purple-400 animate-spin" size={24} />
          <span className="text-purple-300 font-medium">Creative Media Agency • Est. 2025</span>
          <Zap className="text-pink-400 animate-pulse" size={24} />
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            Sillymedia
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Where Creativity Meets Growth
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          We transform brands into digital legends through bold strategies,
          viral content, and results that speak louder than words.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center space-x-3"
          >
            <span>Start Your Growth Journey</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
          </a>

          <a
            href="#portfolio"
            className="group border-2 border-white/30 hover:border-purple-400 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: '20+', label: 'Brands Transformed' },
            { number: '150k+', label: 'Growth Achieved' },
            { number: '90%', label: 'Average Growth Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;