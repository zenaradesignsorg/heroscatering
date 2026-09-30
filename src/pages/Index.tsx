import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import CateringSection from "@/components/CateringSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

const Index = () => {
  // The page renders client-side, so the browser's own jump to a #section in the URL
  // happens before the section exists. Repeat it once after the first render.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <CateringSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
};

export default Index;
