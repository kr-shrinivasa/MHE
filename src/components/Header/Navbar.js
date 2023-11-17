import "./Navbar.css"
import  { useState } from 'react'
import Logo from "./image__3_-removebg-preview.png"
import india from "./map-removebg-preview.png"


import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
    
    const [isopen, setisopen] = useState(false)
    function handlebars(){
        isopen ?
        setisopen(false):setisopen(true)
        // console.log("clicked")
    }
    return (
        <>
        
        <nav className='nav-list '>
            <div class="llogo">
            <div className="logo-sec">
        <img src={Logo} alt="logo" class="logo">
            </img>
        <h4>Materials Handling Equipments</h4>
        </div>

        <div className="right-logo">

            <img src={india} alt="img"></img>
            <div>
            <h4>MHE Movers Ltd.</h4>
            <h4>GSTN1234567890</h4>
            </div>
        </div>
        </div>


                <div id="menubtn" >
                    {isopen ? <i class="fa fa-close"onClick={handlebars} ></i>:
                <i class="fa fa-bars" onClick={handlebars}></i> }
                </div>
            
            <ul className={`list-items ${isopen? " list":""} ` } >
                <NavLink to={'/'} className='Nav_link' activeClassName='activeRoute'><span></span>Home</NavLink>
                {/* <NavLink to={'/about'} className='Nav_link' activeClassName='activeRoute'><span></span>About</NavLink> */}

                <NavLink to={'/products'} className='Nav_link' activeClassName='activeRoute'><span></span>Products</NavLink>
                <NavLink to={'/services'} className='Nav_link' activeClassName='activeRoute'><span></span>Services</NavLink>

                <NavLink to={'/contact-us'} className='Nav_link' activeClassName='activeRoute'><span></span>Contact Us</NavLink>
            </ul>

        </nav>   
        </>         
    )
}

