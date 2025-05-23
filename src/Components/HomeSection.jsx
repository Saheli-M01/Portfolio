import React from "react";
import "../Style/_homeSection.scss"; // We will create this file next
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import saheli from "../assets/saheli.jpg";
import {
  faHome,
  
} from "@fortawesome/free-solid-svg-icons";
function HomeSection() {
  return (
    <div className="home-section d-flex" id="home">
      <div className="header">
      <FontAwesomeIcon icon={faHome} className="icon pe-2"/>
        <span>Home</span>
      </div>
      
      <div className="home-content"> <div className="left">
        <div className="home-section-icon">
          <img
            src={saheli}
            alt="SaheliM"
            className="rounded-circle"
           
          />
        </div>
      </div>

      <div className="home-section-content right">
        <h3>Saheli Mondal</h3>
        <p>
          Aspiring Software Developer. I enjoy crafting digital solutions and
          contributing to impactful projects.
        </p>
        {/* Potentially add a link or button here later */}
      </div></div>
     
    </div>
  );
}

export default HomeSection;
