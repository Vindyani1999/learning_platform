import { useIsMobile } from "../utils/useIsMobile";

function HeroSection() {
  const isMobile = useIsMobile();
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
            zIndex: -1,
            filter: "blur(2px) brightness(0.3)",
            margin: 0,
            padding: 0,
            border: "none",
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Centered hero text */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: isMobile ? "70vh" : "100vh",
            padding: isMobile ? "0 1rem" : undefined,
          }}
        >
          <h1
            style={{
              fontFamily: "'Lato', Arial, sans-serif",
              fontSize: isMobile ? "2.2rem" : "5rem",
              fontWeight: 900,
              letterSpacing: isMobile ? "-1px" : "-2px",
              marginBottom: isMobile ? "0.5rem" : "0.1rem",
              textShadow: "0 4px 32px #000a, 0 1px 0 #fff2",
              color: "#f8f5f0",
              textAlign: "center",
              display: "block",
            }}
          >
            Unlock the future of education
          </h1>
          <p
            style={{
              fontFamily: "'Open Sans', Arial, sans-serif",
              fontSize: isMobile ? "1rem" : "1.3rem",
              marginBottom: isMobile ? "1.2rem" : "2.5rem",
              color: "#f8f5f0", // creamy color
              textAlign: "center",
              maxWidth: isMobile ? 320 : 600,
              fontWeight: 400,
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
