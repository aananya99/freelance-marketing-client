import React from "react";
import webImg from "../assets/webDevelop.png";
import graphicsImg from "../assets/graphics.png";
import marketingImg from "../assets/marketing.png";

const TopCategories = () => {
  return (
    <div className="w-11/12 mx-auto my-10 space-y-5">
      <h2 className="text-3xl font-bold text-center">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Web Development</h2>
            <p className="text-gray-500">
              Build interactive and dynamic websites using modern frameworks
              like React, Node.js, and Express.
            </p>
          </div>
          <figure>
            <img src={webImg} alt="web-dev" />
          </figure>
        </div>
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Graphics Design</h2>
            <p className="text-gray-500">
              Create eye-catching visuals, logos, and brand identities that
              communicate ideas effectively. Master tools like Adobe Photoshop,
              Illustrator, and Figma to turn imagination into design.
            </p>
          </div>
          <figure>
            <img src={graphicsImg} alt="graphics" />
          </figure>
        </div>
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Digital Marketing</h2>
            <p className="text-gray-500">
              Boost online presence through SEO, social media campaigns, and
              Google Ads. Use smart marketing strategies to reach the right
              audience and grow any brand effectively.
            </p>
          </div>
          <figure>
            <img src={marketingImg} alt="graphics" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
