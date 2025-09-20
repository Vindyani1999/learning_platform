import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { useIsMobile } from "../utils/useIsMobile";

function ImageRight() {
  const [imgVisible, setImgVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isMobile = useIsMobile();

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
        {/* Top wave */}
        <svg
          viewBox="0 0 1440 100"
          width="100%"
          height="100"
          style={{
            display: "block",
            position: "absolute",
            top: -70,
            left: 0,
            zIndex: 10,
          }}
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,60 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
          />
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
            padding: isMobile ? "2rem 0 2rem 0" : "3.5rem 0 3.5rem 0",
            flexWrap: "wrap",
          }}
        >
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
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
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
          <div
            style={{
              flex: isMobile ? undefined : 0.75,
              display: "flex",
              justifyContent: "center",
              marginTop: isMobile ? 18 : 0,
            }}
          >
            <img
              ref={imgRef}
              src="/edu2.png"
              alt="Start Innovation"
              style={{
                height: isMobile ? 180 : 500,
                maxWidth: "90vw",
                opacity: imgVisible ? 1 : 0,
                transform: imgVisible
                  ? "translateX(0)"
                  : isMobile
                  ? "translateY(40px)"
                  : "translateX(80px)",
                transition:
                  "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
                borderRadius: isMobile ? 18 : 32,
              }}
              draggable={false}
            />
          </div>
        </div>
        <svg
          viewBox="0 0 1440 100"
          width="100%"
          style={{
            display: "block",
            position: "absolute",
            bottom: -100,
            left: 0,
            zIndex: 10,
            rotate: "180deg",
          }}
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,60 C360,0 1080,100 1440,60 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default ImageRight;
