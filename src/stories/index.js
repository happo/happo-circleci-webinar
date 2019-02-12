import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  min-width: 150px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

storiesOf('Button', module)
  .add('default', () => <Button>Click me!</Button>)
