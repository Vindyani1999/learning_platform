import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useIsMobile } from "../utils/useIsMobile";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../LoadingContext";

export function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const handleStartLearning = () => {
    setLoading(true);
    // Simulate loading, or you can use navigation events if needed
    setTimeout(() => {
      setLoading(false);
      navigate("/home/dashboard");
    }, 1200);
  };
  return (
    <nav
      style={{
        width: "100vw",
        minWidth: "100vw",
        maxWidth: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "14px 20px 0 20px" : "24px 48px 0 48px",
        boxSizing: "border-box",
        // pointerEvents: visible ? "auto" : "none", // removed to avoid blocking children
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s cubic-bezier(.4,0,.2,1)",
        pointerEvents: "auto", // always allow nav to be clickable, control opacity only
      }}
    >
      <img
        src="/logoooo.png"
        alt="Logo"
        style={{
          height: isMobile ? 50 : 75,
          cursor: "pointer",
          pointerEvents: "auto",
        }}
        onClick={() => navigate("/")}
        tabIndex={0}
        role="button"
        aria-label="Go to home"
      />
      <Button onClick={handleStartLearning} buttonTitle="Start Learning" />
    </nav>
  );
}
