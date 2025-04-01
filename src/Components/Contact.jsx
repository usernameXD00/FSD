import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../globals.css";
import React from 'react';
import SoicalLinks from './SoicalLinks';

function Contact() {
    return (
        <div className='w-full h-full'>
          <div className={`flex flex-col lg:flex-row  p-[2rem] xl:m-[3rem] gap-4`}>
            <div className={`flex flex-1 flex-col max-h-[30rem] gap-2 bg-black p-[2rem] shadow-[0_0_10px_white]`}>
              <FontAwesomeIcon icon={faEnvelope} color="yellow" className="self-start" style={{ height: "3rem" }}/>
              <h1 className="!text-left text-2xl text-small sm:text-[2rem]">Let's Connect and Explore!!</h1>
              <p className="!text-left overflow-scroll" style={{scrollbarWidth:'none'}}>Collaboration is at the heart of innovation. Whether you're a fellow developer or an HR professional looking for the right talent, let's connect, share ideas, and explore exciting opportunities together!</p>
            </div>
            <div className={`flex flex-1 flex-col gap-2 bg-black p-[2rem] shadow-[0_0_10px_white]`}>
              <FontAwesomeIcon icon={faBriefcase} color="yellow" className="self-start" style={{ height: "3rem" }}/>
              <h1 className="!text-left text-2xl text-small sm:text-[2rem]">Currently I am...</h1>
              <ul className="!text-left">
                <li>Project Engineer at CDAC, Pune</li>
                <li>Experience: 2 years+</li>
                <li>Based in Pune, Maharashtra</li>
              </ul>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex flex-col p-[3rem] xl:m-[3rem] bg-black gap-[2rem]">
               <p>© Mayur. All rights reserved.</p>
               {/* social links */}
            <SoicalLinks />
          </div>
        </div>
    );
}

export default Contact;