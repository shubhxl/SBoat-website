import React from 'react';
import '../css/nextc.css'

function NextC() {
    return(
        <div className="cnext">
            <h2>Next Steps</h2>

            <ul className="row next1">
                <li className="col-md-4 col-12">
                    <div className="nextc1">
                        <span className="numc">01</span>Read SpaceBoat Work and Life Code<br/><p></p></div></li>
                <li className="col-md-4 col-12">
                    <div className="nextc1">
                        <span className="numc">02</span>Apply to SpaceBoat</div></li>
                <li className="col-md-4 col-12">
                    <div className="nextc1">
                        <span className="numc">03</span>Recruitment Process</div></li></ul>

            <p className="text-center">
                <a href=" http://bit.ly/2xMoLWI">
                    <button className="btnc2">WORK AND LIFE CODE</button></a>
                    <a href="http://bit.ly/2yUcqkb"><button className="btnc2">APPLY NOW</button></a></p>
        </div>
    )
}

export default NextC;