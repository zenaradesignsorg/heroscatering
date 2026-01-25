import { UtensilsCrossed, Cookie, GlassWater, Users } from "lucide-react";

const menuCategories = [
  {
    icon: UtensilsCrossed,
    title: "South Asian / Tamil Meals",
    description: "Authentic rice dishes, curries, and traditional favorites prepared with aromatic spices",
  },
  {
    icon: Cookie,
    title: "Short Eats",
    description: "Crispy samosas, cutlets, vadai, and other popular snacks perfect for any time",
  },
  {
    icon: GlassWater,
    title: "Mango Shakes & Beverages",
    description: "Refreshing drinks including our famous mango shake, lassi, and more",
  },
  {
    icon: Users,
    title: "Catering Trays & Party Orders",
    description: "Large quantity orders for events with custom menu options available",
  },
];

const MenuSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4">
            Menu Highlights
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {menuCategories.map((category, index) => (
            <div 
              key={index}
              className="card-elevated p-8 group cursor-default"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8 text-sm italic">
          Custom quantities available for catering orders
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
