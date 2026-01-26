import { useState } from "react";
import { MapPin, Navigation, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const LocationSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 });
  
  // Address: 5215 Finch Ave E, Scarborough, ON M1S 0C2
  const address = "5215 Finch Ave E, Scarborough, ON M1S 0C2";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  
  return (
    <section id="location" className="section-padding bg-secondary">
      <div className="container-width">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 animate-on-scroll-fade ${sectionVisible ? 'visible' : ''}`}
        >
          <h2 className="heading-section text-foreground mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div 
            ref={mapRef}
            className={`aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1 relative bg-muted animate-on-scroll-slide-left ${mapVisible ? 'visible' : ''}`}
          >
            {/* Loading Placeholder */}
            {!mapLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 z-10">
                <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
                <p className="text-sm text-muted-foreground font-medium">Loading map...</p>
              </div>
            )}
            
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
              onLoad={() => setMapLoaded(true)}
            />
          </div>
          
          {/* Info */}
          <div 
            ref={infoRef}
            className={`text-center lg:text-left order-1 lg:order-2 animate-on-scroll-slide-right ${infoVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Our Location</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Heroes Catering
            </h3>
            
            <p className="text-base sm:text-lg text-foreground mb-2">
              5215 Finch Ave E
            </p>
            <p className="text-base sm:text-lg text-foreground mb-4 sm:mb-6">
              Scarborough, ON M1S 0C2
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Conveniently located in GTA Mall on the 2nd floor — dine in or take out.
            </p>
            
            <Button 
              variant="default"
              size="lg"
              asChild
              className="w-full sm:w-auto min-h-[44px]"
            >
              <a 
                href="https://www.google.com/maps/search/?api=1&query=5215+Finch+Ave+E+Scarborough+ON+M1S+0C2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
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
