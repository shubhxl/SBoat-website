import React from 'react';
import '../css/modesc.css'


function ModesC() {
    return(
        <div>
            <h2> Modes of Engagement </h2>
            <p className="cp"> Whether you're a student, a fresher or a full-timer, 
                we're always on the look-out for fresh talent looking to solve exciting problems.</p>


           <div className="row cardm">

               
               <div className="col-md-4">
                   <div className="cardmc">
                     <div className="r1">
                     <h3 className="cardh"> Internship </h3>
                     <h5><b>Candidate Profile: </b></h5>
                     <p className="ans">Students / Recent Grads / Gap year students</p> 
                     </div>
                     <h5><b>Minimum commitment expected: </b> </h5>
                     <p className="ansc">3 months*</p>
                   </div>
               </div>


               <div className="col-md-4">
               <div className="cardmc">
                     <div className="r1">
                     <h3 className="cardh"> Apprenticeship </h3>
                     <h5><b>Candidate Profile: </b></h5>
                     <p className="ans">Students / Recent Grads / Gap year students</p>
                     </div>
                     <div className="r1">
                     <h5><b>Minimum commitment expected: </b> </h5>
                     <p className="ansc">12 months*</p>
                     </div>
                   </div>
               </div>


               <div className="col-md-4">
               <div className="cardmc">
                     <div className="r1">
                     <h3 className="cardh"> Full-Time </h3>
                     <h5><b>Candidate Profile: </b></h5>
                     <p className="ans">Minimum 6 months in a full-time position after college</p>
                     </div>
                     <div className="r1">
                     <h5><b>Minimum commitment expected: </b> </h5>
                     <p className="ansc">2 years  </p>
                     </div>
                   </div>
               </div> 
               <br/> <br />
               <p className="small"> * We have designed the Internship and the Apprenticeship program for students to be able to 
               engage with SpaceBoat even while their academic session is in progress.</p>

           </div>

           
            
        </div>
    )
}

export default ModesC
