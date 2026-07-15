// src/components/Testimonials.tsx
export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner",
      text: "They completely transformed our exterior. The crew was on time, kept the yard clean, and the final result is absolutely stunning.",
      rating: "★★★★★"
    },
    {
      name: "David Chen",
      role: "Local Business Owner",
      text: "We hired them to repaint our office over the weekend. They were fast, professional, and didn't disrupt our workflow at all.",
      rating: "★★★★★"
    },
    {
      name: "Emily Rodriguez",
      role: "Homeowner",
      text: "The attention to detail on our kitchen cabinets was incredible. It looks like a brand new kitchen for a fraction of the cost.",
      rating: "★★★★★"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what your neighbors think.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl bg-background shadow-sm border border-brand-light flex flex-col gap-4"
            >
              <div className="text-brand-primary text-xl tracking-widest">{review.rating}</div>
              <p className="italic leading-relaxed flex-grow">"{review.text}"</p>
              <div>
                <div className="font-bold">{review.name}</div>
                <div className="text-sm opacity-70">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}