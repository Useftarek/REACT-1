import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import "./styles/components/customerCard/customerCard.css"
import CustomerSection from './components/customerSection/CustomerSection'
export default function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <CustomerSection />
      <Footer />
    </div>
  )
}
