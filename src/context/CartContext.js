import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [fav,setFav]=useState([])
const [total ,setTotal]=useState(0)
const [alert,setAlert]=useState(false)
const [alert2,setAlert2]=useState(false)
const [message,setMessage]=useState("")
const [message2,setMessage2]=useState("")
useEffect(()=>{
  const total = cart.reduce((acc,curr)=>{
    return acc+curr.price*curr.amount
  },0)
  setTotal(total)
},[cart])
  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };
    // Check if the item is already in the cart
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });
      
      setCart(newCart);
     
    } else {
      setCart([...cart, newItem]);
    }
    setAlert2(true)
    setMessage2("Item added to Cart successfuly")
    setTimeout(()=>{
      setAlert2(false)
    },1000)
    setTimeout(()=>{
      setMessage2("")
    },1000)
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(newCart);
  };
const decreseAmount=(id)=>{
const newCart=cart.map((item)=>{
  if(item.id===id){
    return { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 };
  }
  return item
})
setCart(newCart)

}


// add to fav
const addToFav = (product) => {
  // Check if the item is already in the fav
  const favtItem = fav.find((item) => item.id === product.id);
  
  if (favtItem) {
    setAlert(true)
    setMessage("Item is already in the favorites");
    setTimeout(()=>{
      setAlert(false)
    },1000)
    return;
  } 
  
  // If the item is not in the favorites, add it
  setFav([...fav, product]);
  
  
  setAlert(true)
  setMessage("Item added to favoutrites successfuly")
  setTimeout(()=>{
    setAlert(false)
  },1000)

  setTimeout(()=>{
    setMessage("")
  },1000)
};

const removeFromFav = (id) => {
  setFav((prevFav) => prevFav.filter(item => item.id !== id));
};




  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount,decreseAmount,addToFav,removeFromFav,fav,alert,message,message2,alert2 ,total,setCart}}>
      {children}
    </CartContext.Provider>
  );
}
