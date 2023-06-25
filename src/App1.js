import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import'./App1.css'
import Intro from "./Components/Into/intro";
import Services from "./Components/Services/services";
import Headroom from "react-headroom";
import Skills from "./Components/Skills/skills";



const App1 = () => {
   return ( 
      <div>
         <Headroom><Navbar/></Headroom>
         <Intro/>
         <Services/>
         <Skills/>
      </div>
    );
}
 
export default App1;






