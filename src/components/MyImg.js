import "./MyImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const MyImg = () => {
  return (
    <div class="hero">
      <div className="content">
        <h1>Hi, I'm Victor </h1>
        <p>
          I'm a software developer with professional background in customer
          service. As a software developer i leverage my decision making, time
          management, communication, problem solving skills that i have
          developed through this years in building and making web applications.
          I like to create and always looking for new opportunities to expand my
          knowledge and solve problems.
        </p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className=" btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyImg;
