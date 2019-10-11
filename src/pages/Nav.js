import React from 'react'
import './css/Nav.css'
import logo from './images/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import w from './icons/w.svg'


function Navs() {
return (
    <Navbar bg="light" sticky="top">
    <div className="col-md-4 col-12 navm">
      <a href="/">
      <img src={logo} className="logo" alt="SpaceBoat Logo" />  
      </a>        
     </div> 
    <div className="col-md-1 col-12"></div>
    <div className="col-md-7 col-12">
       <div className="nav-menu">
         <ul className="navbar-nav">
           <li className="nav-item">
             <a className="nav-link w-link" href="https://wa.me/919811683092">
             <img className="iconn" src={w} width={20} height={30} />98116 83092</a></li>
           <li className="nav-item">
            <a className="nav-link w-link" href="https://blog.spaceboat.in/">Blog</a></li>
           <li className="nav-item">
             <a className="nav-link" href="https://blog.spaceboat.in/category/educator-growth-stories-case-studies/">Case Studies</a></li>
           <li className="nav-item">
             <a className="nav-link" href="/career/">Careers</a></li>
           <li className="nav-item">
             <a className="nav-link" href="/pricing/">Pricing Plans</a></li>
           <li className="nav-item">
             <a className="nav-link" href="/partner/">SpaceProviders</a></li>
           <li className="nav-item">
            <a className="btn" href="http://bit.ly/SBFeeQuote">Request Quote</a></li>
         </ul>
        </div>
     </div>
  </Navbar>

)
}


export default Navs

