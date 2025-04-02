import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSlider from '../Components/ImageSlider/index';
import React, { useState } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.png';
function Projects() {
    const [projectId, setprojectId] = useState(0);

    const imgArray0 = [img1, img2, img3];
    const imgArray1 = [img4, img5, img6];
    const imgArray2 = [img7, img8, img9, img10];
    const imgArray3 = [img11, img12, img13, img14, img15, img16];
    const projectArray=[
    {
      id:0,
      name:'Shopzee',
      projectDesc:`Shopzee - Your Ultimate Shopping Experience, is a modern and responsive shopping cart website built using React and Tailwind CSS. Designed for seamless user experience across all devices, Shopzee offers a sleek and intuitive interface that allows users to browse, add items to their cart, and complete purchases effortlessly. `,
      features:['Responsive Design', 'Product Listings', 'Shopping Cart', 'Smooth Navigation', 'Interactive UI', ' State Management'],
      techStack: ['Frontend: React.js', 'Styling: Tailwind CSS', 'State Management: useState & Context AP', 'Routing: React Route',],
      myArr: imgArray0,
    },
    {
      id:1,
      name:'RecipeBook',
      projectDesc:'RecipeBook - Discover, Save & Share Delicious Recipes,  is a modern and responsive recipe listing website built using React, Tailwind CSS, and MUI templates. Designed for seamless browsing across all devices, RecipeBook provides an intuitive interface for food lovers to explore, save, and share their favorite recipes.',
      features:['Dynamic Recipe Listing', 'Search & Filter', 'Responsive UI', 'Recipe Details Page', ' Favorite & Save Recipes'],
      techStack: ['Frontend: React.js', 'Styling: Tailwind CSS + MUI', 'State Management: useState & Context API', 'Routing: React Route', 'Icons & Graphics: FontAwesome','Data Handling: JSON / API Integration'],
      myArr: imgArray1,
    },
    {
      id:2,
      name:'TaskFlow ',
      projectDesc:'TaskFlow - Your Smart Kanban & Task Management Solution, is an intuitive and responsive Kanban-based task management website designed to help users organize their workflow effectively. Built with React, Tailwind CSS, and Node.js, it offers a dynamic task list and Kanban board to streamline project management. With secure user authentication and seamless real-time updates, TaskFlow enhances productivity across all devices.',
      features:['Kanban Board', 'Task List View', 'User Authentication', 'Real-Time Updates', 'Task Prioritization', 'Responsive UI', 'Interactive UI'],
      techStack: ['Frontend: React.js', 'Styling: Tailwind CSS', 'State Management: useState & Context AP', 'Routing: React Route', 'Backend: Node.js + Express.js', 'Database: MongoDB', 'Authentication: bcrypt (password hashing)'],
      myArr: imgArray2,
    },
    {
      id:3,
      name:'National Blockchain Framework ',
      projectDesc:'The National Blockchain Framework Security Assessment Portal is a comprehensive security evaluation platform designed to assess the security posture of blockchain-based systems. Built using the MERN stack, this portal enables real-time data fetching and automates report generation based on security assessment forms. It is tailored for government agencies, enterprises, and blockchain developers to evaluate, monitor, and enhance the security of their blockchain implementations.',
      features:['Security Assessment Forms', 'Real-Time Data Fetching', 'Automated Report Generation', ' User Authentication & Role Management', 'Interactive Dashboard', 'Responsive UI'],
      techStack: ['Frontend: React.js', 'Styling: Tailwind CSS', 'State Management: useState & Context API', 'Routing: React Route', 'Backend: Node.js + Express.js ', 'Authentication & Security: JWT, bcrypt', ],
      myArr: imgArray3,
    },

  ]
  function handlePrevious(myArr) {
    setprojectId(projectId === 0 ? myArr.length - 1 : projectId - 1)
  }

  function handleNext(myArr) {
    setprojectId(projectId === myArr.length - 1 ? 0 : projectId + 1)
  }

    return (
        <div className={`flex flex-col xl:mx-[4rem] py-[2rem] xl:p-[2rem] gap-6 `}>
            <div className="flex flex-row gap-2 justify-evenly">
              <h1 className="!text-[2rem] lg:!text-[3rem] text-yellow-300">Latest Projects</h1>
              <button className={`hover:!bg-yellow-200 hover:!text-black !text-yellow-200 !bg-black  !border-yellow-200`}
              onClick={()=>window.open('https://github.com/mayurlilhare','_blank')}>All Work</button>
            </div>
            
            <div className={`h-[450px] lg:h-[300px] flex flex-row w-[100%] self-center`}>
            {
              projectArray.map(ele=> (
                <div key={ele.id} className={`${projectId === ele.id ? 'flex flex-row w-full justify-evenly items-center' : 'hidden'}`}> 
                  <FontAwesomeIcon icon={faArrowLeft} onClick={()=>handlePrevious(projectArray)} className="shadow-[0_0_10px_white] w-[3%] !h-[10%] rounded-4xl text-white"/>
                  <div key={ele} className={`flex flex-col w-[80%] lg:flex-row h-full gap-3 text-white bg-black shadow-[0_0_10px_white] p-[2rem]`}>
                    <div className="flex flex-1 py-[2rem] px-[3rem] justify-center">
                      <ImageSlider json={ele.myArr}/>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 justify-evenly items-center overflow-scroll" style={{scrollbarWidth:'none'}}>
                      <h2 className={`text-yellow-300 text-2xl !text-left`}>{ele.name}</h2>
                      <p className="flex-1  !text-left" >{ele.projectDesc}</p>
                    
                      <h3 className={`text-yellow-300 text-xl w-full`}>Features:</h3>
                      <ul className='list-disc marker:text-white pl-[1rem]'>
                        {
                            ele.features.map((feature, indx)=>(
                                <li className='text-white' key={indx}>{feature}</li>
                            ))
                        }
                      </ul>
                    
                      <h2 className={`text-yellow-300 text-xl w-full`}>Tech Stack</h2>
                      <ul className='list-disc marker:text-white pl-[2rem]'>
                        {
                            ele.techStack.map((feature, indx)=>(
                                <li className='text-white ' key={indx}>{feature}</li>
                            ))
                        }
                      </ul>
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} onClick={()=>handleNext(projectArray)} className="shadow-[0_0_10px_white] w-[3%] !h-[10%] rounded-4xl text-white"/>
                </div>
              ))
            }
            </div>
          </div>
    );
}

export default Projects;