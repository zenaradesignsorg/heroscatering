import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "George Paranthaman",
    location: "Toronto",
    rating: 5,
    text: "The food is always fresh, flavourful, and beautifully presented. Every dish is prepared with great care and attention to detail. The service from Kumar, Anushia, Lakshi, and the entire kitchen staff is smooth, professional, and stress-free. Highly recommended!",
  },
  {
    name: "Rasha A",
    location: "Scarborough",
    rating: 5,
    text: "Great food, everything is so delicious and spicy! I love their Masala tea. They are friendly and kind, and their food is super! The price is not bad either.",
  },
  {
    name: "Theepan Yogarajah",
    location: "Scarborough",
    rating: 5,
    text: "Tried the egg roti and some snacks (samosa, vapian, vadai, cassava chips). Pretty solid quality and affordable prices. Good to see that the only take out store in the mall is priced well.",
  },
  {
    name: "Hansini r.",
    location: "Toronto",
    rating: 5,
    text: "Great food and atmosphere! We ordered the koththu roti, vadai, and fish buns. Made us feel nostalgic and right at home. Thank you!",
  },
  {
    name: "Anthony Stanislaus",
    location: "Scarborough",
    rating: 5,
    text: "Great snacks and friendly service. Their mutton rolls are juicy, flavourful and super crispy. Their fish buns are the best I've ever had. Highly recommend!",
  },
  {
    name: "Rob K.",
    location: "Toronto",
    rating: 5,
    text: "Love this place. Food is unbelievably delicious and portion sizes are huge for the price. Everything here is a hit, especially the Kothu Roti and fish buns.",
  },
];

const TestimonialsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-width">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 animate-on-scroll-fade ${sectionVisible ? 'visible' : ''}`}
        >
          <h2 className="heading-section text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.1 });
            return (
              <div 
                key={`testimonial-${testimonial.name}-${index}`}
                ref={cardRef}
                className={`card-elevated p-5 sm:p-6 lg:p-8 flex flex-col animate-on-scroll ${cardVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
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
            );
          })}
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
