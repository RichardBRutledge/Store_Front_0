import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled.div`
  .nav-bar {
    background-color: #222f3e;
    margin: 0;

  }
  Nav.Item, Nav.Link {
    color: #fdcb6e;
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
              <Link to='/'>Store_Front</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          <Navbar.Collapse className='mr-auto'>
            <Nav className='ml-auto'>
              <LinkContainer to='/Product'>
                <Link>Fruits and Veggies</Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavStyled>
    )
  }
}
