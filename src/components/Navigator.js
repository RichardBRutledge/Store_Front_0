import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap';
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

export default class Navigator extends Component {
  render() {
    return (
      <NavStyled>
        <Navbar>
          <NavbarBrand href='/home'>
            F. F.
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
            <NavItem className=''>
              <LinkContainer to=''>
                <Link to='' className='ml-auto'>Frozen</Link>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
      </NavStyled>
    );
  }
}
