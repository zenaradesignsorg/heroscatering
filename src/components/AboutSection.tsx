const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-6">
            Homestyle Cooking, Made Fresh Daily
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          
          <p className="text-body text-muted-foreground leading-relaxed">
            Hero's Catering serves traditional Tamil and South Asian dishes made fresh every day. 
            From comforting meals to quick short eats and popular mango shakes, everything is 
            prepared with care and authentic flavors. Whether you're stopping by for a quick bite 
            or ordering for a special event, quality and taste come first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
