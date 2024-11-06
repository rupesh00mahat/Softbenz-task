import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar flex gap-30 align-center container'>
      <ul className='nav-items'>
        <li className="nav-item font-base"><Link to="/">Home</Link></li>
      </ul>
      <button 
      onClick={()=>{
        let cart = document.querySelector(`.cart`);
        cart.classList.toggle("show-cart");
      }
      }
      className='cart-drawer'>
      <FaCartShopping />
      </button>

    </div>
  )
}

export default Navbar