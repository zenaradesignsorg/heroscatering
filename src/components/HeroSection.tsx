import { Phone, Navigation } from "lucide-react";
import { Button } from "./ui/button";
import OpenBadge from "./OpenBadge";
import { useOpenStatus } from "@/hooks/use-open-status";
import { ADDRESS_LINE_1, ADDRESS_NOTE, DIRECTIONS_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/business";
import heroImage from "@/assets/hero-food.webp";
import rollsImage from "@/assets/gallery9.webp";

const HeroSection = () => {
  const status = useOpenStatus();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-secondary pb-16 pt-24 sm:pt-28 lg:pb-20 lg:pt-28"
    >
      {/* Backdrop: warm light, a kolam drawing that fades out away from the headline, and paper grain */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_75%_35%,hsl(var(--hero-beige))_0%,transparent_70%)]" />
        <div className="kolam-pattern absolute inset-0 opacity-[0.11] [mask-image:radial-gradient(75%_85%_at_18%_40%,black_0%,black_35%,transparent_80%)]" />
        <div className="paper-grain absolute inset-0 opacity-60 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-secondary" />
      </div>

      <div className="container-width grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="max-w-xl">
          <OpenBadge status={status} className="rise-in" />

          <h1
            className="rise-in mt-5 font-display text-[3.25rem] font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl xl:text-[4.75rem]"
            style={{ animationDelay: "80ms" }}
          >
            Authentic Tamil &amp; South Asian cooking
          </h1>

          <p
            className="rise-in mt-6 max-w-[34rem] text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Kothu roti, biryani, short eats and falooda, made fresh every day in Scarborough. Stop by for a
            quick bite, or call ahead to order for your next gathering.
          </p>

          <div
            id="hero-cta"
            className="rise-in mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href={PHONE_HREF}>
                <Phone className="icon-ring" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="icon-nudge" aria-hidden="true" />
                Get directions
              </a>
            </Button>
          </div>

          <p className="rise-in mt-6 text-sm text-muted-foreground" style={{ animationDelay: "300ms" }}>
            {ADDRESS_NOTE}, {ADDRESS_LINE_1}
          </p>
        </div>

        <div className="rise-in relative lg:pl-4" style={{ animationDelay: "200ms" }}>
          <div className="overflow-hidden rounded-[1.75rem] bg-muted">
            <img
              src={heroImage}
              alt="A table of South Asian dishes: biryani, dosa, curries, samosas, fried chicken and mango lassi"
              className="hero-settle aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[min(38rem,calc(100dvh-10rem))]"
              width={1920}
              height={1080}
              // React 18 only passes the lowercase attribute through to the DOM
              {...{ fetchpriority: "high" }}
              decoding="async"
            />
          </div>

          <div
            className="rise-in absolute -bottom-8 left-4 w-36 sm:-left-2 sm:w-48 lg:-left-10 lg:bottom-10 lg:w-56"
            style={{ animationDelay: "550ms" }}
          >
            {/* Tilt lives on its own element so the entrance animation's transform doesn't override it */}
            <div className="-rotate-3 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-105">
              <img
                src={rollsImage}
                alt="Two crispy breaded rolls with chilli dipping sauce"
                className="photo-print aspect-square w-full"
                width={400}
                height={400}
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
