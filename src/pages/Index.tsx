import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import CateringSection from "@/components/CateringSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CateringSection />
      <GallerySection />
      <WhyChooseSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
