import { useIsMobile } from "../utils/useIsMobile";

function FallingChips() {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        width: "100%",
        background: "#191c22",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          color: "#fff8e7",
          fontFamily: "'Lato', Arial, sans-serif",
          fontWeight: 900,
          fontSize: isMobile ? 22 : 36,
          paddingTop: isMobile ? 30 : 120,
          letterSpacing: isMobile ? -0.5 : -1,
          textShadow: "0 2px 16px #0007",
          paddingLeft: isMobile ? 20 : 0,
          paddingRight: isMobile ? 20 : 0,
          textAlign: "center",
          // marginBottom: 20,
        }}
      >
        Benefits for your <span style={{ color: "#7c4dff" }}>Technical </span>{" "}
        Experience
      </h2>
      <video
        src="/Learn.mp4"
        style={{
          maxHeight: isMobile ? 180 : 400,
          width: isMobile ? "95vw" : undefined,
          paddingBottom: isMobile ? 30 : 60,
        }}
        autoPlay
        playsInline
        muted
        loop={false}
      />
    </div>
  );
}

export default FallingChips;
