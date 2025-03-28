import { useState } from "react";
import "../globals.css";

function Header({setBgcolor, navigate}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const btnArray = ['About', 'Skills', 'Projects', 'Contact'];
  const bgColors = ['#6565a1', '#4d4b4b', '#657da1', '#527d62', '#583663', '#393939'];
  let rn= Math.floor((Math.random()*100) % 6);

  function getRn() {
    let myRn = Math.floor((Math.random()*100) % 6);
    rn = (myRn !== rn) ? myRn : getRn();
    return rn;
  }

  function toggleSidebar() {
    setShowSidebar(!showSidebar);    
  }

  function navigateToSection(btn) {
    navigate(btn)
    setShowSidebar(false);
  }

  function changeTheme() {
    setBgcolor(bgColors[getRn()]);
  }

  return (
    <div className={`w-[90%] fixed left-[50%] translate-x-[-50%] border flex justify-evenly bg-black p-[1rem] `}>
      <h1 className={`block mr-[10rem] text-white`}>Mayur Lilhare</h1>
      <div className={` hidden lg:flex gap-4`}>
       { btnArray.map((btn)=>(
          <button 
            key={btn}
            className={`!bg-black !text-white hover:!bg-white hover:!text-black !border-none `}
            onClick={()=>navigateToSection(btn)}
          >{btn}</button>
        ))}
      </div>
      <button 
        className={`hover:!bg-yellow-200 hover:!text-black !text-yellow-200 !bg-black  !border-yellow-200 hidden lg:flex`}
        onClick={()=>changeTheme()}>Change Theme</button>
      <button
        className={`flex lg:hidden items-center py-[0.5rem] px-[2rem] text-black ${showSidebar ? 'hidden' : ''}`}
        onClick={()=>toggleSidebar()}
      >{`=`}</button>
      
      <div className={`h-[100vh] w-[24rem] flex flex-col gap-3.5 bg-gray-600 absolute top-0 left-0 p-4 text-black 
        transition-transform  ease-in-out  duration-700 ${showSidebar ? 'translate-x-[-3rem]' : 'translate-x-[-30rem]'} lg:translate-x-[-40rem] `}>
        <button className={`w-[15%] self-end`} onClick={()=>toggleSidebar()}>{'X'}</button>
        { btnArray.map((btn)=>(
          <button 
            key={btn}
            onClick={()=>navigateToSection(btn)}>{btn}</button>
        ))}
        <button 
          className={`!bg-yellow-200 !text-black hover:!bg-yellow-400 !border-none`}
          onClick={()=>changeTheme()} >Change Theme</button>
      </div>

    </div>
  );
}

export default Header;
