import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { BsBag } from 'react-icons/bs';
import CartItem from "./CartItem";
import { CartContext } from '../context/CartContext';

export default function SideBar() {
  const { cart, clearCart,total } = useContext(CartContext);
if(!cart){
  return<div>No items in the cart</div>
}
  return (
    <div>
      <button className="btn cart-iqon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <BsBag />
        <div className='cart-length'>{cart.length}</div>
      </button>
      <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header flex justify-content-between align-items-center">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Shopping Bag({cart.length}) </h5>
          <button type="button" className="btn arrow" data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontWeight: "bold" }}>
            <IoMdArrowForward />
          </button>
        </div>
        <div className="container">
          <hr />
        </div>
        <div className="offcanvas-body">
          <div className="cartItems">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className='sidebar-bottom p-2 border-top'>
            <div className='row justify-content-between'>
              <div className='col-9'>
                <span>Total: </span> ${parseFloat(total).toFixed(2)}
              </div>
              <div className='col-1 clear-cart pb-1' onClick={clearCart}>
                <FiTrash2 />
              </div>
            </div>
          {total&& <div className='text-center mt-5'>
          <Link to={"/check"}> <button className='w-75  p-1 mt-3 cart-button'>Chekout</button></Link>
           </div>}
          </div>

        </div>
      </div>
    </div>
  );
}
