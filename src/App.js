import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
/*import { storeProducts } from '../data';*/
/*import { ProductProvider } from "./src/context";*/

export default class App extends Component {
  render() { 
    return (
      <div className='body'>
        <Navigator />
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route exact path='/details' component={Details} />
            <Route exact path='/cart' component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal />
      </div>
    );  
  }
}