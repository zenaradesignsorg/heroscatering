import { Sparkles, Clock, Scale, Star } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Authentic Tamil Flavors",
    description: "Traditional recipes passed down through generations",
  },
  {
    icon: Clock,
    title: "Freshly Prepared Daily",
    description: "Made fresh every morning with quality ingredients",
  },
  {
    icon: Scale,
    title: "Generous Portions",
    description: "Great value with fair pricing for all",
  },
  {
    icon: Star,
    title: "Trusted Local Favorite",
    description: "Serving the community with love and care",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4">
            Why Choose Hero's Catering
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
