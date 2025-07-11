"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ChevronDown, Code, Smartphone, Globe, Users, Award, ArrowRight, Menu, X, Zap, Shield, Cpu } from 'lucide-react';

const SoftwareHouseHomepage = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create flowing wave surface
    const waveGeometry = new THREE.PlaneGeometry(200, 200, 64, 64);
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0x1e40af,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI / 2;
    waveMesh.position.y = -30;
    scene.add(waveMesh);

    // Create interconnected network nodes
    const nodeGeometry = new THREE.SphereGeometry(0.8, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8
    });

    const nodes = [];
    const nodeConnections = [];
    
    // Create nodes in a 3D grid pattern
    for (let x = -3; x <= 3; x++) {
      for (let y = -2; y <= 2; y++) {
        for (let z = -2; z <= 2; z++) {
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
          node.position.set(x * 15, y * 15, z * 15);
          node.userData = {
            originalPosition: node.position.clone(),
            phase: Math.random() * Math.PI * 2
          };
          nodes.push(node);
          scene.add(node);
        }
      }
    }

    // Create connections between nearby nodes
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = [];
    
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = node.position.distanceTo(otherNode.position);
          if (distance < 25 && Math.random() > 0.7) {
            connectionPositions.push(
              node.position.x, node.position.y, node.position.z,
              otherNode.position.x, otherNode.position.y, otherNode.position.z
            );
          }
        }
      });
    });

    connectionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connectionPositions, 3));
    
    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x1e40af,
      transparent: true,
      opacity: 0.2
    });
    
    const connectionLines = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    scene.add(connectionLines);

    // Create rotating geometric tunnel
    const tunnelSegments = [];
    for (let i = 0; i < 20; i++) {
      const ringGeometry = new THREE.RingGeometry(8, 12, 16);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.2,
        wireframe: true
      });
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.z = -i * 8;
      ring.rotation.z = i * 0.3;
      ring.userData = { speed: 0.02 + i * 0.001 };
      tunnelSegments.push(ring);
      scene.add(ring);
    }

    // Create floating data streams
    const streamGeometry = new THREE.CylinderGeometry(0.1, 0.1, 100, 8);
    const streamMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.4
    });

    const dataStreams = [];
    for (let i = 0; i < 8; i++) {
      const stream = new THREE.Mesh(streamGeometry, streamMaterial.clone());
      stream.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
      stream.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      stream.userData = {
        rotationSpeed: Math.random() * 0.02 + 0.01,
        axis: Math.random() < 0.5 ? 'x' : 'z'
      };
      dataStreams.push(stream);
      scene.add(stream);
    }

    // Create holographic panels
    const panelGeometry = new THREE.PlaneGeometry(8, 12);
    const panelMaterial = new THREE.MeshBasicMaterial({
      color: 0x1e40af,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });

    const holoPanels = [];
    for (let i = 0; i < 6; i++) {
      const panel = new THREE.Mesh(panelGeometry, panelMaterial.clone());
      panel.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 60
      );
      panel.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );
      panel.userData = {
        floatSpeed: Math.random() * 0.01 + 0.005,
        originalY: panel.position.y
      };
      holoPanels.push(panel);
      scene.add(panel);
    }

    camera.position.set(0, 10, 40);
    camera.lookAt(0, 0, 0);
    sceneRef.current = { scene, camera, renderer, waveMesh, nodes, connectionLines, tunnelSegments, dataStreams, holoPanels };

    // Enhanced animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      
      // Animate wave surface
      const wavePositions = waveMesh.geometry.attributes.position.array;
      for (let i = 0; i < wavePositions.length; i += 3) {
        const x = wavePositions[i];
        const z = wavePositions[i + 2];
        wavePositions[i + 1] = Math.sin(x * 0.1 + time) * 3 + Math.cos(z * 0.1 + time) * 2;
      }
      waveMesh.geometry.attributes.position.needsUpdate = true;
      
      // Animate network nodes
      nodes.forEach((node, index) => {
        const userData = node.userData;
        node.position.y = userData.originalPosition.y + 
          Math.sin(time * 0.5 + userData.phase) * 3;
        
        // Pulse effect
        const scale = 1 + Math.sin(time * 2 + index * 0.1) * 0.3;
        node.scale.setScalar(scale);
        
        // Color shifting
        const hue = (time * 0.1 + index * 0.05) % 1;
        node.material.color.setHSL(0.6 + hue * 0.1, 0.8, 0.6);
      });
      
      // Animate tunnel segments
      tunnelSegments.forEach((segment, index) => {
        segment.rotation.z += segment.userData.speed;
        segment.position.z += 0.1;
        
        // Reset position when too far
        if (segment.position.z > 50) {
          segment.position.z = -160;
        }
        
        // Fade effect based on distance
        const distance = Math.abs(segment.position.z);
        segment.material.opacity = Math.max(0.1, 0.4 - distance * 0.005);
      });
      
      // Animate data streams
      dataStreams.forEach((stream, index) => {
        if (stream.userData.axis === 'x') {
          stream.rotation.x += stream.userData.rotationSpeed;
        } else {
          stream.rotation.z += stream.userData.rotationSpeed;
        }
        
        // Flowing effect
        stream.position.y += Math.sin(time * 0.3 + index) * 0.5;
        
        // Color pulse
        const intensity = 0.4 + Math.sin(time * 2 + index) * 0.2;
        stream.material.opacity = intensity;
      });
      
      // Animate holographic panels
      holoPanels.forEach((panel, index) => {
        const userData = panel.userData;
        panel.position.y = userData.originalY + 
          Math.sin(time * userData.floatSpeed + index) * 5;
        
        panel.rotation.y += 0.005;
        
        // Holographic flicker effect
        const flicker = Math.sin(time * 10 + index * 2) * 0.1;
        panel.material.opacity = 0.15 + flicker;
      });
      
      // Smooth camera movement
      const mouseX = (window.innerWidth / 2 - window.pageXOffset) * 0.0001;
      const mouseY = (window.innerHeight / 2 - window.pageYOffset) * 0.0001;
      
      camera.position.x += (mouseX * 15 - camera.position.x) * 0.02;
      camera.position.y += (10 + mouseY * 10 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (sceneRef.current) {
        sceneRef.current.camera.aspect = window.innerWidth / window.innerHeight;
        sceneRef.current.camera.updateProjectionMatrix();
        sceneRef.current.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    // Handle scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Enterprise-grade solutions built with cutting-edge technologies and scalable architectures."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications with seamless performance and intuitive design."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive web applications with advanced functionality and exceptional user experience."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security implementations to protect your digital assets and sensitive data."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent systems and automation solutions powered by advanced AI algorithms."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "DevOps & Cloud",
      description: "Scalable cloud infrastructure and automated deployment pipelines for optimal performance."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "100+", label: "Enterprise Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "TypeScript"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 z-0" />
      
      {/* Dark overlay for better text contrast */}
      <div className="fixed inset-0 bg-black/20 z-0" />
      
      
          
          
         
        
       

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
            }}
          >
            SK-Technology
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 animate-pulse">
              Software Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-light">
            Transforming businesses with cutting-edge technology, AI-powered solutions, and scalable architectures that drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25 border border-blue-400/30">
              Start Your Project
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
            <button className="px-10 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
              Explore Portfolio
            </button>
          </div>
          
          {/* Technology badges */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-black/40 backdrop-blur-sm text-blue-300 rounded-full text-sm border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-6 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
            Our <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-blue-100 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-blue-800/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:text-blue-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-blue-900/20 to-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-blue-900/30 to-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to <span className="text-blue-400">Innovate</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join industry leaders who trust us to build their next-generation software solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25 text-lg border border-blue-400/30">
              Get Free Consultation
            </button>
            <button className="px-12 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 text-lg backdrop-blur-sm">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 bg-black/60 backdrop-blur-sm border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                <span className="text-blue-400">Neural</span>
                <span className="text-blue-300">Code</span>
              </div>
              <p className="text-blue-200 mb-6">
                Pioneering the future of software development with AI-driven solutions and innovative technologies.
              </p>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-800/40 hover:text-blue-300 transition-all duration-300"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
              <div className="space-y-3">
                {['Web Development', 'Mobile Apps', 'AI Solutions', 'Cloud Services', 'DevOps', 'Consulting'].map((service) => (
                  <a key={service} href="#" className="block text-blue-200 hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
              <div className="space-y-3">
                {['About Us', 'Portfolio', 'Careers', 'Blog', 'Press', 'Partners'].map((item) => (
                  <a key={item} href="#" className="block text-blue-200 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
              <div className="space-y-3 text-blue-200">
                <p>hello@neuralcode.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Silicon Valley, CA</p>
                <p>New York, NY</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-900/30 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; 2025 NeuralCode. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoftwareHouseHomepage;