import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer section__padding ">
      <div className="container ">
        <div className="contents ">
          <ul>
            <li>
              <a href="https://www.facebook.com/ehasan711">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dev_ehasan/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/md-shaiful-ahasan/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <p className="text-white mx-auto">
          Copyright © 2022 Md.Shaiful Ahasan. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
