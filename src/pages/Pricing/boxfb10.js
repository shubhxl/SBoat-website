import React from 'react';
import '../css/pricingtool.css'


const BoxCFBTen = () =>  { 
return (
    <>
    <div className="row my-3 mx-auto">
    <div className="row quotes monthly mx-auto">
        <div className="top col-12">Monthly Subscription: Long-Term, Recurring Users</div>
        <div className="quote col-3 card start">
  <div className="card-body text-center">
            <p className="card-title">Starts from</p>
            <p className="hrspermonth">32 hrs</p><p class="text-center qprice">9,600</p>
            <p className="priceperhour">₹300/hr</p>
      </div></div>
  <div className="quote col-3 card mid">
      <div className="card-body text-center">
      <p className="card-title">2 hrs x 6 days  a week</p>
      <p className="hrspermonth">48 hrs</p>
      <p className="text-center qprice">12,800</p>
      <p className="priceperhour">₹267/hr</p>
      </div></div>
  <div className="quote col-3 card mid">
      <div className="card-body text-center">
          <p className="card-title">4 hrs x 8 days  a week</p>
          <p className="hrspermonth">128 hrs</p>
          <p className="text-center qprice">20,800</p>
          <p className="priceperhour">₹163/hr</p>
  </div></div>
  <div className="quote col-3 card mid">
      <div className="card-body text-center">
          <p className="card-title">6 hrs x 10 days  a week</p>
          <p className="hrspermonth">240 hrs</p>
          <p className="text-center qprice">28,000</p>
          <p className="priceperhour">₹117/hr</p>
          </div>
  </div>
 </div>
</div>

<div className="row my-3 mx-auto">
    <div className="row quotes pay-as-you-go mx-auto">
      <div className="top col-12">Pay-as-you-go: Short-Term Courses, Workshops, Trial Classes</div>
        <div className="quote col-3 card start">
            <div className="card-body text-center">
                <p className="card-title">Starts from</p>
                <p className="hrspermonth">12 hrs</p>
                <p className="text-center qprice">15,360</p>
                <p className="priceperhour">₹1280/hr</p>
                </div></div>
        <div className="quote col-3 card mid">
            <div className="card-body text-center">
                <p className="card-title">2 hrs x 4 days </p>
                <p className="hrspermonth">8 hrs</p>
                <p className="text-center qprice">11,520</p>
                <p className="priceperhour">₹1440/hr</p>
                </div></div>
        <div className="quote col-3 card mid">
            <div className="card-body text-center">
                <p className="card-title">4 hrs x 8 days </p>
                <p className="hrspermonth">32 hrs</p>
                <p className="text-center qprice">24,960</p
                ><p className="priceperhour">₹780/hr</p>
                </div></div>
        <div className="quote col-3 card mid">
            <div className="card-body text-center">
              <p className="card-title">6 hrs x 10 days </p>
              <p className="hrspermonth">60 hrs</p>
              <p className="text-center qprice">33,600</p>
              <p className="priceperhour">₹560/hr</p>
              </div></div>
    </div>
</div>
</>
) 
}

export default BoxCFBTen;