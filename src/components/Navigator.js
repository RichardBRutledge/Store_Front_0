import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-componenets';

const NavStyled = styled.div`
  .Navbar {
    background-color: #0984e3;
  }
    a, Navbar, Nav {
      color: #dfe6e9;

      $:hover: #636e72;
    }
`;

export const Navigator = () => (
  <NavStyled>
  <Navbar bg='light' expand='md' sticky='top'>
    <Navbar.Brand href='/'>Store_Front</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='nav-dark'>
        <Nav.Item>
          <Nav.Link>
            <Link to="/Product">Fruits and Veggies.</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Bistro</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </NavStyled>
)
