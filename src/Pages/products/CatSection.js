import React from 'react'
// import MinimanualStacker from './imgs/image (5).png'
import Allproductcard from './Allproductcard'
import { useNavigate } from "react-router-dom"

export default function CatSection(props) {

    let history = useNavigate();
    function handleclick(ind){
      history("/product-details",{state:{
        categorieName:props.categories.categorieName,
        item:props.categories.categoryItems[ind]
      }})
    }
  return (
    <>
    <div className='line-yellow'></div>
    <div className='cat-heading'>
        <h3>{props.categories.categorieName}</h3>
    </div>

<div className='product-main '>
    {props.categories.categoryItems.map((item,index)=>{
        return(
            <Allproductcard item={item} index={index} key={index} handleClick={handleclick}/>
        )
    })}
</div>


</>
  )
}
