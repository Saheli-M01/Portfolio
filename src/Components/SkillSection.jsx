import React from "react";
import "../Style/_skillSection.scss";

function SkillSection() {
  return (
    <div id="skills" className="skill-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {/* Add your skills here, e.g. icons, bars, or lists */}
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">React</div>
        <div className="skill-item">CSS/SCSS</div>
        <div className="skill-item">Node.js</div>
      </div>
    </div>
  );
}

export default SkillSection; 