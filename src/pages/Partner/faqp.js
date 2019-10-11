import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import '../css/faqp.css'




function FAQP(){ 

    return(
        <div className="container-fluid acc py-5"> 
          <h2> Frequently Asked Questions </h2>
        <div className="row pt-3">
        <Accordion className="add"> 


            <Accordion.Toggle className="togglep" eventKey="0" >
                <span className="acchead"> <span className="plus">+</span>  What is SpaceBoat?</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                   <p className="llpp">SpaceBoat is a technology company that works with Educational Institutes (“SpacePartners”) who are looking to 
                         share their premises during idle times <br/> with other Educators (“SpaceUsers”), but do not want the headache associated 
                         with managing these idle-hour tie-ups. The income generated from the <br/> idle hours can be further reinvested in upgrading
                         infrastructure or meeting operational costs. </p>
                </Accordion.Collapse> 


           <Accordion.Toggle className="togglep" eventKey="1">
            <span className="acchead"> <span className="plus">+</span> What will be SpaceBoat’s services?</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <ul type="circle" className="llpp"> 
                     <li>Generating interest amongst SpaceUsers using a combination of sales and marketing campaigns.</li> 
                     <li>Recommend a Fee Chart to cater to multiple different types of requests and maximise yield for the SpacePartner off the idle hours.</li>
                     <li>Managing payments, follow ups, monthly reports, reconciliations, etc.</li>
                     </ul>
                </Accordion.Collapse> 
           
            <Accordion.Toggle className="togglep" eventKey="2" >
            <span className="acchead"> <span className="plus">+</span>What spaces can be shared through SpaceBoat? During what time?</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <ul type="circle" className="llpp"> 
                     <li>SpacePartners can share their Classrooms, Activity Rooms, Sports Facilities, Auditoriums, Amphitheatres, Multi-Purpose 
                         Halls and other infrastructure during the times when they remain idle (“Idle Hours”) on weekdays, weekends and during vacations.</li>
                     <li>SpaceBoat solution allows for room level, floor level and building level customisation of the ‘Idle Hours’ while deciding on the inventory that can be shared.</li>           
                </ul>
                </Accordion.Collapse>


            <Accordion.Toggle className="togglep" eventKey="3">
            <span className="acchead"> <span className="plus">+</span> What will be the tenure of this partnership? Will there be a trial period? What if I wish to disengage with SpaceBoat?</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
                <ul type="circle" className="llpp">  
                     <li>Trial Period - until cumulative amount transferred to SpacePartner exceeds Rs. 30,000</li>
                     <li>After the trial period, if the SpacePartner wishes to continue using SpaceBoat’s services, the agreement will be valid for 3 years from the end of Trial Period. 
                         A SpacePartner can disengage with SpaceBoat with a 90-day notice period.</li>           
                </ul>
            </Accordion.Collapse>


            <Accordion.Toggle className="togglep" eventKey="4">
            <span className="acchead"> <span className="plus">+</span> What does the SpaceProvider need to provide?</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
                <ul type="circle" className="llpp"> 
                     <li>SpaceBoat intends to make it hassle-free for a SpaceProvider to share their space during idle hours. At the time of tie-up, SpaceBoat will pre-agree the following:
                         <ul type="square">
                             <li> The infrastructure that a SpaceProvider is willing to share and the idle hours for each inventory</li>
                             <li> A fee chart that will form the basis of financial terms between SpaceBoat, SpaceUser and SpaceProvider .</li>
                         </ul>
                     </li>
                     <li>Regular maintenance and cleanliness of the space</li>
                  </ul>
            </Accordion.Collapse>

        </Accordion>
        </div>
        
        </div>
    )
    }


export default FAQP