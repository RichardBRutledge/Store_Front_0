import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  .h1 {
    margin: 0;
  }
`;

export const Header_ = () => (
  <HeaderStyled>
  <Jumbotron>
    <h1>Hello World</h1>
  </Jumbotron>
  </HeaderStyled>
)