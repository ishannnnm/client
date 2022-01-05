import React from "react";
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";

import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
            <a href="www.youtube.com">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/IshanMisra5">
              <i className="fa fa-twitter"></i>
            </a>
              </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello I am <span className="highlighted-text">Ishan Misra</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                  {" "}
                  <Typical
                  loop ={Infinity}
                  steps={[
                      "Front-end Developer ⭐️",
                      10000,
                      "Full stack Developer 🌉",
                      2000,
                      "MERN Developer 💿",
                      3000,
                      "ReactJs NextJS",
                      4000,
                      "Full stack Developer",
                      5000
                  ]}>
                  </Typical>

              </h1>
              <span className="profile-role-tagline">
                  Building web application with front and back end operations
              </span>
            </span>
          </div>
          <div className="profile-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                  {""}
                  Hire Me{" "}
              </button>
              <a href='Ishan Misra_Resume2021.pdf' download='Ishan Misra_Resume2021.pdf'>
                  <button className = 'btn highlighted-btn'>Download Resume</button>
              </a>
          </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
        </div>
      </div>
    </div>
  );
}
