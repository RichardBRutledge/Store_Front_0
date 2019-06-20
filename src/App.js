import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Navigator } from './components/Navigator';
import { Header_ } from './components/Header_';
import { Product } from './components/Product';
import { Home } from './components/Home';
import { CardGroup } from 'react-bootstrap';

class App extends Component {
  render(props) {
    return (
      <React.Fragment>
        <Router>
          <Navigator />
          <Switch>
            <Route path='/Home' component={Home}/>
            <Route 
              exact path='/Fruits_Vegi'
              render={(props) => (
                <CardGroup className='container'>
                  <Product
                    image='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528'
                    title='Tomato'
                    text='Juicy tomatos for your all your umami need' 
                    price='2$ per lb'
                  />
                  <Product
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrbvoxS3KHKmORYmOHpAsx8p_ogsoXvoPJQaYl6NLdK9Jou3g'
                    title='Cabage'
                    text='Cabbage time. My cabages!' 
                    price='70$ per lb' 
                    />
                  <Product 
                    image='https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail.jpg'
                    title='Apple'
                    text='Apple a day keeps you in poverty. 700$ per lb'
                  />
                </CardGroup>
              )}
            />
          </Switch>
          <Redirect from='/' to='/Home' />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
