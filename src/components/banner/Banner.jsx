import React from 'react'
import "../../styles/components/banner/banner.css"
import PaginationBanner from '../paginationBanner/PaginationBanner'
export default function Banner() {
  return (
    <section className='banner_section'>
      <img src="https://img.freepik.com/free-photo/stony-beach-landscape_23-2151716245.jpg?t=st=1727617555~exp=1727621155~hmac=85447cfc3b77e85659e3e2cd31ad36e0e1c0140aa2302eec9c338b6fb83adad9&w=1380"/>
      <div className="overlay_section">
      <div className="banner_content_section">
        <h6 className='font'>explore beautiful</h6>
        <h2>Himchal</h2>
      </div>
      <PaginationBanner />
      </div>
    </section>
  )
}

