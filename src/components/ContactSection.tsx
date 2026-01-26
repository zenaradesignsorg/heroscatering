import { Phone, MapPin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-10" />
      
      <div className="container-width relative z-10">
        <div 
          ref={sectionRef}
          className={`max-w-2xl mx-auto text-center animate-on-scroll-fade ${sectionVisible ? 'visible' : ''}`}
        >
          <h2 className="heading-section text-primary-foreground mb-4">
            Ready to Order?
          </h2>
          
          <p className="text-primary-foreground/80 mb-10 text-lg">
            Give us a call and we'll have your order ready
          </p>
          
          {/* Phone - Primary CTA */}
          <a 
            href="tel:+14162869334"
            className="inline-flex items-center justify-center gap-3 sm:gap-4 bg-primary-foreground text-primary px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-xl sm:text-2xl md:text-3xl hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg mb-8 sm:mb-10 min-h-[56px] touch-manipulation"
          >
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <span className="whitespace-nowrap">(416) 286-9334</span>
          </a>
          
          {/* Secondary Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-primary-foreground/80 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="break-words">5215 Finch Ave E, Scarborough, ON M1S 0C2</span>
            </div>
            
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/40" />
            
            <a 
              href="mailto:info@heroscatering.com"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors touch-manipulation min-h-[44px]"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="break-all sm:break-normal">info@heroscatering.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
