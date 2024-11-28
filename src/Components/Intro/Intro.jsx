import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import CV from "./CV_InternTester_PhamTranMinhThu.pdf";
import hi from "./../../assets/images/hi.png";

import "./Intro.css";
function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="intro-content">
        {/* left-name */}
        <div className="i-left">
          <h1>Tester Intern</h1>
          <img src={hi} alt="" />
          <p>Hi! I'm Thư. I am a Tester. 📍</p>
          <div className="button-contact">
            <button className="hire-me">Hire me</button>
            <a href={CV} download>
              <button className="cv-me">Download CV</button>
            </a>
          </div>
          <span>
            <a href="https://github.com/minhthusayhii123?tab=overview&from=2024-04-01&to=2024-04-30">
              <FontAwesomeIcon icon={faGithub} className="icon-intro" />
            </a>
            <a href="https://www.linkedin.com/in/minh-th%C6%B0-7aaa29289/">
              <FontAwesomeIcon icon={faLinkedin} className="icon-intro" />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} className="icon-intro" />
            </a>
            <a href="https://www.facebook.com/minhthuu1203/">
              <FontAwesomeIcon icon={faFacebook} className="icon-intro" />
            </a>
          </span>
        </div>
        <div className="i-right"></div>
      </div>
    </div>
  );
}

export default Intro;
