import AboutSection from "./components/AboutSection";
import CoverageArea from "./components/CoverageArea";
import FAQSection from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import SearchBloodDonor from "./components/SearchBloodDonors";
import StepsToDonate from "./components/StepsToDonate";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchBloodDonor />
      <StepsToDonate />
      <CoverageArea />
      <AboutSection />
      <Testimonials />
      <FAQSection />
    </main>
  );
}
