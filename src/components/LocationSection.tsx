import { useState } from "react";
import { MapPin, Navigation, Loader2, Store, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import storeInterior from "@/assets/store-interior.jpg";

const businessHours = [
  { day: "Sunday", hours: "10 a.m. – 8 p.m." },
  { day: "Monday", hours: "9 a.m. – 9 p.m." },
  { day: "Tuesday", hours: "9 a.m. – 9 p.m." },
  { day: "Wednesday", hours: "9 a.m. – 9 p.m." },
  { day: "Thursday", hours: "9 a.m. – 9 p.m." },
  { day: "Friday", hours: "9 a.m. – 9 p.m." },
  { day: "Saturday", hours: "9 a.m. – 9 p.m." },
];

const LocationSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: hoursRef, isVisible: hoursVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: storeRef, isVisible: storeVisible } = useScrollAnimation({ threshold: 0.2 });
  
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
        
        {/* Map and Location Info Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Map */}
          <div 
            ref={mapRef}
            className={`aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1 relative bg-muted animate-on-scroll-slide-left ${mapVisible ? 'visible' : ''}`}
          >
            {/* Loading Placeholder */}
            {!mapLoaded && !mapError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 z-10">
                <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
                <p className="text-sm text-muted-foreground font-medium">Loading map...</p>
              </div>
            )}
            
            {/* Error State */}
            {mapError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 z-10 p-4">
                <p className="text-sm text-muted-foreground font-medium text-center mb-4">
                  Unable to load map. Please use the "Get Directions" button below.
                </p>
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
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              title="Heroes Catering Location"
              className="w-full h-full"
              onLoad={() => {
                setMapLoaded(true);
                setMapError(false);
              }}
              onError={() => {
                setMapError(true);
                setMapLoaded(false);
              }}
            />
          </div>
          
          {/* Location Info */}
          <div 
            ref={infoRef}
            className={`text-center lg:text-left order-1 lg:order-2 animate-on-scroll-slide-right ${infoVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" aria-hidden="true" />
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
                aria-label="Get directions to Heroes Catering on Google Maps"
              >
                <Navigation className="mr-2 h-5 w-5" aria-hidden="true" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
        
        {/* Business Hours and Store Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Business Hours - Left */}
          <div 
            ref={hoursRef}
            className={`bg-background/50 rounded-2xl p-6 sm:p-8 border border-primary/10 animate-on-scroll-slide-left ${hoursVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-6">
              <Clock className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold text-lg font-display">Hours</span>
            </div>
            
            <div className="space-y-2">
              {businessHours.map((schedule) => (
                <div 
                  key={`hours-${schedule.day.toLowerCase()}`}
                  className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <span className="text-foreground font-medium text-base">{schedule.day}</span>
                  <span className="text-muted-foreground font-body">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Store Interior Image - Right */}
          <div 
            ref={storeRef}
            className={`animate-on-scroll-slide-right ${storeVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Store className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold font-display">Our Store</span>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={storeInterior}
                alt="Heroes Catering store interior in GTA Mall showing food display counter"
                className="w-full h-auto object-cover"
                loading="lazy"
                width="800"
                height="600"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Visit us at our location in GTA Mall — see our fresh food display and authentic South Asian cuisine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
