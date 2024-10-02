import React from 'react'
import CustomerCard from '../customerCard/CustomerCard'
import "../../styles/components/customerCard/customerCard.css"
export default function CustomerSection() {

    const mountains_data = [
      {
        title: "Himalayas1",
        id : 1,
        img: "https://img.freepik.com/free-photo/snowy-mountainous-nature-landscape_23-2150706081.jpg?t=st=1727624180~exp=1727627780~hmac=873e8ad4e581f4850dbf76dc45e9c28a78b67256dd8227571a7cf63349450b5b&w=1380"
      },
      {
        title: "Himalayas2",
        id : 2,
        img: "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787826.jpg?t=st=1727624143~exp=1727627743~hmac=540d68aa064362aef8f34c2e74a1c00748cd9dd2fbaa070d022fdbc2f8e852dc&w=1380"
      },
      {
        title: "Himalayas3",
        id : 3,
        img: "https://img.freepik.com/free-photo/beautiful-nature-landscape-with-river-mountains_23-2150706043.jpg?t=st=1727624257~exp=1727627857~hmac=c6f57a823ec5d9a779a9fc96020cf822c692edf2fdf3475127b92534849235e8&w=1380"
      },
      {
        title: "Himalayas4",
        id : 4,
        img: "https://img.freepik.com/free-photo/snowy-mountainous-nature-landscape_23-2150706081.jpg?t=st=1727624180~exp=1727627780~hmac=873e8ad4e581f4850dbf76dc45e9c28a78b67256dd8227571a7cf63349450b5b&w=1380"
      },
      {
        title: "Himalayas5",
        id : 5,
        img: "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787826.jpg?t=st=1727624143~exp=1727627743~hmac=540d68aa064362aef8f34c2e74a1c00748cd9dd2fbaa070d022fdbc2f8e852dc&w=1380"
      },
      {
        title: "Himalayas6",
        id : 6, 
        img: "https://img.freepik.com/free-photo/beautiful-nature-landscape-with-river-mountains_23-2150706043.jpg?t=st=1727624257~exp=1727627857~hmac=c6f57a823ec5d9a779a9fc96020cf822c692edf2fdf3475127b92534849235e8&w=1380"
      },
      
    ]
  
  return (
    <div className='customerSection'>
        <h3>The Dstination</h3>
        <div className="customerCard_container">
          {mountains_data.map((item, index)=>
          <CustomerCard key={index} title = {item.title} img={item.img}/>
          )}
          
         
        </div>
    </div>
  )
}
