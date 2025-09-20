import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useIsMobile } from "../utils/useIsMobile";

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
  return (
    <nav
      style={{
        width: "100vw",
        minWidth: "100vw",
        maxWidth: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "14px 20px 0 20px" : "24px 48px 0 48px",
        boxSizing: "border-box",
        pointerEvents: visible ? "none" : "none", // always allow hero content to be clickable
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{ height: isMobile ? 50 : 75, pointerEvents: "auto" }}
      />
      <div style={{ pointerEvents: "auto" }}>
        <Button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          buttonTitle="Start Learning"
        />
      </div>
    </nav>
  );
}
