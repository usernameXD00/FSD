import { Fragment, Profiler, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import "./globals.css";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  const [bgcolor, setBgcolor] = useState("#393939");
  const [highlightSection, setHighlightSection] = useState("");
  
  // const btnArray = ['About', 'Skills', 'Projects', 'Contracts'];

  function navigate(btn) {
    document.getElementById(btn)?.scrollIntoView({ behavior: "smooth" });
    setHighlightSection(btn);
    let timeOutId = setTimeout(() => {
      setHighlightSection("");
    }, 2000);

    return () => clearTimeout(timeOutId);
  }

  return (
    <div
        className={` w-full h-full overflow-x-hidden`}
        style={{ background: bgcolor }}
      >
        <Header setBgcolor={setBgcolor} navigate={navigate} />
        <section id="About">
          <About navigate={navigate} highlightSection={highlightSection}/>
          <hr />
        </section>

        <section id="Skills" className="scroll-mt-[5rem] " >
          <Skill />
          <hr />
        </section>
        <section id="Projects">
          <Projects />
          <hr />
          
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
   
  );
}

export default App;
