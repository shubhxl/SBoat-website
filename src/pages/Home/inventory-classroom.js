import React, {Component} from 'react'
import '../css/inventory-classroom.css'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
import a3 from '../images/a3.jpg'
import a4 from '../images/a4.jpg'
import i1 from '../images/i1.jpg'
import i2 from '../images/i2.jpg'
import i3 from '../images/i3.jpg'
import i4 from '../images/i4.jpg'
import e1 from '../images/e1.jpg'
import e2 from '../images/e2.jpg'
import e3 from '../images/e3.jpeg'
import a5 from '../images/a5.jpg'
import a6 from '../images/a6.jpg'
import Slider from "react-slick";

class InventoryClassroom extends Component {
  
  constructor() {
    super();
    this.nextc = this.nextc.bind(this);
    this.previousc = this.previousc.bind(this);
    this.nexta = this.nexta.bind(this);
    this.previousa = this.previousa.bind(this);
    this.nexte = this.nexte.bind(this);
    this.previouse = this.previouse.bind(this);
    this.nextad = this.nextad.bind(this);
    this.previousad = this.previousad.bind(this);

  }

  nextc() {
    this.slider1.slickNext();
  }

  previousc() {
    this.slider1.slickPrev();
  }

  nexta() {
    this.slider2.slickNext();
  }

  previousa() {
    this.slider2.slickPrev();
  }
  nexte() {
    this.slider3.slickNext();
  }

  previouse() {
    this.slider3.slickPrev();
  }
  
  nextad() {
    this.slider4.slickNext();
  }

  previousad() {
    this.slider4.slickPrev();
  }
  

  render() {
    const settings = {
     accessibility:true,
      infinite: true,
      dots:true,
      arrows:false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      }  
        


    return (

    <div className="flex-container imain">
      <h2> Inventory Types </h2>
      <p className="cph"> You can rent the following classrooms and spaces across multiple locations </p>

      
    <div className="row inv"> 


     {/*-------------------------------Classroom Inventory--------------------------------*/}


        <div className="col-lg-3 invc">
          <div className="inventory-sub">
            <h2 className="inventory-title"> Classroom </h2>
            <div className="slick-slider slick-initialized">
              <div className="arrow-prev" onClick={this.previousc}></div>
              {/* <div className="slick-list"> */}
              <div className="slick-track">
                <div className=" slick-active slick-current"> {/* slick-slide was added to its class */}


                  <Slider {...settings} ref={s => (this.slider1 = s)}>

                    <div>
                      <div className="inventory-board">
                        <img src={i3} alt="Classroom Junior at SpaceBoat" />
                        <div className="content">
                          <h3>Classroom - Junior</h3>
                          <p>Capacity :  10 - 20 people</p>
                          <span>Rent starting at ₹ 10000 /month</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={i2} alt="Classroom Junior at SpaceBoat" />
                        <div className="content">
                          <h3>Classroom - Flipboard</h3>
                          <p>Capacity :  10 - 80 people</p>
                          <span>Rent starting at ₹ 10000 /month</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={i1} alt="Classroom Professional at SpaceBoat" />
                        <div className="content">
                          <h3>Classroom-Professional</h3>
                          <p>Capacity :  10 - 30 people</p>
                          <span>Rent starting at ₹ 15000 /month</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={i4} alt="Classroom Regular at SpaceBoat" />
                        <div className="content">
                          <h3>Classroom - Regular</h3>
                          <p>Capacity :  10 - 30 people</p>
                          <span>Rent starting at ₹ 10000 /month</span>
                        </div> </div>
                    </div>


                  </Slider>


                </div>
              </div>
              {/* </div> */}
              <div className="arrow-next" onClick={this.nextc}></div>
              {/* <ul className="slick-dots">
            <li class="slick-active">
               <button>1</button> </li>
            <li class="">
               <button>2</button></li>
             <li class="">
              <button>3</button></li>
             <li class="">
              <button>4</button></li></ul> */}
            </div>
          </div>
        </div>

    {/*-------------------------------Activity Inventory--------------------------------*/}


        <div className="col-lg-3 invc"> 
          <div className="inventory-sub">
            <h2 className="inventory-title"> Activity </h2>
            <div className="slick-slider slick-initialized">
              <div className="arrow-prev" onClick={this.previousa}></div>
              <div className="slick-track">
                <div className=" slick-active slick-current"> {/* slick-slide was added to its class */}


                  <Slider {...settings} ref={s => (this.slider2 = s)}>

                    <div>
                      <div className="inventory-board">
                        <img src={a1} alt="Activity Regular at SpaceBoat" />
                        <div className="content">
                          <h3>Activity - Regular</h3>
                          <p>Capacity :  10 - 20 people</p>
                          <span>Rent starting at ₹ 10000 /month</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={a2} alt="Activity Play Area at SpaceBoat" />
                        <div className="content">
                          <h3>Activity - Play Area</h3>
                          <p>Capacity :  Not Apllicable</p>
                          <span>Rent starting at ₹ 10000 /month</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={a3} alt="Activity Dance at SpaceBoat" />
                        <div className="content">
                          <h3>Activity - Dance</h3>
                          <p>Capacity :  10 - 20 people</p>
                          <span>Rent starting at ₹ 10000 /month</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={a4} alt="Activity MultiPurpose at SpaceBoat" />
                        <div className="content">
                          <h3>Activity - MultiPurpose</h3>
                          <p>Capacity :  10 - 20 people</p>
                          <span>Rent starting at ₹ 10000 /month</span>
                        </div> </div>
                    </div>

                  </Slider>
                </div>
              </div>
              <div className="arrow-next" onClick={this.nexta}></div>
            </div>
          </div>
        </div>

    {/*-------------------------------Event Inventory--------------------------------*/}
    
         <div className="col-lg-3 invc"> 
          <div className="inventory-sub">
            <h2 className="inventory-title"> Event </h2>
            <div className="slick-slider slick-initialized">
              <div className="arrow-prev" onClick={this.previouse}></div>
              <div className="slick-track">
                <div className=" slick-active slick-current"> {/* slick-slide was added to its class */}


                  <Slider {...settings} ref={s => (this.slider3 = s)}>

                    <div>
                      <div className="inventory-board">
                        <img src={e1} alt="Event Amphitheatre at SpaceBoat" />
                        <div className="content">
                          <h3>Event - Amphitheatre</h3>
                          <p>Capacity :  50 - 100 people</p>
                          <span>Rent starting at ₹ 5000 /hour</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={e2} alt="Event Auditorium at SpaceBoat" />
                        <div className="content">
                          <h3>Event - Auditorium</h3>
                          <p>Capacity :  100 - 500</p>
                          <span>Rent starting at ₹ 10000/hour</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={e3} alt="Event Seminar at SpaceBoat" />
                        <div className="content">
                          <h3>Event - Seminar</h3>
                          <p>Capacity :  30 - 150 people</p>
                          <span>Rent starting at ₹ 5000/hour</span>
                        </div> </div>
                    </div>
              
                 </Slider>
                </div>
              </div>
              <div className="arrow-next" onClick={this.nexte}></div>
            </div>
          </div>
        </div>


    {/*-------------------------------Admin Inventory--------------------------------*/}
    
         <div className="col-lg-3 invd"> 
          <div className="inventory-sub">
            <h2 className="inventory-title"> Admin </h2>
            <div className="slick-slider slick-initialized">
              <div className="arrow-prev" onClick={this.previousad}></div>
              <div className="slick-track">
                <div className=" slick-active slick-current"> {/* slick-slide was added to its class */}


                  <Slider {...settings} ref={s => (this.slider4 = s)}>

                    <div>
                      <div className="inventory-board">
                        <img src={a5} alt="Admin Office at SpaceBoat" />
                        <div className="content">
                          <h3>Admin - Office</h3>
                          <p>Capacity :  1 - 10 people</p>
                          <span>Rent starting at ₹ 5000 /month</span>
                        </div> </div>
                    </div>

                    <div>
                      <div className="inventory-board">
                        <img src={a6} alt="Admin Counselling Room at SpaceBoat" />
                        <div className="content">
                          <h3>Admin - Counselling Room</h3>
                          <p>Capacity :  3 - 5 people</p>
                          <span>Rent starting at ₹ 5000/month</span>
                        </div> </div>
                    </div>
              
                 </Slider>
                </div>
              </div>
              <div className="arrow-next" onClick={this.nextad}></div>
            </div>
          </div>
        </div>


    {/* Main Inv div */}
    </div>
    {/* Main container div */}
    </div>
     
    );
  }
}




export default InventoryClassroom;