import Backk from '../../img/freepik_5_23_12_21_9.jpg'
import JScript from '../../img/19199360.jpg'
import Reactt from '../../img/Wavy_Bus-43_Single-12.jpg'
import Html from '../../img/programming-background-collage.jpg'
import './skills.css'

const Skills = () => {
   return ( 
      <div>
         <h1 className='s-top' style={{backgroundImage:`url(${Backk})`,backgroundSize: 'cover', height: 200, color: 'white' , textAlign:'center'}}>SKILLS</h1>
         <div className='n-skills'style={{position: 'absolute', top:1350}}>
            <div className="s-first" >
               <img src={JScript} alt="jscript" style={{width: 300, marginLeft: 50}}/>
               <p style={{backgroundColor:'black', color:'white', height:97, textAlign:'center'}}>JavaScript</p>
            </div>

            <div className="s-second">
               <img src={Reactt} alt="reactt" style={{width: 250,height:200, marginLeft: 50 }}/>
               <p style={{backgroundColor:'black', color:'white', height:97, textAlign:'center'}} >React Js</p>
            </div>

            <div className="s-third">
               <img src={Html} alt="html" style={{width: 400, height:200}}/>
               <p style={{backgroundColor:'black', color:'white', height:97, textAlign:'center'}} >HTML & CSS</p>
            </div>
         </div>
      </div>
    );
}
 
export default Skills;