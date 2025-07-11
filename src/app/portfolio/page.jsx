"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Github, Mail, Linkedin, ArrowUp, Eye, Code, Zap, Palette, Users, Calendar, Award } from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Neural Network Visualizer",
      category: "AI/ML",
      description: "Interactive 3D visualization of neural network architectures with real-time training visualization.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      tech: ["React", "Three.js", "Python", "TensorFlow"],
      link: "#",
      github: "#",
      featured: true,
      stats: { views: "12.5K", likes: "2.1K", duration: "3 months" }
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Dev",
      description: "Full-stack e-commerce solution with advanced analytics and AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
      featured: true,
      stats: { views: "8.7K", likes: "1.5K", duration: "4 months" }
    },
    {
      id: 3,
      title: "Mobile Weather App",
      category: "Mobile",
      description: "Beautiful weather app with AR features and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React Native", "ARKit", "OpenWeather API"],
      link: "#",
      github: "#",
      featured: false,
      stats: { views: "5.3K", likes: "892", duration: "2 months" }
    },
    {
      id: 4,
      title: "Blockchain DeFi Dashboard",
      category: "Blockchain",
      description: "Real-time DeFi analytics dashboard with portfolio tracking and yield farming insights.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Web3.js", "Solidity", "Ethereum"],
      link: "#",
      github: "#",
      featured: true,
      stats: { views: "15.2K", likes: "3.1K", duration: "5 months" }
    },
    {
      id: 5,
      title: "Creative Design Studio",
      category: "Design",
      description: "Award-winning design portfolio with interactive animations and smooth user experience.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      tech: ["Figma", "After Effects", "Webflow", "GSAP"],
      link: "#",
      github: "#",
      featured: false,
      stats: { views: "9.8K", likes: "1.8K", duration: "6 months" }
    },
    {
      id: 6,
      title: "IoT Smart Home System",
      category: "IoT",
      description: "Comprehensive smart home automation system with voice control and energy optimization.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      tech: ["Arduino", "Raspberry Pi", "Node.js", "Socket.io"],
      link: "#",
      github: "#",
      featured: false,
      stats: { views: "6.9K", likes: "1.2K", duration: "4 months" }
    }
  ];

  const categories = ['all', 'AI/ML', 'Web Dev', 'Mobile', 'Blockchain', 'Design', 'IoT'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const skills = [
    { name: "Frontend Development", level: 95, icon: Code },
    { name: "UI/UX Design", level: 88, icon: Palette },
    { name: "Backend Development", level: 92, icon: Zap },
    { name: "Team Leadership", level: 85, icon: Users }
  ];

  const achievements = [
    { icon: Award, title: "Best Innovation Award", year: "2024", description: "Recognized for outstanding contribution to AI research" },
    { icon: Users, title: "Led 15+ Projects", year: "2023-24", description: "Successfully managed cross-functional teams" },
    { icon: Eye, title: "100K+ Views", year: "2024", description: "Portfolio reached global audience" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor Effect */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-difference transition-all duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${selectedProject ? 1.5 : 1})`
        }}
      />

      {/* Parallax Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #1e40af 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, #1e3a8a 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="flex items-center gap-6">
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Creative Developer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences that push the boundaries of technology and creativity
          </p>
          <div className="flex items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              View Projects
            </button>
            <button className="border border-gray-600 px-8 py-3 rounded-full hover:border-blue-400 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my passion for innovation and attention to detail
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Project Stats */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                      <Eye className="w-4 h-4 inline mr-1" />
                      {project.stats.views}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a href={project.link} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                    <div className="text-sm text-gray-500">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {project.stats.duration}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-blue-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `fillBar 2s ease-out ${index * 0.2}s both`
                    }}
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 block">{skill.level}% Proficiency</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="text-center group">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-blue-400 font-semibold mb-2">{achievement.year}</p>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:hello@example.com" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors shadow-lg z-30"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--width); }
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;