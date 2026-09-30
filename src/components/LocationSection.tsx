import { Navigation, Phone } from "lucide-react";
import { Button } from "./ui/button";
import OpenBadge from "./OpenBadge";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
import { useOpenStatus } from "@/hooks/use-open-status";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_NOTE,
  DIRECTIONS_URL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
  formatTime,
} from "@/lib/business";

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`)}&output=embed`;

const LocationSection = () => {
  const status = useOpenStatus();

  return (
    <section id="location" className="bg-secondary py-20 sm:py-28">
      <div className="container-width grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 className="heading-section text-primary">Visit us</h2>

          <address className="mt-8 not-italic">
            <p className="font-display text-3xl font-semibold leading-tight text-foreground">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
            </p>
            <p className="mt-3 text-muted-foreground">{ADDRESS_NOTE}. Dine in or take out.</p>
          </address>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="icon-nudge" aria-hidden="true" />
                Get directions
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href={PHONE_HREF}>
                <Phone className="icon-ring" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </div>

          <div className="mt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b pb-3">
              <h3 className="font-display text-2xl font-semibold text-foreground">Hours</h3>
              <OpenBadge status={status} />
            </div>
            <table className="w-full text-left">
              <caption className="sr-only">Opening hours</caption>
              <tbody>
                {HOURS.map((h, i) => {
                  const isToday = i === status.todayIndex;
                  return (
                    <tr
                      key={h.day}
                      className={cn("border-b border-border/70", isToday && "font-semibold text-primary")}
                      aria-current={isToday ? "date" : undefined}
                    >
                      <th scope="row" className={cn("py-3", isToday ? "font-semibold" : "font-normal")}>
                        {h.day}
                        {isToday && (
                          <span className="ml-2 text-sm font-medium text-muted-foreground">today</span>
                        )}
                      </th>
                      <td className="py-3 text-right tabular-nums">
                        {formatTime(h.open)} – {formatTime(h.close)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal
          variant="image"
          delay={150}
          className="min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-muted lg:min-h-0"
        >
          <iframe
            src={mapUrl}
            title="Map showing Heroes Catering at 5215 Finch Ave E, Scarborough"
            className="h-full min-h-[22rem] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
};

export default LocationSection;
