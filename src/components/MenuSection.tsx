import { UtensilsCrossed, Cookie, GlassWater, Users } from "lucide-react";

const menuData = {
  food: {
    icon: UtensilsCrossed,
    title: "Food",
    items: [
      "Kothu Roti (Chicken, Mutton, Egg, Vegetable)",
      "Fried Rice",
      "Biryani",
      "Chicken Wings"
    ]
  },
  shortEats: {
    icon: Cookie,
    title: "Short Eats",
    items: [
      "Samosas",
      "Mutton Rolls",
      "Veggie Rolls",
      "Fish Buns",
      "Hand Murukku",
      "Pepper Thenkuzhal",
      "Mullu Murukku",
      "Mini Tapioca"
    ]
  },
  drinks: {
    icon: GlassWater,
    title: "Drinks",
    items: [
      "Mango Shake",
      "Falooda",
      "Lassi",
      "Bru Coffee",
      "Masala Tea",
      "Soft Drinks"
    ]
  },
  catering: {
    icon: Users,
    title: "Catering Options",
    items: [
      "Combination of menu items available",
      "Minimum quantities required"
    ]
  }
};

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {Object.entries(menuData).map(([key, category]) => (
            <div 
              key={key}
              className="card-elevated p-6 sm:p-8 group"
            >
              <div className="flex items-start gap-4 sm:gap-5 mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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
