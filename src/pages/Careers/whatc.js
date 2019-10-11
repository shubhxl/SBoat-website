import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import '../css/whatc.css'

function WhatC() {
    return(
        <div className="welfc">
        <h2 className="whead"> What We Look For  </h2>
        <div className="container-fluid">
            <Accordion className="mainacc">
            <div className="row">
            
              <div className="col-md-3 col 12 welf3">
              <Accordion.Toggle className="togglec" eventKey="0" >
                <span className="accheadc"> <span className="plus">+</span> Personal Connect</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <li className="sleft">Personal connect with the problem that SpaceBoat is solving</li>
                </Accordion.Collapse> 
              </div>
              <div className="col-md-0.5"></div>
              <div className="col-md-3  col 12 welf3">
              <Accordion.Toggle className="togglec" eventKey="1">
                <span className="accheadc"> <span className="plus">+</span> Right Mindset</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
            <ul type="circle" className="ll"> 
                     <li> Experiment, fail, learn, repeat until you find something that works.  </li>
                     <li>Learn to take a 'no'. many of them. Really. A lot of them. Especially from potential clients.</li>
                     <li> "That’s not my job" vs "I want to do more." There will be lots of things to do. Take ownership.</li>
                     <li> "This can't be done" vs "If it needs to be done, I will find a way."</li>
                     <li>"I don’t know how to do this" vs "This is an opportunity to learn. I will figure it out."</li>
                    </ul>
            </Accordion.Collapse> 
              </div>
              <div className="col-md-0.5"></div>

              <div className="col-md-3  col 12 welf3">
              <Accordion.Toggle className="togglec" eventKey="2" >
                <span className="accheadc"> <span className="plus">+</span> Self-Learner</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
            <li className="sleft">Excited about learning new things and learning on your own.</li>
                </Accordion.Collapse> 
              </div>

              <div className="col-md-0.5"></div>
              <div className="col-md-0.5"></div>
              <div className="col-md-0.5"></div>
              
              
            </div>


            <div className="row">
              
              <div className="col-md-3 welf3">
              <Accordion.Toggle className="togglec" eventKey="3" >
                <span className="accheadc"> <span className="plus">+</span> Committed</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
            <li className="sleft">Complex problems require time and patience. There will be lots of ups and downs in this journey. 
                  We want people who are intellectually engaged by what we are looking to build and who don’t get 
                  disheartened / bored quickly. You should have an honest intention of completing the minimum commitment 
                  expected of each role. We are not going to make you sign a bond; we trust your word! </li>
                </Accordion.Collapse> 
              </div>

              <div className="col-md-0.5"></div>

              <div className="col-md-3 welf3">
              <Accordion.Toggle className="togglec" eventKey="4">
                <span className="accheadc"> <span className="plus">+</span>Initiative</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
            <li className="sleft">Past experience of having started something / worked in a startup - either as college project,
                 internship or prior job, or candidates who have experience in a wide range of extracurricular 
                 pursuits, as opposed to just having focused on academics, will be preferred. </li>
            </Accordion.Collapse> 
              </div>

              <div className="col-md-0.5"></div>


              <div className="col-md-3 welf3">
              <Accordion.Toggle className="togglec" eventKey="5" >
                <span className="accheadc"> <span className="plus">+</span> Mobility</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
            <li className="sleft">This is NOT a desk based role. This will be a customer-facing role and will require travelling
                 to different parts of the city to meet with actual clients and partners. Personal vehicle is highly
                  recommended (for practical and logistical reasons). </li>
                </Accordion.Collapse> 
              </div>

              <div className="col-md-0.5"></div>
              <div className="col-md-0.5"></div>
              <div className="col-md-0.5"></div>
              
            </div>
            
            
            </Accordion>
        </div>

        </div>
    )
}

export default WhatC;