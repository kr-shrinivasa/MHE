import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route  } from "react-router-dom";
import Home from './Pages/Home';
import Sevices from './Pages/products/Services';
import ContactForm from './Pages/ContactForm';
import AllProducts from './Pages/products/AllProducts';
import DeatilsPage from './Pages/products/DetailsPage';



function App() {
  return (
    <>
      <Navbar></Navbar>     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={< AllProducts/>} />
        <Route path="/services" element={< Sevices/>} />
        <Route path="/contact-us" element={< ContactForm/>} />
        <Route path="/product-details" element={< DeatilsPage/>} />
      </Routes>
      <Footer/>
      </>
    
  );
}

export default App;
