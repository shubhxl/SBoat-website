import React from 'react';
import '../css/price.css'
import FAQPR from './faqpr';
import Pricingtool from './pricingtool';


function Price() {
    return(
        <div className="container-fluid row"> 
        {/* <div className=""> */}
        <div className="col-md-9 mainhai">
         <h2> Plans, Pricing & Key Terms</h2>

         <p className="ppk">Flexible plans to support your growth. Start with just one batch.
            <br/> Grow to multiple batches. Pay only for the batch hours that you use.</p>

        <div className="table">
            <table className="tb"> 
             <thead> 
                 <tr> 
                     <th scope="col"></th>
                     <th scope="col" className="tc">
                         <h3 className="thm">Monthly Plans</h3>
                         <p className="thp">For continuous, recurring classes.<br/>Single or multiple batches</p>
                     </th>
                     <th scope="col" className="tc">
                         <h3 className="thm">Pay-as-you-go Plans</h3>
                         <p className="thp">For trial classes, workshops, <br/> trial classes, workshops, summer camps and crash courses</p>
                     </th>
                 </tr>
             </thead>

             <tbody>

             <tr>
                 <th scope="row" className="th1">Starts from</th>
                 <td className="thp1">₹10,000 per month</td>
                 <td className="thp1">₹5,000 per booking</td>
             </tr>

             <tr>
                 <th scope="row" className="th1">Payment Term</th>
                 <td className="thp1">1 month’s fee, in advance</td>
                 <td className="thp1">Total amount, in advance</td>
             </tr>

             <tr>
                 <th scope="row" className="th1">Security Deposit</th>
                 <td className="thp1">₹10,000 or one month's fee (whichever is higher)</td>
                 <td className="thp1">₹5,000</td>
             </tr>

             <tr>
                 <th scope="row" className="th1">SpaceBoat Registration Fee </th>
                 <td className="thp1">₹5,000</td>
                 <td className="thp1">₹5,000</td>
            </tr>

            <tr>
                <th scope="row" className="th1">Lock-in</th>
                <td className="thp1">3 months</td>
                <td className="thp1">NA</td>
            </tr>

            <tr>
                <th scope="row" className="th1">Notice Period</th>
                <td className="thp1">60 days</td>
                <td className="thp1">NA</td>
            </tr>
             </tbody>
            </table>
        </div> 
        <div className="col-12">                                                                            
        <FAQPR />
        </div>
        </div>

        <div className="col-md-3 mainc">
            
          <Pricingtool />

        </div>
        {/* </div> */}

        </div>
    )
}

export default Price