import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faProjectDiagram,
  faTools,
  faUser,
  faFileAlt,
  faAnglesLeft,
  faAnglesRight,
  faEnvelope as faEnvelopeSolid,
} from "@fortawesome/free-solid-svg-icons"; // Import solid icons
import logo from "../assets/SM.png";
import "../Style/_sidebar.scss";

const MIN_WIDTH = 60;
const MAX_WIDTH = 250;

const mainLinks = [
  { label: "Home", icon: faHome, color: "#e57373" }, // red
  { label: "Project", icon: faProjectDiagram, color: "#64b5f6" }, // blue
  { label: "Skill", icon: faTools, color: "#81c784" }, // green
  { label: "About", icon: faUser, color: "#ffd54f" }, // yellow
  { label: "Resume", icon: faFileAlt, color: "#ba68c8" }, // purple
];

const connectLinks = [
  { label: "GitHub", icon: faGithub, url: "#" },
  { label: "Email", icon: faEnvelopeSolid, url: "#" }, // Using solid envelope
  { label: "LinkedIn", icon: faLinkedin, url: "#" },
  { label: "Instagram", icon: faInstagram, url: "#" },
  { label: "X (Twitter)", icon: faXTwitter, url: "#" },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [sharedSectionVisible] = useState(true); // State to control visibility

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`sidebar${collapsed ? " collapsed" : ""}`}
      style={{ width: collapsed ? MIN_WIDTH : MAX_WIDTH }}
    >
      <div className="sidebar-header m-2">
        <div className="image-container">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>

        {!collapsed && (
          <>
            <span className="sidebar-title">Saheli Mondal</span>
          </>
        )}
        <button className="chevron-btn" onClick={toggleCollapse}>
          <FontAwesomeIcon icon={collapsed ? faAnglesRight : faAnglesLeft} />
        </button>
        {!collapsed}
      </div>
      <div className="sidebar-content">
        <span className="links-heading">Private</span>
        <nav>
          {mainLinks.map((link) => (
            <a
              href={`#${link.label.toLowerCase()}`}
              className="sidebar-link"
              key={link.label}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="sidebar-link-icon"
                style={{ color: link.color }}
              />
              <span className="sidebar-link-label">{link.label}</span>
            </a>
          ))}
        </nav>

        {!collapsed && sharedSectionVisible && (
          <div className="connect-section">
            <span className="links-heading">Connect</span>
            <nav className="connect-links">
              {connectLinks.map((link) => (
                <a
                  href={link.url}
                  className="sidebar-link"
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="sidebar-link-icon"
                  />
                  <span className="sidebar-link-label">{link.label}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
