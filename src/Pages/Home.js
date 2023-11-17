import React from 'react'
import feature from "./image (5).png"
import pro1 from "../img/img-1.jpg"
import pro2 from "../img/img-2.jpg"
import pro3 from "../img/img-3.jpg"
import pro4 from "../img/pic-1.jpg"
import pro5 from "../img/pic-2.jpg"
import pro6 from "../img/pic-3.jpg"
import Produts from './products/produts'
import Services from "./products/Services"



export default function Home() {
  return (
    <>
    <section id="banner">
        <div class="banner-text">
        {/* <h1>MHE Movers</h1>
        <h4>Materials Handling Solutions Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptate provident </h4> */}
    </div>
    </section>

   

<section id="service">
    <div class="title-text">
        <h1>Our Products</h1>
    </div>
<Produts/>
</section>

<section id="service">
    <div class="title-text">
        <h1>Our Services</h1>
    </div>
<Services/>
</section>

<section id="feature">
    <div class="title-text">
        <h1>Why only Us</h1>
    </div>
    <div class="feature-box">
        <div class="features">
            <h3>Quality Assurance</h3>
            <div class="fdisc">
                <div class="ficon">
                    <i class="fa fa-shield" ></i>
                </div>
                <div class="ftext">
                <p>As a organization dedicated to quality, our goal is to provide customers with an extensive selection of top-of-the-line Material Handling Equipment. We ensure that only the finest raw materials are utilized in the production of our products, adhering to global quality standards with the utmost care.</p></div>
            </div>
        
        
            <h3>Client Satisfaction</h3>
            <div class="fdisc">
                <div class="ficon">
                    <i class="fa fa-check-square-o"></i>
                </div>
                <div class="ftext">
                    <p>Our organization's foremost objective is to achieve the highest level of customer satisfaction. To ensure that our customers receive a selection of exceptionally efficient and long-lasting Material Handling Equipment from us, we rigorously inspect these products before they are sent to our clients.
                     </p>
                </div>
            
            </div>           
        
            <h3>Our Speciality</h3>
            <div class="fdisc">
                <div class="ficon">
                    <i class="fa fa-inr"></i>
                </div>
                <div class="ftext">
                    <p>The secure transportation of heavy-duty goods necessitates the use of advanced material handling equipment. Recognizing the demand for reliable material handling systems across different industries, we are introducing cutting-edge material handling systems. To develop these systems, we have made significant investments in advanced production technologies.
                         </p>
                </div>
            </div>
        </div>
        
        <div class="features-img">
            <img src={feature} alt=""></img>
        </div>
    </div>
</section>
    </>

  )
}
