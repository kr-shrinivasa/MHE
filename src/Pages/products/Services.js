import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function Produts() {
    let history = useNavigate();
    function handleclick(){
      history("/services")
    }
    
  return (
    <>
    <div className='serv-main'>
        {/* {ProductsList.map((categories,index)=>{
            return(
                <Card categories={categories} index={index} handleclick={handleclick}></Card>
            )
        })} */}
        <div className='serv-card'>
            <h3>ForkLift Maintenance Services</h3>
            <img src='' alt=''></img>
            <div class="banner-btn">
            <button onClick={handleclick}><span></span>See More</button>
        </div>

        </div>
        <div className='serv-card'>
        <h3>ForkLift Repairing Services</h3>
            <img src='' alt=''></img>
            <div class="banner-btn">
            <button onClick={handleclick}><span></span>See More</button>
        </div>
        </div>

    </div>

    <div></div>
    </>
  )
}