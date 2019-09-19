import React from 'react'

const CartItem = ({ item, value }) => {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className='row my-1 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img
                    src={img}
                    style={{ width: '10rem', height: '10rem' }}
                    className='img-fluid'
                    alt='product'
                />
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>product : </span>
                {title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <h2>
                    <span className='d-lg-none'>price :</span>
                    {price}
                </h2>
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-outline-secondary mx-1 p-auto' onClick={() => decrement(id)}>-</button>
                    <span className='btn btn-outline-secondary mx-1 p-auto'>{count}</span>
                    <button className='btn btn-outline-secondary mx-1 p-auto' onClick={() => increment(id)}>+</button>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <i className='fas fa-trash-alt btn btn-outline-danger m-0 p-auto' onClick={()=> removeItem(id)}></i>
            </div>
            <div className='col-10 mx-auto col-lg-2 my2 my-lg-0'>
                <h2>total : {total}</h2>
            </div>
        </div>
    )
}

export default CartItem
