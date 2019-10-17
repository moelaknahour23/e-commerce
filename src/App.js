import React from 'react';
import './App.css';
import Home from './pages/homePage/home';

import {Route, Switch } from "react-router-dom";


const HatPage = ()=>{

    return(
        <h1>Hat Page</h1>
    );

}


function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/'  component={Home}/>
      <Route path='/hats'  component={HatPage}/>
    </Switch>
    </div>
  );
}

export default App;
