import React, { useState } from 'react';
import Card from './Card';
import { product } from './data';
import { useNavigate } from "react-router-dom"

export default function Produts() {
    const [ProductsList, setProductsLists] = useState(product);
    let history = useNavigate();
    function handleclick(){
      history("/products")
    }
    
  return (
    <>
    <div className='product-main'>
        {ProductsList.map((categories,index)=>{
            return(
                <Card categories={categories} index={index} handleclick={handleclick}></Card>
            )
        })}
    </div>

    <div></div>
    </>
  )
}
