import React from 'react'
import w1 from '../images/w1.png'
import w2 from '../images/w2.png'
import w3 from '../images/w3.png'
import w4 from '../images/w4.png'
import '../css/whyuseusp.css'


function WhyuseuscardP () {

    return (
    <div className="container-fluid mt-0 ha">
            <h2> Why Use Us  </h2>
     <p> Save up to 50% of your existing lease. <br /> 
     Promote other amazing education entrepreneurs.
     </p>
        <div className="row">
        <div className="col-md-12">

        <div className="row mt-4 wup">


        <div className="col-md-3 col 12">
           <div className="data">
            <img src={w1} className="icons" alt={'w1'}/>
            <h3 className="text-centerp"> SAFETY AND SECURITY  </h3>
            <p className="wpp1">We pre-screen educators before inviting them to use your premises to conduct their programs.</p>
           </div> 
        </div>

        <div className="col-md-3 col 12">
        <div className="data">
            <img src={w2} className="icons"  alt={'w2'}/>
            <h3 className="text-centerp">DECISION-MAKING CONTROL </h3>
            <p className="wpp2">You decide the timings, number of rooms and types of courses that can run from your location.</p>
          </div>
        </div>

        <div className="col-md-3 col 12">
        <div className="data">
            <img src={w3} className="icons" alt={'w3'}/>
            <h3 className="text-centerp">PRICE RECOMMENDATION </h3>
            <p className="wpp3">One size doesn’t fit all. Pre-approve fee chart at time of tie-up so that you don’t have to waste time in negotiations.</p>
            </div>
        </div>


        <div className="col-md-3 col 12">
        <div className="data">
            <img src={w4} className="icons" alt={'w3'}/>
            <h3 className="text-centerp"> OPERATIONAL SUPPORT  </h3>
            <p className="wpp4">Single point of contact to handle room allocation, rescheduling, payment collection and operations.</p>
            </div>
        </div>

        </div> 

        </div>
        {/* <div className="col-md-1"></div> */}
        </div> 


    </div>



    )
}



export default WhyuseuscardP;