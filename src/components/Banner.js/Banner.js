import React from "react";
import Lottie from "react-lottie-player";
import Typewriter from "typewriter-effect";
import animationData from "../../images/web development.json";
import "./Banner.css";

const Banner = () => {
  const defaultOptions = {
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="hero-banner align-middle">
      <div className="container h-full">
        <div className="md:grid   xl:grid-cols-2  w-full h-full items-center">
          <div className="banner-description mt-16 md:mt-0">
            <p className="text-xl">WELCOME TO MY WORLD</p>
            <h1>
              Hello,I'm <br /> Md.Shaiful Ahasan
            </h1>
            <h1 className="type-title">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Frontend developer",
                    "WodrPress Expert",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <a
              href="https://drive.google.com/file/d/1I8LA9YnhdcsXX4bLdNTrkTzKtalNkcE6/view"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline bt-lg porfolio-btn"
            >
              Get Resume
            </a>
          </div>
          <div className="mx-auto max-w-xl">
            <Lottie loop animationData={animationData} play></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
