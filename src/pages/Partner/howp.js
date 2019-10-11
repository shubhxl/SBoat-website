import React from 'react';
import '../css/howitworks.css'

function HowP() {
    return(
        <div className="container">
         <h2 className="head"> How it Works</h2>
         <p className="cp">Easy approval process for potential SpaceUsers <br />
         Monthly reports detailing usage numbers and transaction history. </p>
        <div className="row howp">
         {/* <div className="col-md-1"></div> */}
         <div className="col-md-3"> 
           <p> <span className="num"> 01 </span> <br /> Request a meeting with SpaceBoat representative </p>
         </div>
         <div className="col-md-3"> 
           <p>  <span className="num"> 02 </span> <br />SpaceBoat does an infrastructure assessment</p>
         </div>
         <div className="col-md-3"> 
           <p>  <span className="num"> 03 </span> <br />SpaceBoat discusses operational details and pre-agrees a fee chart</p>
         </div>
         <div className="col-md-3"> 
           <p>  <span className="num"> 04 </span> <br />SpaceBoat begins inviting requests from potential educators</p>
         </div>
         {/* <div className="col-md-1"></div> */}
        </div>


        </div>

    )
}

export default HowP;