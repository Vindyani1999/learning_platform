import { Card } from "./Card";
import { Navbar } from "./Navbar";
import ImageLeft from "./ImageLeft";
import ImageRight from "./ImageRight";

export function LandingPage() {
  return (
    <div style={{ width: "100vw", overflowX: "hidden", margin: 0, padding: 0 }}>
      <Navbar />
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          minWidth: "100vw",
          maxWidth: "100vw",
          height: "100vh",
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
            height: "100vh",
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
            height: "100vh",
          }}
        >
          <h1
            style={{
              fontFamily: "'Lato', Arial, sans-serif",
              fontSize: "5rem",
              fontWeight: 900,
              letterSpacing: "-2px",
              marginBottom: "0.1rem",
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
              fontSize: "1.3rem",
              marginBottom: "2.5rem",
              color: "#f8f5f0", // creamy color
              textAlign: "center",
              maxWidth: 600,
              fontWeight: 400,
            }}
          >
            Step into a new era of creative, and personalized learning.
          </p>
        </div>
      </section>
      {/* Wavy white section with video */}
      <div
        style={{
          position: "relative",
          width: "100%",
          background: "transparent",
        }}
      >
        {/* Top wave - more wavy */}
        <svg
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
        </svg>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            minHeight: "400px",
            background: "#fff",
            padding: "4rem 0",
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
              width: "80vw",
              // height: "50vh",
              objectFit: "cover",
              zIndex: 2,
              margin: 0,
              padding: 0,
              border: "none",
            }}
          >
            <source src="/learn.webm" type="video/webm" />
          </video>
        </div>
        {/* Bottom wave - more wavy */}
        <svg
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
        </svg>
      </div>
      {/* Why LearnSpot is Important - Creative Cards */}
      <div
        style={{
          width: "100%",
          // minHeight: 480,
          background: "linear-gradient(180deg, #181c24 60%, #23283a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 0 6rem 0",
        }}
      >
        <h2
          style={{
            color: "#fff8e7",
            fontFamily: "'Lato', Arial, sans-serif",
            fontWeight: 900,
            fontSize: 36,
            paddingTop: 20,
            marginBottom: 50,
            letterSpacing: -1,
            textShadow: "0 2px 16px #0007",
          }}
        >
          Why <span style={{ color: "#7c4dff" }}>LearnSpot</span> is Important
        </h2>
        <div
          style={{
            display: "flex",
            gap: 36,
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {/* Card 1 */}
          <Card
            gifSrc="/card1.gif"
            gifPreviewSrc="/card1.png"
            title="Inspires Creative Learning"
            description="LearnSpot uses interactive content and visuals to spark curiosity and make learning fun and memorable."
          />

          <Card
            gifSrc="/card2.gif"
            gifPreviewSrc="/card2.png"
            title="Gamified Experience"
            description="Earn badges, level up, and stay motivated while learning engaging and encourage friendly competition."
          />

          <Card
            gifSrc="/card3.gif"
            gifPreviewSrc="/card3.png"
            title="Track Your Progress"
            description="Personalized paths and progress tracking help learners advance faster and stay motivated on their journey."
          />
        </div>
      </div>
      <ImageLeft />

      <div
        style={{
          width: "100%",
          // minHeight: 480,
          // background: "linear-gradient(180deg, #181c24 60%, #23283a 100%)",
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
            fontSize: 36,
            paddingTop: 120,
            letterSpacing: -1,
            textShadow: "0 2px 16px #0007",
            // marginBottom: 20,
          }}
        >
          Benefits for your <span style={{ color: "#7c4dff" }}>Technical </span>{" "}
          Experience
        </h2>
        <video
          src="/Learn.mp4"
          style={{ maxHeight: 400, paddingBottom: 60 }}
          autoPlay
          playsInline
          muted
          loop={false}
        />
      </div>

      <ImageRight />
    </div>
  );
}
