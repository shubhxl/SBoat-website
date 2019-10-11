import React from 'react'
import '../css/Carousel.css'
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.JPG'
import p4 from '../images/p4.JPG'
import Carousel from 'react-bootstrap/Carousel'


function CarouselP() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);  
  };


  return (  
    <div> 
    <Carousel activeIndex={index}  indicators={false} controls={false} className="cc" onSelect={handleSelect}>
        
        <div className="carousel-item ">
            <img className="d-block w-100 img-fluid" src={p1} alt="slide-1" />
        </div>

        <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src={p2} alt="slide-2" />
        </div>

        <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src={p3} alt="slide-3" />
        </div>
        
        <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src={p4} alt="slide-3" />
        </div>
            
      </Carousel>

      <div className="transbox d-block" activeIndex={-1}> 
             <h1> Helping Educators Grow</h1>
             <p>Share your classrooms during idle hours.<br /> 
                Earn extra income. <br/>  
                Upgrade your infrastructure.</p>
        </div> 
      </div>
    )
}

export default CarouselP
