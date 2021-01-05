import React, { createContext,useReducer } from 'react';
 
import { CartReducer  } from "../GobalCantext/CartReducer";

export const CartCantext=  createContext();


const CartCantextProvider=(props)=>{
    const [cart,dispatch]=useReducer(CartReducer,{shoppingCart:[]
    ,totalPrice:0,qty:0});
    return(
    <CartCantext.Provider value={{...cart,dispatch}}>
        {props.children}
    </CartCantext.Provider>
    );
}
export default CartCantextProvider;