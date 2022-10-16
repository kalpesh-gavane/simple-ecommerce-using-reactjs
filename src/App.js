import React from 'react';
import './index.css';
import HomeContainer from './containers/HomeContainer';
import CartContainer from './containers/CartContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductContainer from './containers/ProductContainer';
import Contact from './components/Contact';
import HeaderContainer from './containers/HeaderContainer';
import Checkout from './components/Checkout';


const App = (type) => {

  return (
    <div>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route exact path='/' element={<HomeContainer />} />
          <Route exact path='/product' element={<ProductContainer />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cart' element={<CartContainer />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
