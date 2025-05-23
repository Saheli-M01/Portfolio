import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faTools, faProjectDiagram, faFileAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import "../Style/_navigation.scss";

function hexToRgba(hex, alpha) {
  hex = hex.replace(/^#/, '');
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const cards = [
  { label: "Home", icon: faHome, color: "#e57373", id: "home" },
  { label: "About", icon: faUser, color: "#64b5f6", id: "about" },
  { label: "Skills", icon: faTools, color: "#81c784", id: "skills" },
  { label: "Projects", icon: faProjectDiagram, color: "#ffd54f", id: "projects" },
  { label: "Resume", icon: faFileAlt, color: "#ba68c8", id: "resume" },
];

function RecentlyVisited() {
  return (
    <div className="recently-visited-section d-flex flex-column">
      <div className="header">
        <FontAwesomeIcon icon={faClock} className="icon pe-2" />
        <span>Recently visited</span>
      </div>
      <div className="recently-visited-cards">
        {cards.map(card => (
          <a href={`#${card.id}`} className="recent-card" key={card.label}>
            <div
              className="recent-card-top"
              style={{ background: hexToRgba(card.color, 0.3) }}
            >
              <FontAwesomeIcon icon={card.icon} className="recent-card-icon" style={{ color: card.color }} />
            </div>
            <div className="recent-card-bottom">
              <span className="recent-card-label">{card.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RecentlyVisited;