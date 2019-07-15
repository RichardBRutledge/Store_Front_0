import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { productConsumer } from '../Context';

export default class Product extends Component {
    render() {
        const { id, description, title, img, price, inCart } = this.props.product;
        return (
            <div className='col-9 mx-auto md-6 lg-3 my-2'>
                <div className='card'>
                    <div className='img-container p-3' onClick={console.log('clicked on my image')}>
                        <Link to='/details'>
                            <img src={img}  alt='product' className='image-fluid card-img-top' />
                        </Link>
                    </div>
                    <div className='pb-0 px-3'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    </div>
                    {inCart ? (<p className='text-capitalize mb-0' disabled>In Cart</p>) : (<i className='fas fa-cart-plus' />)}
                    <button
                        className='cart-btn'
                        disabled={inCart ? true : false}
                        onClick={() => {
                            console.log('added to cart');
                        }}
                    >
                        add to cart
                    </button>
                </div>
            </div>
        )
    }
}
