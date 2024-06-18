import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">Thư.</div>
      <div className="n-right">
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={isOpen ? "open" : ""}>
          <li>
            <a href="#intro" onClick={handleMenuItemClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenuItemClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleMenuItemClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuItemClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
