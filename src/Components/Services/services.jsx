import Web from  '../../img/person-front-computer-working-html.jpg'
import Mobile from '../../img/310457-P8GZKB-849.jpg'
import UIUX from '../../img/5781555.jpg'
import './services.css'

const Services = () => {
   return ( 
      <div className='sec2'>
         <h1 className='text1'>SERVICES</h1>
         <div className="n-sers" >
            {/* for first ser */}
            <div className="first">
               <img src={Web} alt="website" style={{width: 400, marginBottom:5}}/>
               <h2 style={{fontWeight: 'bold', textAlign: 'center'}} >Web Development</h2>
               <p>+ Front-end development</p>
               <p>+ Responsvie Web Design</p>
               <p>+ E-commerce development</p>
               <p>+ Custom web application development</p>
               <p>+ Website maintenance and updates</p>
               
            </div>
            {/* end */}
            {/* second */}
            <div className="second">
               <img src={Mobile} alt="mobile" style={{width: 400, height:195, marginBottom:5}}/>
               <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>Mobile Development</h2>
               <p>+ Cross-platform app development</p>
               <p>+ iOS app development</p>
               <p>+ Android app development</p>
               <p>+ App testing and debugging</p>
               <p>+ App store submission and optimization</p>
                
            </div>
            {/* end */}
            {/* third sec */}
            <div className="third">
               <img src={UIUX} alt="uiux" style={{width: 400, marginBottom:5}}/>
               <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>UI/UX Design</h2>
               <p>+ Wireframing and prototyping</p>
               <p>+ User interface design</p>
               <p>+ User experience research and analysis</p>
               <p>+ Interaction design</p>
               
            </div>
            {/* end */}
         </div>
      </div>
    );
}
 
export default Services;