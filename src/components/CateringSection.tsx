import { Phone, Users, Briefcase, PartyPopper, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cateringFeatures = [
  { icon: Users, text: "Family gatherings" },
  { icon: Briefcase, text: "Corporate lunches" },
  { icon: PartyPopper, text: "Parties & special events" },
  { icon: Heart, text: "Custom menu options" },
];

const CateringSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-10" />
      
      <div className="container-width relative z-10">
        <div 
          ref={sectionRef}
          className={`max-w-3xl mx-auto text-center animate-on-scroll-fade ${sectionVisible ? 'visible' : ''}`}
        >
          <h2 className="heading-section text-primary-foreground mb-6">
            Catering for Any Occasion
          </h2>
          
          <div className="w-24 h-1 bg-hero-cream/40 mx-auto mb-10 rounded-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {cateringFeatures.map((feature, index) => {
              const { ref: featureRef, isVisible: featureVisible } = useScrollAnimation({ threshold: 0.2 });
              return (
                <div 
                  key={index}
                  ref={featureRef}
                  className={`flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 animate-on-scroll-scale ${featureVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90 text-xs sm:text-sm font-medium text-center">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
          
          <Button
            variant="heroInverse"
            size="lg"
            asChild
            className="w-full sm:w-auto min-h-[44px]"
          >
            <a href="tel:+14162869334" className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call for Catering Orders
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
