// src/components/Gallery.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';

const placeholderImages = [
  "https://placehold.co/600x400/png",
  "https://placehold.co/400x600/png",
  "https://placehold.co/600x600/png",
  "https://placehold.co/500x700/png",
  "https://placehold.co/800x600/png",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Recent Work</h2>
      
      {/* CSS Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {placeholderImages.map((src, index) => (
          <div 
            key={index} 
            className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImg(src)}
          >
            {/* Using standard img for quick external placeholders, swap to next/image later */}
            <img 
              src={src} 
              alt={`Gallery placeholder ${index + 1}`} 
              className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105 active:scale-95"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-md" 
          />
        </div>
      )}
    </section>
  );
}