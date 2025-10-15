import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import BrandsSlider from "@/components/BrandsSlider";
import TrustedBy from "@/components/TrustedBy";
import FounderStory from "@/components/FounderStory";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <Hero />
      <Portfolio />
      <Results />
      <Testimonials />
      <HowItWorks />
      <BrandsSlider />
      <TrustedBy />
      <FounderStory />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
