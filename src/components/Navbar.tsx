import { useEffect, useMemo, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

type NavItem = {
  label: string;
  href: string;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Catering", href: "#catering" },
      { label: "Gallery", href: "#gallery" },
      { label: "Why Us", href: "#why-choose" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Visit", href: "#location" },
    ],
    []
  );

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-hero-charcoal/30 bg-hero-charcoal/95 backdrop-blur-md supports-[backdrop-filter]:bg-hero-charcoal/90 shadow-lg">
      <nav className="container-width px-4 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-hero-cream hover:text-primary transition-colors"
          aria-label="Go to top"
          onClick={() => setOpen(false)}
        >
          <span className="text-primary">Heroes</span>{" "}
          <span className="text-accent">Catering</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-5 text-sm font-medium">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-hero-cream/90 hover:text-hero-cream transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button variant="hero" size="sm" asChild className="min-h-[40px]">
            <a href="tel:+14162869334" aria-label="Call Heroes Catering">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 min-w-[44px] min-h-[44px] text-hero-cream hover:bg-hero-charcoal/50 transition-colors"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="lg:hidden border-t border-hero-charcoal/30 bg-hero-charcoal/98 backdrop-blur-md">
          <div className="container-width px-4 py-4">
            <div className="grid gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="min-h-[44px] px-3 py-3 rounded-md text-base font-medium text-hero-cream/90 hover:bg-hero-charcoal/70 hover:text-hero-cream transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="lg" asChild className="mt-2 min-h-[48px]">
                <a
                  href="tel:+14162869334"
                  className="justify-center"
                  aria-label="Call Heroes Catering"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call to Order
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
