import React from "react";
import "./article.css"; // Importing the CSS file for styling

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      {/* Article image */}
      <div className="gpt3__blog-container_article-img">
        <img src={imgUrl} alt="blog" /> {/* Displaying the image */}
      </div>
      {/* Article content */}
      <div className="gpt3__blog-container_article-content">
        <div>
          {/* Displaying the article date */}
          <p>{date}</p>
          {/* Displaying the article title */}
          <h3>{title}</h3>
        </div>
        {/* A link or button for "Read Full Article" */}
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article; // Exporting the Article component for use in other parts of your application
