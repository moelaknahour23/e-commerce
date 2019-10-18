import React from 'react';
import './App.css';
import Home from './pages/homePage/home';
import ShopPage from './pages/shop/shopPage';

import {Route, Switch } from "react-router-dom";




function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/'  component={Home}/>
      <Route path='/shop'  component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
