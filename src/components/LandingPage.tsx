import { Navbar } from "./Navbar";
import ImageLeft from "./ImageLeft";
import ImageRight from "./ImageRight";
import FallingChips from "./FallingChips";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import LearnVideoSection from "./LearnVideoSection";
import LessonBar from "./LessonBar";
import { useEffect } from "react";
import { useLoading } from "../LoadingContext";

export function LandingPage() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, [setLoading]);
  return (
    <div style={{ width: "100vw", overflowX: "hidden", margin: 0, padding: 0 }}>
      <Navbar />
      <HeroSection />
      <LearnVideoSection />
      <LessonBar />

      <ImageLeft />
      <FallingChips />
      <ImageRight />
      <CardSection />
    </div>
  );
}
