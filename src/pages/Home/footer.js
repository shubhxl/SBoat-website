import React from 'react';
import '../css/footer.css'
import fb from '../icons/fb.svg'
import insta from '../icons/insta.svg'
import linke from '../icons/linke.svg'
import pin from '../icons/pin.svg'

function Footer() {

    return(
        <div className="container-fluid fbody">
            <div className="row tca">
             <div className="col-md-2"></div>
             <div className="col-md-4 newsletter">
             <form id="Subscribe">
                 <div className="form-group">   
                     <label>Subscribe to our Newsletter!</label>
                     <input type="email" className="form-control" id="Email" placeholder="Enter email" name="Email" />
                     <small id="emailHelp" className="formt">We'll never share your email with anyone else.</small>
                  </div>  
            </form>
            <button className="sbtn">Subscribe</button>
             </div>
             <div className="col-md-2"></div>
             
             <div className="col-md-4 reach">
                 <div className="row social-m">
                     <p><span className="ee">Follow Us On:</span>
                      <a className="delink" href="https://www.facebook.com/spaceboat.in/" title="SpaceBoat at Facebook">
                          <img className="icon" src={fb} width={20} height={30} /></a>
                          <a className="delink" href="https://www.instagram.com/humansofspaceboat/" title="SpaceBoat at Instagram" target="_blank">
                          <img className="icon" src={insta} width={20} height={30} /></a>
                         <a className="delink" href="https://www.linkedin.com/company/spaceboatin/" title="SpaceBoat at LinkedIn" target="_blank">
                         <img className="icon" src={linke} width={20} height={30} /></a>
                            </p>
                 </div>
                 <div className="row location">
                     <h6 className="fh"><img className="icon" src={pin} width={20} height={30} />
                     &nbsp; S-347, Block S, Panchsheel Park South, <br/> Panchsheel Park, New Delhi, Delhi 110017</h6>
                 </div>
                </div>


            </div>
 
             <footer className="bg-dark text-white p-2 text-center footer-1">
                 Copyright © 2019 Spaceboat &nbsp; &nbsp; | &nbsp;&nbsp;
                 <a className="delink" title="Terms and Conditions" href="/tos/">Terms &amp; Conditions</a>
                 &nbsp;&nbsp;| &nbsp;&nbsp;
                 <a className="delink" title="Privacy Policy" href="/privacy/">Privacy Policy</a></footer>
 

        </div>
    )
}

export default Footer;