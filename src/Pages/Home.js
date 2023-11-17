import React from 'react'
import feature from "./image (5).png"
import Produts from './products/produts'
import Services from "./products/Services"
import CarouselPage  from './CarouselPage'
import Contactus from "./Contactus"



export default function Home() {
    // const [isClickOnWatsApp, setisClickOnWatsApp] = useState(false)

    function onWatsAppClick(){
        //  setisClickOnWatsApp(!isClickOnWatsApp)
        window.open("https://api.whatsapp.com/send?phone=916360783290", "_blank")
    }
    
  return (
    <>
    {/* <section id="banner">
        <div className="banner-text">
        <h1>MHE Movers</h1>
        <h4>Materials Handling Solutions Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptate provident </h4>
    </div>
    </section> */}
    <CarouselPage/>

   

<section id="service">
    <div className="title-text">
        <h1>Our Products</h1>
    </div>
<Produts/>
</section>

<section id="service">
    <div className="title-text">
        <h1>Our Services</h1>
    </div>
<Services/>
</section>

<section id="feature">
    <div className="title-text">
        <h1>Why only Us</h1>
    </div>
    <div className="feature-box">
        <div className="features">
            <h3>Quality Assurance</h3>
            <div className="fdisc">
                <div className="ficon">
                    <i className="fa fa-shield" ></i>
                </div>
                <div className="ftext">
                <p>As a organization dedicated to quality, our goal is to provide customers with an extensive selection of top-of-the-line Material Handling Equipment. We ensure that only the finest raw materials are utilized in the production of our products, adhering to global quality standards with the utmost care.</p></div>
            </div>
        
        
            <h3>Client Satisfaction</h3>
            <div className="fdisc">
                <div className="ficon">
                    <i className="fa fa-check-square-o"></i>
                </div>
                <div className="ftext">
                    <p>Our organization's foremost objective is to achieve the highest level of customer satisfaction. To ensure that our customers receive a selection of exceptionally efficient and long-lasting Material Handling Equipment from us, we rigorously inspect these products before they are sent to our clients.
                     </p>
                </div>
            
            </div>           
        
            <h3>Our Speciality</h3>
            <div className="fdisc">
                <div className="ficon">
                    <i className="fa fa-inr"></i>
                </div>
                <div className="ftext">
                    <p>The secure transportation of heavy-duty goods necessitates the use of advanced material handling equipment. Recognizing the demand for reliable material handling systems across different industries, we are introducing cutting-edge material handling systems. To develop these systems, we have made significant investments in advanced production technologies.
                         </p>
                </div>
            </div>
        </div>
        
        <div className="features-img">
            <img src={feature} alt=""></img>
        </div>
    </div>
</section>
<div className='wats-app'>
		<div className="whatsapp-sec">
		<button className="whatsappBtn" onClick={onWatsAppClick}><i className="fa fa-whatsapp"></i> <span className="whTxt">WhatsApp Us</span></button>
		</div>
        <div className="call-sec">
		<a className="whatsappBtn callbtn" href='tel:+91-9632236736'  ><i className="fa fa-phone"></i> <span className="whTxt">Call</span></a>
		</div>
</div>
    <div className='home-con'>
    <Contactus/>
    </div>
    </>

  )
}
