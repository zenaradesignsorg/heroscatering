const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              Why Choose Heroes Catering
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="space-y-6 sm:space-y-8 text-center px-4">
            <div>
              <p className="text-base sm:text-body text-foreground leading-relaxed mb-4">
                We cook the way our families taught us — with real spices, fresh ingredients, and recipes that have been in our community for generations. Every morning, we start from scratch. No shortcuts, no compromises.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Real Home Cooking
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Our curries, biryanis, and traditional dishes taste like they came straight from a Tamil kitchen. We use the same spices and techniques our families have used for years.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Made Fresh Every Day
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Nothing sits around. We prepare everything daily, so you get food that's actually fresh — not reheated or pre-made. You can taste the difference.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Fair Prices, Big Portions
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We believe good food shouldn't break the bank. Our portions are generous because we want you to leave satisfied, not still hungry.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Part of the Community
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We're not a chain. We're your neighbors, serving the community we're part of. When you come in, you're family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
