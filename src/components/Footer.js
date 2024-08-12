import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='container-fluid  footer mt-5'>
      <div className='container row align-items-center ps-5 justify-content-evenly'>
        <div className='col-md-3 col-12'><img width={100} src='/—Pngtree—simple fashion elegant long dress_5389820.png' alt=''/>
        <p> This is an e-commerce startup in Egypt, run by a passionate team, and supported by creative designers and skilled sellers to produce the best products for our shoppers!</p>
        </div>
        <div className='col-md-3 col-12'>
          <h4>Quik Links</h4>
          <Link  className='d-block text-dark footer-links'to={"/about"}>About</Link>
          <Link className='d-block text-dark footer-links' to={"/contact"}>Contact us</Link>
          <Link className='d-block text-dark footer-links' >Privacy</Link>
          <p>Terms & conditions</p>
        </div>
        <div className='col-md-3 col-12'>
          <h4>Account</h4>
          <Link className='d-block text-dark footer-links' to={"/login"}>Login</Link>
          <Link className='d-block text-dark footer-links' to={"/sign"}> Signup</Link>
          <p>Call us 01033873345</p>
          
        </div>
      </div>
      <div className='text-center copy p-3'>2024 All Rights Reserved</div>
    </div>
  )
}
