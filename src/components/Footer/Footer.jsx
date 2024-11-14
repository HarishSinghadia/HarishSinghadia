import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptatum eum similique sint maxime ex asperiores quas assumenda
            hic soluta voluptatibus mollitia consequatur culpa, aliquid est
            molestiae inventore porro tenetur.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy  Policy</li>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>Get in Touch</h2>
        <ul>
            <li>+51-356-544-5685</li>
            <li>contact@Pawna da dhaba.com</li>
        </ul>
      </div>
      <p className="footer-copyright">Copyright 2024 &#169; Pawna da dhaba.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
