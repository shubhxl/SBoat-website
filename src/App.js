import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'
import Navs from './pages/Nav';
import Carousels from './pages/carousel';
import Whyuseuscard from './pages/Home/whyuseuscard';
import Inventory from './pages/Home/inventory';
import How from './pages/Home/howitworks'
import Test from './pages/Home/testimonials'
import Footer from './pages/Home/footer';
import NavC from './pages/Careers/nav-c'
import CarouselC from './pages/Careers/carousel-c'
import HowC from './pages/Careers/how-c'
import TeamC from './pages/Careers/teamC'
import ModesC from './pages/Careers/modes'
import WhatC from './pages/Careers/whatc'
import WorkLifeC from './pages/Careers/wlife'
import NextC from './pages/Careers/nextc'
import FAQC from './pages/Careers/faqc'
import NavP from './pages/Partner/navp'
import CarouselP from './pages/Partner/carouselp'
import WhyuseuscardP from './pages/Partner/whyuseusp'
import HowP from './pages/Partner/howp'
import FAQP from './pages/Partner/faqp'
import Price from './pages/Pricing/ppk'
import FAQN from './pages/Home/faqn'
import NavPr from './pages/Pricing/navpr'
import CarouselA from './pages/Activity/carousela'

function App() {
  return ( 

    <Router>
    <div className="App">

      <Route path="/" exact render={
          () => {
            return ( 
              <div> 
              <Navs />
              <Carousels />
              <Whyuseuscard />
              <Inventory />
              <How />
              <FAQN />
              <Test />
              <Footer />
              </div>
              ) }
        }/>

      <Route path="/career" exact render={
          () => {
            return ( 
              <div> 
              <NavC />
              <CarouselC />
              <HowC />
              <TeamC />
              <ModesC />
              <WhatC />
              <WorkLifeC />
              <NextC />
              <FAQC />
              <Footer />
              </div>
              ) }
        }/>


      <Route path="/partner" exact render={
          () => {
            return ( 
              <div> 
              <NavP />
              <CarouselP />
              <WhyuseuscardP />
              <HowP />
              <FAQP />
              <Footer />
              </div>
              ) }
        }/>

      <Route path="/pricing" exact render={
          () => {
            return ( 
              <div> 
              <NavPr />
              <Price />
              <Footer />
              </div>
              ) }
        }/>

      <Route path="/activity" exact render={
          () => {
            return ( 
              <div> 
              <NavPr />
              <CarouselA/>
              <Footer />
              </div>
              ) }
        }/>

    </div>
    </Router>
  );
}

export default App;
