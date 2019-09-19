import React from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../Context'
import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;
        if (!modalOpen) {
          return null;
        } else {
          return (
          <ModalContainer>
            <div className='container'>
              <div className='row'>
                <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                  <h5>Item Added To Your cart!</h5>
                  <img src={img} className='img-fluid' alt='product' />
                  <div id='footer'>
                  <h5>{title}</h5>
                  <h5>Price: {price}</h5>
                  <Link to='/' >
                        <button className='btn btn-secondary' onClick={() => closeModal()}>
                        Return To Store
                    </button>
                  </Link>
                  <Link to='/cart'>
                    <button className='m-1 btn btn-secondary' onClick={() => closeModal()}>
                        <i className='m-1 fas fa-cart-plus mr-2' />
                        Check Out
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </ModalContainer>
        )
        }
      }}
    </ProductConsumer>
  )
}


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal{
    background: #fff;
  }
`;

export default Modal
