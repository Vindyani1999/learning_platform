import { useEffect } from "react";
import { useIsMobile } from "../utils/useIsMobile";

function HeroSection() {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Load spline script once
    if (!document.getElementById("spline-script")) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.64/build/spline-viewer.js";
      script.type = "module";
      script.id = "spline-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          minWidth: "100vw",
          maxWidth: "100vw",
          height: isMobile ? "70vh" : "100vh",
        }}
      >
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: isMobile ? "70vh" : "100vh",
            objectFit: "cover",
            zIndex: -2,
            filter: "blur(2px) brightness(0.3)",
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Space overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: isMobile ? "70vh" : "100vh",
            objectFit: "cover",
            opacity: 0.3,
            zIndex: -1,
          }}
        >
          <source src="/space.mp4" type="video/mp4" />
        </video>

        {/* Spline Viewer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,

            filter: " brightness(0.8)", // keep it above videos but below text
          }}
        >
          <spline-viewer
            url="https://prod.spline.design/U9KLvfUOsRNGj5NX/scene.splinecode"
            style={{ width: "100%", height: "107%" }}
          ></spline-viewer>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 20, // text always above spline
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: isMobile ? "70vh" : "100vh",
          }}
        >
          <h1
            style={{
              fontFamily: "'Lato', Arial, sans-serif",
              fontSize: isMobile ? "2.2rem" : "5rem",
              fontWeight: 900,
              color: "#f8f5f0",
              textAlign: "center",
              textShadow: "0 4px 32px #000a",
              mixBlendMode: "difference",
              marginBottom: isMobile ? "1rem" : "1.5rem",
            }}
          >
            Unlock the future of education
          </h1>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.3rem",
              marginBottom: isMobile ? "1.2rem" : "2.5rem",
              color: "#f8f5f0",
              textAlign: "center",
              maxWidth: isMobile ? 320 : 600,
            }}
          >
            Step into a new era of creative, and personalized learning.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
