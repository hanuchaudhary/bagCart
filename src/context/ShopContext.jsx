import React, { createContext, useState } from "react";
import AllProducts from "../components/AllProduct"; 

export const ShopContext = createContext(null);

const getDefaultCart= ()=>{
  let cart = {};
  for(let i =0; i< AllProducts.length+1; i++){
    cart[i]=0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  let [cartElems, setCartElems] = useState(getDefaultCart());
  
  let addToCart = (elem)=>{
    setCartElems((prev)=> ({...prev,[elem]:prev[elem]+1}))
    // console.log(cartElems);
  }
  let delFromCart = (elem)=>{
    setCartElems((prev)=> ({...prev,[elem]:prev[elem]-1}))
  }
  let removeFromCart = (elem)=>{
    setCartElems((prev)=> ({...prev,[elem]: 0}))
  }

  const itemcount = ()=>{
    let count =0;
    for(const elem in cartElems){
      if(cartElems[elem]>0){
        count+= cartElems[elem];
      }
    }
    console.log(count);
    return count;
  }

  let totalCartValue = ()=>{
    let totalAmount = 0;
    for(let elem in cartElems){
      if (cartElems[elem]>0) {
        let elemInfo = AllProducts.find((products)=> products.id===parseInt(elem))
        totalAmount += elemInfo.price * cartElems[elem]
      }
    }
    return totalAmount
  }

  const contextValue = { products: AllProducts , cartElems, addToCart, delFromCart, removeFromCart ,itemcount, totalCartValue}; 

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
