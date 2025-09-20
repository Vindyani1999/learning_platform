
import  { useEffect, useRef, useState } from 'react';
import { Button } from './Button';

function Temp() {
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
                    // minHeight: 420,
                    background: "#fff",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "3.5rem 0 3.5rem 0",
                    // gap: 18,
                    flexWrap: "wrap",
                  }}
                >

                  {/* Left: Image with animation */}
                  <div style={{ flex: 0.75, display: "flex", justifyContent: "center" }}>
                    <img
                      ref={imgRef}
                      src="/cta-education.png"
                      alt="Start Innovation"
                      style={{
                        width: 500,
                        maxWidth: "90vw",
                        opacity: imgVisible ? 1 : 0,
                        transform: imgVisible ? "translateX(0)" : "translateX(-80px)",
                        transition: "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
                      }}
                      draggable={false}
                    />
                  </div>
        
                  {/* Right: Text and Button */}
                  <div
                    style={{
                      flex: 1,
                      minWidth: 320,
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: "flex-start",
                      justifyContent: "center",
                      padding: "0 2rem",
                      textAlign: "center",
                    }}
                  >
                    {/* <img src="/logo-black.png" alt="LearnSpot Logo" width={200} /> */}
                    <h2
                      style={{
                        color: "#23283a",
                        fontFamily: "'Lato', Arial, sans-serif",
                        fontWeight: 900,
                        fontSize: 72,
                        marginBottom: 24,
                        letterSpacing: -1,
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
                        marginTop: 20,
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

export default Temp;