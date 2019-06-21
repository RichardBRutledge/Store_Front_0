import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled.div`
  .nav-bar {
    background-color: #222f3e;
    margin: 0;
    height: 100%;

  }
  a, Link, LinkContainer, navbar-brand {
    color: #dfe6e9;
    margin: 1em;

      &:hover {
      color: #d63031;
    }
  }

  .navbar-toggler-icon, .navbar-toggler {
    background-color: #b2bec3;
  }
    &:hover {
      background-color: #d63031;
    }
`;

export class Navigator extends Component {
  render() {
    return (
      <NavStyled>
        <Navbar className='nav-bar' expand='lg'>
            <Navbar.Brand>
              <Link to='/Home'>Store_Front</Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className='mr-auto'>
              <LinkContainer to='/Fruit_Vegi'>
                <Link to='/Fruit_Vegi'>
                  Fruits and Veggies   
                </Link>
              </LinkContainer>
              <LinkContainer to='/Product'>
                <Link to='/Product'>
                  Bistro
                </Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavStyled>
    );
  }
}
