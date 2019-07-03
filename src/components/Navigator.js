import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled.div`
  Nav {
    background-color: #2d3436;
    margin: 0;
    padding: 0;
  }
  a, Link, LinkContainer, a.navbar-brand {
    color: #0984e3;
    margin: .7em;

      &:hover {
      color: #d63031;
    }
  }

  a.navbar-brand {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default class Navigator extends Component {
  render() {
    return (
      <NavStyled>
        <nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
          <Link to="/">
            logo Holder
          </Link>
          <ul className='navbar-nav align-content-center'>
            <li>
              <Link to='/' className='nav-link'>
                products
              </Link>
            </li>
          </ul>
          <Link to='/cart' className='ml-auto'>
            <button>
              <i className='fas fa-cart-plus' />
              my cart
            </button>
          </Link>
        </nav>
      </NavStyled>
    );
  }
}
