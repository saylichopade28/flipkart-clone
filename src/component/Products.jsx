import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './Products.css'
import Navbar from './Navbar'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        async function gettingData() {
            const { data } = await axios.get("https://fakestoreapi.com/products")
            console.log(data, "data here")
            setMovies(data);
        }
        gettingData();
    }, [])
    function addToCart(e){
        // console.log(e)
    const proFromLocalStorage = JSON.parse(localStorage.getItem("cartProducts")) || [];
        proFromLocalStorage.push(e)
        localStorage.setItem("cartProducts",JSON.stringify(proFromLocalStorage))
        toast.success("product added!")
    }
    function addToWishlist(e){
        console.log(e)
     var proFromLocalStorage = JSON.parse(localStorage.getItem("cartProducts")) ||[];
        proFromLocalStorage.push(e)
        localStorage.setItem("cartProducts", JSON.stringify(proFromLocalStorage))
        toast.success("product added!")
    }

    return (
        <div id="screen">
            <Navbar />

            <div id="topDiv">
                <div id="leftSide">
                    <b>Filter</b>
                
                </div>
                <div id="rightSide">
                    {movies && movies.map((e, i) => (
                        <div key={i} id="main">
                            <div id="prop" >
                                <img src={e.image}/>
                            </div>
                            <div id="class">
                            <p>Title:{e.title}</p> 
                               <p>Price:{e.price}</p>

                            </div>
                            <div>
                            <button id="btn1" onClick={()=>addToCart(e)} >Add to Cart</button><br></br>
                               <button id="btn2" onClick={()=>addToWishlist(e)} >Add to Wishlist</button>
</div>
                             
                            



                        </div>


                    ))}
                </div>
            </div>

        </div>
    )
}
export default Products
