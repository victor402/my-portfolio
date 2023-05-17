import "./WorkFlowStyles.css";
import WorkFlow from "./WorkFlow";
import WorkFlowData from "./WorkFlowData";
import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="Project-heading">Projects</h1>
      <div className="project-container">
        {WorkFlowData.map((val, ind) => {
          return (
            <WorkFlow
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              github={val.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
