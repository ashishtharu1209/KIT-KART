import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>KIT KART</h1>
            <h4>KIT KART is an Nepali eCommerce company that was established in 1995. We are the world’s leading consumer-to-consumer marketplace and one of the world’s leaders in business-to-consumer retail. 
              we deliver to about 190 countries and territories around the world. We have about 132 million buyers around the world. </h4>
           
          </div>

       <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Basantapur,Kathmandu,Nepal</li>
              <li>Email:kitkart@gmail.com</li>
              <li>Phone: 998707978</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
