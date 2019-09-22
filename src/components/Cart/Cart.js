import React, { Component } from 'react'
import { Head } from '../Head'
import CartColums from './CartColums'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../Context'
import CartList from './CartList'
import CartTotal from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        console.log(value, cart)
                        if (cart.length > 0) {
                            return (
                                <>
                                    <Head name='Your' title='Cart' />
                                    <CartColums />
                                    <CartList value={value} />
                                    <CartTotal 
                                        value={value} 
                                        history={this.props.history} 
                                    />
                                </>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>

            </div>
        )
    }
    
}


