import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import CateringSection from "@/components/CateringSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <CateringSection />
        <GallerySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LocationSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
