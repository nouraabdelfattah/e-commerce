import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ProductContext} from "../context/ProductContext"
import { CartContext } from '../context/CartContext'
export default function ProductDetails() {
  const {id}=useParams()
  const {products}=useContext(ProductContext)
  const {addToCart}=useContext(CartContext)

  const product =products.find((item)=>{
    return item.id===parseInt(id)
  })
  if(!product){
return <section>Loading....</section>
  }
  const {title,image,price,description}=product
  return (
   <section className='container details d-flex align-items-center'>
     <div className='container  text-center row align-items-center justify-content-center '>
      <div className='col-md-6 col-12 mb-5'>
<img  className='details-img' src={image} alt=''/>
      </div>
      <div className='col-md-6 col-12'>

        <h3 >{title}</h3>
        <div className='text-danger' >${price}</div>
        <p className='text-start text-gray'>{description}</p>
        <button className='submit p-1 w-50 border-0 mt-3' onClick={()=>addToCart(product)}>Add to cart</button>
      </div>
    </div>
   </section>
  )
}
