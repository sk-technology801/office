"use client"
import React, { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    { icon: "🚀", title: "Next-Gen Solutions", desc: "Cutting-edge technology stack with modern frameworks" },
    { icon: "🎯", title: "Precision Engineering", desc: "Pixel-perfect implementations and clean architecture" },
    { icon: "⚡", title: "Lightning Fast", desc: "Optimized performance with sub-second load times" },
    { icon: "🔒", title: "Enterprise Security", desc: "Bank-level security with advanced encryption" },
    { icon: "🌐", title: "Global Reach", desc: "Scalable solutions for worldwide deployment" },
    { icon: "🤖", title: "AI Integration", desc: "Smart automation with machine learning capabilities" }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "Go",
    "AWS", "Docker", "Kubernetes", "GraphQL", "MongoDB", "PostgreSQL",
    "Redis", "Blockchain", "AI/ML", "WebAssembly", "Rust", "Flutter"
  ];

  const teamMembers = [
    { 
      name: "SAAD", 
      role: "CEO & Founder", 
      desc: "Visionary leader with 15+ years in tech innovation and digital transformation.",
      initials: "SK",
      color: "from-blue-400 to-purple-500"
    },
    { 
      name: "ABRAHAM", 
      role: "CTO", 
      desc: "Technical architect specializing in AI, blockchain, and scalable cloud solutions.",
      initials: "AB",
      color: "from-purple-400 to-pink-500"
    },
    { 
      name: "Mike Johnson", 
      role: "Creative Director", 
      desc: "Design innovator focused on immersive experiences and user-centered design.",
      initials: "MJ",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Global Clients" },
    { number: "5+", label: "Years Innovation" },
    { number: "25+", label: "Expert Team" }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Meshes */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className={`w-${4 + Math.floor(Math.random() * 8)} h-${4 + Math.floor(Math.random() * 8)} bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm`} />
            </div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-grid-pattern bg-[length:50px_50px] bg-repeat" 
               style={{
                 backgroundImage: `
                   linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                   linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                 `
               }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
       
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="container mx-auto text-center">
            <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
                  <span className="animate-pulse mr-2">🚀</span>
                  SK-Technology Software House
                </span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-tight">
                About{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient-x">
                    CodeSK
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-lg blur opacity-20 animate-pulse" />
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Pioneering the future of digital experiences through innovative software solutions, 
                cutting-edge technology, and unparalleled creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 overflow-hidden">
                  <span className="relative z-10">Explore Our Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
                <button className="border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{feature.desc}</p>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-blue-400 font-semibold text-lg">Our Journey</span>
                  <h2 className="text-5xl font-bold text-white leading-tight">
                    Crafting Digital Excellence Since{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      2020
                    </span>
                  </h2>
                </div>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Born from a vision to revolutionize the digital landscape, CodeNexus emerged as a beacon of innovation in the software development realm. Our journey began with a simple yet powerful belief: technology should not just solve problems, but inspire transformation.
                  </p>
                  <p>
                    Today, we stand at the forefront of technological evolution, wielding cutting-edge tools like AI, blockchain, and immersive technologies to create solutions that don't just meet expectations—they shatter them.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {technologies.slice(0, 9).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-12 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center space-y-3 group">
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <div className="text-gray-300 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              We leverage the most advanced technologies to build the future
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <span className="text-white font-medium">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Meet Our Visionaries</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The brilliant minds driving innovation and excellence
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-10 rounded-3xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 text-center">
                    <div className="relative mx-auto mb-8">
                      <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {member.initials}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300 leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-16 rounded-3xl border border-blue-500/30 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
              <div className="relative z-10">
                <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to Build the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Future?
                  </span>
                </h2>
                <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Join forces with CodeNexus and transform your vision into revolutionary digital experiences that define tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-6 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 overflow-hidden">
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                  <button className="border-2 border-blue-500 text-blue-400 font-bold py-6 px-12 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}