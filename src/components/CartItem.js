import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose, IoMdRemove} from "react-icons/io"
import { CartContext } from '../context/CartContext';
export default function CartItem({ item }) {
  const { id, title, price, image, amount } = item;
  const {removeFromCart,increaseAmount,decreseAmount}=useContext(CartContext)
  return (
    <>
    <div className="cart-item row align-items-center pb-3 pt-3 border-bottom" key={id}>
     
    <Link className=" col-3" to={`/product/${id}`}>
    <img className='cart-p-img ' src={image} alt={title} />
    </Link>
    <div className='col-9 row justify-content-between align-items-center '>
     <Link className='col-9  cart-title' to={`/product/${id}`}>
      <h4 className=' cart-title'> {title}</h4>
    </Link>
   <IoMdClose className='col-2 close ' onClick={()=>removeFromCart(id)}/>
   <div className="item-details row  p-0 align-items-center justify-content-evenly ">
  
   <div className='col-1 minus ' onClick={()=>decreseAmount(id)}><IoMdRemove/></div>
    <div className='col-1 amount '>{amount}</div>
    <div className='col-1 plus' onClick={()=>increaseAmount(id)}><IoMdAdd/></div>
   
        <div className='col-md-4 col-3 '>Price: ${price}</div>
        <div className='col-md-4 col-3 cart-total p-1 '>Total: ${parseFloat(amount*price).toFixed(2)}</div>
    </div>
   </div>
   
      </div>
     
      </>
    
  );
}
