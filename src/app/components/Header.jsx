// 
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Zap, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-gradient-to-r from-black via-slate-900 to-blue-900 text-white sticky top-0 z-50">
      <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center transform rotate-12">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight">SK</div>
              <div className="text-xs text-blue-300 font-medium tracking-widest">
                TECHNOLOGY-801
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 bg-black bg-opacity-30 rounded-full px-2 py-1 backdrop-blur-sm">
              <Link href="/" className="px-4 py-2 rounded-full font-medium hover:bg-blue-600 hover:bg-opacity-70 transition-all duration-300 hover:scale-105">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-full font-medium hover:bg-blue-600 hover:bg-opacity-70 transition-all duration-300 hover:scale-105">
                About
              </Link>

              {/* Dropdown */}
              <div className="relative">
                <button onClick={toggleDropdown} className="px-4 py-2 rounded-full font-medium hover:bg-blue-600 hover:bg-opacity-70 transition-all duration-300 hover:scale-105 flex items-center">
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-500 border-opacity-30 overflow-hidden">
                    <div className="p-2">
                      <Link href="/services/web" className="flex items-center justify-between px-4 py-3 text-white hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-200 rounded-xl group">
                        <span className="font-medium">Web Development</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                      <Link href="/services/uiux" className="flex items-center justify-between px-4 py-3 text-white hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-200 rounded-xl group">
                        <span className="font-medium">UI/UX Design</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                      <Link href="/services/consulting" className="flex items-center justify-between px-4 py-3 text-white hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-200 rounded-xl group">
                        <span className="font-medium">Consulting</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/portfolio" className="px-4 py-2 rounded-full font-medium hover:bg-blue-600 hover:bg-opacity-70 transition-all duration-300 hover:scale-105">
                Portfolio
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded-full font-medium hover:bg-blue-600 hover:bg-opacity-70 transition-all duration-300 hover:scale-105">
                Contact
              </Link>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <button className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-blue-600 hover:bg-opacity-30 transition-colors duration-200">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl mt-2 mb-4">
              <Link href="/" className="block px-4 py-3 font-medium hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-200 rounded-xl">Home</Link>
              <Link href="/about" className="block px-4 py-3 font-medium hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-200 rounded-xl">About</Link>
              <Link href="/services" className="block px-4 py-3 font-medium hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-200 rounded-xl">Services</Link>
              <Link href="/portfolio" className="block px-4 py-3 font-medium hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-200 rounded-xl">Portfolio</Link>
              <Link href="/contact" className="block px-4 py-3 font-medium hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-200 rounded-xl">Contact</Link>
              <div className="px-4 py-3">
                <Link href="/contact">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">
                    Let's Talk
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </header>
  );
}
