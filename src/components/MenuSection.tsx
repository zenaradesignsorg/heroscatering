import type { CSSProperties } from "react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import Reveal from "./Reveal";
import { PHONE_HREF } from "@/lib/business";
import biryaniImage from "@/assets/chickenleg2.webp";
import vadaiImage from "@/assets/gallery12.webp";
import faloodaImage from "@/assets/falooda-gallery2.webp";

type MenuItem = { name: string; note?: string };

const categories: {
  title: string;
  image: string;
  imageAlt: string;
  items: MenuItem[];
}[] = [
  {
    title: "Food",
    image: biryaniImage,
    imageAlt: "Chicken biryani with a spiced chicken leg and boiled egg",
    items: [
      { name: "Kothu Roti", note: "Chicken, mutton, egg or vegetable" },
      { name: "Biryani" },
      { name: "Fried Rice" },
      { name: "Chicken Wings" },
    ],
  },
  {
    title: "Short eats",
    image: vadaiImage,
    imageAlt: "Ulundu vadai and paruppu vadai with coconut chutney and red chutney",
    items: [
      { name: "Samosas" },
      { name: "Mutton Rolls" },
      { name: "Veggie Rolls" },
      { name: "Fish Buns" },
      { name: "Hand Murukku" },
      { name: "Pepper Thenkuzhal" },
      { name: "Mullu Murukku" },
      { name: "Mini Tapioca" },
    ],
  },
  {
    title: "Drinks",
    image: faloodaImage,
    imageAlt: "Two glasses of rose falooda topped with ice cream and pistachios",
    items: [
      { name: "Mango Shake" },
      { name: "Falooda" },
      { name: "Lassi" },
      { name: "Bru Coffee" },
      { name: "Masala Tea" },
      { name: "Soft Drinks" },
    ],
  },
];

const MenuSection = () => (
  <section
    id="menu"
    className="on-dark relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28"
  >
    <div className="pattern-overlay absolute inset-0 opacity-60" aria-hidden="true" />

    <div className="container-width relative">
      <Reveal className="flex flex-col gap-4 border-b border-primary-foreground/20 pb-10 md:flex-row md:items-end md:justify-between">
        <h2 className="heading-section text-primary-foreground">Menu highlights</h2>
        <p className="max-w-sm text-primary-foreground/75">
          A few of the favourites. Ask at the counter for the day's curries and specials.
        </p>
      </Reveal>

      <div className="grid gap-14 pt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {categories.map((category, col) => (
          <div
            key={category.title}
            className={category.items.length > 6 ? "md:row-span-2 lg:row-span-1" : ""}
          >
            <Reveal variant="image" delay={col * 120} className="rounded-2xl [--reveal-radius:1rem]">
              <img
                src={category.image}
                alt={category.imageAlt}
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal
              as="h3"
              delay={col * 120 + 150}
              className="mt-7 font-display text-4xl font-semibold italic"
            >
              {category.title}
            </Reveal>
            {/* Items cascade in like a menu being written out */}
            <Reveal as="ul" variant="stagger" delay={col * 120 + 220} className="mt-4">
              {category.items.map((item, i) => (
                <li
                  key={item.name}
                  style={{ "--i": i } as CSSProperties}
                  className="group/item border-b border-primary-foreground/15 py-3 last:border-0"
                >
                  <span className="block transition-transform duration-300 ease-out group-hover/item:translate-x-1.5">
                    <span className="font-display text-2xl font-medium leading-tight">{item.name}</span>
                    {item.note && (
                      <span className="mt-0.5 block text-sm text-primary-foreground/70">{item.note}</span>
                    )}
                  </span>
                </li>
              ))}
            </Reveal>
          </div>
        ))}
      </div>

      <Reveal className="mt-16 flex flex-col gap-6 rounded-2xl bg-hero-green-deep/60 p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-display text-3xl font-semibold">Feeding a crowd?</h3>
          <p className="mt-2 max-w-xl text-primary-foreground/80">
            Any of these dishes can be combined into a catering order, in custom quantities. Minimum
            quantities apply.
          </p>
        </div>
        <Button variant="heroInverse" size="lg" asChild className="shrink-0">
          <a href={PHONE_HREF}>
            <Phone className="icon-ring" aria-hidden="true" />
            Call to order catering
          </a>
        </Button>
      </Reveal>
    </div>
  </section>
);

export default MenuSection;
