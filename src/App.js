import React, { Component } from 'react';
import Header_ from './components/Header_';
import Navigator from './components/Navigator';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default class App extends Component {
  render() { 
    return (
      <>
      <Router>
      <Navigator />
      </Router>
      <Header_ />
      </>
    );  
  }
}