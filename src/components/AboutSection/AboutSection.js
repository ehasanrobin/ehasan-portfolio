import { Tab, Tabs } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import aboutImg from "../../images/pexels-cottonbro-studio-4629623.jpg";

import profile from "../../images/profile2.png";
import "./AboutSection.css";
const AboutSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className="about-section ">
      <div className="container py-16">
        <div className="lg:grid grid-cols-2 items-center">
          <div className="mx-auto flex item-center justify-center">
            <div className="dp-image mt-10 text-center mt-16 md:mt-0 mb-16">
              <img src={profile} alt="" />
            </div>
          </div>
          <div>
            <h2>
              AB<span>O</span>UT ME
            </h2>
            <p className="text-white text-lg mt-3">
              Hi, I am Md.Shaiful Ahasan from Bangladesh. I have always been
              passionate about web development. I am constantly seeking out new
              technologies and stay up-to-date on trends in the industry. I have
              extensive knowledge of HTML, CSS, JavaScript, React, Node, and
              MongoDB. I look forward to sharing more about my skills and
              experiences. Feel free to contact me at
            </p>
            <Tabs
              className="text-white mt-6"
              value={value}
              onChange={handleChange}
              centered
            >
              <Tab className="tab-btn" label="Main Skill" />
              <Tab className="tab-btn" label="Experience" />
              <Tab className="tab-btn" label="Education" />
            </Tabs>
            <div
              className={`main__skill tab-content-box   ${
                value !== 0 && "hidden"
              }`}
            >
              <ul className="mt-6 text-xl">
                <li>MERN Stack Developer</li>
                <li>Wordpress Expert</li>
                <li>PHP Expert</li>
              </ul>
            </div>
            <div
              className={`experience tab-content-box   ${
                value !== 1 && "hidden"
              }`}
            >
              <ul className="mt-6 text-xl">
                <li className="capitalize">
                  <b>
                    I do Freelance work in different market places and
                    succesfully completed 50 + with 100% satisfaction
                  </b>
                </li>
              </ul>
            </div>
            <div
              className={`education  tab-content-box ${
                value !== 2 && "hidden"
              }`}
            >
              <ul className="mt-6 text-xl font-bold">
                <li className="capitalize ">
                  school: hazi mohammad mohsin govt high school
                </li>
                <li className="capitalize mt-3">
                  college: Chittagong govt model school and college
                </li>
                <li className="capitalize mt-3">
                  university: national university of Bangladesh
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
