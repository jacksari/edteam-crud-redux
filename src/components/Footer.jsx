import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/" className="footer-link scroll-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-link scroll-link">about</Link>
        </li>
        <li>
          <Link to="#services" className="footer-link scroll-link">services</Link>
        </li>
        <li>
          <Link to="/" className="footer-link scroll-link">featured</Link>
        </li>
        <li>
          <Link to="/" className="footer-link scroll-link">gallery</Link>
        </li>
      </ul>
      <ul className="footer-icons">
        <li>
          <Link to="https://twitter.com" target="_blank" className="footer-icon">
            <i className="fab fa-twitter" />
          </Link>
        </li>
        <li>
          <Link to="https://facebook.com" target="_blank" className="footer-icon">
            <i className="fab fa-facebook" />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com" target="_blank" className="footer-icon">
            <i className="fab fa-squarespace" />
          </Link>
        </li>
      </ul>
      <p className="copyright">
        &copy;
        <span id="date" />
        <span
          className="company"
        >
          crud -redux
        </span>
        . all right reserved DEVELOPER BY
        <Link className="jack" to="https://jacksari.com/" target="_blank"> JACKSARI</Link>
      </p>
    </footer>
  );
}

export default Footer;
