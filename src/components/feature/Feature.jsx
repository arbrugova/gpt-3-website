import React from "react";
import "./feature.css"; // Importing the CSS file for styling

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      {/* Feature Title */}
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1> {/* Displaying the feature title */}
      </div>
      {/* Feature Text */}
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p> {/* Displaying the feature text */}
      </div>
    </div>
  );
};

export default Feature; // Exporting the Feature component for use in other parts of your application
