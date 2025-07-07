import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <h1>Thư</h1>
      <div className="link-contact">
        <a href="#intro">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/minhthusayhii123?tab=overview&from=2024-04-01&to=2024-04-30">
          <FontAwesomeIcon icon={faGithub} className="f-icon" />
        </a>
        <a href="https://www.linkedin.com/in/minh-th%C6%B0-7aaa29289/">
          <FontAwesomeIcon icon={faLinkedin} className="f-icon" />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} className="f-icon" />
        </a>
        <a href="https://www.facebook.com/minhthuforwork/">
          <FontAwesomeIcon icon={faFacebook} className="f-icon" />
        </a>
      </div>
      <p className="footer-email">minhthuforwork@gmail.com</p>
    </footer>
  );
}

export default Footer;
