import ImageDev from "./../../assets/images/dev.png";
import "./About.css";
function About() {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="about-img">
          <img src={ImageDev} alt="" />
        </div>
        <div className="about-text">
          <h2>About me</h2>
          <ul>
            <li>
              I am a sociable person and always value the opinions of others.
              Throughout my studies, I have consistently worked hard to improve
              my programming skills.
            </li>
            <li>
              I am eager to learn, highly responsible, and ready to adapt to new
              environments...
              <span className="read-more">Read more</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
