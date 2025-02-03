import AboutSection from "./components/AboutSection";
import CoverageArea from "./components/CoverageArea";
import HeroSection from "./components/HeroSection";
import SearchBloodDonor from "./components/SearchBloodDonors";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchBloodDonor />
      <AboutSection />
      <CoverageArea />
    </main>
  );
}
