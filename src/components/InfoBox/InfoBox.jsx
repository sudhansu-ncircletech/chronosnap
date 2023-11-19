import React from "react";
import IntroCard from "../TimelineSection/IntroCard";
import SecondCard from "../TimelineSection/SecondCard";
import ThirdCard from "../TimelineSection/ThirdCard";
import FirstCard from "../TimelineSection/FirstCard";
import Foundation from "../TimelineSection/Foundation";
import FourthCard from "../TimelineSection/FourthCard";
import "./InfoBox.css";

const InfoBox = ({ currentStage }) => {
  // console.log("InfoBox received currentStage:", currentStage);

  return (
    <div className={`absolute top-15 left-1/2 transform -translate-x-1/2 animate-floatAnimation z-10 sm:top-70 sm:width-3/4 ${currentStage > 0 ? "visible" : ""}`}>
      {currentStage === 1 && <IntroCard />}
      {currentStage === 2 && <FourthCard />}
      {currentStage === 3 && <ThirdCard />}
      {currentStage === 4 && <SecondCard />}
      {currentStage === 5 && <FirstCard />}
      {currentStage === 6 && <Foundation />}
    </div>
  );
};

export default InfoBox;
