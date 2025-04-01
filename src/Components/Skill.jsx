import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../globals.css";


function Skill() {

    const Skills = [
        { name: "React", exp: 95, color: "#6ce3df" },
        { name: "node", exp: 95, color: "#389441" },
        { name: "Java", exp: 95, color: "#c74634" },
        { name: "Database", exp: 90, color: "#bba7cd" },
      ];
      const SkillsDesc = [
        { name: "React", iconName:faCode, color:'#6ce3df', para:'Worked extensively with React.js, building dynamic and responsive web applications. Implemented key features like pagination, component-based architecture, state management using Redux-toolkit. Hands-on experience in handling API integration using Axios and Fetch, implementing routing with React Router, and creating reusable, modular components that enhance code maintainability.' },
        { name: "node", iconName:faCodepen, color:'#389441', para:'Developed scalable backend services and RESTful APIs using Node.js. Utilized Express.js for routing and middleware handling, implemented authentication and authorization with JWT, encrypting passwords using bcrypt to ensure privacy,. Worked on file handling, error handling and logging, and database interactions with MongoDB and MySQL. Experience with deploying applications using PM2 and Docker for process management and scalability.' },
        { name: "Java", iconName:faFileCode, color:'#c74634', para:'Leveraged Java in developing backend services and enterprise-level applications. Proficient in using Spring Boot for building microservices, handling dependency injection, and managing data using JPA/Hibernate. Implemented features like RESTful APIs, exception handling. Familiar with multithreading and synchronization concepts to handle concurrent processes efficiently.' },
        { name: "Database", iconName:faDatabase, color:'#bba7cd', para:'Worked with both relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Implemented database schemas, written complex SQL queries. Experience in handling data consistency through ACID principles.' },
        
      ];
    return (
        <div className="flex flex-col p-[2rem]">
                    {/* skill desc */}
                    <div
                      className={`flex flex-col justify-evenly xl:flex-row gap-[2rem] px-[3rem] lg:px-[5rem] py-[2rem] bg-black shadow-[0_0_10px_white] xl:mx-[4rem]`}
                    >
                      {/* My skills */}
                      <div className=" flex flex-col flex-1 max-h-[312px] gap-[2rem] items-center xl:px-[5rem] py-[2rem]  ">
                        <h1 className=" !text-[2rem] xl:self-start">My Skills</h1>
                        <p className="!text-left xl:!text-left overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
                          As a Full Stack Developer, working extensively with modern web
                          technologies like React for dynamic front-end development and
                          Node.js for robust back-end services, integrating databases
                          such as MongoDB and SQL for efficient data storage and
                          retrieval. Additionally, I have worked with Java for building
                          enterprise-level applications, ensuring performance, security,
                          and scalability.
                        </p>
                      </div>
                      <hr className=" lg:hidden !w-[100%]" />
                      {/* skill meter */}
                      <div className="flex flex-col gap-[2rem] items-center xl:px-[5rem] py-[2rem] xl:w-[50%] justify-center">
                        {Skills.map((skill) => (
                          <div key={skill.name} className="w-[100%]">
                            <div className="flex flex-row justify-between">
                              <h2 className="!text-white !text-[2rem]">{skill.name}</h2>
                              <h2 className=" inline-block !text-white !text-[1.3rem] pt-[1rem]">{`${skill.exp}%`}</h2>
                            </div>
                            <div className="h-[1rem] bg-amber-50 border w-[100%]">
                              <div
                                className={`h-[100%]`}
                                style={{ background: `${skill.color}`, width: `${skill.exp}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                      <div className="flex flex-change lg:flex-row pt-[2rem] xl:p-[4rem] gap-[2rem] ">
                       {
                        SkillsDesc.map(ele=>(
                          <div key={ele.name} className="flex flex-col flex-1 max-h-[30rem] bg-black p-[2rem] gap-3 shadow-[0_0_10px_white]">
                            <FontAwesomeIcon
                              icon={ele.iconName}
                              color={ele.color}
                              style={{ height: "3rem" }}
                            />
                            <p className="overflow-y-scroll !text-left" style={{ scrollbarWidth: "none" }}>{ele.para}</p> 
                          </div>
                        ))
                       }
                        
                      </div>
                  </div>
    );
}

export default Skill;