import { Phone, Users, Briefcase, PartyPopper, Heart } from "lucide-react";
import { Button } from "./ui/button";

const cateringFeatures = [
  { icon: Users, text: "Family gatherings" },
  { icon: Briefcase, text: "Corporate lunches" },
  { icon: PartyPopper, text: "Parties & special events" },
  { icon: Heart, text: "Custom menu options" },
];

const CateringSection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-10" />
      
      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Catering for Any Occasion
          </h2>
          
          <div className="w-24 h-1 bg-hero-cream/40 mx-auto mb-10 rounded-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {cateringFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 p-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground/90 text-sm font-medium text-center">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
          
          <Button
            variant="heroInverse"
            size="lg"
            asChild
          >
            <a href="tel:+14162869334">
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
