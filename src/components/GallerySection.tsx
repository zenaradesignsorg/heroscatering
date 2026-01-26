import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const galleryImages = [
  { src: gallery1, alt: "Crispy Dosa with Chutneys" },
  { src: gallery2, alt: "Fragrant Mutton Biryani" },
  { src: gallery3, alt: "Refreshing Mango Shakes" },
  { src: gallery4, alt: "Crispy Short Eats Platter" },
  { src: gallery5, alt: "Spicy Chicken Curry" },
  { src: gallery6, alt: "Vegetarian Thali Meal" },
  { src: gallery7, alt: "Our Welcoming Store" },
  { src: gallery8, alt: "Catering Spread" },
];

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const GallerySection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 animate-on-scroll-fade ${sectionVisible ? 'visible' : ''}`}
        >
          <h2 className="heading-section text-foreground mb-4">
            Our Food & Store
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {galleryImages.map((image, index) => {
            const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1 });
            return (
              <div 
                key={`gallery-${image.alt.replace(/\s+/g, '-').toLowerCase()}-${index}`}
                ref={imageRef}
                className={`gallery-item aspect-square overflow-hidden animate-on-scroll-scale ${imageVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
