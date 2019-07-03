import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { productConsumer } from '../Context';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div className='col-2 mx-auto col-lg col-md-2'>
            <div className='card'>
            <div className='img-container p-5' onClick={console.log('clicked on my image')}>
                <Link to='/details'>
                    <img src={img} alt='product' className='card-img-top'/>
                </Link>
                <button className='cart-btn' disabled={inCart ? true : false} onClick={()=>{console.log('added to cart');}} />
                {inCart?(<p className='text-capitalize mb-0' disabled>In Cart</p>):(<i className='fas fa-cart-plus'/>)}
            </div>
                <h1>{title}</h1>
            </div>
            </div>
        )
    }
}
