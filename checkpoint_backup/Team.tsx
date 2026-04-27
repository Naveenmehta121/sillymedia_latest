import { useState } from 'react';
import { Quote, Instagram, Linkedin } from 'lucide-react';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Naveen Mehta',
      role: 'Growth Strategist & Co-Founder',
      image: '/images/team/naveen kumar.jpeg',
      quote: "Growth isn't luck — it's strategy executed with clarity.",
      bio: 'With 8+ years in digital marketing, Naveen combines analytical thinking with creative vision to drive explosive growth for brands.',
      specialties: ['Growth Strategy', 'Analytics', 'Campaign Optimization'],
      gradient: 'from-blue-500 to-purple-500',
      instagram: 'https://www.instagram.com/nottnnaveen?igsh=MTlzaGRlOGZia2t4Ng==',
      linkedin: 'https://www.linkedin.com/in/naveen-kumar-mehta'
    },
    {
      name: 'Manas',
      role: 'Creative Lead & Co-Founder',
      image: '/images/team/manas.jpeg',
      quote: "Every brand has a story waiting to go viral – we just find it.",
      bio: 'Manas brings brands to life through compelling visuals and storytelling that captures hearts and minds across social platforms.',
      specialties: ['Creative Direction', 'Content Strategy', 'Brand Storytelling'],
      gradient: 'from-purple-500 to-pink-500',
      instagram: 'https://www.instagram.com/manasinha__?igsh=MWJyOHhsenJiYm13ag=='
    },
    {
      name: 'Priyanshu Raj',
      role: 'Creative Head',
      image: '/images/team/priyanshu raj.jpeg',
      quote: "Creativity is intelligence having fun – and we bring the party.",
      bio: 'Priyanshu leads the creative vision with an eye for detail and a passion for pushing boundaries in visual storytelling and brand design.',
      specialties: ['Visual Design', 'Creative Strategy', 'Brand Identity'],
      gradient: 'from-blue-500 to-purple-500',
      instagram: 'https://www.instagram.com/priyanshu._.raj_?igsh=YjRxbndscHM3em11'
    },
    {
      name: 'Rohan Mehta',
      role: 'Operational Head',
      image: '/images/team/rohan mehta.jpeg',
      quote: "Efficiency is doing things right; effectiveness is doing the right things.",
      bio: 'Rohan ensures seamless operations and project delivery, keeping every campaign on track and every client delighted with flawless execution.',
      specialties: ['Project Management', 'Operations', 'Client Relations'],
      gradient: 'from-purple-500 to-pink-500',
      instagram: 'https://www.instagram.com/rohan.mehta_?igsh=Z2FqZzF6ZXExOHRy'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            Meet The Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The creative minds behind your brand's transformation. We're not just an agency –
            we're growth partners who live and breathe your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${hoveredMember === index ? 'scale-105 z-10' : ''
                }`}>

                {/* Background Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 h-full">

                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className={`relative overflow-hidden rounded-2xl p-1 bg-gradient-to-br ${member.gradient}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        decoding="async"
                        className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl m-1`} />
                    </div>

                    {/* Floating Quote Icon */}
                    <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center transition-all duration-300 ${hoveredMember === index ? 'scale-110 rotate-12' : ''
                      }`}>
                      <Quote className="text-white" size={20} />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className={`text-lg bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold`}>
                        {member.role}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className={`transform transition-all duration-500 ${hoveredMember === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                      <blockquote className="text-white italic text-lg leading-relaxed mb-4">
                        "{member.quote}"
                      </blockquote>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${member.gradient} bg-opacity-20 border border-purple-500/30 rounded-full text-sm text-purple-200`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4 pt-4">
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 hover:bg-purple-500/30 rounded-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
                        >
                          <Instagram className="text-purple-300" size={20} />
                          <span className="text-purple-300 text-sm font-medium">Instagram</span>
                        </a>
                      )}
                      {'linkedin' in member && member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 hover:bg-purple-500/30 rounded-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
                        >
                          <Linkedin className="text-purple-300" size={20} />
                          <span className="text-purple-300 text-sm font-medium">LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 rounded-3xl filter blur-xl transition-opacity duration-500 pointer-events-none ${hoveredMember === index ? 'opacity-10' : ''
                    }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              8+
            </div>
            <div className="text-gray-300">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-300">Brands Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-300">Dedicated Support</div>
          </div>
        </div>

        {/* Join the Team */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented creatives and strategists who share our passion for growth.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;