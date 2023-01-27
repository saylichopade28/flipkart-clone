import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
 const[logInData,setlogInData] = useState();
 console.log(logInData, "logInData here");
 const router= useNavigate();

 useEffect(()=>{
if(logInData){
 const registeredData = JSON.parse(localStorage.getItem("userData"))
 if(registeredData ){
   if(registeredData.email===logInData.email && registeredData.password===logInData.password){
    router('/')
    localStorage.setItem("isUserLoggedIn","true")
    toast.success("Login Successful")
   }else{
    toast.error("Enter correct Data")
   }
 }else{
    toast.error("Register first")
 }
}
 },[logInData] )
 useEffect(()=>{
const localStorageData = JSON.parse(localStorage.getItem("isUserLoggedIn"));
if(localStorageData){
router('/');
}
 },[])
const handleSubmit = (e)=>{
        e.preventDefault();
        setlogInData({
            email:"saylichopade28@gmail.com",
            password:"123456"
        })
    }
    return (
    <div id ="logPage">
        <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
<label>Email</label><br></br>
<input type="email" placeholder='Enter your Email'/><br></br>
<label>Password</label><br></br>
<input type="password" placeholder='Enter your Password'/><br></br>
<input type="submit" className='tag'/><br></br>
<a href='/register'>Register First</a>

      </form>
    </div>
  )
}
export default Login
