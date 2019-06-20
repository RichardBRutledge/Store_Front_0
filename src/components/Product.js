import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardStyled = styled.div`
.item {
  display: block;
  padding: 1rem;
  font-size: 30px;
  margin: 1rem;
  width: 20rem;
  height: 30rem;
}
.image {
  width: 18rem;
  height: 10rem;
}
`;

export const Product = props => {
  return (
  <CardStyled>
    <Card className='item'>
      <Card.Img variant='top' src={props.image} className='image' />
      <hr />
      <Card.Body>
        <Card.Title>
          {props.title}
          </Card.Title>
          <Card.Text>
          {props.text}
        </Card.Text>
          <Card.Text>
          {props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  </CardStyled>
  );
}