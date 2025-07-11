"use client"
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Calendar, Clock, Github, Linkedin, Twitter, Instagram, CheckCircle, AlertCircle, Globe, Zap, Heart, Star } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: '',
        budget: '',
        timeline: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Drop me a line",
      info: "sardarsaadisaadi@gmail.com",
      link: "mailto:sardarsaadisaadi@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Let's have a chat",
      info: "+923084931083",
      link: "tel:+923084931083",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      subtitle: "Currently based in",
      info: "kohinoor",
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Schedule",
      subtitle: "Book a meeting",
      info: "Available Mon-Fri",
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/sk-technology801", color: "hover:text-gray-300" },
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/sk-technology-05080b338/", color: "hover:text-blue-400" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-400" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-400" }
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "E-commerce",
    "AI/ML Project",
    "Blockchain/Web3",
    "Consultation",
    "Other"
  ];

  const budgetRanges = [
    "Under $5K",
    "$5K - $15K",
    "$15K - $50K",
    "$50K - $100K",
    "$100K+",
    "Let's discuss"
  ];

  const timelineOptions = [
    "ASAP",
    "1-2 weeks",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "I usually respond within 24 hours on weekdays. For urgent matters, feel free to mention it in your message."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones and remote collaboration."
    },
    {
      question: "What information should I include in my project inquiry?",
      answer: "Please include your project goals, timeline, budget range, and any specific requirements. The more details, the better I can assist you."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, I provide ongoing support and maintenance packages to ensure your project continues to perform optimally."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor Effect */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-difference transition-all duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${focusedField ? 1.5 : 1})`
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10" />
        </div>
      </div>

      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Usually responds in 24h</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Available worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.link}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{method.subtitle}</p>
                <p className="text-gray-300 font-medium">{method.info}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Start Your Project
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300"
                      required
                    />
                    <User className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300"
                      required
                    />
                    <Mail className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    required
                  />
                  <MessageSquare className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Project Type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="bg-gray-900">{type}</option>
                    ))}
                  </select>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Budget Range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range} className="bg-gray-900">{range}</option>
                    ))}
                  </select>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Timeline</option>
                    {timelineOptions.map(option => (
                      <option key={option} value={option} className="bg-gray-900">{option}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 bg-green-900/50 border border-green-700 rounded-xl p-4 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side Content */}
            <div className="space-y-12">
              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`group flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                      <h4 className="font-semibold text-blue-400 mb-3">{faq.question}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">24h</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">5★</div>
                    <div className="text-sm text-gray-400">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;