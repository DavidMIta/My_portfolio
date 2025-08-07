import React, { useState } from "react";
import "../styles/Header.css";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="title">
        <h1 className="header-title">My Portfolio</h1>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
        <div className="header-socials">
          <a
            href="https://www.linkedin.com/in/david-fernando-mita-tejada-36a868356"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="header-icon" />
          </a>
          <a
            href="https://www.instagram.com/fer_tejada15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="header-icon" />
          </a>
          <a
            href="https://github.com/DavidMIta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="header-icon" />
          </a>
          <a
            href="https://wa.me/59164943848"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="header-icon" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
