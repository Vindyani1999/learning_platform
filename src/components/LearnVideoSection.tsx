import { useIsMobile } from "../utils/useIsMobile";

function LearnVideoSection() {
  const isMobile = useIsMobile();
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          background: "transparent",
        }}
      >
        {/* <svg
          viewBox="0 0 1440 120"
          width="100%"
          height="120"
          style={{
            display: "block",
            position: "absolute",
            top: -90,
            left: 0,
            zIndex: 10,
          }}
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z"
          />
        </svg> */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            minHeight: isMobile ? "180px" : "400px",
            background: "#fff",
            padding: isMobile ? "2rem 0" : "4rem 0",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <video
            autoPlay
            muted
            playsInline
            style={{
              width: isMobile ? "98vw" : "70vw",

              objectFit: "cover",
              zIndex: 2,
              margin: 0,
              padding: 0,
              border: "none",
              borderRadius: isMobile ? 12 : 24,
              //   boxShadow: isMobile ? "0 2px 12px #0002" : "0 4px 32px #0002",
            }}
            preload="none"
          >
            <source src="/LearnBy.mp4" type="video/webm" />
          </video>
        </div>
        {/* <svg
          viewBox="0 0 1440 120"
          width="100%"
          height="120"
          style={{
            display: "block",
            position: "absolute",
            bottom: -90,
            left: 0,
            zIndex: 10,
            rotate: "180deg",
          }}
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg> */}
      </div>
    </div>
  );
}

export default LearnVideoSection;
