import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">© 2025 DFMT</h3>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/david-fernando-mita-tejada-36a868356"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-icon" /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/fer_tejada15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer-icon" /> Instagram
          </a>
          <a
            href="https://github.com/DavidMIta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" /> GitHub
          </a>
          <a
            href="https://wa.me/59164943848"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="footer-icon" /> Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
