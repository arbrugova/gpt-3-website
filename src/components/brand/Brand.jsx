import React from "react";
import "./brand.css"; // Importing the CSS file for styling
import { google, slack, dropbox, atlassian, shopify } from "./imports"; // Importing image assets

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {/* Displaying the Google logo */}
      <div>
        <img src={google} alt="google" />
      </div>
      {/* Displaying the Slack logo */}
      <div>
        <img src={slack} alt="slack" />
      </div>
      {/* Displaying the Atlassian logo */}
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      {/* Displaying the Dropbox logo */}
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      {/* Displaying the Shopify logo */}
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand; // Exporting the Brand component for use in other parts of your application
