import HTML from "./../../assets/images/html.png";
import CSS from "./../../assets/images/css.png";
import SASS from "./../../assets/images/scss.png";
import JS from "./../../assets/images/javascript.png";
import React from "./../../assets/images/react.png";
import Boot from "./../../assets/images/bootstrap.png";
import JAVA from "./../../assets/images/java.png";

import "./Skill.css";
function Skill() {
  return (
    <div className="skill">
      <h2>My skills</h2>
      <div className="skill-content">
        <div className="skill-text">Tech Stack </div>
        <div className="skill-image">
          <img src={HTML} alt="" />
          <img src={CSS} alt="" />
          <img src={SASS} alt="" />
          <img src={JS} alt="" />
          <img src={JAVA} alt="" />
          <img src={React} alt="" />
          <img src={Boot} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
