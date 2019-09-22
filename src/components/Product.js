import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';


export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <div className='card'>
          <ProductConsumer>
            {value => (
              <div
                className='img-container p-4'
                onClick={() => value.handleDetail(id)}
              >
                <Link to='/details'>
                  <img
                    src={img}
                    alt='product'
                    height='170rem'
                    className='card-img-top' />
                </Link>

                <button
                  className='cart-btn'
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id)
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p
                      className='text-capitalize mb-0'
                    >
                      In Cart
                </p>
                  ) : (
                      <i className='fas fa-cart-plus' />
                    )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>
              {title}
            </p>
            <h5 className='mb=0'>
              {price}
            </h5>
          </div>

        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired
};

const ProductWrapper = styled.div`
.card {
            border - color: transparent;
          transition: all ls linear;
        }
.card-footer {
            background: transparent;
          border-top: transparent;
          transition: all 1s linear;
        }
&:hover{
  .card {
          border:0.4rem solid rgba(0,0,0,.02);
          box-shadow:2px 2px 5px 0 rgba(0,0,0,02);
        }
  .card-footer {
            background: rgba(247, 247, 247);
        }
      }
.img-container {
            position: relative;
          overflow: hidden;
        }
.card-img-top {
            transition: all 0.5s linear;
        }
.img-container:hover .card-img-top {
            transform: scale(1.2);
        }
.cart-btn {
            position: absolute;
          bottom: 0;
          right: 0;
          border: 0;
          border-radius: 0.3rem 0 0 0;
          padding: 0.2rem 0.4rem;
          font-size: 1.4rem;
          transform: translate(100%, 100%);
          transition: all 0.5s linear;
        }
.img-container:hover .cart-btn {
            transform: translate(0%, 0%);
        }
.cart-btn:hover {
            color: #0984e3;
          cursor: pointer;
        }
        `;
