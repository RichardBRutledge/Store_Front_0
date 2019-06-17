import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navigator } from './components/Navigator';
import { Header_ } from './components/Header_';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <Header_ />
        <Navigator />
        <Switch>
          <Route path='' Component/>
          <Route />
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
