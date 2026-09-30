import type { CSSProperties } from "react";
import { Phone, Users, Briefcase, PartyPopper, ChefHat } from "lucide-react";
import { Button } from "./ui/button";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/business";
import trayImage from "@/assets/gallery10.webp";
import eggRotiImage from "@/assets/gallery11.webp";

const occasions = [
  { icon: Users, text: "Family gatherings" },
  { icon: Briefcase, text: "Corporate lunches" },
  { icon: PartyPopper, text: "Parties and special events" },
  { icon: ChefHat, text: "Custom menu options" },
];

const CateringSection = () => (
  <section id="catering" className="py-20 sm:py-28">
    <div className="container-width grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div className="relative order-2 pb-12 lg:order-1 lg:pb-0">
        <Reveal variant="image">
          <img
            src={trayImage}
            alt="A full catering tray topped with fried green chillies, curry leaves and onions"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        {/* Same tilted print as the hero, leaning the other way */}
        <Reveal delay={450} className="absolute -bottom-2 right-4 w-32 sm:w-44 lg:-bottom-10 lg:-right-8">
          <div className="rotate-3 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-105">
            <img
              src={eggRotiImage}
              alt="Egg roti garnished with curry leaves"
              className="photo-print aspect-square w-full"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>
      </div>

      <Reveal className="order-1 lg:order-2">
        <h2 className="heading-section text-primary">Catering for any occasion</h2>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
          From a birthday at home to lunch for the office, we'll cook the dishes your guests already love.
          Call us with your date, number of guests and what you'd like on the table.
        </p>

        <Reveal as="ul" variant="stagger" delay={200} className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {occasions.map(({ icon: Icon, text }, i) => (
            <li
              key={text}
              className="flex items-center gap-3 font-medium text-foreground"
              style={{ "--i": i * 1.5 } as CSSProperties}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              {text}
            </li>
          ))}
        </Reveal>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <Button variant="hero" size="lg" asChild>
            <a href={PHONE_HREF}>
              <Phone className="icon-ring" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">Minimum quantities apply.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CateringSection;
