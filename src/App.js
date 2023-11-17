import './App.css';
import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
// import Imagebox from './components/body/Imagebox';
// import PhotoBox from './components/gallary/PhotoBox';
// import Gallaryscroll from './components/scroll/Gallaryscroll';
import { Routes, Route  } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
// import Products from './Pages/Products';
import Sevices from './Pages/products/Services';
import Contactus from './Pages/Contactus';
import AllProducts from './Pages/products/AllProducts';
import DeatilsPage from './Pages/products/DetailsPage';

// import About from './components/about/About';
// import Tensor from './components/tensor flow/Tensor';
// import Login from './components/login/Login';

function App() {
  return (
    <>
      <Navbar></Navbar>     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={< AllProducts/>} />
        <Route path="/services" element={< Sevices/>} />
        <Route path="/contact-us" element={< Contactus/>} />
        <Route path="/product-details" element={< DeatilsPage/>} />
        
      </Routes>
      <Footer/>
      </>
    
  );
}

export default App;
