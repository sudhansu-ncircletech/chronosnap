import React from "react";

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
