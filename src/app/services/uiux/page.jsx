"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Smartphone, Globe, Database, Shield, Users, Award, Star, ArrowRight, Menu, X, Play } from 'lucide-react';

const SoftwareHousePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies to solve your unique business challenges.",
      features: ["React/Next.js", "Node.js", "Python", "Cloud Native"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that drive business growth.",
      features: ["Progressive Web Apps", "E-commerce", "CMS Solutions", "API Integration"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      description: "Robust, scalable backend architectures and database solutions for enterprise applications.",
      features: ["Microservices", "API Design", "Database Optimization", "DevOps"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and user data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"]
    }
  ];

  const testimonials = [
    {
      name: "SAAD",
      role: "FOUNDER,SK ",
      content: "Outstanding work! They delivered our project on time and exceeded our expectations. The team's expertise in modern technologies is impressive.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      content: "Professional, reliable, and innovative. They transformed our idea into a successful product that's now used by thousands of users.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      content: "Excellent communication and technical skills. They understood our requirements perfectly and delivered a solution that perfectly fits our needs.",
      rating: 5
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Craft</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">Testimonials</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
                <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
                <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
                <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">Testimonials</a>
                <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all w-fit">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Building Digital
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              We craft innovative software solutions that transform businesses and create exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                className="border border-blue-500 px-8 py-4 rounded-full hover:bg-blue-500/10 transition-all flex items-center gap-2"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                <Play className="w-5 h-5" />
                Watch Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-blue-400 rotate-90" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive software development services to help businesses thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-blue-400">sk-technology</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                With years of experience and a passion for innovation, we deliver software solutions that drive real business results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-300">Our skilled developers and designers bring years of experience and cutting-edge expertise to every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-gray-300">We follow industry best practices and rigorous testing to ensure your software is reliable and secure.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
                    <p className="text-gray-300">We work closely with you throughout the development process to ensure your vision becomes reality.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/30 rounded-2xl p-8 border border-blue-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-gray-300">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">Fast</div>
                    <div className="text-gray-300">Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">Agile</div>
                    <div className="text-gray-300">Process</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help bring your vision to life. Get in touch with our team today.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Get a Quote</h3>
                <p className="text-gray-300 mb-6">Ready to start your project? Let's discuss your requirements and provide you with a detailed quote.</p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105">
                  Request Quote
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Schedule a Call</h3>
                <p className="text-gray-300 mb-6">Want to discuss your project in detail? Schedule a free consultation call with our experts.</p>
                <button className="border border-blue-500 px-6 py-3 rounded-full hover:bg-blue-500/10 transition-all">
                  Schedule Call
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
              <div className="text-blue-400">•</div>
              <div className="text-gray-300">Response within 24 hours</div>
            </div>
          </div>
        </div>
      </section>

      

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default SoftwareHousePage;