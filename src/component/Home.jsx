import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Home.css'
import Header from './Header';
import Navbar from './Navbar';


const Home = () => {
  const [name,setName] = useState();
  const [products ,setProducts]= useState();
  const router= useNavigate();
useEffect(() =>{
 var userData = JSON.parse(localStorage.getItem("userData"));
 console.log(userData,"userData here")
 if(userData){
setName(userData.name) 
setProducts(userData.products);

 }else{
    router('/login')
 }
} ,[])

async function getData(){
    const {data} = await axios.get("https://fakestoreapi.com/products");
    console.log(data,"data here")
}
 return (
    <div>
    <Navbar/>
      <Header/>
      
        <h1>Best of Electronics</h1>
        <div id="row2">
          <img src="https://rukminim1.flixcart.com/image/400/400/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70"/>
          <img src="https://rukminim1.flixcart.com/image/400/400/ke4kjgw0/printer/f/x/7/brother-dcp-b7500d-original-imafuvbyfgt5p9fr.jpeg?q=70"/>
         <img src="https://rukminim1.flixcart.com/image/400/400/xif0q/monitor/r/9/b/va2215-h-full-hd-21-5-va2215-h-viewsonic-original-imaghevavzjwxfhm.jpeg?q=70"/>
         <img src="https://rukminim1.flixcart.com/image/400/400/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70"/>

      </div>
      
    </div>
  )
}

export default Home
