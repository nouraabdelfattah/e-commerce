import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BiShowAlt } from "react-icons/bi";

export default function Slider({ product }) {
  const { addToCart, addToFav } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  const navigate = useNavigate();

  // Manage the user state
  const [user, setUser] = useState(null);

  // Effect to update user state if localStorage changes
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser && currentUser !== "null") {
      const parsedUser = JSON.parse(currentUser);
    
      setUser(parsedUser);
    } else {
      setUser(null);
    }

    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('currentUser');
     

      if (updatedUser && updatedUser !== "null") {
        const parsedUpdatedUser = JSON.parse(updatedUser);
        console.log("Parsed updated user:", parsedUpdatedUser);
        setUser(parsedUpdatedUser);
      } else {
     
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleAddToCart = () => {
    console.log("User state in handleAddToCart:", user);
    if (user) {
   
      addToCart(product);
    } else {
   
      navigate('/login');
    }
  };

  const handleAddToFav = () => {
  
    if (user) {
  
      addToFav(product);
    } else {
  
      navigate('/login');
    }
  };

  return (
    <>
      <div className='container col-12 col-md-4 col-lg-2 mt-5 '>
        <div className='container product-jewel mb-4 '>
          <div className='products-item'>
            {/* image */}
            <div className='product-img mx-auto'>
              <img width={80} src={image} alt="" />
            </div>
            {/* buttons */}
            <div className='products-btn p-2'>
              <button className='border-bottom' onClick={handleAddToCart}>
                <TiShoppingCart />
              </button>
              <button className='border-bottom' onClick={handleAddToFav}>
                <CiHeart />
              </button>
              <Link className='border-bottom' to={`/product/${id}`}>
                <BiShowAlt />
              </Link>
            </div>
          </div>
        </div>
        {/* category & title & price */}
        <div className='small' style={{ color: "gray" }}>{category}</div>
        <Link className='product-title ' to={`/product/${id}`}>
          <h2 className='product-title mt-2'>{title}</h2>
        </Link>
        <div className='mb-3' style={{ fontWeight: "bold" }}>${price}</div>
      </div>
    </>
  );
}
