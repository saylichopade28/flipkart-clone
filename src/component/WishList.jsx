import React,{useEffect} from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast';

const WishList = () => {
    const[wishListProducts , setWishListProducts] = useState();

    useEffect(() =>{
const proFromLocalStorageForWishlist = JSON.parse(localStorage.getItem("wishListProducts"))
setWishListProducts(proFromLocalStorageForWishlist);
    },[])
    function addToCart(e){
const  proArrayFromDb = JSON.parse(localStorage.getItem("cartProducts")) || [];
proArrayFromDb.push(e);
localStorage.setItem("cartProducts", JSON.stringify(proArrayFromDb));

 const proFromLocalStorageForWishlist = JSON.parse(localStorage.getItem("wishListProducts"));
 var newArray = [];
 for(var i =0;i<proFromLocalStorageForWishlist.length;i++){
    if(e.image != proFromLocalStorageForWishlist[i].image ){
newArray.push(proFromLocalStorageForWishlist[i])
    }
 }
 localStorage.setItem("wishListProducts",JSON.stringify(newArray));
 setWishListProducts(newArray);
 toast.success("Product added to Cart")
    }
  return (
    <div>
      <h1>WishList</h1>
      {wishListProducts && wishListProducts.map((e,i)=>(
      <div key={i}>
     <img src={e.image} alt="poster"/>
     <button onClick={() => addToCart(e)}>Add to WishList</button>
      </div>
      )

      )}
    </div>
  )
}

export default WishList
