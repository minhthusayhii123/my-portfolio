import "./Navbar.css";
function Navbar() {
  
  return (
    <div className="n-wrapper">
      <div className="n-left">Thư.</div>
      <div className="n-right">
        <ul>
          <li>
            <a href="#intro">
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
