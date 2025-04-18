import React from 'react';
import profile2 from '../assets/profile2.jpg';
import SoicalLinks from './SoicalLinks';
import "../globals.css";

function About({navigate, highlightSection}) {
    
    return (
        <div className={`flex flex-col lg:flex-row mt-[6rem] p-[4rem] gap-[2rem] lg:mx-auto justify-evenly `} >  
          <div className={`flex flex-1 flex-col items-center`}>
            <img
              src={profile2}
              alt="profile"
              className={`rounded-[35%] w-[37%] h-[80%] transition-all duration-1000 ${
                highlightSection === "About"
                  ? " shadow-[0_0_20px_rgba(255,255,0,0.7)]"
                  : "shadow-none"
              }`}
            />
          </div>

          <div
            className={`flex flex-1 flex-col lg:w-[40rem] gap-[2rem] xl:p-[1rem] text-center shadow-transition-1000 rounded-2xl ${
              highlightSection === "About"
                ? "highlight-shadow-active"
                : "shadow-none"
            } `}
          >
            <h1 className="!text-[2rem] lg:!text-[3rem] text-yellow-300">I'm a Fullstack Developer</h1>
            <p className="text-white text-2xl">
              Hello! I'm a front end web developer based in pune. I'm very
              passionate about the work that i do.
            </p>
            {/* social links */}
            <SoicalLinks />
            {/* more navigation btns */}
            <div className="flex flex-row gap-4 self-center">
              <button
                className={`hover:!bg-yellow-200 hover:!text-black !text-yellow-200 !bg-black  !border-yellow-200`}
                onClick={() => navigate("Projects")}
              >
                See My Work
              </button>
              <button
                className={`hover:!bg-yellow-200 hover:!text-black !text-yellow-200 !bg-black  !border-yellow-200`}
                onClick={() => navigate("Contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
    );
}

export default About;