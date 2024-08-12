import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

import { Link } from 'react-router-dom';

export default function Fav() {
  const {fav,removeFromFav}=useContext(CartContext)
 
 

  return (
    <div className='fav row  contianer mb-5 p-5'>
      <h2 className='text-center '>Favorites</h2>
     
      {fav && fav.length > 0 ? (
        fav.map((item) => (
   
<div className="col-lg-3 mt-3 ms-1 col-md-5 col-12 border p-3  text-center justify-content-center pt-5" key={item.id}>
    <Link className=" col-3" to={`/product/$item.{id}`}>
    <img width={70}  src={item.image} alt={item.title} />
    </Link>
    <div className='mt-3' >
     <Link className=' cart-title' to={`/product/${item.id}`}>
      <h4 className=' cart-title'> {item.title}</h4>
    </Link>
  
   <div className="item-details ">
        <div className='text-danger'>Price: ${item.price}</div>
       
    </div>
    <button className='mt-2 submit border-0 p-1 w-50' onClick={()=>removeFromFav(item.id)}>Remove</button>
   </div>
   
      </div>
  
     
        ))
      ) : (
        <p className='text-center'>No favorites yet!</p>
      )}
    </div>
  );


  
}
