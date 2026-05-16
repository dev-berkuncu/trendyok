import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CTASection from "@/components/sections/CTASection";
import AnimatedPage from "@/components/ui/AnimatedPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <main>
          <HeroSection />
          <FeaturesSection />
          <TestimonialSection />
          <ComparisonSection />
          <CTASection />
        </main>
      </AnimatedPage>
      <Footer />
    </>
  );
}
