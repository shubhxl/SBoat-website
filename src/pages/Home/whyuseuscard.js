import React from 'react'
import a from '../images/a.svg'
import b from '../images/b.svg'
import c from '../images/c.svg'
import d from '../images/d.svg'
import e from '../images/e.svg'
import f from '../images/f.svg'
import '../css/whyuseus.css'


function Whyuseuscard () {

    return (
    <div className="container-fluid mt-0 ha">
            <h2> Why Use Us  </h2>
     <p> Convert students who find your existing centers too far. <br /> 
     Rotate idle faculty bandwidth across multiple locations. Increase revenue.
     </p>
        <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">

        <div className="row mt-4 mb-4">


        <div className="col-md-4 wu">
           <div className="data">
            <img src={a} className="icons" alt={'w1'}/>
            <h3 className="text-center"> Grow As Per Need  </h3>
            <p>Start a new batch. Shift to a higher capacity classroom as per need. Open a new center. Anytime.
                </p>
           </div> 
        </div>

        <div className="col-md-4 wu">
        <div className="data">
            <img src={b} className="icons"  alt={'w2'}/>
            <h3 className="text-center">Flexible Plans </h3>
            <p>Start with a batch or two. Grow to multiple batches. Pay only for the hours that you use. </p>
          </div>
        </div>

        <div className="col-md-4 wu">
        <div className="data">
            <img src={c} className="icons" alt={'w3'}/>
            <h3 className="text-center"> Central Reservation  </h3>
            <p>No need to coordinate with multiple people at each location. Just tell us and consider it done.</p>
            </div>
        </div>
        

        </div> 

        <div className="col-md-2"></div>


        <div className="row">
        <div className="col-md-4 wu">
           <div className="data">
            <img src={d} className="icons" alt={'w4'}/> 
            <h3 className="text-center"> Transparent Pricing Mechanism </h3>
            <p>Pre-approved fee chart for all classrooms. No re-negotiations when you start more batches or switch to more seats.
                </p>
           </div> 
        </div>

        <div className="col-md-4 wu col-12">
        <div className="data">
            <img src={e} className="icons" alt={'w5'}/>
            <h3 className="text-center">Onboarding And Ongoing Support </h3>
            <p> A SpaceManager dedicated to help you set up and handle ongoing operational breakdowns. </p>
          </div>
        </div>

        <div className="col-md-4 wu col-12">
        <div className="data">
            <img src={f} className="icons" alt={'w6'}/>
            <h3 className="text-center"> Centralised Billing And Monthly Reports   </h3>
            <p>Transparent statements of your monthly space usage across multiple locations.</p>
            </div>
        </div>
        </div>


        </div>
        <div className="col-md-2 col-sm-2"></div>
        </div> 


    </div>



    )
}



export default Whyuseuscard;