import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import './Navbar.css';


const Navbar = () => {
  const[userName , setUserName] = useState();
  useEffect(()=>{
  const dbUser = JSON.parse(localStorage.getItem("userData")) 
  if( dbUser ){
    setUserName(dbUser.name)
  }
  },[] )
 function logOut(){
  localStorage.removeItem("userData");
  localStorage.removeItem("isUserLoggedIn");
  localStorage.removeItem("cartProducts");

  setUserName("");
toast.success("logout successful!");
 }
  return (
    <div>
      <div id="navbar">
        <h2>Flipkart</h2>
        <input type="text" placeholder='Search for Products, brands and more' />
        <button>Log in</button>
        <p>Become a Seller</p>
        <div id="div1">
          <select>
            <option>More</option>
            <option>Notification Prefrence</option>
            <option>24*7 Customer Care</option>
            <option>Advertice</option>
            <option>Download App</option>
          </select>
        </div>
        <div id="icons">
          <i class="fa-solid fa-cart-shopping"></i>
         <a href='./Cart'>Cart</a> 
        </div>
        <span>{userName ? userName: "profile"}</span>
        <span style={{cursor:'pointer'}} onClick={logOut}>{userName ? "logOut":""}</span>
      </div>
    </div>
  )
}

export default Navbar
