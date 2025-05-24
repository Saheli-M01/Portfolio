import React, { useState, useEffect } from "react";
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
  faEllipsisVertical,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/SM.png";
import "../Style/Partials/_sidebar.scss";

const MIN_WIDTH = 70;
const MAX_WIDTH = 250;

const mainLinks = [
  { label: "Home", icon: faHome, color: "#e57373" }, // red
  { label: "About", icon: faUser, color: "#ffd54f" }, // yellow
  { label: "Skill", icon: faTools, color: "#81c784" }, // green
  { label: "Project", icon: faProjectDiagram, color: "#64b5f6" }, // blue
  { label: "Resume", icon: faFileAlt, color: "#ba68c8" }, // purple
];

const connectLinks = [
  { label: "GitHub", icon: faGithub, url: "https://github.com/Saheli-M01" },
  {
    label: "Email",
    icon: faEnvelopeSolid,
    url: "mailto:saheli.mondal.prof@gmail.com",
  }, // Using solid envelope
  {
    label: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/saheli-mondal-b9387729b/",
  },
  {
    label: "Instagram",
    icon: faInstagram,
    mailto: "https://www.instagram.com/quantspire_/",
  },
  { label: "X (Twitter)", icon: faXTwitter, url: "https://x.com/Mond_Saheli" },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
  };

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDarkTheme(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 576;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setCollapsed(true);
      }
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile); //In the DOM (Document Object Model) API,
    // resize is a standard event name that the browser fires on the window object whenever the
    //  viewport size changes.

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCollapse = () => {
    if (!isMobile) {
      setCollapsed((prev) => !prev);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && mobileMenuOpen && !event.target.closest(".sidebar")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile, mobileMenuOpen]);

  return (
    <div
      className={`sidebar  ${collapsed ? " collapsed" : ""}${
        isMobile ? " mobile" : ""
      }${mobileMenuOpen ? " mobile-open" : ""}`}
      style={{ width: !isMobile && !collapsed ? MAX_WIDTH : MIN_WIDTH }}
    >
      <div className={`sidebar-header d-flex ${isMobile ? "" : "flex-column"}`}>
        {isMobile ? (
          // Mobile Header Structure
          <>
            {/* Brand and User Info */}
            <div className="mobile-brand-user-info">
              <span className="brand">S</span>
              <div className="mobile-user-details">
                <span className="user-name">Saheli Mondal's Workspace</span>
                {/* Add User Email if needed in mobile header */}
                <span className="user-email">saheli.mondal.prof@gmail.com</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mobile-header-buttons">
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
              </button>
              <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
          </>
        ) : (
          // Desktop Header Structure (keep existing)
          <>
            <div className="header-upper d-flex">
              <div className="image-container">
                <img src={logo} alt="logo" width="20px" height="20px" />
              </div>

              {/* Desktop chevron button for collapsing */}
              <button className="chevron-btn" onClick={toggleCollapse}>
                <FontAwesomeIcon
                  icon={collapsed ? faAnglesRight : faAnglesLeft}
                />
              </button>
            </div>

            <div className="header-lower d-flex justify-content-between align-items-center">
              <div className="brand d-flex justify-content-center align-items-center">
                <span>S</span>
              </div>
              <span className="user-name">Saheli Mondal's Workspace</span>
            </div>
          </>
        )}
      </div>

      <div className="sidebar-content">
        {isMobile ? (
          // Mobile Content Structure
          <>
            {/* Private Section */}
            <div className="mobile-private-section">
              <span className="links-heading">Private</span>
              <nav className="d-flex flex-column">
                {mainLinks.map((link) => (
                  <a
                    href={`#${link.label.toLowerCase()}`}
                    className="sidebar-link text-decoration-none"
                    key={link.label}
                    onClick={isMobile ? toggleMobileMenu : undefined}
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
            </div>

            {/* Connect Section (already a div) */}
            <div className="connect-section">
              <span className="links-heading">Connect</span>
              <nav className="connect-links d-flex flex-column">
                {connectLinks.map((link) => (
                  <a
                    href={link.url}
                    className="sidebar-link text-decoration-none"
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={isMobile ? toggleMobileMenu : undefined}
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

            {/* Theme Section is now only in header in mobile view */}

          </>
        ) : (
          // Desktop Content Structure (keep existing)
          <>
            <span className="links-heading">Private</span>
            <nav className="d-flex flex-column">
              {mainLinks.map((link) => (
                <a
                  href={`#${link.label.toLowerCase()}`}
                  className="sidebar-link text-decoration-none"
                  key={link.label}
                  onClick={isMobile ? toggleMobileMenu : undefined}
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

            <div className="connect-section">
              <span className="links-heading">Connect</span>
              <nav className="connect-links d-flex flex-column">
                {connectLinks.map((link) => (
                  <a
                    href={link.url}
                    className="sidebar-link text-decoration-none"
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={isMobile ? toggleMobileMenu : undefined}
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

            <div className="theme-section">
              <span className="links-heading">Theme</span>
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
                <span className="sidebar-link-label">Toggle Theme</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
