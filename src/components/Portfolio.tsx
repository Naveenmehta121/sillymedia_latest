import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';

const Portfolio = () => {

  const headingReveal = useScrollReveal();
  const gridReveal = useStaggerReveal({ threshold: 0.05 });

  const projects = [
    {
      id: 1,
      name: 'Bakoo Yaar',
      category: 'Restaurant & Bar',
      image: '/images/restaurants/bakoo yaar.jpeg',
      description: 'Complete branding and social media transformation for a trendy restaurant & bar chain.',
      results: '+180% engagement, 45% increase in footfall',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      name: 'Delight Dining',
      category: 'Restaurant',
      image: '/images/restaurants/delight dining .jpg.jpeg',
      description: 'Luxury dining experience showcased through premium content and targeted campaigns.',
      results: '+220% engagement, 60% reservation increase',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Saga',
      category: 'Multi-Cuisine Restaurant',
      image: '/images/restaurants/saga.jpeg',
      description: 'Modern multi-cuisine brand positioning with viral content strategies.',
      results: '500K+ reach, 25% sales boost',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Olives and Figs',
      category: 'Restaurant',
      image: "/images/restaurants/Olives 'n' Figs.jpeg",
      description: 'Premium Mediterranean dining brand built with community-focused content and influencer partnerships.',
      results: '300% online visibility, 40% sales growth',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      name: 'Meraki',
      category: 'Café',
      image: '/images/restaurants/cafe meraki .jpeg',
      description: 'Creative café branding with artistic content and influencer collaborations.',
      results: '+150% brand recognition, premium positioning',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 6,
      name: 'Odam Café',
      category: 'Café',
      image: '/images/restaurants/cafe Odam.jpeg',
      description: 'Café social media management with daily content and community building.',
      results: '2M+ impressions, 35% customer retention',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 7,
      name: 'BIRINJ BIRYANI',
      category: 'Famous Biryani Chain',
      image: '/images/restaurants/birinj biriyan.jpeg',
      description: 'Iconic biryani chain digital presence elevated through bold branding and food content strategies.',
      results: '+250% followers, premium brand positioning',
      gradient: 'from-yellow-500 to-red-500'
    },
    {
      id: 8,
      name: 'The Spot',
      category: 'Café',
      image: '/images/restaurants/The Spot.jpeg',
      description: 'Entertainment venue promotion with event marketing and viral campaigns.',
      results: '400% event attendance, trending hashtags',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
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
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            Our Clients
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From local cafés to lifestyle brands, we've transformed businesses across industries
            with bold creativity and data-driven strategies.
          </p>
        </div>

        <div ref={gridReveal.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={gridReveal.getItemStyle(index)}
              className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:z-10"
            >
              <div className="aspect-square relative">
                <img
                  src={project.image}
                  alt={project.name}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{project.category}</p>
                    <p className="text-sm leading-relaxed mb-4">{project.description}</p>

                  </div>
                </div>

                {/* Corner Label */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">Ready to see your brand here?</p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;