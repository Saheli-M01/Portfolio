import React from "react";
import "../Style/_projectSection.scss";

function ProjectSection() {
  return (
    <div id="project" className="project-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {/* Add your projects here, e.g. cards or grid */}
        <div className="project-item">Project 1</div>
        <div className="project-item">Project 2</div>
      </div>
    </div>
  );
}

export default ProjectSection; 