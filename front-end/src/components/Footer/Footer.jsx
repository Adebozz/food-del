import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ipsum nam illo, earum autem odit. Ullam esse minus fugit consequatur. Deleniti obcaecati fugit optio amet laudantium nesciunt officia itaque vel?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privary Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get IN TOUCH</h2>
            <ul>
                <li>+234-802-276-7313</li>
                <li>Contact@AdebossStores.come</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 &copy; AdebossStores.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
