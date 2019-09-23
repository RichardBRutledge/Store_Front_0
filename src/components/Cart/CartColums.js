import React from 'react'

const CartColums = () => {
    return (
        <div className='container-fluid text-center d-none d-lg-block'>
            <div className='row'>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>products</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>name of products</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>price</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>quantity</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>remove</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>total</h4>
                </div>
            </div>
        </div>
    )
}

export default CartColums
