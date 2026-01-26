const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-width">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-4">
              Why Choose Heroes Catering
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
          </div>
          
          {/* Main Story */}
          <div className="mb-12 text-center">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed max-w-3xl mx-auto font-body">
              We cook the way our families taught us — with real spices, fresh ingredients, and recipes that have been in our community for generations. Every morning, we start from scratch. No shortcuts, no compromises.
            </p>
          </div>

          {/* Features in a more unique layout */}
          <div className="space-y-8 sm:space-y-12">
            {/* Feature 1 - Left aligned with accent */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="md:w-1/2">
                <div className="inline-block mb-3">
                  <span className="text-accent font-display text-2xl font-bold">01</span>
                  <div className="h-0.5 w-16 bg-accent mt-1" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Real Home Cooking
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Our curries, biryanis, and traditional dishes taste like they came straight from a Tamil kitchen. We use the same spices and techniques our families have used for years.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:hidden" />
                <div className="hidden md:block h-32 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 ml-4" />
              </div>
            </div>

            {/* Feature 2 - Right aligned */}
            <div className="flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-8">
              <div className="md:w-1/2 md:text-right">
                <div className="inline-block mb-3 md:float-right">
                  <span className="text-primary font-display text-2xl font-bold">02</span>
                  <div className="h-0.5 w-16 bg-primary mt-1 ml-auto" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Made Fresh Every Day
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Nothing sits around. We prepare everything daily, so you get food that's actually fresh — not reheated or pre-made. You can taste the difference.
                </p>
              </div>
              <div className="md:w-1/2 md:pr-8">
                <div className="h-px bg-gradient-to-r from-accent/20 via-accent to-accent/20 md:hidden" />
                <div className="hidden md:block h-32 w-px bg-gradient-to-b from-accent/20 via-accent to-accent/20 ml-auto mr-4" />
              </div>
            </div>

            {/* Feature 3 - Left aligned */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="md:w-1/2">
                <div className="inline-block mb-3">
                  <span className="text-accent font-display text-2xl font-bold">03</span>
                  <div className="h-0.5 w-16 bg-accent mt-1" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Fair Prices, Big Portions
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We believe good food shouldn't break the bank. Our portions are generous because we want you to leave satisfied, not still hungry.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:hidden" />
                <div className="hidden md:block h-32 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 ml-4" />
              </div>
            </div>

            {/* Feature 4 - Right aligned */}
            <div className="flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-8">
              <div className="md:w-1/2 md:text-right">
                <div className="inline-block mb-3 md:float-right">
                  <span className="text-primary font-display text-2xl font-bold">04</span>
                  <div className="h-0.5 w-16 bg-primary mt-1 ml-auto" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Part of the Community
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We're not a chain. We're your neighbors, serving the community we're part of. When you come in, you're family.
                </p>
              </div>
              <div className="md:w-1/2 md:pr-8">
                <div className="h-px bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
