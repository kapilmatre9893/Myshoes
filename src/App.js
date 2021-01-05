import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route,Switch } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import ProductContextProvider from "./GobalCantext/ProductContex";
import AProduct from "./Component/AllProduct/Product";
import Cart from "./Component/Cart/Cart";
import Notfound from "./Component/Notfound/Notfound";
import ViewProduct from "./Component/AllProduct/ViewProduct";

import CartCantextProvider from './GobalCantext/CartCantext';

function App() {
  return (
<>
<ProductContextProvider>
  <CartCantextProvider>
  <Router>
<Navbar />
<Banner />
<Switch>

  <Route path="/" exact component={AProduct} />
  <Route path="/cart" exact component={Cart} />
  <Route path="/ViewProduct/:id" exact children={<ViewProduct />} />

  <Route component={Notfound}/>
  </Switch>
</Router>
</CartCantextProvider>
  </ProductContextProvider>
  </>
  );
}

export default App;
