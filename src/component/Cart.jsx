import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Cart = () => {
    const [cartProducts, setCartProducts] = useState();
    const router = useNavigate();
    useEffect(() => {
        const cartProFromStorage = JSON.parse(localStorage.getItem("cartProducts"))
        if (cartProFromStorage) {
            setCartProducts(cartProFromStorage)
        } else {
            toast.error("no product found")
        }
    }, [])
    useEffect(() => {
        const isUserLoggedIn = JSON.parse(localStorage.getItem("userData"));
        if (!isUserLoggedIn) {
            router("/Login")
        }
    }, [])
    function deleteProduct(e) {
        // const filteredProduct = [];
        //     for (var i = 0; i < cartProducts.length; i++) {
        //         if (cartProducts[i].image !== e.image) {
        //             filteredProduct.push(cartProducts[i])
        //         }
        //     }
        //     setCartProducts(filteredProduct)  
        const proFromStorage = JSON.parse(localStorage.getItem("cartProducts"))
        // console.log(proFromStorage)
        var newArray = [];
        for (var i = 0; i < proFromStorage.length; i++) {
            // console.log(e.image == proFromStorage[i].image)
            if (e.image !== proFromStorage[i].image) {
                newArray.push(proFromStorage[i]);
            }
        }
        localStorage.setItem("cartProducts", JSON.stringify(newArray));
        setCartProducts(newArray);
        toast.success("Product Deleted")
    }
    return (
        <div>
            <Navbar />
            <h1>cart page</h1>
            <button onClick={() => router('/Product')}> product page</button>

            {cartProducts && cartProducts.map((e, i) => (
                <div key={i}>
                    <img src={e.image} alt="movies poster" />
                    <button onClick={() => deleteProduct(e)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default Cart
