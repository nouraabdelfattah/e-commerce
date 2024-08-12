import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='container hero'>
      <div className='hero-overlay'></div>
      <div className='hero-content col-md-6 col-10'>
    <h1>Up to 10% discount!! what are you waiting for ? Shop now</h1>
  <a href="#product">  <button className='hero-btn col-md-4 col-6 mt-3 py-1'>Shop</button></a>
      </div>
    </div>
  )
}
