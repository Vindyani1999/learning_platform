import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { useIsMobile } from "../utils/useIsMobile";
import { useLoading } from "../LoadingContext";
import { useNavigate } from "react-router";

function ImageLeft() {
  const [imgVisible, setImgVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setImgVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
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
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          background: "transparent",
          margin: 0,
          padding: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          width="100%"
          height="50"
          style={{
            display: "block",
            position: "absolute",
            top: -50,
            left: 0,
            zIndex: 10,
          }}
          preserveAspectRatio="none"
        >
          <path fill="#fff" d="M0,0 L1440,0 L1440,100 L0,100 Z" />
        </svg>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            background: "#fff",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "2rem 0 2rem 0" : "0 0 2rem 0",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: isMobile ? undefined : 0.75,
              display: "flex",
              justifyContent: "center",
              marginBottom: isMobile ? 18 : 0,
            }}
          >
            <img
              ref={imgRef}
              src="/cta-education.png"
              alt="Start Innovation"
              style={{
                width: isMobile ? 220 : 500,
                maxWidth: "90vw",
                opacity: imgVisible ? 1 : 0,
                transform: imgVisible
                  ? "translateX(0)"
                  : isMobile
                  ? "translateY(-40px)"
                  : "translateX(-80px)",
                transition:
                  "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
                borderRadius: isMobile ? 18 : 32,
              }}
              draggable={false}
            />
          </div>

          <div
            style={{
              flex: 1,
              minWidth: isMobile ? 0 : 320,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: isMobile ? "0 1rem" : "0 2rem",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#23283a",
                fontFamily: "'Lato', Arial, sans-serif",
                fontWeight: 900,
                fontSize: isMobile ? 32 : 72,
                marginBottom: isMobile ? 14 : 24,
                letterSpacing: isMobile ? -0.5 : -1,
                textShadow: "0 2px 16px #0001",
                textAlign: "center",
              }}
            >
              Start Innovation of Education Today
            </h2>
            <Button
              buttonTitle="Get Started"
              onClick={handleStartLearning}
              style={{
                position: "static",
                marginTop: isMobile ? 12 : 20,
                display: "inline-block",
                width: "fit-content",
                textAlign: "center",
                alignSelf: "center",
              }}
              variant="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLeft;
