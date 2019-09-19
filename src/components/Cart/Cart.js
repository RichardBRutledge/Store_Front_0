import React from 'react'
import { Head } from '../Head'
import CartColums from './CartColums'
import EmptyCart from './EmptyCart'
import { ProductConsumer, ProductProvider } from '../../Context'
import CartList from './CartList'
import CartTotal from './CartTotals'

const Cart = () => {
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
                                <CartTotal value={value} />
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

export default Cart

