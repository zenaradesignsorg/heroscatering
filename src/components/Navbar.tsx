import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import OpenBadge from "./OpenBadge";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/business";
import { useOpenStatus } from "@/hooks/use-open-status";
import { useActiveSection } from "@/hooks/use-active-section";

const items = [
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Photos", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit", href: "#location" },
];
// Every section, in page order, including ones without a nav link (the story section), so the indicator
// fades out there rather than staying on the previous link
const sectionIds = ["menu", "about", "catering", "gallery", "testimonials", "location"];

const Wordmark = ({ className }: { className?: string }) => (
  <span className={cn("font-display font-bold tracking-tight", className)}>
    <span className="text-primary">Heroes</span> <span className="text-accent">Catering</span>
  </span>
);

/**
 * Floating pill navigation. It tightens up once the page scrolls, and a soft indicator slides
 * behind the link for the section on screen. On small screens the links move into a dropdown card.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const status = useOpenStatus();
  const active = useActiveSection(sectionIds);

  const listRef = useRef<HTMLUListElement>(null);
  // The indicator follows the pointer (or keyboard focus) and glides back to the active section after
  const [hovered, setHovered] = useState<string | null>(null);
  // After a click, the indicator holds on the destination while the page scrolls there, instead of
  // chasing every section passed on the way. It also wins over hover: the pill narrows while scrolling,
  // which slides other links under a pointer that hasn't moved.
  const [pending, setPending] = useState<string | null>(null);
  const target = pending ?? hovered ?? active;
  const [indicator, setIndicator] = useState<{ left: number; width: number; visible: boolean } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Move the indicator under the target link; re-measure when the pill resizes
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      // Measure the link's <li>: the link itself is positioned relative to its own item
      const item = target ? list.querySelector<HTMLElement>(`a[href="#${target}"]`)?.parentElement : null;
      // With no target, fade out in place rather than sliding away
      setIndicator((prev) =>
        item
          ? { left: item.offsetLeft, width: item.offsetWidth, visible: true }
          : prev && { ...prev, visible: false },
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [target]);

  // Release the hold on arrival, when the reader takes over scrolling, or after a safety timeout
  useEffect(() => {
    if (!pending) return;
    if (pending === active) {
      setPending(null);
      return;
    }
    const release = () => setPending(null);
    const timeout = window.setTimeout(release, 2000);
    const events = ["wheel", "touchstart", "keydown"] as const;
    events.forEach((e) => window.addEventListener(e, release, { passive: true }));
    return () => {
      window.clearTimeout(timeout);
      events.forEach((e) => window.removeEventListener(e, release));
    };
  }, [pending, active]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Dims the page behind the open mobile menu; tapping it closes the menu. Sits above the
          call bar (z-40) so a tap outside the card can't start a phone call by accident. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[45] bg-hero-charcoal/25 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] sm:px-5">
        <nav
          aria-label="Main"
          className={cn(
            "pointer-events-auto mx-auto flex items-center justify-between gap-4 rounded-full border py-2 pl-5 pr-2 backdrop-blur-md",
            "transition-[max-width,background-color,box-shadow,border-color] duration-500 ease-out-soft",
            scrolled || open
              ? "max-w-5xl border-border/80 bg-background/85 shadow-[0_10px_30px_-12px_hsl(var(--hero-charcoal)/0.3)]"
              : "max-w-7xl border-hero-charcoal/10 bg-background/55 shadow-[0_4px_20px_-12px_hsl(var(--hero-charcoal)/0.2)]",
          )}
        >
          <a
            href="#top"
            className="inline-flex h-11 shrink-0 items-center text-xl sm:text-2xl"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
            <span className="sr-only">, back to top</span>
          </a>

          <ul
            ref={listRef}
            onMouseLeave={() => setHovered(null)}
            className="relative hidden items-center text-[0.95rem] font-medium lg:flex"
          >
            {/* Sliding indicator; the small bar on top marks the section you're in */}
            <li
              aria-hidden="true"
              className={cn(
                "absolute inset-y-0 rounded-full bg-primary/10 transition-all duration-500 ease-out-soft",
                indicator?.visible ? "opacity-100" : "opacity-0",
              )}
              style={indicator ? { left: indicator.left, width: indicator.width } : undefined}
            >
              <span
                className={cn(
                  "absolute -top-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-primary transition-opacity duration-300",
                  target && target === active ? "opacity-100" : "opacity-0",
                )}
              />
            </li>
            {items.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setPending(item.href.slice(1))}
                    onMouseEnter={() => setHovered(item.href.slice(1))}
                    onFocus={() => setHovered(item.href.slice(1))}
                    onBlur={() => setHovered(null)}
                    className={cn(
                      "block rounded-full px-4 py-2 transition-colors",
                      isActive ? "text-primary" : "text-foreground/75 hover:text-primary",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            {/* Desktop only: below lg the hero, the sticky call bar and the menu card each offer a call button */}
            <Button variant="hero" asChild className="hidden h-11 px-5 lg:inline-flex">
              <a href={PHONE_HREF}>
                <Phone className="icon-ring" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu: a rounded card that drops from the pill */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="pointer-events-auto mx-auto mt-2 max-w-5xl origin-top rounded-[1.75rem] border bg-background p-3 shadow-[0_24px_50px_-20px_hsl(var(--hero-charcoal)/0.45)] duration-300 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 lg:hidden"
        >
          <ul>
            {items.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 font-display text-2xl font-semibold transition-colors",
                      isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-2 flex flex-col gap-3 border-t px-2 pb-1 pt-4">
            <OpenBadge status={status} className="self-start" />
            <Button variant="hero" size="lg" asChild className="w-full">
              <a href={PHONE_HREF} onClick={() => setOpen(false)}>
                <Phone className="icon-ring" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
