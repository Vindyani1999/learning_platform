import { useEffect, useState } from "react";
import { Button } from "./Button";

export function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        padding: "24px 48px 0 48px",
        boxSizing: "border-box",
        pointerEvents: visible ? "none" : "none", // always allow hero content to be clickable
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo"
        style={{ height: 70, pointerEvents: "auto" }}
      />
      {/* Button */}
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
