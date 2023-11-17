import React from 'react'
import {useLocation} from 'react-router-dom';
import image from "./image (5).png"

export default function DeatilsPage() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
    <div className='main-container'>
        <div className='product-page'>

          <div className='left-part'>
            <img src={location.state.item.Image} alt=''></img>
          </div>
          <div className='right-part'>
            <h4 className='p-name'>Battery Operated Stacker</h4>
            <div className='p-d-inline'>
            <span>Application: Dock Use|</span>
            <span>Application: Dock Use|</span>
            <span>Application: Dock Use|</span>
            <span>Application: Dock Use|</span>
            <span>Application: Dock Use|</span>
            <span>Application: Dock Use |</span>
            <span>Application: Dock Use |</span>
            <span>Application: Dock Use |</span>
            <span>Application: Dock Use |</span>
            <span>Application: Dock Use |</span>
         </div>
            <div className='price-div'>
              <div className='flex-price'>
              <p className='spec-title'>Start from :<span className='p-span'> ₹ 1,20,000/<sup>pc</sup></span></p>
              <p className='spec-title'>MQQ :<span className='mqq'>1</span></p>
              </div>
            <button className='get-btn' onClick={()=>{}}><span></span>Get Quotation</button>
            </div>
    
            <div className='p-specs'>
              <div className='left-spec'>
              <p className='spec-name'>Capacity :<span className='spec-value'>200-300kg</span></p>

                <p className='spec-name'>Driven Type :<span className='spec-value'>Hydraulic</span></p>

                <p className='spec-name'>Certification :<span className='spec-value'>CE Certification</span></p>

                <p className='spec-name'>Warranty :<span className='spec-value'>1 Year</span></p>

                <p className='spec-name'>Color :<span className='spec-value'>Grey</span></p>

              </div>
              <div className='right-spec'>

              <p className='spec-name'>Application :<span className='spec-value'>Dock Use</span></p>


                <p className='spec-name'>Type :<span className='spec-value'>Portable Semi Automatic</span></p>

                <p className='spec-name'>shape /style :<span className='spec-value'>Rectangular/Flat</span></p>
                <p className='spec-name'>Material :<span className='spec-value'>Iron, Steel</span></p>
              </div>
            </div>
            <div className='spec-value'>
              <p className=''>Preferred Buyer From</p>
              <p className='spec-name'>Location <span className='spec-value'>India(Karnataka)</span></p>
              </div>
              <div class="banner-btn">
            <button onClick={()=>{}}><span></span>REQUEST TO CALL</button>
            <button onClick={()=>{}}><span></span>SEND ENQUERY</button>
        </div>
          </div>
        </div>
    </div>
    </>
  )
}

