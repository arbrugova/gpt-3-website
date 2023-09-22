import React from "react";
import "./cta.css"; // Importing the CSS file for styling

const CTA = () => {
  return (
    <div className="gpt3__cta">
      {/* Call to Action Content */}
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p> {/* Call to action text */}
        {/* Headline */}
        <h3>Register today & start exploring the endless possibilities.</h3>
      </div>
      {/* Call to Action Button */}
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button> {/* Button text */}
      </div>
    </div>
  );
};

export default CTA; // Exporting the CTA component for use in other parts of your application
