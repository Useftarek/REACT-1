import React from 'react'
import "../../styles/components/navbar/navbar.css"
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar_logo">
      <h2>Travalo</h2>
      </div>
      <ul>
        <li>
          <a href="#">Destination</a>
        </li>
        <li>
          <a href="#">our activity</a>
        </li>
        <li>
          <a href="#">trips</a>
        </li>
        <li>
          <a href="#">Who We Are?</a>
        </li>
      </ul>
    </nav>
  )
}
