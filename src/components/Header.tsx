// src/components/Header.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="text-2xl font-black tracking-tighter text-brand-primary">
          <Link href="/">KN<span className="text-gray-900">Painting</span></Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-gray-600 hover:text-brand-primary font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact"
            className="px-5 py-2 bg-brand-primary text-white rounded-md font-semibold hover:bg-brand-dark transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide-out Drawer */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Drawer Content */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl flex flex-col p-6 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the drawer from closing it
        >
          <button 
            className="self-end p-2 text-gray-500 mb-8"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="text-lg font-medium text-gray-800 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-100 my-2" />
            <Link 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center w-full px-5 py-3 bg-blue-600 text-white rounded-md font-semibold"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}