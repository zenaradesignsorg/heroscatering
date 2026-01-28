import { Phone, MapPin, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative pt-16 min-h-[calc(100svh-4rem)] min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden scroll-mt-24"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-110 saturate-125 contrast-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero-charcoal/35 via-hero-charcoal/55 to-hero-charcoal/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_60%)]" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container-width section-padding text-center">
        {/* Logo / Brand */}
        <div className="mb-8 md:mb-12 animate-fade-in px-4" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-display font-bold tracking-tight leading-tight" style={{ 
            textShadow: '0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.9), 2px 2px 4px rgba(255, 255, 255, 0.1)',
            letterSpacing: '-0.02em',
            WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)',
            textStroke: '1px rgba(0, 0, 0, 0.3)'
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
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group touch-manipulation"
        aria-label="Scroll to about section"
        style={{ minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ChevronDown className="w-8 h-8 text-hero-cream/70 group-hover:text-hero-cream transition-colors" aria-hidden="true" />
      </a>
    </section>
  );
};

export default HeroSection;
