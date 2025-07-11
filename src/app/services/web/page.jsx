"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Code, Smartphone, Globe, Database, Users, Award, ArrowRight, Menu, X, Mail, Phone, MapPin, Zap, Cpu, Rocket, Shield, Star, Play, Pause } from 'lucide-react';

const SoftwareHouseWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animated particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    function animate() {
      if (!isPlaying) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Connect nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }, [isPlaying]);

  const services = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions that transform your business with intelligent automation and predictive analytics.",
      color: "from-purple-500 to-pink-500",
      delay: "0ms"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Cloud Architecture",
      description: "Scalable, secure cloud solutions that grow with your business using the latest DevOps practices.",
      color: "from-blue-500 to-cyan-500",
      delay: "100ms"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets with next-gen threat detection.",
      color: "from-red-500 to-orange-500",
      delay: "200ms"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Optimization",
      description: "Lightning-fast applications optimized for maximum performance and user experience.",
      color: "from-yellow-500 to-green-500",
      delay: "300ms"
    }
  ];

  const portfolio = [
    {
      title: "QuantumTrade AI",
      category: "Fintech Platform",
      tech: "React, TensorFlow, Blockchain",
      description: "Revolutionary trading platform with AI-powered market predictions",
      image: "https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=600&h=400&fit=crop",
      glow: "shadow-blue-500/50"
    },
    {
      title: "NeuroHealth",
      category: "Healthcare IoT",
      tech: "Flutter, IoT, ML",
      description: "Smart health monitoring with real-time neural network analysis",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      glow: "shadow-green-500/50"
    },
    {
      title: "MetaVerse Hub",
      category: "VR/AR Platform",
      tech: "Unity, WebXR, 3D",
      description: "Immersive virtual collaboration platform for the future",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
      glow: "shadow-purple-500/50"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />
      
      {/* Floating Animation Control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Dynamic Cursor Follow Effect */}
      <div
        className="fixed pointer-events-none z-10 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
        }}
      />
      {/* Epic Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-purple-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8 inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300 backdrop-blur-sm">
                🚀 SK-technology Software Development
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
                FUTURE
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                CRAFTED
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              We don't just build software – we architect digital universes that 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"> transform reality</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('services')}
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Magic <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="group px-12 py-6 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  View Universe <Star className="w-6 h-6 group-hover:animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Projects Launched", icon: <Rocket className="w-6 h-6" /> },
                { number: "99.9%", label: "Uptime Rate", icon: <Shield className="w-6 h-6" /> },
                { number: "50ms", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
                { number: "24/7", label: "AI Monitoring", icon: <Cpu className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-16 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 backdrop-blur-sm mb-6">
              🔮 Our Superpowers
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Beyond Possible
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We wield cutting-edge technologies like digital wizards, crafting solutions that seem like magic but are powered by pure innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4"
                style={{ animationDelay: service.delay }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mind-Blowing Portfolio Section */}
      <section id="portfolio" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300 backdrop-blur-sm mb-6">
              ⚡ Digital Masterpieces
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Reality Reimagined
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each project is a universe we've created, where imagination meets technology in perfect harmony.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-8 hover:shadow-2xl ${project.glow}`}
              >
                {/* Image with Overlay Effects */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-sm text-blue-300">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(', ').map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="group/btn w-full py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl text-blue-300 hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    Explore Project <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-900/5 to-black"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 backdrop-blur-sm mb-6">
                🌟 Our Story
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
                  Architects of Tomorrow
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Born from the fusion of imagination and technology, we are digital pioneers who believe that the future isn't just something that happens – it's something we create.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Every line of code we write, every interface we design, every system we architect is a step toward a more connected, intelligent, and beautiful digital world.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Innovation Score", value: "99.9%" },
                  { label: "Client Satisfaction", value: "100%" },
                  { label: "Code Quality", value: "A+++" },
                  { label: "Future Ready", value: "∞" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Our Philosophy</h3>
                  <p className="text-gray-400">Technology should feel like magic</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Design with empathy",
                    "Code with purpose",
                    "Innovate with responsibility",
                    "Deliver with excellence"
                  ].map((principle, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-900/20 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epic Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-black to-blue-900/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300 backdrop-blur-sm mb-6">
              🚀 Launch Your Vision
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Let's Create Magic
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your wildest ideas into digital reality? Let's build something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Connect with the Future
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="w-8 h-8" />,
                      title: "Email",
                      info: "sardarsaadisaadi@gmail.com",
                      description: "Drop us a line anytime",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: <Phone className="w-8 h-8" />,
                      title: "Phone",
                      info: "+923084931083 SK-Tech",
                      description: "24/7 AI-powered support",
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: <MapPin className="w-8 h-8" />,
                      title: "Location",
                      info: "kohinoor ",
                      description: "Where innovation never sleeps",
                      color: "from-green-500 to-blue-500"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="group flex items-center gap-6 p-4 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-xl hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300 cursor-pointer">
                      <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{contact.title}</div>
                        <div className="text-white font-semibold text-lg">{contact.info}</div>
                        <div className="text-gray-500 text-sm">{contact.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "<1hr", label: "Response Time" },
                  { number: "∞", label: "Possibilities" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Start Your Journey
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Your Email"
                        className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Project Type"
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative">
                    <textarea 
                      placeholder="Tell us about your vision..."
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 resize-none transition-all duration-300 hover:border-gray-600"
                    ></textarea>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <button 
                    onClick={() => alert('🚀 Message sent to the future! We will contact you via quantum entanglement within 24 hours.')}
                    className="group w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Launch Project <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default SoftwareHouseWebsite;