import { Navbar } from "./Navbar";
import ImageLeft from "./ImageLeft";
import ImageRight from "./ImageRight";
import FallingChips from "./FallingChips";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import LearnVideoSection from "./LearnVideoSection";

export function LandingPage() {
  return (
    <div style={{ width: "100vw", overflowX: "hidden", margin: 0, padding: 0 }}>
      <Navbar />
      <HeroSection />
      <LearnVideoSection />
      <CardSection />
      <ImageLeft />
      <FallingChips />
      <ImageRight />
    </div>
  );
}
