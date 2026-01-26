import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    location: "Scarborough",
    rating: 5,
    text: "The best Tamil food in the area! The biryani is always fresh and flavorful. Heroes Catering has become our go-to spot for authentic South Asian cuisine.",
  },
  {
    name: "Raj K.",
    location: "Toronto",
    rating: 5,
    text: "Ordered catering for our family gathering and everyone was impressed. The portions were generous and the taste was incredible. Highly recommend!",
  },
  {
    name: "Meera P.",
    location: "Markham",
    rating: 5,
    text: "Their mango shake is absolutely amazing! And the short eats are always crispy and fresh. Great service and authentic flavors every time.",
  },
  {
    name: "Arjun M.",
    location: "Scarborough",
    rating: 5,
    text: "Been coming here for months. The food quality is consistent, prices are fair, and the staff is friendly. A true gem in the neighborhood!",
  },
  {
    name: "Lakshmi R.",
    location: "Toronto",
    rating: 5,
    text: "Perfect for quick lunches and family dinners. The curries are rich and aromatic, just like home cooking. Love this place!",
  },
  {
    name: "Vikram T.",
    location: "Scarborough",
    rating: 5,
    text: "Catered our office lunch and it was a huge hit! Everyone loved the variety and authentic taste. Will definitely order again.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-elevated p-5 sm:p-6 lg:p-8 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-accent text-accent" 
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
