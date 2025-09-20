import { Card } from "./Card";
import { useIsMobile } from "../utils/useIsMobile";

function CardSection() {
  const isMobile = useIsMobile();
  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #181c24 60%, #23283a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "3rem 0 3rem 0" : "4rem 0 6rem 0",
        }}
      >
        <h2
          style={{
            color: "#fff8e7",
            fontFamily: "'Lato', Arial, sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? 24 : 36,
            paddingTop: isMobile ? 10 : 20,
            marginBottom: isMobile ? 24 : 50,
            letterSpacing: isMobile ? -0.5 : -1,
            textShadow: "0 2px 16px #0007",
            textAlign: "center",
          }}
        >
          Why <span style={{ color: "#7c4dff" }}>LearnSpot</span> is Important
        </h2>
        <div
          style={{
            display: "flex",
            gap: isMobile ? 14 : 36,
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            maxWidth: isMobile ? 360 : 1200,
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
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
    </div>
  );
}

export default CardSection;
