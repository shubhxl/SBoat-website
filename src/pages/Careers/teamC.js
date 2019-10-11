import React from 'react'
import '../css/teamC.css'


function TeamC () {

    return (
    <div className="container-fluid mt-0 ha">
            <h2 className="thc"> Teams at SpaceBoat  </h2>
     <p className="cp"> We are a small team wearing multiple cross-functional hats. </p>
 
        <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">

        <div className="row mt-4 rc">


        <div className="col-md-3 jd">
           <div className="datac">
            <h3 className="text-centerc"> CATEGORY MANAGEMENT  </h3>
            <p className="cardc">Take ownership of segment of Educators that you are excited about. Figure out solutions. </p>
           </div> 
        </div>

        <div className="col-md-3 jd">
        <div className="datac">
            {/* <img src={b} className="icons"  alt={'w2'}/> */}
            <h3 className="text-centerc">BUSINESS DEVELOPMENT AND SALES </h3>
            <p className="cardc">Invite educators and SpacePartners to become a part of the SpaceBoat platform. </p>
          </div>
        </div>

        <div className="col-md-3 jd">
        <div className="datac">
            {/* <img src={c} className="icons" alt={'w3'}/> */}
            <h3 className="text-centerc"> CUSTOMER EXPERIENCE AND OPERATIONS  </h3>
            <p className="cardc">An educator already has a lot going on in their mind. Ensure that their experience is seamless</p>
            </div>
        </div>

        <div className="col-md-3 jd">
        <div className="datac">
            {/* <img src={c} className="icons" alt={'w3'}/> */}
            <h3 className="text-centerc"> OFFLINE EVENTS, PR AND DIGITAL MARKETING </h3>
            <p className="cardc">Help SpaceBoat reach more people. Work with our educators to help them get more students</p>
            </div>
        </div>

        </div> 


        <div className="row rc">
        <div className="col-md-3 jd">
           <div className="datac">
            {/* <img src={d} className="icons" alt={'w4'}/>  */}
            <h3 className="text-centerc"> COMMUNITY AND LEARNING EVENTS </h3>
            <p className="cardc">Form learning communities by running workshops / competitions, events and campaigns </p>
           </div> 
        </div>

        <div className="col-md-3 jd">
        <div className="datac">
            {/* <img src={e} className="icons" alt={'w5'}/> */}
            <h3 className="text-centerc">TECH - FRONTEND, BACKEND, PRODUCT MANAGEMENT</h3>
            <p className="cardc"> Translate the learning from onground customer interactions into amazing technology solutions</p>
          </div>
        </div>

        <div className="col-md-3 jd">
        <div className="datac">
            {/* <img src={f} className="icons" alt={'w6'}/> */}
            <h3 className="text-centerc"> GRAPHIC DESIGNER, UX/UI AND PRODUCT DESIGN   </h3>
            <p className="cardc">Design physical and digital products to improve the experience of students and educators with our spaces.</p>
            </div>
        </div>
       
        <div className="col-md-3 jd">
        <div className="datac">
            {/* <img src={f} className="icons" alt={'w6'}/> */}
            <h3 className="text-centerc">EDU'PRENEUR IN RESIDENCE   </h3>
            <p className="cardc"><br/>Create and deliver engaging courses and workshops.</p>
            </div>
        </div>


        </div>


        </div>
        <div className="col-md-1"></div>
        </div> 


    </div>



    )
}



export default TeamC;