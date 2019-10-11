import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import '../css/faqpr.css'




function FAQPR(){ 

    return(
        <div className="container-fluid col-12">

        {/* <div className="row acc"> */}
        <Accordion className="add"> 

            <Accordion.Toggle className="togglepr" eventKey="0" >
                <span className="acchead"> <span className="plus">+</span>Security Deposit</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                   <p className="llpr">Refundable within 10 working days from last date of use; subject to 
                   completion of lock-in, notice period and a ‘no-damages clearance at the rented classroom 
                   or space’ from the SpacePartner. </p>
                </Accordion.Collapse> 


           <Accordion.Toggle className="togglepr" eventKey="1">
            <span className="acchead"> <span className="plus">+</span>SpaceBoat Registration Fee</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
              <p className="llpr">There will be a one-time, fully adjustable SpaceBoat Registration Fee of 
              ₹ 5,000 (plus GST). It will be adjusted <br/>against the next payment(s) due to SpaceBoat once a 
              SpaceUser completes Rs. 50,000 of cumulative billing on SpaceBoat <br/>rented classroom or space.</p>
                </Accordion.Collapse> 


           <Accordion.Toggle className="togglepr" eventKey="3">
            <span className="acchead"> <span className="plus">+</span>Cancellation Policy</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <p className="llpr"> If you want to cancel your reservation or are unable to start your batches from the premises.
                <ul type="circle"> 
                    <li>Up to 15 days before start date - full amount will be refunded.</li>
                    <li>Up to 3 days before start date - 50% of the fee will be deducted, balance will be refunded.</li>
                    <li>Less than 3 days before start date: Only security deposit will be refunded.</li>
                    <li>Once you start, before completion of lock-in: No refund. Only security deposit will be refunded.</li>
                    <li>Applicable refund will be given within 10 business days.</li>
                </ul>
                </p>
                
            </Accordion.Collapse> 

           <Accordion.Toggle className="togglepr" eventKey="4">
            <span className="acchead"> <span className="plus">+</span>Standard Tri-Party Program MOU</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                <p className="llpr"> There will be a standard &nbsp;<a href="https://docs.google.com/document/d/1e6E-IPtKKEz6Fsvb-aRlsiu76dsohVAeIgy_ewZu4pA/edit" target="_blank">tri-party MOU</a>&nbsp; signed between SpaceUser, SpacePartner and SpaceBoat</p>
            </Accordion.Collapse> 


        

        </Accordion>
        {/* </div> */}

        <div className="text-center pt-md-3 pb-5">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5V3eG3yBV8qjtnHBkub7xHlhq2SN5F0vKAbBg2PgfKbUzOQ/viewform" target="_blank">
            <button className="btn">Request A Quote</button> </a>
        </div>

        </div>
        
    
    )
}
    


export default FAQPR