import AboutSection from "./components/AboutSection";
import CoverageArea from "./components/CoverageArea";
import HeroSection from "./components/HeroSection";
import SearchBloodDonor from "./components/SearchBloodDonor";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SearchBloodDonor />
      <CoverageArea />
    </main>
  );
}
