// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className=" py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Painting Services You Can Trust
        </h1>
        <p className="text-lg mb-10">
          High-quality interior and exterior painting. Fast, clean, and reliable.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Primary CTA - Anchor link to the contact form section */}
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
          >
            Request a Free Quote
          </a>
          
          {/* Secondary CTA - Phone hyperlink */}
          <a 
            href="tel:+1234567890" 
            className="w-full sm:w-auto px-8 py-3 bg-white text-brand-primary font-semibold rounded-lg border border-brand-primary hover:bg-gray-50 transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}