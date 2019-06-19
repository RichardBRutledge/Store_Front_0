import React from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const CardStyled = styled.div `
  margin: auto;
  width: 15em;
`;

export const Product = props => (
  <CardStyled>
  <Card>
    <Card.Img variant='top' src={props.image} />
    <hr />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.text}</Card.Text>
    </Card.Body>
  </Card>
  </CardStyled>
  )