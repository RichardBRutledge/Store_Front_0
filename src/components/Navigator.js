import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
        <Navbar>
          <Navbar.Toggle />
          <Navbar.Collapse />
          <NavbarBrand href='/home'>
            <img 
              src='../img/Foody Cropped.jpg'
              height='40px'
              width='90px'
            />
          </NavbarBrand>
          <Nav>
            <NavItem>
              <LinkContainer to=''>
                <Link to=''>Bistro</Link>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to=''>
                <Link to=''>Produce</Link>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to=''>
                <Link to=''>Frozen</Link>
              </LinkContainer>
            </NavItem>
          </Nav>
          <Nav className='ml-auto'>
            <NavItem>
              <LinkContainer to=''>
                <Button>Shopping cart</Button>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
      </NavStyled>
    );
  }
}
