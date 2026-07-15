// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-black tracking-tighter text-white">
            KN<span className="text-brand-primary">Painting</span>
          </div>
          <p className="text-sm text-gray-400">
            Providing top-quality residential and commercial painting services for our local community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <Link href="#services" className="hover:text-blue-400 text-sm transition-colors w-fit">Our Services</Link>
          <Link href="#gallery" className="hover:text-blue-400 text-sm transition-colors w-fit">Past Work</Link>
          <Link href="#contact" className="hover:text-blue-400 text-sm transition-colors w-fit">Request Quote</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Contact Us</h3>
          <a href="tel:+1234567890" className="hover:text-blue-400 text-sm transition-colors w-fit">
            (123) 456-7890
          </a>
          <a href="mailto:contact@painterdemo.com" className="hover:text-blue-400 text-sm transition-colors w-fit">
            contact@painterdemo.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {currentYear} KNPainting Demo. All rights reserved.</p>
        
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}