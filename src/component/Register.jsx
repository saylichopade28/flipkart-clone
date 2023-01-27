import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [userData, setUserData] = useState();
    const router = useNavigate();
    useEffect(() => {
        console.log(userData,"userData updated!")
        if (userData) {
            const toStoreUserData = JSON.stringify(userData)
            localStorage.setItem("userData", toStoreUserData)
            toast.success("submit")
            console.log("userData",toStoreUserData)
        }
    }, [userData]);
    useEffect(()=>{
        const localStorageData = JSON.parse(localStorage.getItem("isUserLoggedIn"));
        if(localStorageData){
        router('/');
        }
         },[])

    function submitHandle(e) {
        e.preventDefault();
        setUserData({ name: "sayli", email: "saylichopade28@gmail.com", password: "123456" })
    }
return (
        <div id="id101"  >
            <h1>Register page</h1>
            <div >
            <form onSubmit={submitHandle}>
                <label>Name</label><br></br>
                <input type="text" placeholder='Enter your Name' /><br></br>
                <label>Email</label><br></br>
                <input type="email" placeholder='Enter your Email' /><br></br>
                <label>Password</label><br></br>
                <input type="password" placeholder='Enter your Password' /><br></br>
                <input  id ="but" type="submit" />
            </form>
            </div>
            <a href='./login'>Already User?</a>
        </div>
    )
}
export default Register
