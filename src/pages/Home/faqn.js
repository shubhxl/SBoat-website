import React,{Component} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import '../css/faq.css'


class FAQN extends Component {
  
       state = {
        FAQS:[
            {id:0, ques:"What all does the fee include and not include?", 
            ans:["The fee includes use of the premises, classrooms on rent, furniture, whiteboards, storage, drinking water, cleaning, electricity, power back-up and shared facilities such as washrooms.",
                 "Shared Counselling Areas and Faculty Waiting Areas during your class time is included (where applicable). If you want your counsellor / faculty member to be present on the premises outside of class hours, or on other days, those might be charged separately, depending on the SpacePartner.",
                 "It also includes the cost of a shared support staff member who who will help you with any furniture rearrangement at your rented classroom or space, if required. Over-time charges for the shared staff member (if applicable) on a SpacePartner’s premises will be charged extra.",
                 "Projector charges and GST @18%, if charged by the SpacePartner, will be extra"] },
            {id:1, ques:" Will there be an agreement signed?", 
            ans:["Yes, once your request has been approved to conduct the program from the a classroom or space on rent, there will be a tri-party MOU between SpaceBoat, SpaceUser and SpacePartner"]},
            {id:2, ques:"Who sets the Fee? Is there any scope for negotiation?", 
            ans:["Fee is set by the SpacePartner. SpaceBoat makes a recommendation to a SpacePartner at the time of tie-up, but the final fee chart is set by the SpacePartner.",
                 "A potential User has the option to send only one counter proposal based on their requirement. A SpacePartner can then accept or reject the counter proposal.",
                 "If SpacePartner rejects the counter proposal, SpaceUser will then have to accept the original fee for the chosen classroom / space or classrooms / spaces on rent. Second counters will not be entertained."]},
            {id:3, ques:"How long can I reserve the space for? What will be the term/tenure?",
            ans:["For as long and short as you want, subject to minimum fee thresholds set by a SpacePartner.", 
                  "For requirements longer than 2 months, refer to Monthly Plans. Term for Monthly Plans will be for upto 300 days (one annual academic cycle). You can request a longer term, which will be subject to approval from SpacePartner."]}
        ]
    }
    
 render(){   
 return(

<div className="container-fluid acc"> 
<h2> Frequently Asked Questions </h2>

{ this.state.FAQS.map( data=>(     
<Accordion className="fmain" key={Math.random()}> 

<Accordion.Toggle className="togglem" eventKey={data.id} >
  <span className="acchead"> <span className="plus">+</span> {data.ques} </span>
</Accordion.Toggle>

  
<Accordion.Collapse eventKey={data.id}>
  <span>
      <ul type="circle" className="ll"> 
      { data.ans.map( datali=>(
      <li className="lli" key={Math.random()}> {datali} </li>      
      ))} 
      </ul>   </span>
</Accordion.Collapse>    

  </Accordion>
  ))}

</div>

 )
  }

}

export default FAQN;