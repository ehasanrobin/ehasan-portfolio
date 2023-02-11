import React from "react";
import bootsrap from "../../images/bootstrap.png";
import css from "../../images/css3.png";
import express from "../../images/express.png";
import firebase from "../../images/firebase.png";
import html from "../../images/html51.png";
import javascript from "../../images/javascript-logo.png";
import materialui from "../../images/material ui.png";
import mongodb from "../../images/mongodb.png";
import mysql from "../../images/mysql.png";
import node from "../../images/node.png";
import php from "../../images/php (1).png";
import react from "../../images/react.png";
import tailwind from "../../images/tailwind css.png";
import wordpress from "../../images/wordpress.jpg";
import "./MySkills.css";
const MySkills = () => {
  return (
    <div className="skills-section">
      <div className="text-center skills-title">
        <h2>
          my sk<span>i</span>lls
        </h2>
        <p>skills is some works whom you do the best</p>
      </div>
      <div className="skills__container">
        <div className="container mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="skill-box flex items-center gap-3 ">
              <div className="skill-logo">
                <img src={react} alt="" />
              </div>
              <h3>React js</h3>
            </div>
            <div className="skill-box flex items-center gap-3 ">
              <div className="skill-logo">
                <img src={html} alt="" />
              </div>
              <h3>Html</h3>
            </div>
            <div className="skill-box flex items-center gap-3 ">
              <div className="skill-logo">
                <img src={css} alt="" />
              </div>
              <h3>Css</h3>
            </div>
            <div className="skill-box flex items-center gap-3">
              <div className="skill-logo">
                <img src={javascript} alt="" />
              </div>
              <h3>Javascript</h3>
            </div>
            <div className="skill-box flex items-center gap-3">
              <div className="skill-logo">
                <img src={firebase} alt="" />
              </div>
              <h3>Firebase</h3>
            </div>
            <div className="skill-box flex items-center gap-3">
              <div className="skill-logo">
                <img src={tailwind} alt="" />
              </div>
              <h3>Tailwind css</h3>
            </div>
            <div className="skill-box flex items-center gap-3 ">
              <div className="skill-logo">
                <img src={bootsrap} alt="" />
              </div>
              <h3>Bootsrap</h3>
            </div>
            <div className="skill-box flex items-center gap-3">
              <div className="skill-logo">
                <img src={node} alt="" />
              </div>
              <h3>Node Js</h3>
            </div>
            <div className="skill-box flex items-center gap-3">
              <div className="skill-logo">
                <img src={mongodb} alt="" />
              </div>
              <h3>Mongo Db</h3>
            </div>
            <div className="skill-box flex items-center gap-3 ">
              <div className="skill-logo">
                <img src={express} alt="" />
              </div>
              <h3>Express Js</h3>
            </div>
            <div className="skill-box flex items-center gap-3 ">
              <div className="skill-logo">
                <img src={materialui} alt="" />
              </div>
              <h3>Material Ui</h3>
            </div>
            <div className="skill-box flex items-center gap-3 ">
              <div className="skill-logo">
                <img src={php} alt="" />
              </div>
              <h3>PHP</h3>
            </div>
            <div className="skill-box flex items-center gap-3 ">
              <div className="skill-logo">
                <img src={mysql} alt="" />
              </div>
              <h3>MYSQL</h3>
            </div>
            <div className="skill-box flex items-center gap-3  ">
              <div className="skill-logo">
                <img src={wordpress} alt="" />
              </div>
              <h3>WordPress</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
