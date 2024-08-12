import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import Timer from '../components/Timer';
import { TimerProvider } from '../context/TimerContext';
import Slider from '../components/Slider';
import { CartContext } from '../context/CartContext';

export default function Home() {
  const { products } = useContext(ProductContext);
const {alert,message,message2,alert2}=useContext(CartContext)

  const filteredProducts = products.filter(item => {
    return item.category === "women's clothing" || item.category ==="men's clothing" ;
  });

  const sliderItems = products.filter(item => {
    return item.category === "jewelery";
  });

  const [search, setSearch] = useState([]);

  // Update search state when products change
  useEffect(() => {
    setSearch(filteredProducts);
  }, [products]);

  const searchAll = () => {
    setSearch(filteredProducts);
  };

  const searchMen = () => {
    const men = products.filter(item => item.category === "men's clothing");
    setSearch(men);
  };

  const searchWomen = () => {
    const women = products.filter(item => item.category === "women's clothing");
    setSearch(women);
  };

  const searchJewel = () => {
    const jewel = products.filter(item => item.category === "jewelery");
    setSearch(jewel);
  };

  return (
    <div>
      <Hero />
      <TimerProvider>
        <Timer />
      </TimerProvider>
{alert&&
<>
<div className='mess p-3'>{message}</div>
</>
}
{alert2&&
  <div className='mess mt-5 p-3'>{message2}</div>
}
      <div className="container p-3">
        <section className="container py-5">
          <div className="container mx-auto">
            <div className="row container m-auto">
              <h2 className="title mt-5 border-bottom ">New Brand</h2>
              {sliderItems.map(product => (
                <Slider product={product} key={product.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <div className="container p-3" id='product'>
        <section className="container py-5">
          <div className="container mx-auto">
            <div className="row">
              <h2 className="title mt-5 border-bottom pb-4 mb-5">Search by category</h2>
             <div className='container row justify-content-center mb-5'> 
              <button className='col-2 me-1 mb-1 search-btn' onClick={searchAll}>All</button>
              <button className='col-3 me-1 mb-1 search-btn' onClick={searchMen}>Men</button>
              <button className='col-3 me-1 mb-1 search-btn' onClick={searchWomen}>Women</button>
              <button className='col-3  search-btn' onClick={searchJewel}>Jewelery</button>
             </div>
              {search.map(product => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
