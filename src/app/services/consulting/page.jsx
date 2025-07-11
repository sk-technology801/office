"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Brain, TrendingUp, Target, Users, Shield, Lightbulb, Award, Star, ArrowRight, Menu, X, CheckCircle, Clock, BarChart } from 'lucide-react';

const ConsultingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('strategy');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies that align with your vision and drive sustainable growth.",
      features: ["Market Analysis", "Competitive Intelligence", "Strategic Roadmap", "KPI Development"],
      price: "Starting at $5,000"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Navigate the digital landscape with expert guidance on technology adoption and process optimization.",
      features: ["Digital Strategy", "Technology Assessment", "Process Automation", "Change Management"],
      price: "Starting at $8,000"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Maximize efficiency and profitability through data-driven insights and operational excellence.",
      features: ["Process Improvement", "Cost Reduction", "Quality Management", "Performance Metrics"],
      price: "Starting at $4,500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Organizational Development",
      description: "Build high-performing teams and cultivate a culture of excellence and innovation.",
      features: ["Team Building", "Leadership Development", "Culture Assessment", "Training Programs"],
      price: "Starting at $6,000"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Identify, assess, and mitigate business risks to protect your organization's future.",
      features: ["Risk Assessment", "Compliance Strategy", "Crisis Management", "Business Continuity"],
      price: "Starting at $7,500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Consulting",
      description: "Foster innovation and drive breakthrough solutions that differentiate your business.",
      features: ["Innovation Strategy", "R&D Optimization", "Product Development", "Market Entry"],
      price: "Starting at $9,000"
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "CEO, InnovateTech Solutions",
      content: "Their strategic insights transformed our business model. We saw 40% revenue growth within 6 months of implementation.",
      rating: 5,
      company: "InnovateTech"
    },
    {
      name: "Maria Rodriguez",
      role: "COO, Global Enterprises",
      content: "Outstanding consulting services. They helped us streamline operations and reduce costs by 25% while improving quality.",
      rating: 5,
      company: "Global Enterprises"
    },
    {
      name: "James Wilson",
      role: "Founder, StartupHub",
      content: "Professional, insightful, and results-driven. Their guidance was instrumental in our successful market expansion.",
      rating: 5,
      company: "StartupHub"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Retention" },
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Companies Served" }
  ];

  const methodology = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We conduct thorough analysis of your current situation, challenges, and opportunities.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Based on our findings, we develop customized strategies tailored to your specific needs.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "We create detailed action plans with clear timelines, milestones, and success metrics.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Execution & Monitoring",
      description: "We support you throughout implementation and continuously monitor progress and results.",
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const industries = [
    "Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education", "Real Estate", "Non-Profit"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">Strategic</span>
              <span className="text-blue-400">Minds</span>
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
                <a href="#methodology" className="text-white hover:text-blue-400 transition-colors">Methodology</a>
                <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">Testimonials</a>
                <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all w-fit">
                  Free Consultation
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Expert Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              Strategic insights, proven methodologies, and tailored solutions to drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center gap-2">
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-blue-500 px-8 py-4 rounded-full hover:bg-blue-500/10 transition-all flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Book 30-min Call
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Consulting Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to address your unique business challenges and opportunities.
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
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-blue-400 font-semibold mb-3">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Proven Methodology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures consistent results and measurable outcomes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, bringing specialized knowledge to your sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center group"
              >
                <div className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our consulting services have transformed businesses and delivered measurable results.
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
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss your challenges and explore how our consulting services can drive your success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
                <p className="text-gray-300 mb-4">30-minute discovery call to understand your needs</p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all">
                  Schedule Call
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Project Proposal</h3>
                <p className="text-gray-300 mb-4">Get a detailed proposal tailored to your requirements</p>
                <button className="border border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500/10 transition-all">
                  Request Proposal
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Assessment</h3>
                <p className="text-gray-300 mb-4">Comprehensive analysis of your current situation</p>
                <button className="border border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500/10 transition-all">
                  Get Assessment
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">Contact us today to discuss how we can help transform your business.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105">
                  Contact Us Now
                </button>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
              </div>
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

export default ConsultingPage;