import React from "react";
import './into.css'
import Github from '../../img/github.svg'
import Twitter from '../../img/twitter.png'
import Linkedln from '../../img/pngimg.com - linkedIn_PNG15.png'
const Intro = () => {
   return ( 
      
      <div className="intro bg">
         {/* for intro left */}
         <div className="i-left">
            <div className="i-name testfont">
               <span>Hello! I Am</span>
               <span>Olumuyiwa Emmanuel</span>
               <span>Frontend developer with high 
                  level experience in Front-end development
                  producting the Quality work</span>
            </div>
            <button className=" button i-button">Hire Me!</button>
            <div className="i-icons">
               <img src={Github} alt="github" />
               <img src={Twitter} alt="twitter" />
               <img src={Linkedln} alt="linkedln" />
            </div>
         </div>
         {/* end */}

         {/* for intro right */}
      </div>
    );
}
 
export default Intro;