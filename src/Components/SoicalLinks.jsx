import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Resume from '../assets/Resume.pdf'

function SoicalLinks() {
    const SocialLinks = [
        { name:'linkedIn', icon: faLinkedin, link:"https://www.linkedin.com/in/mayur-lilhare-9469941ab/", color: "#6a79e0" },
        { name:'github', icon: faGithub, link:"https://github.com/mayurlilhare", color: "white" },
        { name:'gmail', icon: faGoogle, link:"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWgqgpZPmWcRWSjGSQrDJpppSnQvLsTwRDpfjNZCPKKxVNdJmbtSvqHCwRmmspkWftRhg", color: "red" },
        // { name:'resume', icon: faFile, link:, color: "red" },
        
      ];
    return (
        <div className="flex flex-row gap-4 self-center">
              {SocialLinks.map(ele=>(<div
                key={ele.name}
                onClick={() =>
                  window.open(
                    `${ele.link}`,
                    "_blank"
                  )
                }
              >
                <FontAwesomeIcon
                  icon={ele.icon}
                  color={ele.color}
                  style={{ height: "3rem" }}
                />
              </div>))}
              <div>
                <a href={Resume} target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    color={'white'}
                    style={{ height: "3rem" }}
                  />
                </a>
              </div>
            </div>
    );
}

export default SoicalLinks;