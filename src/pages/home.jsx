import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import { EcommerceStore } from '../store/store';

function Home() {
const {state, dispatch} = useContext(EcommerceStore);
console.log(state);

const [totalPrice, setTotalPrice] = useState(0);


useEffect(()=>{
  let newPrice = 0;
  state.cart.forEach(({price})=>{
    newPrice = newPrice+price;
  })
  setTotalPrice(newPrice);
},[state.cart])

  return (
    <div className='relative'>
      <Navbar />
      <div className="container">
      <Outlet />
      </div>
      <div className="cart">
        <h2 className='text-center'>Cart</h2>
        {state.cart && state.cart.map(({title, price, images}) => {
          return <div className="cart-item flex align-center justify-between">
            <img src={images[0]} alt="" className='rounded-sm' />
            <div className="title-and-quantity flex-cols">
              <h4 className="title">
                {title.slice(0,30)}...
              </h4>
              <div className="quantity flex align-center gap-5">
               
              </div>
            </div>
            <div className="price">Rs. {price}</div>
          </div>
        })}
        <h3 className='text-center'> Total : {totalPrice}</h3>
      </div>
    </div>
  )
}

export default Home