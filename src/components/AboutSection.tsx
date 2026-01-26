import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-width">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center px-4 animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="heading-section text-foreground mb-4 sm:mb-6">
            Homestyle Cooking, Made Fresh Daily
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8 rounded-full" />
          
          <p className="text-base sm:text-body text-muted-foreground leading-relaxed">
            Heroes Catering serves traditional Tamil and South Asian dishes made fresh every day. 
            From comforting meals to quick short eats, refreshing beverages like Masala tea and Bru coffee, 
            and popular mango shakes, everything is prepared with care and authentic flavors. Whether you're 
            stopping by for a quick bite or ordering for a special event, quality and taste come first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
