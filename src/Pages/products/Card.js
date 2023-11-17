import React from 'react'

export default function Card(props) {
  return (
    <div className='product-card'>

            <h3>{props.categories.categorieName}</h3>
            <div className='sub-cat-sec'>
              <div className='sub-card'>
                <img src={props.categories.categoryItems[0].Image} alt='img'></img>
                <h6>{props.categories.categoryItems[0].Name}</h6>
              </div>
              <div className='sub-card'>
              <img src={props.categories.categoryItems[1].Image} alt='img'></img>
              <h6>{props.categories.categoryItems[1].Name}</h6>
              </div>
              <div className='sub-card'>
              <img src={props.categories.categoryItems[2].Image} alt='img'></img>
              <h6>{props.categories.categoryItems[2].Name}</h6>
              </div>
              <div className='sub-card'>
              <img src={props.categories.categoryItems[3].Image} alt='img'></img>
              <h6>{props.categories.categoryItems[3].Name}</h6>
              </div>
            </div>

            <div class="banner-btn">
            <button onClick={()=>{props.handleclick()}}><span></span>See More</button>
        </div>
          
        </div>
  )
}
