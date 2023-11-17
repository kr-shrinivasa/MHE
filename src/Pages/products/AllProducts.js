import React from 'react'
import { product } from './data'
import CatSection from './CatSection'

export default function AllProducts() {
   

  return (
    <>
    <div className='all-product-section'>
    <div className='all-product'>
      <h1>All Products</h1>
      </div>
    {product.map((cats,index)=>{
      return(
        <CatSection categories={cats} index={index} />
      )
    })}
      </div>
      </>

  )
}
 