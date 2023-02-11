import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import DrawerComp from "../DrawerComp/DrawerComp";
import "./Header.css";
const Header = () => {
  const menus = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Services", link: "#" },
    { title: "Projects", link: "#" },
    { title: "Contact us", link: "#" },
  ];
  return (
    <div className="header-nav">
      <div className="container">
        <div className="navbar text-white  mx-auto">
          <div className="flex-1">
            <Link to="/" relative="path" className="text-xl logo">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="flex-none ">
            <ul className="menu menu-horizontal px-1 hidden lg:flex">
              <li>
                <Link to="/home" relative="path">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" relative="path">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" relative="path">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" relative="path">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blogs" relative="path">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" relative="path">
                  Contact Us
                </Link>
              </li>
            </ul>
            <DrawerComp menus={menus}></DrawerComp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
