import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-10" />
      
      <div className="container-width relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-section text-primary-foreground mb-4">
            Ready to Order?
          </h2>
          
          <p className="text-primary-foreground/80 mb-10 text-lg">
            Give us a call and we'll have your order ready
          </p>
          
          {/* Phone - Primary CTA */}
          <a 
            href="tel:+14162869334"
            className="inline-flex items-center gap-4 bg-primary-foreground text-primary px-10 py-5 rounded-full font-bold text-2xl md:text-3xl hover:scale-105 transition-transform duration-300 shadow-lg mb-10"
          >
            <Phone className="w-8 h-8" />
            (416) 286-9334
          </a>
          
          {/* Secondary Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>5215 Finch Ave E, Scarborough, ON M1S 0C2</span>
            </div>
            
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/40" />
            
            <a 
              href="mailto:info@heroscatering.com"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@heroscatering.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
