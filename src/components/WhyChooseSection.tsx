import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WhyChooseSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="why-choose" className="section-padding bg-gradient-to-b from-background to-secondary/30 scroll-mt-24">
      <div className="container-width">
        <div className="max-w-5xl mx-auto px-4">
          <div 
            ref={sectionRef}
            className={`text-center mb-16 animate-on-scroll-fade ${sectionVisible ? 'visible' : ''}`}
          >
          <h2 className="heading-section text-foreground mb-4">
              Why Choose Heroes Catering
          </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
        </div>
        
          {/* Main Story */}
            <div 
            ref={storyRef}
            className={`mb-12 text-center animate-on-scroll ${storyVisible ? 'visible' : ''}`}
            >
            <p className="text-lg sm:text-xl text-foreground leading-relaxed max-w-3xl mx-auto font-body">
              We cook the way our families taught us — with real spices, fresh ingredients, and recipes that have been in our community for generations. Every morning, we start from scratch. No shortcuts, no compromises.
            </p>
              </div>
              
          {/* Features in a more unique layout */}
          <div className="space-y-8 sm:space-y-12">
            <FeatureItem 
              number="01" 
              color="accent" 
              title="Real Home Cooking"
              description="Our curries, biryanis, and traditional dishes taste like they came straight from a Tamil kitchen. We use the same spices and techniques our families have used for years."
              align="left"
              index={0}
            />
              
            <FeatureItem 
              number="02" 
              color="primary" 
              title="Made Fresh Every Day"
              description="Nothing sits around. We prepare everything daily, so you get food that's actually fresh — not reheated or pre-made. You can taste the difference."
              align="right"
              index={1}
            />
            
            <FeatureItem 
              number="03" 
              color="accent" 
              title="Fair Prices, Big Portions"
              description="We believe good food shouldn't break the bank. Our portions are generous because we want you to leave satisfied, not still hungry."
              align="left"
              index={2}
            />
            
            <FeatureItem 
              number="04" 
              color="primary" 
              title="Part of the Community"
              description="We're not a chain. We're your neighbors, serving the community we're part of. When you come in, you're family."
              align="right"
              index={3}
            />
            </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ 
  number, 
  color, 
  title, 
  description, 
  align, 
  index 
}: { 
  number: string; 
  color: "accent" | "primary"; 
  title: string; 
  description: string; 
  align: "left" | "right";
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isAccent = color === "accent";
  const animationClass = align === "left" ? "animate-on-scroll-slide-left" : "animate-on-scroll-slide-right";
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"} md:items-center gap-6 md:gap-8 ${animationClass} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className={`md:w-1/2 ${align === "right" ? "md:text-right" : ""}`}>
        <div className={`inline-block mb-3 ${align === "right" ? "md:float-right" : ""}`}>
          <span className={`${isAccent ? "text-accent" : "text-primary"} font-display text-2xl font-bold`}>{number}</span>
          <div 
            className={`h-0.5 w-16 mt-1 ${align === "right" ? "ml-auto" : ""}`}
            style={{ backgroundColor: isAccent ? "hsl(var(--accent))" : "hsl(var(--primary))" }}
          />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className={`md:w-1/2 ${align === "right" ? "md:pr-8" : "md:pl-8"}`}>
        <div 
          className="h-px bg-gradient-to-r md:hidden"
          style={{ 
            background: `linear-gradient(to right, transparent, ${isAccent ? "hsl(var(--accent) / 0.2)" : "hsl(var(--primary) / 0.2)"}, ${isAccent ? "hsl(var(--accent) / 0.2)" : "hsl(var(--primary) / 0.2)"}, transparent)` 
          }}
        />
        <div 
          className="hidden md:block h-32 w-px"
          style={{ 
            background: `linear-gradient(to bottom, ${isAccent ? "hsl(var(--accent) / 0.2)" : "hsl(var(--primary) / 0.2)"}, ${isAccent ? "hsl(var(--accent))" : "hsl(var(--primary))"}, ${isAccent ? "hsl(var(--accent) / 0.2)" : "hsl(var(--primary) / 0.2)"})`,
            marginLeft: align === "right" ? "auto" : "1rem",
            marginRight: align === "right" ? "1rem" : "auto"
          }}
        />
      </div>
    </div>
  );
};

export default WhyChooseSection;
