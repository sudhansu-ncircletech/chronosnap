import React from "react";
import { Link } from "react-router-dom";
import "./FaveProjectsCard.css";

const FaveProjectsCard = ({ className = "" }) => {
  return (
    <div className={`fave-projects-card ${className}`}>
      <p className="fave-projects-text">
        2023
      </p>
      <p className="fave-projects-btn">
        Expanding it's global footprints.
      </p>
    </div>
  );
};

export default FaveProjectsCard;
