import React, {Component} from 'react';
import BoxCFBTen from './boxfb10'
import Badge from 'react-bootstrap/Badge'
import Slider from "react-slick";
import i1 from '../images/i1.jpg'
import i2 from '../images/i2.jpg'
import '../css/pricingtool.css'

 


class Pricingtool extends Component {
    constructor(props) {
        super(props);
        this.state = { show10:false };
        this.state = { show20:false };
        this.ctoggleBoxFB10 = this.ctoggleBoxFB10.bind(this)
    }

    ctoggleBoxFB10 = () => {
        const {show10} = this.state
        this.setState({show10: !show10})
        console.log("cfb10 is selected")
    }

     render() {

        const settings = {
            accessibility:true,
             infinite: true,
             speed: 500,
             dots: true,
             slidesToShow: 1,
             slidesToScroll: 1
       
             }
             
             
        return (
            <div className="mainhaip"> 
            <div className="container pricing-tool row w-100">
              <div className="w-100">
                <div className="itype">

                <Badge pill className="intype active">
                            All
                </Badge>
                
                <Badge pill className="intype">
                    Classroom
                </Badge>
                
                <Badge pill className="intype">
                    Activity
                </Badge>
                
                <Badge pill className="intype">
                    Event
                </Badge>
                
                <Badge pill className="intype">
                    Admin
                </Badge>
                </div>
                </div>
            
                {/* <div className="inventory-sub"> */}
            <div className="slick-slider i-card slick-initialized">
              <div className="slick-list">
              <div className="slick-track">
                <div className=" slick-active slick-current">   


                  <Slider {...settings}>

                    <div className="kaka">
                    <img src={i1} alt="Classroom Professional at SpaceBoat" />
                    <h4 className="pinvt"> Classroom - Professional </h4>
                    </div>

                    <div className="kaka">
                    <img src={i2} alt="Classroom Flipboard at SpaceBoat" />
                    <h4 className="pinvt"> Classroom - Flipboard </h4>
                    </div>

                  </Slider>
                  </div>
                  </div>
                  </div>
              
              </div>  
              
              <div className="btn-area m-btn">
              <div className="container-fluid mt-2 px-0"> 
              <div class="options-row row mx-auto text-center">
                <div className="px-2 capacity-label-container">
                  <label for="capacityRange" className="capacityLabel">Capacity :</label>
                </div>
              
                  <div className="text-center capacity-buttons-container">
                      <div className="capacity-buttons">
                          <div className="btn-group" id="cc">
                              <button type="button" id="bcfb1" className="btn btn-secondary btn-capacity active">10</button>
                              <button type="button" className="btn btn-secondary btn-capacity">20</button>
                              <button type="button" className="btn btn-secondary btn-capacity">30</button>
                              <button type="button" className="btn btn-secondary btn-capacity">50</button>
                              <button type="button" className="btn btn-secondary btn-capacity">80</button>
                          </div>
                       </div>
                   </div>

                   <div className="getQuoteBtnCol px-2 text-center">
                       <button className="btn btn-primary" onClick={this.ctoggleBoxFB10}>Get Quote</button></div>
                   </div>
                        {this.state.show10 && <BoxCFBTen />}
                    
              </div>
              </div>
              {/* </div> */}

              </div>


            </div>
        )
    }
}

export default Pricingtool;