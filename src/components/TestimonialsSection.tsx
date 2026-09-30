import { Star } from "lucide-react";
import type { CSSProperties } from "react";
import Reveal from "./Reveal";

type Review = { name: string; location: string; rating: number; text: string };

const featured: Review = {
  name: "George Paranthaman",
  location: "Toronto",
  rating: 5,
  text: "The food is always fresh, flavourful, and beautifully presented. Every dish is prepared with great care and attention to detail. The service from Kumar, Anushia, Lakshi, and the entire kitchen staff is smooth, professional, and stress-free. Highly recommended!",
};

const reviews: Review[] = [
  {
    name: "Anthony Stanislaus",
    location: "Scarborough",
    rating: 5,
    text: "Great snacks and friendly service. Their mutton rolls are juicy, flavourful and super crispy. Their fish buns are the best I've ever had. Highly recommend!",
  },
  {
    name: "Hansini r.",
    location: "Toronto",
    rating: 5,
    text: "Great food and atmosphere! We ordered the koththu roti, vadai, and fish buns. Made us feel nostalgic and right at home. Thank you!",
  },
  {
    name: "Rob K.",
    location: "Toronto",
    rating: 5,
    text: "Love this place. Food is unbelievably delicious and portion sizes are huge for the price. Everything here is a hit, especially the Kothu Roti and fish buns.",
  },
  {
    name: "Rasha A",
    location: "Scarborough",
    rating: 5,
    text: "Great food, everything is so delicious and spicy! I love their Masala tea. They are friendly and kind, and their food is super! The price is not bad either.",
  },
  {
    name: "Theepan Yogarajah",
    location: "Scarborough",
    rating: 5,
    text: "Tried the egg roti and some snacks (samosa, vapian, vadai, cassava chips). Pretty solid quality and affordable prices. Good to see that the only take out store in the mall is priced well.",
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <p className="flex gap-0.5 text-accent">
    <span className="sr-only">{rating} out of 5 stars</span>
    {Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
    ))}
  </p>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 sm:py-28">
    <div className="container-width">
      <Reveal as="h2" className="heading-section text-primary">
        What our customers say
      </Reveal>

      <Reveal as="figure" delay={120} className="mt-12 max-w-4xl">
        <Stars rating={featured.rating} />
        <blockquote className="mt-5 font-display text-[1.75rem] font-medium leading-snug text-foreground sm:text-4xl sm:leading-tight">
          “{featured.text}”
        </blockquote>
        <figcaption className="mt-6 text-muted-foreground">
          <span className="font-semibold text-foreground">{featured.name}</span>, {featured.location}
        </figcaption>
      </Reveal>

      <Reveal
        as="ul"
        variant="stagger"
        className="mt-16 columns-1 gap-10 border-t pt-12 md:columns-2 lg:columns-3"
      >
        {reviews.map((review, i) => (
          <li
            key={review.name}
            className="mb-10 break-inside-avoid"
            style={{ "--i": i * 2 } as CSSProperties}
          >
            <figure>
              <Stars rating={review.rating} />
              <blockquote className="mt-3 text-lg leading-relaxed text-foreground/85">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{review.name}</span>, {review.location}
              </figcaption>
            </figure>
          </li>
        ))}
      </Reveal>
    </div>
  </section>
);

export default TestimonialsSection;
