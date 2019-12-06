import React from 'react'
import './css/Carousel.css'
import Safarikid from './images/Safarikid.jpg'
import ivs from './images/ivs.jpg'
import inlingua from './images/inlingua.jpg'
import Carousel from 'react-bootstrap/Carousel'


function CarouselA() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);  
  };


  return (  
    <div> 
    <Carousel activeIndex={index} indicators={false} controls={false} className="cc" onSelect={handleSelect}>
        
        <div className="carousel-item ">
            <img className="d-block w-100 img-fluid" src={Safarikid} alt="slide-1" />
           </div>
        <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src={ivs} alt="slide-2" />
        </div>
        <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src={inlingua} alt="slide-3" />
        </div> 
      </Carousel>
      <div className="transbox d-block"> 
            <h1> Helping Educators Grow</h1>
            <p>Ready to use classrooms for rent at multiple locations in Delhi NCR. <br /> 
                Start batches quickly. Reach more students. <br/>  
                Pay only for the batch hours that you use.</p>
        </div>  
      </div>
    
    )
}

export default CarouselA
