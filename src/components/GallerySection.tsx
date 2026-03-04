import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import displayGallery1 from "@/assets/display-gallery1.webp";
import faloodaGallery2 from "@/assets/falooda-gallery2.jpg";
import gallery9 from "@/assets/gallery9.jpg";
import mangoshakeGallery4 from "@/assets/mangoshake-gallery4.jpg";
import gallery10 from "@/assets/gallery10.jpg";
import gallery11 from "@/assets/gallery11.jpg";
import gallery12 from "@/assets/gallery12.jpg";
import gallery13 from "@/assets/gallery13.jpg";
import gallery14 from "@/assets/gallery14.jpg";
import gallery15 from "@/assets/gallery15.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import chickenleg2 from "@/assets/chickenleg2.jpg";

const galleryImages = [
  { src: displayGallery1, alt: "Food Display" },
  { src: faloodaGallery2, alt: "Falooda" },
  { src: gallery9, alt: "Catering Display" },
  { src: mangoshakeGallery4, alt: "Mango Shake" },
  { src: gallery10, alt: "Food Selection" },
  { src: gallery11, alt: "Catering Spread" },
  { src: gallery12, alt: "Food Presentation" },
  { src: gallery13, alt: "Menu Items" },
  { src: gallery14, alt: "Catering Service" },
  { src: gallery15, alt: "Food Display" },
  { src: storeInterior, alt: "Store Interior" },
  { src: chickenleg2, alt: "Chicken Leg" },
];

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const GallerySection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, handleNext, handlePrevious]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <>
      <section id="gallery" className="section-padding bg-secondary scroll-mt-24">
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
              <button
                  key={`gallery-${image.alt.replace(/\s+/g, '-').toLowerCase()}-${index}`}
                  ref={imageRef}
                  onClick={() => openLightbox(index)}
                  className={`gallery-item aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-on-scroll-scale ${imageVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                  aria-label={`View ${image.alt} in full screen`}
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
              </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300 overflow-x-hidden overflow-y-auto"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Navigation Buttons */}
          {galleryImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              loading="eager"
            />
            
            {/* Image Counter */}
            {galleryImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
