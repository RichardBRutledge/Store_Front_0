import React, { Component } from 'react';
import { storeProducts, detailProduct } from './Data';

const ProductContext = React.createContext();


class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };
  handleDetail = () => {
    console.log('hello from detail');
  };
  addToCart = () => {
    console.log('hello from add to cart');
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };