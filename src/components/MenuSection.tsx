import { 
  UtensilsCrossed, 
  Cookie, 
  GlassWater, 
  Users 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const menuData = {
  food: {
    title: "Food",
    icon: UtensilsCrossed,
    items: [
      "Kothu Roti (Chicken, Mutton, Egg, Vegetable)",
      "Fried Rice",
      "Biryani",
      "Chicken Wings"
    ]
  },
  shortEats: {
    title: "Short Eats",
    icon: Cookie,
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
    title: "Drinks",
    icon: GlassWater,
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
    title: "Catering Options",
    icon: Users,
    items: [
      "Combination of menu items available",
      "Minimum quantities required"
    ]
  }
};

const MenuSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="menu" className="section-padding bg-secondary/30 relative overflow-hidden scroll-mt-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-width relative z-10">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 animate-on-scroll-fade ${sectionVisible ? 'visible' : ''}`}
        >
          <h2 className="heading-section text-foreground mb-4">
            Menu Highlights
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {Object.entries(menuData).map(([key, category], index) => (
              <MenuCard key={key} category={category} index={index} />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20">
            <p className="text-sm sm:text-base text-muted-foreground italic font-body">
              Custom quantities available for catering orders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuCard = ({ category, index }: { category: typeof menuData.food, index: number }) => {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ 
    threshold: 0.1 
  });

  return (
    <div 
      ref={cardRef}
      className={`relative bg-background/80 backdrop-blur-sm rounded-xl p-6 sm:p-7 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll-scale ${cardVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full transform translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Category Header */}
      <div className="mb-5 sm:mb-6 relative">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-primary to-accent rounded-full" />
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            {category.title}
          </h3>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
      </div>
      
      {/* Menu Items */}
      <div className="space-y-3 sm:space-y-3.5">
        {category.items.map((item, itemIndex) => {
          const CategoryIcon = category.icon;
          return (
            <div 
              key={`${category.title.toLowerCase()}-${item.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}-${itemIndex}`}
              className="flex items-start gap-3 group"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                  <CategoryIcon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <p className="text-sm sm:text-base text-foreground leading-relaxed font-body group-hover:text-primary transition-colors duration-300 flex-1 pt-1">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuSection;
