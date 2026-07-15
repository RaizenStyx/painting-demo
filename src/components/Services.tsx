// src/components/Services.tsx
export default function Services() {
  const services = [
    {
      title: "Interior Painting",
      description: "Clean lines, smooth finishes, and total protection of your furniture and floors.",
      icon: "🏠"
    },
    {
      title: "Exterior Painting",
      description: "Weather-resistant paints that boost curb appeal and protect your home from the elements.",
      icon: "☀️"
    },
    {
      title: "Cabinet Refinishing",
      description: "Modernize your kitchen or bathroom without the massive cost of a full remodel.",
      icon: "🗄️"
    },
    {
      title: "Deck & Fence Staining",
      description: "Restore and protect your outdoor woodwork from UV rays and moisture.",
      icon: "fence" // using emoji as a cheap lightweight icon
    },
    {
      title: "Power Washing",
      description: "Remove years of dirt, grime, and mildew before painting or just for a refresh.",
      icon: "💦"
    },
    {
      title: "Commercial Painting",
      description: "Professional painting for businesses, minimizing disruption to your workflow.",
      icon: "🏢"
    }
  ];

  // Replacing 'fence' with an actual emoji for consistency
  services[3].icon = "🪵";

  return (
    <section id="services" className="py-20 px-4 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We deliver premium results on every project, big or small. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-gray-50"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}