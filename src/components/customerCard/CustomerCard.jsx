import React from 'react'
export default function CustomerCard({title,img}) {
    
  return (
    <div className='customerCard'>
      <div className="customerCard_image">
        <img src= {img} />
        
      </div>

      <div className="customerCard_Content">
      <h1> {title} </h1>
      </div>
    </div>
  )
}
