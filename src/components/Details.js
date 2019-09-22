import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default class Details extends Component {
    debugger;
    render() {
        return (
            <ProductConsumer>
                {value => {
                const {id, company, img, description, price, title, inCart,} = value.detailProduct;
                if (value.detailProduct === false) {
                    return(
                    <Redirect to='/'/>
                    )
                } else {
                return (
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 mx-auto col-md-6 my-3'>
                                <img src={img} className='img-fluid' alt='product' />
                            </div>
                            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                <h2>model : {title}</h2>
                                <h4 className='text-title text text-uppercase text-muted mt-3 mb-2'>
                                    made by : <span className='text-uppercase'>{company}</span>
                                </h4>
                                <h4>
                                   <strong>
                                       price : <span>$</span>
                                       {price}
                                   </strong> 
                                </h4>
                                <p className='text-capitalise font-weight-bold mt-3 mb-0'>
                                    about this product :
                                </p>
                                <p className='text-muted lead'>
                                    {description}
                                </p>
                                <div>
                                    <Link to='/'>
                                        <button className='btn btn-secondary mr-1'>Back to product</button>
                                    </Link>
                                    <button className='btn btn-secondary ml-1'
                                        disabled={inCart ? true : false} 
                                        onClick={() => {
                                            value.addToCart(id);
                                        }}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                }}
            </ProductConsumer>
        );
    }
}
