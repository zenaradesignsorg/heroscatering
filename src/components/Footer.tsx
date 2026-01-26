import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hero-charcoal py-12 px-4">
      <div className="container-width">
        <div className="text-center">
          {/* Logo */}
          <h3 className="font-display text-2xl font-bold text-hero-cream mb-2">
            Heroes Catering
          </h3>
          
          {/* Tagline */}
          <p className="text-hero-cream/60 mb-8 italic">
            Authentic South Asian Taste
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-hero-cream/70 text-xs sm:text-sm mb-6 sm:mb-8 px-4">
            <a 
              href="tel:+14162869334"
              className="flex items-center gap-2 hover:text-hero-cream transition-colors touch-manipulation min-h-[44px]"
              aria-label="Call Heroes Catering at (416) 286-9334"
            >
              <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">(416) 286-9334</span>
            </a>
            
            <span className="hidden sm:inline text-hero-cream/30" aria-hidden="true">|</span>
            
            <a 
              href="mailto:info@heroscatering.com"
              className="flex items-center gap-2 hover:text-hero-cream transition-colors touch-manipulation min-h-[44px] break-all sm:break-normal"
              aria-label="Email Heroes Catering at info@heroscatering.com"
            >
              <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>info@heroscatering.com</span>
            </a>
            
            <span className="hidden sm:inline text-hero-cream/30" aria-hidden="true">|</span>
            
            <div className="flex items-center gap-2 text-center sm:text-left">
              <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="break-words">5215 Finch Ave E, Scarborough, ON M1S 0C2</span>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-hero-cream/20 mx-auto mb-6" />
          
          {/* Copyright */}
          <p className="text-hero-cream/40 text-xs mb-3">
            © {currentYear} Heroes Catering. All rights reserved.
          </p>
          
          {/* Design Credit */}
          <p className="text-hero-cream/30 text-xs">
            Designed by{' '}
            <a 
              href="https://zenaradesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hero-cream/50 hover:text-hero-cream transition-colors underline underline-offset-2"
              aria-label="Visit Zenara Designs website (opens in new tab)"
            >
              Zenara Designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
