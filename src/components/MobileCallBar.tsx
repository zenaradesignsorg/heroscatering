import { useEffect, useState } from "react";
import { Navigation, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { DIRECTIONS_URL, PHONE_HREF } from "@/lib/business";

/**
 * Fixed bottom actions on phones and tablets. Slides up once the hero's call button has scrolled away,
 * so the two never compete. Body padding (--call-bar-height) keeps content clear of it.
 */
const MobileCallBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  // Keep the hidden bar out of the tab order and away from screen readers
  const hiddenProps = visible ? {} : { tabIndex: -1, "aria-hidden": true };

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 print:hidden border-t bg-background/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] pt-3 backdrop-blur transition-transform duration-500 ease-out-soft lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={PHONE_HREF}
          {...hiddenProps}
          className="group flex h-12 flex-[3] items-center justify-center gap-2 rounded-full bg-accent font-semibold text-accent-foreground active:bg-hero-red-dark"
        >
          <Phone className="icon-ring h-5 w-5" aria-hidden="true" />
          Call to order
        </a>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          {...hiddenProps}
          className="group flex h-12 flex-[2] items-center justify-center gap-1.5 rounded-full border-2 border-primary px-3 font-semibold text-primary active:bg-muted"
        >
          <Navigation className="icon-nudge h-5 w-5" aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
};

export default MobileCallBar;
