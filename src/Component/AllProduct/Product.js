import React, { useContext } from 'react';
import { ProductContext} from '../../GobalCantext/ProductContex';
import { CartCantext } from "../../GobalCantext/CartCantext";

import { Link } from 'react-router-dom';

    const AProduct =()=>{
    const {products} = useContext(ProductContext);
    const {dispatch} =useContext(CartCantext);
    return(
    <>
  <div className="container">
   <div className="products">
    {products.map((product) =>{
        
        return(
        <div className="product" key={product.id}>
            <div className="cover">
            <div className="product-image">
                <Link to={`/ViewProduct/${products.id}`}>
                    <img className="img-fluid" src={product.image} alt="Not Found" />
                </Link>
                </div>
                <div className="product-Details">
        <div className="product-name">
        {product.name}
        </div>
        <div className="product-price">
            ${product.price}.00
            </div>
            </div>
            <div className="add-to-cart" onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})} >add to cart</div>
             {product.status === 'hot' ? <div className='hot'>hot</div> :''}
            {product.status === 'new' ? <div className='new'>new</div> : ''}
            </div>
            </div>
        )
    })}
    </div>
</div>

    </>
    );

  }
export default  AProduct;