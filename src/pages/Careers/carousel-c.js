import React from 'react'
import '../css/Carouselc.css'
import Carousel from 'react-bootstrap/Carousel'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'


function CarouselC() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    // setIndex(selectedIndex);  
  };


  return (   
    <div>
    <Carousel activeIndex={index}  indicators={false} controls={false} className="cc" onSelect={handleSelect}>
        
        <div className="carousel-item ">
            <img className="d-block w-100 img-fluid" src={c1} alt="slide-1" />
           </div>
        <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src={c2} alt="slide-2" />
        </div>
        
      </Carousel>
      <div className="transboxc d-block" onSelect={false}> 
             <div className="tbox"><h1> Join the Team </h1>
             <p>Learn what it takes to get a startup off the ground. <br /> 
             Work with us to solve an exciting problem (or two)!</p>
      </div></div> 
      </div>
    )
}

export default CarouselC
