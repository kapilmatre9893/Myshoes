import React, { useContext, useEffect, useState } from 'react';
import { ProductContext} from '../../GobalCantext/ProductContex';

import { useParams } from 'react-router-dom';
const ViewProduct = () =>{  
  // const [name ,setName]=useState();
  
  const {id} = useParams();
  const {products} = useContext(ProductContext);  

  // useEffect(() =>{
  //   const NewPersan = products.find((persan)=> persan.id === 
  //   parseInt(id));
  //   setName(NewPersan.name);
  // },[]);
 

    return(
      <>
      {/* <h1>{name}</h1> */}
      <div className="container">
        <div className="viewPr">
          <div className="row">
            <div className="col-md-8">
      <div className="Viewproducts">
      <img className="img-fluid" src={products[id].image} alt="Not Found" />
      </div>
      </div>
      <div className="col-md-4">
      <div className="product-Details">
        <div className="product-name">
        {products[id].name}
        </div>
        <div className="product-price">
            ${products[id].price}.00
            </div>
            <div className="add-to-cart" >add to cart</div>
            </div>
            </div>
            </div>
      </div>
      </div>
      
      </>
    );

}


export default ViewProduct;