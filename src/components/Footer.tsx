import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hero-charcoal py-12 px-4">
      <div className="container-width">
        <div className="text-center">
          {/* Logo */}
          <h3 className="font-display text-2xl font-bold text-hero-cream mb-2">
            Hero's Catering
          </h3>
          
          {/* Tagline */}
          <p className="text-hero-cream/60 mb-8 italic">
            Authentic South Asian Taste
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-hero-cream/70 text-sm mb-8">
            <a 
              href="tel:+14165551234"
              className="flex items-center gap-2 hover:text-hero-cream transition-colors"
            >
              <Phone className="w-4 h-4" />
              (416) 555-1234
            </a>
            
            <span className="hidden sm:inline text-hero-cream/30">|</span>
            
            <a 
              href="mailto:info@heroscatering.com"
              className="flex items-center gap-2 hover:text-hero-cream transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@heroscatering.com
            </a>
            
            <span className="hidden sm:inline text-hero-cream/30">|</span>
            
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              123 Main Street, Toronto
            </span>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-hero-cream/20 mx-auto mb-6" />
          
          {/* Copyright */}
          <p className="text-hero-cream/40 text-xs">
            © {currentYear} Hero's Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
