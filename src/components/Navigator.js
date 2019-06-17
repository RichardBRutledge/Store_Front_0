import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigator = () => (

    <Navbar bg='dark' expand='md'>
        <Navbar.Brand href='/'>Store_Front</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='nav-dark'>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/">Fruits and Veggies.</Link>
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
)
