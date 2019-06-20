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
  a, Link, LinkContainer {
    color: #dfe6e9;
    margin: 0;

      &:hover {
      color: #d63031;
    }
  }
`;

export class Navigator extends Component {
  render() {
    return (
      <NavStyled>
        <Navbar className='nav-bar' expand='md'>
            <Navbar.Brand>
              <Link to='/Home'>Store_Front</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className='ml-auto'>
              <LinkContainer to='/Product'>
                <Link to='/Product'>
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
    )
  }
}
