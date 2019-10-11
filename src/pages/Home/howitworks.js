import React from 'react';
import '../css/howitworks.css'

function How() {
    return(
        <div className="container hmain">
         <h2 className="head"> How it Works</h2>
         <p className="cph"> Approval to start your class within 3 business days. <br />
         SpaceBoat has pre-agreed most things that you require from SpacePartners. </p>
        <div className="row">
         <div className="col-md-1"></div>
         <div className="col-md-2"> 
           <p> <span className="num"> 01 </span> <br />  Request A Quote  </p>
         </div>
         <div className="col-md-2"> 
           <p>  <span className="num"> 02 </span> <br />Visit the Space </p>
         </div>
         <div className="col-md-2"> 
           <p>  <span className="num"> 03 </span> <br /> Fill Approval <br /> Request Form </p>
         </div>
         <div className="col-md-2"> 
           <p>  <span className="num"> 04 </span> <br /> Transfer amount to reserve </p>
         </div>
         <div className="col-md-2"> 
           <p>  <span className="num"> 05 </span> <br /> Begin </p>
         </div>
         <div className="col-md-1"></div>
        </div>


        </div>

    )
}

export default How;