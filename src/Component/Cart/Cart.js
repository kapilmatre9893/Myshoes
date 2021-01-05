import React, { useContext } from 'react';
import { CartCantext } from "../../GobalCantext/CartCantext";
import { FaPlus ,FaMinus , FaTrash } from "react-icons/fa";
const  Cart = () => {
  const {shoppingCart, totalPrice,qty,dispatch} = useContext(CartCantext);
  return (
  <>

  <div className="cart-container">
      <div className="cart-details" style={{marginTop:'100px'}}>
       { shoppingCart.length>0 ? 
       shoppingCart.map(cart => {
         console.log(cart);
         return(
         <div className="cart" key={cart.id}>
           <span className="cart-image"><img src={cart.image} alt='not found' /></span>
           <span className="cart-product-name">{cart.name}</span>
           <span className="cart-product-price">$ {cart.price}.00</span>
           <span className="inc btn" onClick={() =>dispatch({type:'INC', id: cart.id ,cart}) }><FaPlus /></span>
           <span className="product-quantity">{cart.qty}</span>
           <span  className="dec btn" onClick={() => dispatch({type:'DEC', id: cart.id ,cart})}><FaMinus /></span>
           <span className="product-total-price"> ${cart.price * cart.qty}.00</span>
           <span  className="delete-product btn" onClick={() =>dispatch({type:'DELETE', id: cart.id ,cart})}><FaTrash /></span>
           </div>)
       }) :'sorry your cart is currenty empty'} 
      </div>
      {shoppingCart.length > 0 ? <div className="cart-summary">
        <div className='summary'>
          <h3>Cart Summary</h3>
          <div className="total-items">
            <div className="items">Total Item</div>
            <div className="items-count">{qty}</div>     
            </div>
            <div className="total-price-section">
              <div className="just-title">Totel price</div>
              <div className="items-price">{totalPrice}</div>
              </div>
              <div className="stripe-section">
                <button className="btn btn-lg btn-block">check Out</button>
                </div>
          </div>
      </div> : ''}
  </div>
  
</>
  );
}

export default Cart;
