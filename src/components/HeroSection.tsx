import { Phone, MapPin, ChevronDown } from "lucide-react";
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
        <div className="mb-8 md:mb-12 animate-fade-in px-4" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tight leading-tight drop-shadow-2xl" style={{ 
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)',
            letterSpacing: '-0.02em'
          }}>
            <span className="text-primary">Heroes</span>{' '}
            <span className="text-accent">Catering</span>
          </h2>
        </div>
        
        {/* Main Headline */}
        <h1 
          className="heading-display text-primary-foreground mb-4 md:mb-6 px-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Authentic Tamil &<br className="hidden sm:block" /> South Asian Cuisine
        </h1>
        
        {/* Subheading */}
        <p 
          className="text-base sm:text-lg md:text-xl text-hero-cream/90 max-w-2xl mx-auto mb-8 md:mb-10 px-4 animate-fade-in-up font-body"
          style={{ animationDelay: "0.4s" }}
        >
          Freshly prepared meals, short eats, and refreshing South Asian beverages — made with real flavor.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 animate-fade-in-up w-full sm:w-auto"
          style={{ animationDelay: "0.6s" }}
        >
          <Button 
            variant="hero"
            size="lg"
            asChild
            className="w-full sm:w-auto min-h-[44px]"
          >
            <a 
              href="tel:+14162869334" 
              className="flex items-center justify-center"
              aria-label="Call Heroes Catering at (416) 286-9334"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Call to Order
            </a>
          </Button>
          
          <Button 
            variant="heroOutline"
            size="lg"
            asChild
            className="w-full sm:w-auto min-h-[44px]"
          >
            <a 
              href="#location" 
              className="flex items-center justify-center"
              aria-label="Scroll to location section"
            >
              <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
              Visit Us
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group touch-manipulation"
        aria-label="Scroll to about section"
        style={{ minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ChevronDown className="w-8 h-8 text-hero-cream/70 group-hover:text-hero-cream transition-colors" aria-hidden="true" />
      </a>
    </section>
  );
};

export default HeroSection;
