import React from "react";

// assets
import heroLogoSrc from "../../assets/White.png";
import bgImgSrc from "../../assets/MIsd.png";

function HeroSection() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="img-container">
        <img src={bgImgSrc} alt="bgImg"  />
        
      </div>
      <div className="logo">
        <img className="Hlogo" src={heroLogoSrc} alt="Abhyudaya Logo" />
      </div>
    </div>
  );
}

export default HeroSection;
