import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default'
/*import { storeProducts } from '../data';*/
/*import { ProductProvider } from "./src/context";*/

export default class App extends Component {
  render() { 
    return (
      <>
        <Navigator />
          <Switch>
            <Route exact path='/' Component={ProductList} />
            <Route exact path='/details' Component={Details} />
            <Route exact path='/cart' Component={Cart} />
            <Route Component={Default} />
          </Switch>
          <ProductList />
      </>
    );  
  }
}