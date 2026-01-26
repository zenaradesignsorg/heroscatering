import displayGallery1 from "@/assets/display-gallery1.webp";
import faloodaGallery2 from "@/assets/falooda-gallery2.jpg";
import kothuGallery3 from "@/assets/kothu-gallery3.jpeg";
import mangoshakeGallery4 from "@/assets/mangoshake-gallery4.jpg";
import mulluMurukkuGallery5 from "@/assets/mullu-murukku-gallery5.jpg";
import muttonrollsGallery6 from "@/assets/muttonrolls-gallery6.jpg";
import chickenwingsGallery7 from "@/assets/chickenwings-gallery7.jpeg";
import samosaGallery8 from "@/assets/samosa-gallery8.jpg";

const galleryImages = [
  { src: displayGallery1, alt: "Food Display" },
  { src: faloodaGallery2, alt: "Falooda" },
  { src: kothuGallery3, alt: "Kothu" },
  { src: mangoshakeGallery4, alt: "Mango Shake" },
  { src: mulluMurukkuGallery5, alt: "Mullu Murukku" },
  { src: muttonrollsGallery6, alt: "Mutton Rolls" },
  { src: chickenwingsGallery7, alt: "Chicken Wings" },
  { src: samosaGallery8, alt: "Samosa" },
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
                  width="400"
                  height="400"
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
