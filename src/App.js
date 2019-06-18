import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigator } from './components/Navigator';
import { Header_ } from './components/Header_';
import { Product } from './components/Product';

class App extends Component {
  render(props) {
    return (
      <React.Fragment>
        <Router>
          <Header_ />
          <Navigator />
          <Switch>
            <Route path='/Product' render={props => <Product
              title = 'tomato'
              text = 'juicy tomatos for your all your umami needs'/>}
            />
          <Route />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
