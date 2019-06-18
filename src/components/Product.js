import React from 'react';
import {Card} from 'react-bootstrap';

export const Product = props => (
  <Card>
    <Card.Img variant='top' src={props.image} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.text}</Card.Text>
    </Card.Body>
  </Card>
  )