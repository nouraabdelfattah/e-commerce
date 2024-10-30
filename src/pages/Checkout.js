import React , { useContext } from 'react'
import CartItem from "../components/CartItem";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
export default function Checkout() {
    const { cart,total,setCart } = useContext(CartContext);
    const handleConfirm=()=>{
window.alert("Thank you for shopping .See you soon")
        setCart([])
    }
  return (
    <div className='chec-parent'>
    <div className='container row p-5 justify-content-center mb-3 '>
        <h2 className=' border-bottom mb-5 pb-3'>See you next time!</h2>
     <div className='col-md-6 border  p-3 check '>
     <label>Name:</label>
            <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your Name'
           
            />
             <label>Email:</label>
            <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your Email'
           
            />
            <label>Phone:</label>
            <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your Phone' 
           
            />
            <label>City:</label>
            <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your city' 
           
            />
            <label>Street:</label>
            <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your street' 
            />
            <div className='row'>
                <img className='col-2' width={110} src='/png-transparent-qnb-group-doha-bank-finance-investment-or-blue-text-trademark.png' alt=''/>
            <img className='col-3' width={100} src='/images.jpeg' alt=''/>
          <img className='col-2' width={100} src='/images.png' alt=''/>
          <img className='col-2' width={100} src='/ryPHXDYGg-main.jpeg' alt=''/>
       <Link  className='check-total text-center mb-3' to={"/"}>   <button className='check-total' onClick={()=>handleConfirm()}>Confirm</button></Link>
          </div>
     </div>
     <div className='col-md-4 border-top border-end border-start'>
     <div className="cartItems">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <p className='border-top p-1 text-danger'>Total: ${parseFloat(total).toFixed(2)} </p> 
     </div>
    </div>
    </div>
  )
}
