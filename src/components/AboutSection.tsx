import storefrontImage from "@/assets/store-interior.webp";
import type { CSSProperties } from "react";
import Reveal from "./Reveal";

const reasons = [
  {
    title: "Real home cooking",
    text: "Our curries, biryanis and traditional dishes are made with the same spices and techniques our families have used for years.",
  },
  {
    title: "Made fresh every day",
    text: "Nothing sits around. Everything is prepared daily, so you get food that's actually fresh, not reheated.",
  },
  {
    title: "Fair prices, big portions",
    text: "Good food shouldn't break the bank. Portions are generous because we want you to leave satisfied.",
  },
  {
    title: "Part of the community",
    text: "We're not a chain. We're your neighbours, serving the community we're part of.",
  },
];

const AboutSection = () => (
  <section id="about" className="bg-secondary py-20 sm:py-28">
    <div className="container-width">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <h2 className="heading-section max-w-[16ch] text-primary">Homestyle cooking, made fresh daily</h2>
          <p className="mt-8 font-display text-[1.7rem] leading-snug text-foreground sm:text-3xl">
            We cook the way our families taught us, with real spices, fresh ingredients and recipes that have
            been in our community for generations.
          </p>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
            Heroes Catering serves traditional Tamil and South Asian dishes made from scratch every morning.
            Come in for comforting meals, quick short eats, Masala tea, Bru coffee or a mango shake. Whether
            you're grabbing a bite or ordering for a special event, quality and taste come first.
          </p>
        </Reveal>

        <figure>
          <Reveal variant="image">
            <img
              src={storefrontImage}
              alt="The Heroes Catering counter in GTA Mall, with a food display case and menu boards"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover"
              width={765}
              height={1020}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Our counter on the 2nd floor of GTA Mall
          </figcaption>
        </figure>
      </div>

      <h3 className="sr-only">Why people choose us</h3>
      <Reveal
        as="ul"
        variant="stagger"
        className="mt-20 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {reasons.map((reason, i) => (
          <li key={reason.title} className="relative pt-5" style={{ "--i": i * 2 } as CSSProperties}>
            <span aria-hidden="true" className="rule-draw absolute inset-x-0 top-0 h-0.5 bg-primary" />
            <h4 className="font-display text-2xl font-semibold text-foreground">{reason.title}</h4>
            <p className="mt-2 leading-relaxed text-muted-foreground">{reason.text}</p>
          </li>
        ))}
      </Reveal>
    </div>
  </section>
);

export default AboutSection;
