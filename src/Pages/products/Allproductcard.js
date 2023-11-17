import React from 'react'

export default function Allproductcard(props) {
  return (
    <>
    <div className='product-card product-card-border'>
        <div className='all-pro-image'> 
        <img src={props.item.Image} alt='img'></img>
        </div>
        <div className='card-details'>
            <h6 className='all-pro-name'>{props.item.Name}</h6>
            {props.item.Capacity &&
            <p className='card-specs'><span className='spec-heading'>Capacity :</span>{props.item.Capacity}</p>
            }
            {props.item.DrivenType &&
            <p className='card-specs'><span className='spec-heading'>DrivenType :</span>{props.item.DrivenType}</p>
            }
            {props.item.Warranty &&
            <p className='card-specs'><span className='spec-heading'>Warranty :</span>{props.item.Warranty}</p>
            }
            
            <div class="banner-btn btn-margin">
            <button onClick={()=>{props.handleClick(props.index)}}><span></span>See Details </button>
        </div>
        </div>
    </div>

    </>
  )
}
