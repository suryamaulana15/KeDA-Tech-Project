import { render } from '@testing-library/react';
import FirstQuestion from './index';
import style from '../../style'
import React from "react";
const classes = style();

test('renders app', () => {
  const {getByText} = render(<FirstQuestion classes={classes}/>);
  // const linkElement = screen.getByRole('heading');
  expect(getByText('Buatlah')).toBeInTheDocument();
});
