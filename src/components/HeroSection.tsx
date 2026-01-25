import { Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-charcoal/60 via-hero-charcoal/70 to-hero-charcoal/80" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container-width section-padding text-center">
        {/* Logo / Brand */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-hero-cream tracking-wide">
            Hero's Catering
          </h2>
        </div>
        
        {/* Main Headline */}
        <h1 
          className="heading-display text-primary-foreground mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Authentic Tamil &<br className="hidden sm:block" /> South Asian Cuisine
        </h1>
        
        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-hero-cream/90 max-w-2xl mx-auto mb-10 animate-fade-in-up font-body"
          style={{ animationDelay: "0.4s" }}
        >
          Freshly prepared meals, short eats, and refreshing mango shakes — made with real flavor.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button 
            variant="hero"
            size="lg"
            asChild
          >
            <a href="tel:+14165551234">
              <Phone className="mr-2 h-5 w-5" />
              Call to Order
            </a>
          </Button>
          
          <Button 
            variant="heroOutline"
            size="lg"
            asChild
          >
            <a href="#location">
              <MapPin className="mr-2 h-5 w-5" />
              Visit Us
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-cream/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-hero-cream/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
