import React from "react";
import "../Style/_resumeSection.scss";

function ResumeSection() {
  return (
    <div id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="resume-preview">
        {/* Replace the src with your actual resume preview image or PDF embed */}
        <img src="/resume-preview.png" alt="Resume Preview" className="resume-image" />
      </div>
      <a href="/resume.pdf" download className="resume-download-btn">Download Resume</a>
    </div>
  );
}

export default ResumeSection; 