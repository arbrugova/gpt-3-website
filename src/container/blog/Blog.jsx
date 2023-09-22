import React from "react";
import "./blog.css"; // Importing the CSS file for styling
import { Article } from "../../components"; // Importing the Article component
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"; // Importing article images

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {/* Render the first article using the Article component */}
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {/* Render additional articles using the Article component */}
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog; // Exporting the Blog component for use in other parts of your application
