import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Head } from './Head';
import Product from './Product';

export default function ProductList(product) {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            <Head name='our' title='products' />
            <div className='row'>
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product}/>
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    )
  }
