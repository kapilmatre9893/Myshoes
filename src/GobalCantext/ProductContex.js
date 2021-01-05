import React,{createContext , useState} from 'react';
import im1 from '../assets/im1.jpg';
import im2 from '../assets/im2.jpg';
import im3 from '../assets/im3.jpg';
import im4 from '../assets/im4.jpg';
import im5 from '../assets/im5.jpg';
import im6 from '../assets/im6.jpg';
import im7 from '../assets/im7.jpg';
import im8 from '../assets/im8.jpg';

export const ProductContext = createContext();

 const ProductContextProvider=(props) =>{
    const [products] =useState([{
      id:1,name:'Bast shoe',price:299,image:im1,
    },
  {id:2,name:'snaker',price:1250,image:im2,status:"new"},
  {id:3,name:'Chukka boot',price:899,image:im3},
  {id:4,name:'Derby shoe',price:999,image:im4,status:"new"},
  {id:5,name:'Diabetic shoe',price:1750,image:im5},
  {id:6,name:'Dress shoe',price:1999,image:im6},
  {id:7,name:'Duckbill shoe',price:499,image:im7},
  {id:8,name:'Driving moccasins',price:899,image:im8, status:"new"}
 ]);
  return(
   <ProductContext.Provider value={{ products: [...products]}}> 
    {props.children}
   </ProductContext.Provider>
  );
  }
   export default ProductContextProvider;