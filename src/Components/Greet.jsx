import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../Style/_greeting..scss";

function getIndianGreeting() {
  const now = new Date();
  // Get hour in IST
  const hourIST = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })).getHours();
  if (hourIST >= 5 && hourIST < 12) return "Good morning from India";
  if (hourIST >= 12 && hourIST < 17) return "Good afternoon from India";
  if (hourIST >= 17 && hourIST < 21) return "Good evening from India";
  return "Good night from India";
}

function Greeting() {
  return (
    <div className="greeting-section d-flex justify-content-center">
      <span className="greeting-icon">
        <FontAwesomeIcon icon={faUserCircle} />
      </span>
      <span className="greeting-text">
        {getIndianGreeting()}
      </span>
    </div>
  );
}

export default Greeting;