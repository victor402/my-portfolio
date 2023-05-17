import "./MyContStyles.css";
import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const MyCont = () => {
  return (
    <div className="mycontact">
      <div className="info">
        <h1> My Contact info:</h1>
      </div>
      <div className="phone">
        <h4>
          <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
          (306)914-0996
        </h4>
      </div>
      <div className="email">
        <h4>
          <FaMailBulk
            size={20}
            style={{ color: "white", marginRight: "2rem", marginLeft: "5rem" }}
          />
          anaghavictor@gmail.com
        </h4>
      </div>
      <div className="linked">
        <h4>
          <FaLinkedin
            size={20}
            style={{
              color: "white",
              marginRight: "2rem",
              marginLeft: "5rem",
            }}
          />
          Linkedin/Victor Anagha
        </h4>
      </div>
      <div className="github">
        <h4>
          <FaGithub
            size={20}
            style={{
              color: "white",
              marginRight: "0rem",
              // marginLeft: "5rem",
            }}
          />
          {/* Github/victor402 */}
        </h4>
        <h4 className="git">Github/victor402</h4>
      </div>
    </div>
  );
};

export default MyCont;
