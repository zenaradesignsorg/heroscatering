import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

const LocationSection = () => {
  // Address: 5215 Finch Ave E, Scarborough, ON M1S 0C2
  const address = "5215 Finch Ave E, Scarborough, ON M1S 0C2";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  
  return (
    <section id="location" className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Heroes Catering Location"
              className="w-full h-full"
            />
          </div>
          
          {/* Info */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Our Location</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Heroes Catering
            </h3>
            
            <p className="text-lg text-foreground mb-2">
              5215 Finch Ave E
            </p>
            <p className="text-lg text-foreground mb-6">
              Scarborough, ON M1S 0C2
            </p>
            
            <p className="text-muted-foreground mb-8">
              Conveniently located in GTA Mall on the 2nd floor — dine in or take out.
            </p>
            
            <Button 
              variant="default"
              size="lg"
              asChild
            >
              <a 
                href="https://www.google.com/maps/search/?api=1&query=5215+Finch+Ave+E+Scarborough+ON+M1S+0C2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
