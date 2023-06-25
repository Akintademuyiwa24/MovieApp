import React from "react";
import './Navbar.css'
import Logo from '../../img/8381515543_735a5733-6eff-4e6a-b3cd-2b7a1a501d6c.png'

const Navbar = () => {
   return ( 
      <div className="n-wrapper">
         {/* for left side */}
         <div className="n-left">
            <div className="n-logo" style={{width:60, backgroundColor:'gray'}}>
               <img src={Logo} alt="logo" />
            </div>
         

            <div className="n-list">
               <ul>
                  <li>Home</li>
                  <li>Services</li>
                  <li>Experience</li>
                  <li>Portfolio</li>
               </ul>
            </div>
            {/* for button */}
            <button className="button">Contact me</button>
         </div>
      </div>
    );
}
 
export default Navbar ;