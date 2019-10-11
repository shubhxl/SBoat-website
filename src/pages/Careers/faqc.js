import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
// import Button from 'react-bootstrap/Button'
import '../css/faqc.css'




function FAQC(){ 

    return(
        <div className="cacc"> 
          <h2> Frequently Asked Questions </h2>
        <div className="row faqc1">
        <Accordion className="add"> 
            <Accordion.Toggle className="togglef" eventKey="0" >
                <span className="accheadf"> <span className="plusc">+</span>Will I need to come to office, go for on-field work? Can I work from home?</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <ul type="circle" className="llf"> 
                     <li> All employees will be required to come to office on working Sundays and for client 
                         meetings, SpaceManagement, client meetings and team projects (as required).</li>
                     <li> The requirement differs depending on which team you are on and the projects that you 
                         will be working on. We will discuss the on-ground / in-office requirements during the 
                         recruitment process.</li>
                    </ul>
                </Accordion.Collapse> 


           <Accordion.Toggle className="togglef" eventKey="1">
            <span className="accheadf"> <span className="plusc">+</span>  What will be the difference in the levels of responsibility between an intern and an apprentice? </span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <ul type="circle" className="llf"> 
                     <li> An intern will largely be shadowing and supporting a full-time employee. They will be 
                         assigned on projects that have an execution timeline of less than 3 months.</li>
                     <li> An apprentice will also be shadowing and supporting a full-time employee. However, 
                         they will be assigned on more complex, creative projects that have an expected execution
                          timeline of 6-12 months. </li> 
                    <li>An apprentice can expect to be given complete ownership of parts of the process, which 
                        might be difficult to achieve in a three month internship.  </li></ul>
                </Accordion.Collapse> 
           
            <Accordion.Toggle className="togglef" eventKey="2" >
            <span className="accheadf"> <span className="plusc">+</span>I am a recent graduate with no work experience. Why can’t I apply for a full-time position?</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <ul type="circle" className="llf"> 
                     <li>Given the high churn amongst graduating freshers in their first jobs, we would rather 
                         start as an intern / apprentice. You get a chance to evaluate if you really want to be a 
                         part of our journey or not. </li>
                     <li> We sincerely hope that you love the experience at SpaceBoat and the apprenticeship converts
                          into an employment offer. After all, we have already invested a lot in training you. </li>           
                </ul>
                </Accordion.Collapse>


            <Accordion.Toggle className="togglef" eventKey="3">
            <span className="accheadf"> <span className="plusc">+</span>What if I am not able to complete those minimum time commitment expectations?</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <ul type="circle" className="llf">  
                     <li>We will give you an option to leave within 12 weeks. After that, we expect you to ride this journey through with us.</li>
                     <li>What we expect is an honest attempt at meeting the commitment. A startup has scarce 
                         resources. We will be investing a lot of our time in building you up and all that 
                         progress gets lost when someone leaves. We want people who are committed to the cause
                          and are willing to ride the highs and lows of this journey along with us. </li>           
                </ul>
            </Accordion.Collapse>


            <Accordion.Toggle className="togglef" eventKey="4">
            <span className="accheadf"> <span className="plusc">+</span>What will the compensation be like? Will interns and apprentices be paid?</span>
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                <ul type="circle" className="llf"> 
                     <li>Compensation will be discussed during the recruitment process.</li>
                     <li>We offer compensation to interns and apprentices as well.</li>
                     <li>But, remember, you’re about to join an early-stage startup, the more rewarding part of the experience will be the learning that you have.</li>
                </ul>
            </Accordion.Collapse> 
        </Accordion>

        {/* <Button className="ii" > <i className="arrow down"></i> 
         </Button> */}
        </div>
        
        </div>
    )
    }


export default FAQC