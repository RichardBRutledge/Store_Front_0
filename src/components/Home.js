import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => (
    <div>
        <Jumbotron>
            <h1>20% off a tomato!</h1>
            <Link to='/Product'>
                <Button>Get it!</Button>
            </Link>
        </Jumbotron>
    </div>
)