import {
  forwardRef,
  useCallback,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import displayCase from "@/assets/display-gallery1.webp";
import counter from "@/assets/gallery14.webp";
import falooda from "@/assets/falooda-gallery2.webp";
import rolls from "@/assets/gallery9.webp";
import vadai from "@/assets/gallery12.webp";
import mangoShake from "@/assets/mangoshake-gallery4.webp";
import biryani from "@/assets/chickenleg2.webp";
import cutlets from "@/assets/gallery13.webp";
import pasta from "@/assets/gallery15.webp";
import eggRoti from "@/assets/gallery11.webp";
import tray from "@/assets/gallery10.webp";
import storefront from "@/assets/store-interior.webp";
import Reveal from "./Reveal";

const photos = [
  {
    src: displayCase,
    alt: "Display case of murukku, thenkuzhal and fried snacks",
    span: "row-span-2",
  },
  {
    src: counter,
    alt: "The Heroes Catering counter with menu boards for curry, kothu and biryani",
    span: "col-span-2",
  },
  {
    src: falooda,
    alt: "Rose falooda topped with ice cream and pistachios",
    span: "",
  },
  {
    src: vadai,
    alt: "Ulundu vadai and paruppu vadai with two chutneys",
    span: "",
  },
  {
    src: biryani,
    alt: "Chicken biryani with a spiced chicken leg and boiled egg",
    span: "col-span-2 row-span-2",
  },
  {
    src: rolls,
    alt: "Crispy breaded rolls with chilli dipping sauce",
    span: "",
  },
  {
    src: mangoShake,
    alt: "Mango shake topped with whipped cream and mango pieces",
    span: "row-span-2",
  },
  {
    src: cutlets,
    alt: "Breaded cutlets with lime, green chilli and dipping sauce",
    span: "",
  },
  {
    src: pasta,
    alt: "Chicken penne pasta with peppers, broccoli and cherry tomatoes",
    span: "col-span-2",
  },
  { src: eggRoti, alt: "Egg roti garnished with curry leaves", span: "" },
  {
    src: tray,
    alt: "Catering tray topped with fried green chillies and curry leaves",
    span: "col-span-2",
  },
  { src: storefront, alt: "Heroes Catering storefront in GTA Mall", span: "" },
];

const GallerySection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // The photo tile that opened the viewer, so focus can return to it on close
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const step = useCallback((delta: number) => {
    setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length));
  }, []);

  const current = openIndex === null ? null : photos[openIndex];

  return (
    <section id="gallery" className="bg-secondary py-20 sm:py-28">
      <div className="container-width">
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="heading-section text-primary">From our kitchen</h2>
          <p className="max-w-sm text-muted-foreground">Select a photo to see it larger.</p>
        </Reveal>

        <Reveal
          as="ul"
          variant="stagger"
          className="mt-10 grid grid-flow-dense auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 md:gap-4"
        >
          {photos.map((photo, index) => (
            <li key={photo.src} className={photo.span} style={{ "--i": index } as CSSProperties}>
              <button
                type="button"
                onClick={(e) => {
                  openerRef.current = e.currentTarget;
                  setOpenIndex(index);
                }}
                className="group block h-full w-full overflow-hidden rounded-2xl bg-muted"
                aria-label={`View larger: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </Reveal>
      </div>

      <Dialog.Root open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-hero-charcoal/95 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content
            // Opened from state rather than a Dialog.Trigger, so hand focus back to the tile ourselves
            onCloseAutoFocus={(e) => {
              e.preventDefault();
              openerRef.current?.focus();
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 outline-none sm:p-10"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1);
              if (e.key === "ArrowLeft") step(-1);
            }}
          >
            {current && (
              <>
                <Dialog.Title className="sr-only">
                  Photo {(openIndex ?? 0) + 1} of {photos.length}
                </Dialog.Title>
                {/* Keyed so each photo plays a soft zoom-fade as you step through */}
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  className="max-h-[75dvh] max-w-full rounded-xl object-contain duration-500 animate-in fade-in-0 zoom-in-95"
                />
                <Dialog.Description className="max-w-xl text-center text-hero-cream">
                  {current.alt}
                  <span className="ml-3 text-hero-cream/60">
                    {(openIndex ?? 0) + 1} / {photos.length}
                  </span>
                </Dialog.Description>
              </>
            )}

            <LightboxButton
              label="Previous photo"
              className="left-3 top-1/2 -translate-y-1/2 sm:left-6"
              onClick={() => step(-1)}
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </LightboxButton>
            <LightboxButton
              label="Next photo"
              className="right-3 top-1/2 -translate-y-1/2 sm:right-6"
              onClick={() => step(1)}
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </LightboxButton>
            <Dialog.Close asChild>
              <LightboxButton label="Close" className="right-3 top-3 sm:right-6 sm:top-6">
                <X className="h-6 w-6" aria-hidden="true" />
              </LightboxButton>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

const LightboxButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { label: string }
>(({ label, className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label={label}
    className={cn(
      "absolute flex h-12 w-12 items-center justify-center rounded-full bg-hero-cream/10 text-hero-cream transition-colors hover:bg-hero-cream/20 focus-visible:outline-hero-cream",
      className,
    )}
    {...props}
  />
));
LightboxButton.displayName = "LightboxButton";

export default GallerySection;
