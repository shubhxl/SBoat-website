import React, {Component} from 'react';
import Slider from "react-slick";
import tm from '../images/tm.png'
import au from '../images/au.PNG'
import dla from '../images/dla.png'
import edus from '../images/edus.png'
import '../css/testimonials.css'
class Test extends Component {

    render(){
    
const settings = {
    accessibility:true,
        infinite: true,
        dots:true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
 }  

    return(
        <div className="container-fluid py-4 tmain">
        <h2> Testimonials  </h2>
        <div className="row ka">
        <div className="col-12">
        <Slider  {...settings}>

            <div className="container-fluid tw"> 
            <p className="te"> Accessible staff, flexibility in time slots and timely billing have made our meetings at these space hassle-free.</p>
               <a href="https://www.toastmasters.org/">
              <img src={tm} className="im" alt="Toastmaster" /> 
                <i className="italy"> Anubhav,Millennium Gurgaon Toastmasters Club</i>
            </a><br/> </div> 


            <div className="container-fluid tw"> 
            <p className="te"> I've had a very pleasant and positive experience working with SpaceBoat. 
                               The team is great at understanding your requirements and providing options with a fast turnaround time. 
                               I had a requirement for a venue at very short notice, and the SpaceBoat team ensured we got what we required. 
                               On the days of the event, a member of the team was there to ensure everything ran smoothly. 
                               Will definitely use their services again when required!</p>
               <a href="https://www.ashoka.edu.in/">
              <img src={au} className="im" alt="Ashok" /> 
                <i className="italy"> Prerna Seth,Ashoka University</i>
            </a><br/> </div> 

            <div className="container-fluid tw"> 
            <p className="te"> Stellar experience! I have been a happy user of Spaceboat's services for almost a year now. 
                               They are willing to be flexible and accommodate requirements.</p>
               <a href="https://www.delhilawacademy.com/">
              <img src={dla} className="im" alt="DLA" /> 
                <i className="italy">Vivek Subramanian,Delhi Law Academy</i>
            </a><br/> </div> 


            <div className="container-fluid tw"> 
            <p className="te"> This model gives flexibility and bandwidth to scale. 
                                We started with them two years back and it has been a successful journey.</p>
               <a href="https://www.edushastra.com/">
              <img src={edus} className="im" alt="EDUS" /> 
                <i className="italy">Vipul Parashar,Edushastra</i>
            </a><br/> </div> 

        </Slider>
        </div>
        </div>
        </div>
       
    )
}
}

export default Test;