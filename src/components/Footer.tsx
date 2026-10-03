import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_NOTE,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/business";

const Footer = () => (
  <footer className="on-dark bg-hero-charcoal py-14 text-hero-cream">
    <div className="container-width">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold">
            <span className="text-hero-green-light">Heroes</span>{" "}
            <span className="text-hero-red-light">Catering</span>
          </p>
          <p className="mt-2 text-hero-cream/70">Authentic Tamil and South Asian food in Scarborough.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">Contact</h2>
          <ul className="mt-3 space-y-2 text-hero-cream/80">
            <li>
              <a href={PHONE_HREF} className="link-draw hover:text-hero-cream">
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">Find us</h2>
          <address className="mt-3 not-italic text-hero-cream/80">
            {ADDRESS_NOTE}
            <br />
            {ADDRESS_LINE_1}
            <br />
            {ADDRESS_LINE_2}
          </address>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-hero-cream/15 pt-6 text-sm text-hero-cream/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Heroes Catering. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://zenaradesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-0.5 underline underline-offset-2 hover:text-hero-cream"
          >
            Zenara Designs
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
