import React from "react";
import "../Style/_aboutSection.scss";


const aboutCards = [
  {
    title: "I prioritize client collaboration, fostering open communication",
    bgClass: "about-card-gradient about-card-laptop",
  },
  {
    title: "Tech enthusiast with a passion for development.",
    bgClass: "about-card-grid",
  },
  {
    title: "Currently leveling up in structured web development.",
    subtitle: "The Inside Scoop",
    bgClass: "about-card-code",
  },
  {
    title: "Do you want to start a project together?",
    action: true,
    bgClass: "about-card-gradient about-card-cta",
  },
];

function AboutSection() {
  return (
    <div id="about" className="about-section">
      <div className="about-cards-grid">
        {aboutCards.map((card, idx) => (
          <div className={`about-card ${card.bgClass}`} key={idx}>
            {card.subtitle && <div className="about-card-subtitle">{card.subtitle}</div>}
            <div className="about-card-title">{card.title}</div>
            {card.action && (
              <button
                className="about-card-btn"
                onClick={() => navigator.clipboard.writeText("your@email.com")}
              >
                <span role="img" aria-label="copy">📋</span> Copy my email
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSection; 