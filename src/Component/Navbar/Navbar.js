import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import {  Link } from "react-router-dom";
import { CartCantext } from "../../GobalCantext/CartCantext";

const Navbar= () => {
  const { qty }=useContext(CartCantext);
  return (
<>
<div className="container" data-spy="scroll" data-target=".navbar" data-offset="50">
<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">

  <a className="navbar-brand" href="#!">
    MYSHOES
  </a>

 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
    aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

 
  <ul className="navbar-nav ml-auto">
    <li className="nav-item"><Link className="waves-effect" href="/">Home</Link></li>
    <li className="nav-item"><Link className="waves-effect" to="/">Shoes</Link></li>

  </ul>
 

 
  <div className="collapse navbar-collapse" id="basicExampleNav1">

 
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/cart" className="nav-link navbar-link-2 waves-effect">
          <span className="badge badge-pill red">{ qty } </span>
         <button type='button' className="shopingCart">
           <FaShoppingCart />
         </button>
        </Link>
      </li> 
      <li className="nav-item">
        <a href="#!" className="nav-link waves-effect">
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a href="#!" className="nav-link waves-effect">
          Sign in
        </a>
      </li>
      <li className="nav-item pl-2 mb-2 mb-md-0">
        <a href="#!" type="button"
          className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
      </li>
    </ul>

  </div>


</nav>
</div>

</>
  );
}

export default Navbar;
